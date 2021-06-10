<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\InvitedUsers;
use Illuminate\Support\Facades\Validator;

class InvitedUserController extends Controller
{

    private $status_code    =        200;

    public function userSignUp(Request $request) {
        $validator              =        Validator::make($request->all(), [
            "name"              =>          "required",
            "email"             =>          "required|email",
            "password"          =>          "required",
        ]);

        if($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "validation_error", "errors" => $validator->errors()]);
        }

        $name                   =       $request->name;
        $name                   =       explode(" ", $name);
        

        // if(isset($name[1])) {
        //     $last_name          =       $name[1];
        // }

        $userDataArray          =       array(
            
            "name"          =>          $request->name,
            "email"              =>          $request->email,
            "password"           =>          md5($request->password),
            
        );

        $user_status            =           InvitedUsers::where("name", $request->name)->first();

        if(!is_null($user_status)) {
           return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! name already registered"]);
        }

        $user                   =          InvitedUsers::create($userDataArray);

        if(!is_null($user)) {
            return response()->json(["status" => $this->status_code, "success" => true, "message" => "Registration completed successfully", "data" => $user]);
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "failed to register"]);
        }
    }


    // ------------ [ User Login ] -------------------
    public function userLogin(Request $request) {

        $validator          =       Validator::make($request->all(),
            [
                "email"             =>          "required|email",
                "password"          =>          "required"
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }


        // check if entered email exists in db
        $email_status       =       InvitedUsers::where("email", $request->email)->first();


        // if email exists then we will check password for the same email

        if(!is_null($email_status)) {
            $password_status    =  InvitedUsers::where("email", $request->email)->where("password", md5($request->password))->first();

            // if password is correct
            if(!is_null($password_status)) {
                $user           =       $this->userDetail($request->email);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
            }

            else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }

    // ------------------ [ User Detail ] ---------------------
    public function userDetail($email) {
        $user               =       array();
        if($email != "") {
            $user           =       InvitedUsers::where("email", $email)->first();
            return $user;
        }
    }
}

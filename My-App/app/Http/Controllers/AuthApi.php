<?php

namespace App\Http\Controllers;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Facades\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;



use App\User;

class AuthApi extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        

        $admin = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
        // dd(request()->all()); 'confirmed'
        // $admin = Admin::create($request->all());
        return response()->json(['message'=> 'Admin created', 'admin' => $admin]);
        $token = JWTAuth::fromUser($admin);


        // return response()->json( [
        //     "success" => true,
        //     "My input"=> request("email")
        // ] );
        
       
        return response()->json(compact('admin', 'token'), 201);
    }

    public function login(Request $request)
    {
        

        $credentials = $request->json()->all();
        
        try{
           
            if(!$token = JWTAuth::attempt($credentials))
            {
                return response()->json(['error' => 'invalid_credentials'], 400);

            }
        }catch(JWTException $e){
                return response()->json(['error' => 'could_not_create_token'],500);
            }
            return response()->json(compact('token'));
    
        
    }
        
        

    

    public function getAuthenticatedUser(){
        try{
            if(!$admin == JWTAuth::parseToken()->authenticate()){
                return response()->json(['user_not_found'], 404);
            }
        }catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e){
            return response()->json(['token_expired'], $e->getStatusCode());
        }catch(Tymon\JWTAuth\Exceptions\TokenInvalidException $e){
            return response()->json(['token_invalid'], $e->getStatusCode());
        }catch(Tymon\JWTAuth\Exceptions\JWTException $e){
            return response()->json(['token_absent'], $e->getStatusCode());
        }

        return response()->json(compact('admin'));
    }

    public function userDetail(Request $email) {
      
        $admin = array();
        if($email != "") {
            $admin = User::where("email", $email)->first();
            return $admin;
        }
    }

}
        // $credentials = request(['email', 'password']);

        // if (!Auth::attempt($credentials))
        //     return response()->json([
        //         'message' => 'Unauthorized Access, please confirm credentials or verify your email'
        //     ], 401);

            // $admin = $request->user();

        // $tokenResult = $user->createToken('Personal Access Token');
        // $token = $tokenResult->token;
        // if ($request->remember_me)
        //     $token->expires_at = Carbon::now()->addWeeks(1);
        // $token->save();
        // return response()->json([
        //     "success" => true,
        //     "My input"=> request("email")
        // ]);
    

    // protected function create(array $data)
    // {
    //     return User::create([
    //         'name' => $data['name'],
    //         'email' => $data['email'],
    //         'password' => Hash::make($data['password']),
    //     ]);
    // }


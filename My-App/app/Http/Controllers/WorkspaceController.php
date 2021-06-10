<?php

namespace App\Http\Controllers;

use App\Workspace;
use Illuminate\Http\Request;
use App\User;
use App\Project;
use Illuminate\Support\Facades\Validator;


class WorkspaceController extends Controller
{
    public function __construct()
    {
        $this->middleware('cors');
    }

    public function index()
    {
        $query = \request()->all();
        $workspaces = Workspace::query();
        // with(['users', 'admin', 'projects'])->get()
        if(isset($query['users'])){
            $workspaces = $workspaces->with('users');
        }
        if(isset($query['admin'])){
            $workspaces = $workspaces->with('admin');
        }
        if(isset($query['projects'])){
            $workspaces = $workspaces->with('projects');
        }

        $workspaces = $workspaces->get();
        // $workspaces = $workspaces::latest('created_at')->published()->get();

        return response()->json([
            'success'=>true,
            "workspaces" => $workspaces
        ]);
        
    }

    public function userindex()
    {
        $query = \request()->all();
        $users = User::query();
        // with(['users', 'admin', 'projects'])->get()
        if(isset($query['workspaces'])){
            $users = $users->with('workspaces');
        }
        if(isset($query['admin'])){
            $users = $users->with('admin');
        }
        if(isset($query['projects'])){
            $users = $users->with('projects');
        }

        $users = $users->get();
        // $workspaces = $workspaces::latest('created_at')->published()->get();

        return response()->json([
            'success'=>true,
            "users" => $users
        ]);
        
    }

    public function workspaceUsers($workspace_id){
        $workspace = Workspace::with(['users.user'])->find($workspace_id);
        $users = $workspace->users;

        return response()->json([
            'success'=>true,
            "users" => $users
        ]);
    }
    
    // public function workspaceindex()
    // {
    //     $workspaces = Workspace::all();
    //     return response()->json($workspaces);
    // }

    // public function projectindex()
    // {
    //     $projects = Project::all();
    //     return response()->json($projects);
    // }

    public function storeWorkspace(Request $request){
        $request->validate([
            'title' => ['required', 'string', 'max:255', 'unique:workspaces'],
            'user_id' => 'required',
        ]);

        $user = User::findOrFail($request['user_id']);

        if($user){
            $workspace = new Workspace();
            $workspace->title = $request['title'];
            $workspace->user_id = $user->id;
            $workspace->save();

            $user->workspaces()->create(['workspace_id'=>$workspace->id, 'is_admin'=>1]);

            $user = User::with(['workspaces.workspace'])->where("email", $user->email)->first();  

            return response()->json([
                'success'=>true,
                'message'=> 'workspace created',
                'user' => $user,
                'workspace' => $workspace
            ]);
        }else{
            return response()->json([
                'success'=>false,
                'message'=> 'workspace not created', 
                'workspace' => []
            ]);
        }
    }
    
    public function storeProject(Request $request){
        $request->validate([
            'workspace_id' => 'required',
            'title' => 'required',
        ]);

        $workspace = Workspace::findOrFail($request['workspace_id']);

        if($workspace){
            $checkProject = $workspace->projects()->where('title', $request['title'])->first();
            if(!$checkProject){
                $project = new Project();
                $project->title = $request['title'];
                $project->workspace_id = $workspace->id;
                $project->save();
                $workspace = Workspace::with(['projects'])->find($workspace->id);

                return response()->json([
                    'success'=>true,
                    'message'=> 'project created',
                    'project' => $project,
                    'workspace' => $workspace
                ]);
            }
            return response()->json([
                'success'=>false,
                'message'=> 'project already exist',
                'project' => []
            ]);
        }else{
            return response()->json([
                'success'=>false,
                'message'=> 'project not created',
                'project' => []
            ]);
        }
    }
    
    public function storeUserEmail(Request $request){
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
        ]);
        $user = new User();
        $user->email = $request['email'];
        $user->save();

        $user = User::with(['workspaces.workspace'])->where("email", $user->email)->first();  

        //call Email function gos here

        return response()->json([
            'status' => true,
            'message'=> 'account created',
            'user' => $user
        ]);
    }
    
    public function show($id){
        $workspace = Workspace::with(['users', 'projects', 'admin'])->find($id);
        if($workspace){
            return response()->json([
                'status' => true,
                'message'=> 'Workspace data is ready',
                'workspace' => $workspace
            ]);
        }
        return response()->json([
            'status' => false,
            'message'=> 'Record not found',
            'workspace' => []
        ]);
    }

    public function update(Request $request, Workspace $workspace)
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'text' => 'required',
            'projectname' => 'required',
        ]);
        $workspace->email = $request->email;
        $workspace->text = $request->text;
        $workspace->projectname = $request->projectname;
        $workspace->save();


        // $workspace->name = $request->name;
        // $workspace->admin = $request->admin;
        // $workspace->description = $request->description;
        // $workspace->save();
        
        return response()->json([
            'message' => 'workspace updated!',
            'workspace' => $workspace
        ]);
        

    }

    public function addUserToWorkSpace(){
        $request->validate([
            'email' => ['required', 'string', 'email'],
            'user_id' => 'required',
            'workspace_id' => 'required',
        ]);
        $workspace = Workspace::find($request['workspace_id']);
        $user = User::find($request['user_id']);

        if($workspace && $user){
            //workspace_admins
            $is_admin = $workspace->users()->where('id', $user->id)->where('is_admin', 1)->first();
            if($is_admin || $user->id == $workspace->user_id){


                return response()->json([
                    'status' => true,
                    'message'=> 'Workspace data is ready',
                    'workspace' => $workspace
                ]);
            }
            return response()->json([
                'status' => false,
                'message'=> "you don't have access to add user",
                'workspace' => []
            ]);
        }
        return response()->json([
            'status' => false,
            'message'=> 'An error occured',
            'workspace' => []
        ]);
    }
    
    public function destroyWorkspace(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'workspace_id' => 'required',
        ]);
        $workspace = Workspace::find($request['workspace_id']);
        $user = User::find($request['user_id']);

        if($workspace && $user){

            //workspace_admins
            if($user->id == $workspace->user_id){
                $workspace->delete();                
                return response()->json([
                    'status' => true,
                    'message'=> 'Workspace deleted',
                ]);
            }

            return response()->json([
                'status' => false,
                'message'=> "you don't have access to delete Workspace",
                'workspace' => []
            ]);
        }
        return response()->json([
            'status' => false,
            'message'=> 'An error occured',
            'workspace' => []
        ]);
    }
    
    public function destroyProject(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'project_id' => 'required',
            'workspace_id' => 'required',
        ]);
        $project = Project::findOrFail($request['project_id']);
        $workspace = $project->workspace->where('id', $project->workspace_id)->first();
        $user = User::find($request['user_id']);

        if($workspace && $user){

            //workspace_admins
            $is_admin = $workspace->users()->where('id', $user->id)->where('is_admin', 1)->first();
            if($is_admin || $user->id == $workspace->user_id){
                $project->delete();                
                return response()->json([
                    'status' => true,
                    'message'=> 'Project deleted',
                ]);
            }

            return response()->json([
                'status' => false,
                'message'=> "you don't have access to delete this project",
                'workspace' => []
            ]);
        }
        return response()->json([
            'status' => false,
            'message'=> 'An error occured',
            'workspace' => []
        ]);
    }


    public function userLogin(Request $request) {

        $validator = Validator::make($request->all(),
            [
                "email" => "required|email",
                // "password" => "required"
            ]
        );

        if($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }


        // check if entered email exists in db
        $user = User::with(['workspaces.workspace'])->where("email", $request->email)->first();      
  



        // if email exists then we will check password for the same email

        if(!is_null($user)) {
            $workspace = null;
            if(count($user->workspaces) > 0){
                $workspace = $user->workspaces[0]->workspace;
            }

            return response()->json([
                "status" => 'true',
                "success" => true,
                "message" => "You have logged in successfully", 
                'user' => $user,
                'workspace' => $workspace
            ]);     
        }

        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Posts;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Auth;

class PostController extends Controller

{
    public function __construct()
    {
        $this->middleware('cors');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $posts = Posts::paginate(25);
      return view('posts.index')->withPosts($posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request['content']);
      $this->validate($request, [
        'title' => 'required|max:255',
        'content' => 'required',
      ]);

    //   $post = Posts::create([
    //     'title' => $request->title,
    //     'content' => $request->content,
    //     'published' => $request->has('published')
    //   ]);

    // $user = User::where("user_id", $request->id)->first();
    $user = Auth::user();


    // $user = User::findOrFail($request['user_id']);
    // dd($request['content']);


    if($user){
        $post = $user->posts()->create([
            'title' => $request->title,
            'content' => $request->content,
            'published' => $request->has('published')
          ]);


        // $user->workspaces()->create(['workspace_id'=>$workspace->id, 'is_admin'=>1]);

        // $user = User::with(['workspaces.workspace'])->where("email", $user->email)->first();  

        return response()->json([
            'success'=>true,
            'message'=> 'post created',
            'user' => $user,
            'post' => $post
        ]);
    }else{
        return response()->json([
            'success'=>false,
            'message'=> 'post not created', 
            'post' => []
        ]);
    }

    //   $user = User::findOrFail($request['user_id']);

    //   $post = $user->posts()->create([
    //     'title' => $request->title,
    //     'content' => $request->content,
    //     'published' => $request->has('published')
    //   ]);

      return redirect()->route('posts.show', $post->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $post = Posts::findOrFail($id);
      return view('posts.show')->withPost($post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      $post = Posts::findOrFail($id);
      return view('posts.edit')->withPost($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $this->validate($request, [
        'title' => 'required|max:255',
        'content' => 'required',
      ]);

      $post = Posts::findOrFail($id);
      $post->title = $request->title;
      $post->content = $request->content;
      $post->published = ($request->has('published') ? true : false);
      $post->save();

      return redirect()->route('posts.show', $post->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      Posts::destroy($id);
    }
}


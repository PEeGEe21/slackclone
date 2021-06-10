<?php

namespace App\Http\Controllers;

use App\User;
use App\Posts;
use App\Comments;
use App\Events\NewComment;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function index(Post $post)
  {
    return response()->json($post->comments()->with('user')->latest()->get());
  }

  public function store(Request $request, Post $post)
  {
    $comment = $post->comments()->create([
      'body' => $request->body,
      'user_id' => User::find($request['user_id'])

    ]);

    $comment = Comment::where('id', $comment->id)->with('user')->first();
    broadcast(new NewComment($comment))->toOthers();
    return $comment->toJson();
  }
}

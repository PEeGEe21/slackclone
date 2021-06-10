<?php

namespace App\Http\Controllers;

use App\Workspace;
use App\Events\NewMessage;
use Illuminate\Http\Request;
use App\User;
use App\Channels;
use App\Events\MessageEvent;
use App\Project;
use App\Message;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;



class ChatsController extends Controller
{
    public function __construct()
    {
        $this->middleware('cors');
    }
/**
 * Show chats
 *
 * @return \Illuminate\Http\Response
 */
public function index(Request $request)
{

    $user = User::where("email", $request->email)->first();
    return response()->json([
        'success'=>true,
        "user" => $user
    ]);
    // $query = \request()->all();
    //     $user = User::query();

    // $user = $user->get();
    // // $workspaces = $workspaces::latest('created_at')->published()->get();

    // return response()->json([
    //     'success'=>true,
    //     "user" => $user
    // ]);
}

/**
 * Fetch all messages
 *
 * @return Message
 */
public function fetchChannelMessages($channel_id)
{
  return Message::with(['user'])
        ->where(function($query) use ($channel_id){
            $query
            ->where('messageable_type', "App\Channels")
            ->where('messageable_id', $channel_id);
        })
        ->orderBy('created_at','asc')->get();
        // ->where([
        //     'messageable_type' => "App\Channels",
        //     'messageable_id' => $channel_id,
        // ])
        
}

// public function fetchUserMessages($user_id)
// {
//   return Message::with(['user'])
//         ->where(['messageable_type' => "App\User"])
//         ->where(function($query) {
//             $query->where('user_id', 1)
//                   ->where('messageable_id', $user_id);
//         })
//         ->orWhere(function($query) {
//             $query->where('user_id', $user_id)
//                   ->where('messageable_id', 1);
//         })->get();
// }

public function fetchUserMessages($user, $receiver)
{
    $messages = Message::with('messageable', 'user')
                ->where(function($query) use ($user, $receiver){
                    $query->where('user_id','=',$receiver)
                    ->where('messageable_type', "App\\User")
                    ->where('messageable_id', $user);
                })
                ->orWhere(function($query) use ($user, $receiver){
                    $query->where('user_id','=',$user)
                    ->where('messageable_type', "App\\User")
                    ->where('messageable_id', $receiver);
                })
                ->orderBy('created_at','asc')->get();
                
                // event(new MessageEvent($messages));

    return ['messages' => $messages];
}

    /**
     * Persist message to database
     *
     * @param  Request $request
     * @return Response
     */
    public function sendMessage(Request $request)
    {
        $message = new Message();
        $message->message = $request['message'];
        broadcast(new MessageEvent($message->load('User')))->toOthers();
        $message->save();
        return ['status' => 'success'];
    }

    public function sendUserMessages(Request $request, $user, $receiver)
    {
        $user = User::find($user);
        $receiver = User::find($receiver);
        $payload = [
            'message' => $request['message']
        ];

        $message = $user->message($receiver, $payload);

        return ['status' => 'success', 'message'=>$message];
    }

    public function sendChannelMessages(Request $request, $user, $channel)
    {
        $user = User::find($user);
        $channel = Channels::find($channel);
        $payload = [
            'message' => $request['message']
        ];

        $message = $user->message($channel, $payload);


        return ['status' => 'success', 'message'=>$message];
    }
}

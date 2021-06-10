<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Channels;
use App\Events\NewChannel;

class ChannelController extends Controller
{
    public function __construct()
    {
        $this->middleware('cors');
    }


    public function index($id)
    {
        $channels = Channels::where('workspace_id', $id)->orderBy('created_at','desc')->get();
        return response()->json($channels);
    }

    public function store(Request $request)
    {
        
        $channel = Channels::create($request->all());

        // broadcast(new NewChannel($channel))->toOthers();
        return response()->json(["status" => 'true', "success" => true, "Channel"=> "channel created", 'channel' => $channel]); 
        
    }

    public function show(Channels $channel)
    {
        return $channel;
    }

    public function update(Request $request, Channels $channel)
    {
       
        $channel->channel = $request->channel();
        
        $channel->save();
        
        return response()->json([
            'channel' => 'channel updated!',
            'channel' => $channel
        ]);
    }

    public function destroy(Channels $channel)
    {
        $channel->delete();
        return response()->json([
            'channel' => 'channel deleted'
        ]);
        
    }
}

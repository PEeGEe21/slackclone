<?php

namespace App\Events;

use App\Channels;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewChannel implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $channel;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Channels $channel)
    {
        $this->channel = $channel;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('channels');
    }


    public function broadcastWith()
    {
        return [
            'channel' => $this->channel->channel,
        ];
    }

    // public function broadcastWith()
    // {
    //     return [
    //         'channel'=>$this->channel->channel,
    //     ];
            
    // }

}

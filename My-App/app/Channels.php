<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Channels extends Model
{
    protected $guarded = ['id'];

    public function user()
    {
        return $this->hasMany(User::class);
    }

    public function messages(){
        return $this->hasMany(Message::class, 'channel_id');
    }

    public function workspace(){
        return $this->belongsTo(Workspace::class, 'workspace_id');
    }
}

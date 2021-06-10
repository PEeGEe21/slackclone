<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Workspace extends Model
{
    protected $guarded = ['id'];

    protected $casts = [
        'workspace_admins'=> 'array'
    ];

    public function primaryId(){
        return (string)$this->getAttribute($this->primaryKey);
    }

    public function users(){
        return $this->hasMany(WorkspaceUser::class)->with(['user']);
    }

    public function projects(){
        return $this->hasMany(Project::class, 'workspace_id');
    }

    public function channels(){
        return $this->hasMany(Channels::class, 'workspace_id');
    }

    public function invitedUsers(){
        return $this->hasMany(InvitedUsers::class, 'user_id');
    }

    public function admin(){
        return $this->belongsTo(User::class, 'user_id');
    }

}




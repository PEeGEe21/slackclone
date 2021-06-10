<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkspaceUser extends Model
{

    protected $guarded = ['id'];

    public function primaryId(){
        return (string)$this->getAttribute($this->primaryKey);
    }

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function workspace(){
        return $this->belongsTo(Workspace::class, 'workspace_id');
    }

}

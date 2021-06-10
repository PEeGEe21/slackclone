<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class Project extends Model
{
    protected $guarded = ['id'];

    protected $casts = [
        'project_members'=> 'array'
    ];

    public function workspace(){
        return $this->belongsTo(Workspace::class, 'workspace_id');
    }
}

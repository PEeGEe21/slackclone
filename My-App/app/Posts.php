<?php

namespace App;

use App\User;
use App\comments;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    protected $fillable = [
        'title', 'content', 'published', 'user_id'
    ];
  
    public function user()
    {
    //   return $this->belongsTo('App\User');
      return $this->belongsTo(User::class, 'user_id');

    }
  
    public function comments()
    {
      return $this->hasMany('App\Comments');
    }
  }

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $fillable = [
        'body', 'user_id', 'post_id'
      ];
    
      public function post()
      {
        return $this->belongsTo('App\Posts');
      }
    
      public function user()
      {
        return $this->belongsTo('App\User');
      }
}

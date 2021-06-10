<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable. 'password',
     *
     * @var array
     */
    // protected $fillable = [
    //     'name', 'email', 'user_id'
    // ];
    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return[];
    }
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function primaryId(){
        return (string)$this->getAttribute($this->primaryKey);
    }

    public function workspaces(){
        return $this->hasMany(WorkspaceUser::class, 'user_id');
    }
    
    public function messages(){
        return $this->hasMany(Message::class, 'user_id');
    }

    public function posts() {
        return $this->hasMany('App\Posts');
    }

    public function comments()
    {
    return $this->hasMany('App\Comments');
    }

    public function message($messageable, array $payload = []){
        // $messageModel = Message::class;
        $message = Message::create([
            'message'   => $payload['message'],
            'user_id' => $this->primaryId(),
            'messageable_type' => get_class($messageable),
            'messageable_id' => $messageable->id,
        ]);
        return $message;
    }

    // function myMessages($messageable){
    //     $messages = Message::where([
    //         'messageable_type' => get_class($messageable),
    //         'messageable_id' => $messageable->id,
    //     ]);
    //     return $messages;
    // }
}

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/admin', function (Request $request) {
    return $request->admin();
});


// Authentication routes...
// Route::get('auth/login', 'Auth\AuthController@getLogin');
// Route::post('auth/login', 'Auth\AuthController@postLogin');
// Route::get('auth/logout', 'Auth\AuthController@getLogout');

// // Registration routes...
// Route::get('auth/register', 'Auth\AuthController@getRegister');
// Route::post('auth/register', 'Auth\AuthController@postRegister');

// Route::group(['middleware' => ['api']], function(){

// Channels
Route::get('/channels/{id}', 'ChannelController@index');

Route::post('/channels', 'ChannelController@store');

// Route::get('/channels/show', 'ChannelController@show');

// Route::put('/expenses/{expense}', 'ChannelController@update');

// Route::delete('/expenses/{expense}', 'ChannelController@destory');



    Route::get('chat-texts', 'ChatsController@index');
    Route::get('messages', 'ChatsController@fetchMessages');
    Route::post('messages', 'ChatsController@sendMessage');

    Route::get('/workspaces', 'WorkspaceController@index');
    Route::get('/users', 'WorkspaceController@userindex');
    // Route::get('/users/{workspace_id}', 'WorkspaceController@workspaceUsers');

    // Route::get('/workspaces', 'WorkspaceController@workspaceindex');
    // Route::get('/projects', 'WorkspaceController@projectindex');
    Route::post('/storeWorkspace', 'WorkspaceController@storeWorkspace');
    Route::post('/storeProject', 'WorkspaceController@storeProject');
    Route::post('/storeUserEmail', 'WorkspaceController@storeUserEmail');
    Route::get('/workspace/{id}', 'WorkspaceController@show');
    Route::post('sign-in', 'WorkspaceController@userLogin');

    Route::post('/workspaces/{workspace}', 'WorkspaceController@update');


    Route::post('/workspace/delete/{id}', 'WorkspaceController@destroyWorkspace');

    Route::post('/project/delete/{id}', 'WorkspaceController@destroyProject');


    Route::post("user-signup", "InvitedUserController@userSignUp");
    // Route::post("user-login", "InvitedUserController@userLogin");


    Route::post('send-user-message/{user}/{receiver}', 'ChatsController@sendUserMessages');
    Route::get('get-user-message/{user}/{receiver}', 'ChatsController@fetchUserMessages');

    Route::post('send-channel-message/{user}/{channel}', 'ChatsController@sendChannelMessages');
    Route::get('get-channel-message/{channel}', 'ChatsController@fetchChannelMessages');

// });

Route::get('/test', function () {
    return['movie'=> "Avengers"];
});

// Route::get('auth/login', 'Auth\AuthController@getLogin');
// Route::post('auth/login', 'Auth\AuthController@postLogin');


// Route::get('/register', 'WorkspaceController@index')->name('admin.all');
Route::post('register', 'AuthApi@register');
Route::post('login', 'AuthApi@login');
Route::get('profile', 'AuthApi@getAuthenticatedUser');
Route::get('/email-check', 'AuthApi@userDetail');

Route::get("send-email", "EmailController@sendEmailToUser");



// Route::post('register', 'AuthApi@store');

Route::get('test2', 'WorkspaceController@showAll');
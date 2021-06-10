<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/posts', 'PostController@index')->name('posts.index');
Route::post('/store', 'PostController@store')->name('posts.store');

Route::get('/create', 'PostController@create')->name('posts.create');

Route::get('/show', 'PostController@show')->name('posts.show');
Route::post('/login', 'PostController@show')->name('login');
Route::post('/logout', 'PostController@show')->name('register');


// Auth::routes();



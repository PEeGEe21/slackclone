<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Workspace;
use App\WorkspaceUser;
use App\Project;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});

$factory->define(Workspace::class, function (Faker $faker) {
    $users = count(User::all());
    return [
        'user_id'=> random_int(1, $users),
        'title' => $faker->unique()->name,
        'status'=> 1
    ];
});

$factory->define(WorkspaceUser::class, function (Faker $faker) {
    $users = count(User::all());
    $workspaces = count(Workspace::all());

    return [
        'workspace_id' => random_int(1, $workspaces),
        'user_id'=> random_int(1, $users),
        'is_admin'=> random_int(0, 1)
    ];
});

$factory->define(Project::class, function (Faker $faker) {
    $workspaces = count(Workspace::all());

    return [
        'workspace_id' => random_int(1, $workspaces),
        'title' => $faker->unique()->name,
    ];
});

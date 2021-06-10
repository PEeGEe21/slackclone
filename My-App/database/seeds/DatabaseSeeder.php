<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('super_admin')->insert([
            'name' => 'Super Admin',
            'email' => 'superadmin@test.com',
            'email_verified_at' => now(),
            // 'password' => \GuzzleHttp\Psr7\hash('password'),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'created_at' => now(),
            'updated_at' => now()
        ]);

        factory(App\User::class, 50)->create();
        factory(App\Workspace::class, 250)->create();
        factory(App\WorkspaceUser::class, 500)->create();
        factory(App\Project::class, 1000)->create();
    }


}

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
        DB::table('users')->insert(['name' => 'Super System Admin', 'email' => 'admin@admin.com', 'password' => Hash::make('admin123')]);
    }
}

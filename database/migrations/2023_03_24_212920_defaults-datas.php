<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

use function PHPSTORM_META\map;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // ajoute les données par défaut
        DB::table('users')->insert([
            'name' => 'Duchemin',
            'firstname' => 'Anne',
            'email' => 'AnneDuchemin@test.com',
            'password' => bcrypt('password'),
            'score' => 85,
            'created_at' => now(),
        ]);
        DB::table('users')->insert([
            'name' => 'User',
            'firstname' => 'Test',
            'email' => 'usertest@test.com',
            'password' => bcrypt('password'),
            'score' => 60,
            'created_at' => now(),
        ]);
        DB::table('users')->insert([
            'name' => 'DeLoire',
            'firstname' => 'Val',
            'email' => 'valdeloire@test.com',
            'password' => bcrypt('password'),
            'score' => 80,
            'created_at' => now()
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};

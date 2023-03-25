<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('sentences')->insert([
            'sentence' => 'Bonjour! Comment vas-tu aujourd\'hui ?'

        ]);
        DB::table('sentences')->insert([
            'sentence' => 'Quelles sont les nouvelles de ton coté ?'

        ]);
        DB::table('sentences')->insert([
            'sentence' => 'As-tu bien dormi aujourd\'hui ?
'

        ]);
        DB::table('sentences')->insert([
            'sentence' => 'Quel est ton ressenti aujourd\'hui ?'
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

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function pingPong()
    {
        $thing = [
            'Message' => 'pong.',
            'status' => 200,
        ];
        return json_encode($thing);
    }
}

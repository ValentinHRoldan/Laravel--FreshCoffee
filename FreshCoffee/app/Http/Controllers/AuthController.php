<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function register(RegistroRequest $request){
        $data = $request->validated();
    }

    public function login($request){

    }

    public function logout($request){

    }
}

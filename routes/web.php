<?php

use Inertia\Inertia;
use Illuminate\Foundation\Auth\User;
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
    return Inertia::render('Welcome',);
});
Route::get('/course', function () {
    return Inertia::render('Course',);
});
Route::get('/home', function () {
    return Inertia::render('Home',);
});

Route::post('/test', function(){
    dd("wazap");
});

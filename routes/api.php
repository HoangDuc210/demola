<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('v1')->group(function () {
    Route::resource('customers', 'Api\v1\CustomerController')->only(['index','store']);
});
Route::prefix('v1')->group(function () {
    Route::resource('musics', 'Api\v1\MusicController')->only(['index','store','update','destroy']);
});
Route::prefix('admin')->group(function () {
    Route::resource('manage-table', 'Admin\ManageTableControlle')->only(['index','store','update','destroy']);
});




<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\v1\NewsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Route::post('login', [AuthController::class, 'signin']);
// Route::post('register', [AuthController::class, 'signup']);

// Route::middleware('auth:sanctum')->group( function () {
//     Route::resource('blogs', BlogController::class);
// });
Route::resource('blogs', BlogController::class);

Route::prefix('v1')->group(function () {
    Route::resource('news', NewsController::class)->only(['index','store','update','destroy']);
});

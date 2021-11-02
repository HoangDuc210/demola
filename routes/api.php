<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\v1\NewsController;
use App\Http\Controllers\API\v1\admin\NewsCategoryController;
use App\Http\Controllers\API\webs\v1\BlogController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Route::post('login', [AuthController::class, 'signin']);
// Route::post('register', [AuthController::class, 'signup']);


Route::prefix('v1')->group(function () {
    Route::resource('news', NewsController::class)->only(['index','show','store','update','destroy']);
    Route::resource('news_categories', NewsCategoryController::class)->only(['index','show','store','update','destroy']);
});

Route::prefix('v1')->group(function () {
    Route::resource('blogs', BlogController::class)->only(['index','show','store','update','destroy']);

});

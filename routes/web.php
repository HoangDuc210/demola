<?php

use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'laravel-filemanager'], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});

Route::get('/{path}', function () {
    return view('welcome');
})->where('path', '.*');

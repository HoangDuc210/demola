<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Music extends Model
{
    public $timestamps = true;
    protected $fillable = ['name', 'file', 'music_cate', 'like'];
    protected $table = 'music';
}

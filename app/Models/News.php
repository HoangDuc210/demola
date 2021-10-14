<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    protected $fillable = [
            'id',
            'name',
            'slug',
            'img',
            'act',
            'hot',
            'ord',
            'tag',
            'count',
           'parent',
           'short_content',
           'content',
           'publish_by',
           'create_time',
           'update_time'
    ];
}

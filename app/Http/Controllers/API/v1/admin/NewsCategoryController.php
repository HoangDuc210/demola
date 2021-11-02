<?php

namespace App\Http\Controllers\API\v1\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\NewsCategories;
use App\Http\Resources\News\NewsResouce;
use App\Http\Resources\News\NewsCollection;
use Illuminate\Support\Facades\DB;

class NewsCategoryController extends BaseController
{

    public function index()
    {
        $news = new NewsCollection(NewsCategories::orderBy('id', 'desc')->paginate(5));
        return $news;
    }

    public function store(Request $request){
        $input = $request->all();
        $news = NewsCategories::create($input);

        return $this->sendResponse(new NewsResouce($news), 'Post updated.');

    }
    public function show($slug)
    {
        $news = DB::table('news')->where('slug', '=', $slug)->get();

        if (is_null($news)) {
            return $this->sendError('Product not found.');
        }

        return $this->sendResponse(new NewsResouce($news), 'Post updated.');
    }

    public function update(Request $request,$id)
    {
        $news = NewsCategories::find($id);
        $news->update($request->all());

        return $this->sendResponse(new NewsResouce($news), 'Post updated.');
    }

    public function destroy(NewsCategories $news)
    {
        $news->delete();
        return $this->sendResponse(new NewsResouce($news), 'Post updated.');
    }
}


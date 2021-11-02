<?php

namespace App\Http\Controllers\API\webs\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\News;
use App\Http\Resources\News\NewsResouce;
use App\Http\Resources\News\NewsCollection;
use Illuminate\Support\Facades\DB;

class BlogController extends BaseController
{

    public function index()
    {
        $news = new NewsCollection(News::where('act', '=', 1)->orderBy('id', 'desc')->paginate(1));
        return $news;
    }

    public function store(Request $request){
        $input = $request->all();
        $news = News::create($input);

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
        $news = News::find($id);
        $news->update($request->all());

        return $this->sendResponse(new NewsResouce($news), 'Post updated.');
    }

    public function destroy(News $news)
    {
        $news->delete();
        return $this->sendResponse(new NewsResouce($news), 'Post updated.');
    }
}


<?php

namespace App\Http\Controllers\API\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\News;
use App\Http\Resources\News\NewsResouce;
use App\Http\Resources\News\NewsCollection;

class NewsController extends BaseController
{

    public function index()
    {
        $news = new NewsCollection(News::orderBy('id', 'desc')->paginate(5));
        return $news;
    }

    public function store(Request $request){

        // $news = new News();

        // $news->name = $request->name;
        // $news->slug = $request->slug;
        // $news->act = $request->act;
        // $news->ord = $request->ord;
        // $news->hot = $request->hot;
        // $news->short_content = $request->short_content;
        // $news->content = $request->content;

        // $news->save();

        $input = $request->all();
        $news = News::create($input);

        return $this->sendResponse(new NewsResouce($news), 'Post updated.');

    }

    public function update(Request $request,$id)
    {

        $news=News::find($id);
        $news->act = $request->act;

        $news->update();

        return $this->sendResponse(new NewsResouce($news), 'Post updated.');
    }

    public function destroy(News $news)
    {
        $news->delete();
        return $this->sendResponse(new NewsResouce($news), 'Post updated.');
    }
}


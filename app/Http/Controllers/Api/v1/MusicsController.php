<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Music;
use App\Http\Resources\CustomerResource;
use App\Http\Resources\CustomerCollection;

class MusicsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // try {
        //     DB::connection()->getPdo();
        // } catch (\Exception $e) {
        //     var_dump($e);die;
        //     die("Could not connect to the database.  Please check your configuration. error:" . $e );
        // }
        // $music = new CustomerCollection(Music::paginate(5));
        // return $music;

        try {
            $dbh = new PDO('postgres://ncvzholdqlfiau:d95404fe981f6322187325dfc404dd5535c7c50fc71793cf317c91e11af2ba8a@ec2-54-172-169-87.compute-1.amazonaws.com:5432/d5rp8npmc2ap7g');
            echo "PDO connection object created";
         }
         catch(PDOException $e)
         {
               echo $e->getMessage();
         }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $music = new Music();
        $music->name_music = $request->name_music;
        $music->file_music = $request->file_music;
        $music->cate_music = $request->cate_music;
        $music->like = $request->like;

        $insert = $music->save();

        if($insert){
            echo '{"status":"200","message":"Thêm thành công!!!"}';
        }else{
            echo '{"status":"400","message":"Không thành công!!!"}';
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        return new CustomerResource($customer);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($music)
    {
        return $music;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $music)
    {
        return $music;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($music)
    {
        $music = Music::find($music);
        $music->delete();
    }
}
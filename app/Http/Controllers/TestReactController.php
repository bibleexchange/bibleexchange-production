<?php namespace BibleExchange\Http\Controllers;

use BibleExchange\Http\Requests;
use BibleExchange\Http\Controllers\Controller;
use BibleExchange\Entities\Study;

use Illuminate\Http\Request;

class TestReactController extends Controller {

	public function test()
	{		
		$study = Study::find(4);
		
		return view('react.test',compact('study'));
	}

}

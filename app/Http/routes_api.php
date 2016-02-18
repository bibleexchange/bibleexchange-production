<?php

Route::group(array('prefix' => '/api/v1'), function()
{	
	Route::get('studies/{id}/tags','Api\ApiTagsController@index');
	
	Route::get('studies','Api\ApiStudiesController@index');
	Route::get('studies/{study}','Api\ApiStudiesController@show');
	Route::get('studies/{study}/comments','Api\ApiStudiesController@comments');
	Route::post('studies/{study}/comments','CommentsController@store');
	
	Route::resource('tags','Api\ApiTagsController',['only'=>['index','show','store']]);
	Route::resource('bookmarks','Api\ApiBookmarksController');
	
	Route::resource('bible','Api\ApiBibleController',['only'=>['index','show','store']]);
	
	Route::get('notes/bible/verse/{verse}','Api\ApiNotesController@bibleVerse');
	Route::get('notes/bible/{book}/{chapter}','Api\ApiNotesController@bibleChapter');
	
	Route::get('notes/@{username}','Api\ApiNotesController@publicProfile');
	Route::get('amens/@{username}','Api\ApiAmensController@publicProfile');
	
	Route::get('notes/array/{array}', 'Api\ApiNotesController@showArrayOfNotes');
	Route::get('amens/array/{array}', 'Api\ApiAmensController@showArrayOfAmens');
	
	Route::get('/views/bible/chapter/{bchapter}', 'Api\ApiBibleController@showChapter');
	
});
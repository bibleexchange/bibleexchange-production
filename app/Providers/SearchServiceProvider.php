<?php namespace BibleExchange\Providers;

use Illuminate\Support\ServiceProvider;

class SearchServiceProvider extends ServiceProvider {

	public function register()
	{
		$this->app->bind('search','BibleExchange\Services\Search');
	}


}
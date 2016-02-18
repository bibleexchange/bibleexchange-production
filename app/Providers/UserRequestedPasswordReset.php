<?php namespace BibleExchange\Providers;

use BibleExchange\Events\Event;

use Illuminate\Queue\SerializesModels;

class UserRequestedPasswordReset extends Event {

	use SerializesModels;

	/**
	 * Create a new event instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}

}

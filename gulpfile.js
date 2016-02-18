var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass(['bootstrap.scss','custom.scss','all.scss'],'../../public_html/assets');
	mix.copy('resources/assets/css','public/assets');
	mix.styles([
		'bootstrap.css',
		'custom.css',
		'landing.css'
	],'public/assets','public/assets');
	mix.scriptsIn('resources/assets/js','public/assets');
});
	
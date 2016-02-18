{!! Form::open(['url'=>'/user/course-maker/'.$course->uuid.'/section/'.$section->id.'/create-task','class'=>'create-task']) !!}	
	
	{!! Form::label('task_type','What kind of task?') !!}
	
	{!! Form::select('task_type', $task_types, null , ['id'=>'task']) !!}
	{!! $errors->first('task', '<br><small style=\'color:red;\'>*:message</small>') !!}
	
	{!! Form::submit('create new task',['id'=>'save','class'=>'btn btn-primary btn-xs']) !!} 			
	
{!!Form::close()!!}
package com.example.SpringTodoCapstoneproj.mapper;

import org.springframework.stereotype.Component;

import com.example.SpringTodoCapstoneproj.dto.TodoDto;
import com.example.SpringTodoCapstoneproj.model.TodoModel;


@Component
public class TodoMapper {
	
	public static TodoDto convertToDto(TodoModel t1){
		return new TodoDto(t1.getId(), t1.getTodoTitle(), t1.getTodoDescription(), t1.getTodoCompleted());
	}
	
	public static TodoModel covertToTodo(TodoDto d1) {
		return new TodoModel(d1.getId(), d1.getTodoTitle(), d1.getTodoDescription(), d1.getTodoCompleted());
	}

}

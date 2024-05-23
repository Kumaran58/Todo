package com.example.SpringTodoCapstoneproj.service;

import java.util.List;

import com.example.SpringTodoCapstoneproj.dto.TodoDto;

public interface TodoService {
	
	TodoDto AddTodo(TodoDto t1);
	
	List<TodoDto> getAllTodo();
	
	TodoDto updateTodo(Long id,TodoDto t1);
	
	TodoDto getById(Long todoId);
	
	void deleteTodo(Long todoId);
	
	

}

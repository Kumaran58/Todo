package com.example.SpringTodoCapstoneproj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringTodoCapstoneproj.dto.TodoDto;
import com.example.SpringTodoCapstoneproj.service.TodoServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/todo")
public class TodoController {
	
	@Autowired
	private TodoServiceImpl s1;
	
	@PostMapping
	public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto d1){
		TodoDto add=s1.AddTodo(d1);
		return new ResponseEntity<>(add,HttpStatus.CREATED);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<TodoDto> updateTodo(@PathVariable("id") long id,@RequestBody TodoDto d1 ){
		TodoDto update=s1.updateTodo(id, d1);
		return ResponseEntity.ok(update);
	}
	
	@GetMapping
	public ResponseEntity<List<TodoDto>> getAllTodo(){
		List<TodoDto> getAll=s1.getAllTodo();
		return ResponseEntity.ok(getAll);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<TodoDto> getTodoById(@PathVariable("id") long id){
		TodoDto getById=s1.getById(id);
		return ResponseEntity.ok(getById);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteTodoById(@PathVariable("id") long id){
		s1.deleteTodo(id);
		return ResponseEntity.ok("Todo deleted sucessfully");
	}
	
	

}

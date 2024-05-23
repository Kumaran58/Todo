package com.example.SpringTodoCapstoneproj.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.SpringTodoCapstoneproj.model.TodoModel;

public interface TodoRepo extends JpaRepository<TodoModel, Long> {
	
	
}

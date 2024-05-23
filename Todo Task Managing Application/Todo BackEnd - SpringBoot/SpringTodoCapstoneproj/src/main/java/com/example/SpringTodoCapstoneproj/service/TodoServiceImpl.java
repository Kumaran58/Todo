package com.example.SpringTodoCapstoneproj.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringTodoCapstoneproj.dto.TodoDto;
import com.example.SpringTodoCapstoneproj.mapper.TodoMapper;
import com.example.SpringTodoCapstoneproj.model.TodoModel;
import com.example.SpringTodoCapstoneproj.repo.TodoRepo;


@Service
public class TodoServiceImpl implements TodoService {
	
	@Autowired
	private TodoRepo r1;
	
	@Override
	public TodoDto AddTodo(TodoDto t1) {
		TodoModel m1 = TodoMapper.covertToTodo(t1);
		TodoModel saved=r1.save(m1);
		return TodoMapper.convertToDto(saved);
	}

	@Override
	public List<TodoDto> getAllTodo() {
		List<TodoModel> m1=r1.findAll();
		return m1.stream().map((TodoModel)-> TodoMapper.convertToDto(TodoModel)).collect(Collectors.toList()); 
	
	}
	
	@Override
	public TodoDto updateTodo(Long id, TodoDto t1) {
		Optional<TodoModel> m1=r1.findById(id);
		TodoModel upd=null;
		if(m1.get()!=null) {
			upd=m1.get();
			upd.setTodoTitle(t1.getTodoTitle());
			upd.setTodoDescription(t1.getTodoDescription());
			upd.setTodoCompleted(t1.getTodoCompleted());
			return TodoMapper.convertToDto(r1.save(upd));
		}
		
		return null;
	}

	@Override
	public TodoDto getById(Long todoId) {
		Optional<TodoModel> opt = r1.findById(todoId);
		if (opt != null) {
			TodoModel m1= opt.get();
			return TodoMapper.convertToDto(m1);
		}
		return null;
	}

	@Override
	public void deleteTodo(Long todoId) {
		r1.deleteById(todoId);
	}
}

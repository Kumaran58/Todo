package com.example.SpringTodoCapstoneproj.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="todo_title")
	private String todoTitle;
	
	@Column(name="todo_description")
	private String todoDescription;
	
	@Column(name="todo_completed")
	private Boolean todoCompleted;
	
}

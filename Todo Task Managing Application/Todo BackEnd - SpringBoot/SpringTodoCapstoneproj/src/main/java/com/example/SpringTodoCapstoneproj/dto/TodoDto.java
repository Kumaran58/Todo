package com.example.SpringTodoCapstoneproj.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDto {

	private Long id;

	private String todoTitle;

	private String todoDescription;

	private Boolean todoCompleted;

}

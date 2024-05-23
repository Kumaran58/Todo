# Todo Task Management Application 

## Introduction

This project is an implementation of a RESTful API for Todo Task Management. The application is built using Spring Boot, ReactJs With MySql and includes endpoints for creating, Updating, retrieving and deleting Tasks.The application includes a handler to manage errors and return appropriate messages to the client.


## Features

- Create a new Task 
- Retrieve a list of all Task
- Update a Existing Task 
- Delete a Task

## Prerequisites

- Java Development Kit (JDK) 11 or later
- Eclipse/Any IDE with Spring Tools (Spring Boot support)
- Visual Studio code
- MySQL Server
- A tool like Swagger to test the API (optional)
- A Browser


## Setup Instructions to Run/Start the project

1. Download and Extract the Project ZIP:

Download the project ZIP file from the source.
Extract the ZIP file to a directory of your choice.

2. Import Project into Eclipse:

Open Eclipse IDE.
Click on File -> Open Project from file system .
Click on directory... and navigate to the directory where you extracted the project ZIP file.
Select the project directory (SpringTodoCapstoneproj) and click Finish to import the project.


3. Configure MySQL Database:

Ensure you have MySQL installed and running. 
To Create a new database:
CREATE DATABASE TodoCapstoneproj;

4.Update Application Properties:

Update src/main/resources/application.properties with your MySQL database details:
spring.datasource.username=[your userName]
spring.datasource.password=[your password]

Replace root and password with your MySQL database username and password, respectively.

5.Run the Application:

Right-click on the Traini8ProjectApplication.java file located in the 
src/main/java/com/example/traini8project package.

Select Run As -> Java Application.

The Spring Boot application will start, and you should see output indicating that the application has started successfully.

6. Access the Application:
Copy and paste the existing Node_modules Folder into the project.
Start the React part in Vs code by using code - Npm Start

Once the application is running, you can access it using a web browser or API testing tool:

Base URL: http://localhost:3000

7. API Documentation:
You can explore the available APIs and test them using tools like Swagger :

Swagger UI: http://localhost:8080/swagger-ui.html

##Conclusion

This README provides detailed instructions for setting up and running the Todo task Application with MySQL. If you have any questions or need further assistance, please feel free to reach out.

Thank you for your time, and I hope this project meets your requirements.

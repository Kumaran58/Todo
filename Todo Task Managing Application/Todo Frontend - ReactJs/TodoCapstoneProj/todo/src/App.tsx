import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderCompo';
import FooterComponent from './components/FooterCompo';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import ListTodo from './components/ListTodoCompo';
import TaskComponent from './components/TaskCompo';
import ComComponent from './components/CompleteCompo';
import InComComponent from './components/IncompleCompo';
import DeleteComponent from './components/DeleteCompo';

function App() {
  return (

    <>

      <HeaderComponent></HeaderComponent>

      <BrowserRouter basename='/'>
        <Routes>

          <Route path='/' element={<ListTodo></ListTodo>}></Route>

          <Route path='/tasks' element={<ListTodo></ListTodo>}></Route>

          <Route path="/add-task" element={<TaskComponent></TaskComponent>} />

          <Route path='/edit-task/:id' element={<TaskComponent></TaskComponent>} />

          <Route path='/delete-task/:id' element={<DeleteComponent></DeleteComponent>} />

          <Route path='/com-task/:id' element={<ComComponent></ComComponent>} />

          <Route path='/incom-task/:id' element={<InComComponent></InComComponent>} />
          
          
        </Routes>
      </BrowserRouter>

      <FooterComponent></FooterComponent>
          



    </>


  );
}

export default App;

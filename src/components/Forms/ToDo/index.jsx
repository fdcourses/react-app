import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { TODO_SCHEMA } from 'utils/validationSchemas';

const testData = [
  {
    id: 1,
    body: 'do stuff',
    isDone: false,
  },
];

const ToDo = () => {
  const [tasks, setTasks] = useState(testData);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      isDone: false,
      body: text,
    };

    const newTasks = [...tasks, newTask];

    setTasks(newTasks);
  };
  const deleteTask = (id) => {
    // filter
  }
  const toggleCompletion = (id) => {
    // map
  }
  const submitHandler = (values, formikBag) => {
    const {taskText} = values;
    addTask(taskText);
    formikBag.resetForm();
  }

  return (
    <div>
      <h1>ToDo</h1>

      <Formik validationSchema={TODO_SCHEMA} initialValues={
        { taskText: '' }
        } onSubmit={submitHandler}>
        <Form>
          <Field name="taskText" placeholder="enter task"/>
          <ErrorMessage name="taskText" >
            {(message) => <div style={{color:'red'}}>{message}</div>}
          </ErrorMessage>
        </Form>
      </Formik>

      <ul>
        {tasks.map((task) => {
  
          return<div onClick={()=> toggleCompletion(task.id)}>
            <input type="checkbox" checked={task.isDone} /> test
          </div>
        })}
      </ul>
      
    </div>
  );
};

export default ToDo;

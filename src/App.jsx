import React, { useEffect, useState } from 'react';
import './App.css'
import TaskCreator from './componentes/TaskCreator';
import TaskTable from './componentes/TaskTable';
import VisibilityControl from './componentes/VisibilityControl';
import { Container } from './componentes/Container';



const App = () => {

  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if(!taskItems.find(task => task.name === taskName)){
      setTaskItems([...taskItems, { name: taskName , done: false}]);
    }
  }

  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false);
  }

  useEffect(()=>{
    let data = localStorage.getItem('tareas')
    if(data){
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(taskItems));
  },[ taskItems ])

  const toggleTask =  task => {
    setTaskItems(
      taskItems.map(t => (t.name == task.name) ? {...t, done: !t.done} : t)
    )
  }




  return (
    <main className='bg-dark vh-100 text-white'>
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />

        <VisibilityControl 
          isChecked={showCompleted}
          setShowCompleted={(checked)=>{setShowCompleted(checked)}}
          cleanTask={cleanTask}
        />

        {
          showCompleted === true && (
            <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} />
          )
        }</Container>
    </main>
  )
}

export default App

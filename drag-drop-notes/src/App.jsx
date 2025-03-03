import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [toDoList, setToDoList] = useState([])
  const [doingList, setDoingList] = useState([])
  const [doneList, setDoneList] = useState([])

  // textarea auto height
  useEffect(() => {
    const textareaToDoTask = document.getElementById('taskToDoTextarea')
    textareaToDoTask.addEventListener('input', () => {
      textareaToDoTask.style.height = 'auto'
      textareaToDoTask.style.height = `${textareaToDoTask.scrollHeight}px`
    })
  }, [])

  const handleToDoSubmit = (event) => {
    event.preventDefault()
    const taskToAdd = document.getElementById('taskToDoTextarea').value
    const titleOfTask = document.getElementById('taskToDoTitle').value
    if (titleOfTask !== '') {
      setToDoList([...toDoList, { title: titleOfTask, description: taskToAdd }])
    } else {
      // abrir una modal que me diga poné un título
      console.log('ingresar al menos un titulo')
    }
    document.getElementById('taskToDoTextarea').value = ''
    document.getElementById('taskToDoTitle').value = ''
  }

  const moveTaskTo = ({ index, tasksList, moveToTaskList, setTaskList, setToTaskList }) => {
    const task = [...tasksList]
    setToTaskList([...moveToTaskList, task[index]])
    task.splice(index, 1)
    setTaskList(task)
  }

  const removeTask = ({ index, taskList, setList }) => {
    let tasksToModify = [...taskList]
    if (tasksToModify.length > 0) {
      tasksToModify.splice(index, 1)
      setList(tasksToModify)
    } else {
      tasksToModify = []
      setList(tasksToModify)
    }
  }

  return (
    <>
      <header>
        <h1> This will be a drag&drop notes dashboard </h1>
      </header>

      <section>
        <article className='articleTask'>
          <h2> To do </h2>
          <form>
            <fieldset>
              <legend> Add a task </legend>
              <input id='taskToDoTitle' type='text' placeholder='Title' />
              <textarea id='taskToDoTextarea' type='text' placeholder='Describe the ask to do.' />
              <button onClick={handleToDoSubmit}> add task </button>
            </fieldset>
          </form>
          {
            toDoList.map((value, index) => {
              return (
                <div key={index} className='task' draggable='true'>
                  <h2> {value.title} </h2>
                  <p> {value.description} </p>
                  <footer>
                    <button onClick={() => { moveTaskTo({ index, tasksList: toDoList, moveToTaskList: doingList, setTaskList: setToDoList, setToTaskList: setDoingList }) }}>
                      Move to <strong> doing </strong>
                    </button>
                    <button onClick={() => { moveTaskTo({ index, tasksList: toDoList, moveToTaskList: doneList, setTaskList: setToDoList, setToTaskList: setDoneList }) }}>
                      Move to <strong> done </strong>
                    </button>
                    <button onClick={() => { removeTask({ index, taskList: toDoList, setList: setToDoList }) }}> <strong> Remove </strong> </button>
                  </footer>
                </div>
              )
            })
          }
        </article>

        <article className='articleTask'>
          <h2> Doing </h2>
          {
            doingList.map((value, index) => {
              return (
                <div key={index} className='task' draggable='true'>
                  <h2> {value.title} </h2>
                  <p> {value.description} </p>
                  <footer>
                    <button onClick={() => { moveTaskTo({ index, tasksList: doingList, moveToTaskList: toDoList, setTaskList: setDoingList, setToTaskList: setToDoList }) }}>
                      Move to <strong> do </strong>
                    </button>
                    <button onClick={() => { moveTaskTo({ index, tasksList: doingList, moveToTaskList: doneList, setTaskList: setDoingList, setToTaskList: setDoneList }) }}>
                      Move to <strong> done </strong>
                    </button>
                    <button onClick={() => { removeTask({ index, taskList: doingList, setList: setDoingList }) }}> <strong> Remove </strong> </button>
                  </footer>
                </div>
              )
            })
          }
        </article>

        <article className='articleTask'>
          <h2> Done </h2>
          {
            doneList.map((value, index) => {
              return (
                <div key={index} className='task' draggable='true'>
                  <h2> {value.title} </h2>
                  <p> {value.description} </p>
                  <footer>
                    <button onClick={() => { moveTaskTo({ index, tasksList: doneList, moveToTaskList: toDoList, setTaskList: setDoneList, setToTaskList: setToDoList }) }}>
                      Move to <strong> do </strong>
                    </button>
                    <button onClick={() => { moveTaskTo({ index, tasksList: doneList, moveToTaskList: doingList, setTaskList: setDoneList, setToTaskList: setDoingList }) }}>
                      Move to <strong> doing </strong>
                    </button>
                    <button onClick={() => { removeTask({ index, taskList: doneList, setList: setDoneList }) }}> <strong> Remove </strong> </button>
                  </footer>
                </div>
              )
            })
          }
        </article>
      </section>
    </>
  )
}

export default App

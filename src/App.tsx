import React,{useState,useEffect} from 'react';
import './App.css';
import db from './firebase';
import firebase from 'firebase'
import Todo from './Todo';

function App() {
  const [todos,setTodos]=useState<any[]>([]);
  const [input,setInput]=useState('');
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id:doc.id ,todo:doc.data().todo}))
        );
      });
  }, []);
  const addTodos=(event)=>{
    event.preventDefault()
    db.collection('todos').add({todo:input,timestamp:firebase.firestore.FieldValue.serverTimestamp()})
    setTodos(todos=>[...todos,input])
    setInput('')
  }
  return (
    <div className="App">
      <h2 className="m-6 mb-1 text-center text-3xl font-extrabold text-white-900">ToDoDuDudu..</h2>
      <h6 className="text-center text-2xl mb-6 font-light text-gray-100">React and Firebase based TODO-List App</h6>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="todo__input">New Todooo</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo__input" type="text" placeholder="Todoooo.." value={input} onChange={(event)=>setInput(event.target.value)}/>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={addTodos} disabled={!input}>
            Add New Task
          </button>
        </div>
      </form>
      <ul className="list-inside bg-white rounded min-h-full p-4 ">
        {todos.map(todo=>(
          <Todo todo={todo}/>
        ))}
      </ul>
    <footer>
        <a href="https://github.com/KiddoKodes/tododudu" className="block m-6 font-bold text-center">Github Repository 😊 </a>
        <span className="block m-6 font-bold text-center">&copy; Copyright 2021 All Right Reserved</span>
        <span className="block m-6 font-bold text-center">Made by Abhirama M</span>
        <span className="block m-6 font-bold text-center">Used ReactJs⚛️ & Hosted with💓in Firebase🔥</span>
    </footer>
    </div>
  );
}

export default App;
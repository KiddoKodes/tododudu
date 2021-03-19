import React, { useState } from 'react';
import db from './firebase';

const Todo = (props) => {
    const deleteTodo = () => {
        db.collection('todos').doc(props.todo.id).delete()
    }
    const [updateInput, setUpdateInput] = useState('')
    const [flex, setFlex] = useState(false)
    const flexer = () => {
        setFlex(!flex)
    }
    const updateTodo = (event) => {
        event.preventDefault()
        db.collection('todos').doc(props.todo.id).update({ todo: updateInput });
        flexer()
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <li className="text-gray-700 p-6 font-light text-3xl list-none">{props.todo.todo}</li>
                <div className="flex">
                    <form className={flex ? "flex" : "hidden"}>
                        <input type="text" value={updateInput} onChange={(event) => setUpdateInput(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        <button className="w-6 h-6 cursor-pointer m-2 " type="submit" disabled={!updateInput} onClick={updateTodo}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0000f5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </form>
                    <div className="w-6 h-6 cursor-pointer m-2" onClick={flexer}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000">
                            <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                    </div>
                    <div className="w-6 h-6 cursor-pointer m-2" onClick={deleteTodo}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000">
                            <path fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <hr className="w-full" />
        </>
    )
}
export default Todo
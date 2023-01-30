import React, { useState } from 'react'
import './Todos.css'

import useList from './hooks/useList';

// Icons
import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io"


export default function Todos() {
    const { list, push, pop } = useList();
    const [todo, setTodo] = useState('')
    const [isInvalid, setIsInvalid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle Empty Input
        if (todo === '') {
            setIsInvalid(true)
            setTimeout(() => {
                setIsInvalid(false)
            }, 3000)
            return;
        }




        // TODO: Handle Long Inputs

        push(todo);
        setTodo('')
    }
    return (
        <>
            <h2>TODO</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder='Create React App' autoFocus className={isInvalid ? 'input-invalid' : ''} />
                <button className='btn btn--green' type='submit'><IoIosAddCircle /></button>
            </form>
            {isInvalid &&
                <div className='error-msg'>Please Type Something to Add</div>
            }
            {list.length > 0 ? (<div className='todo-container'>
                {list.map((todo, index) => {
                    return (
                        <div key={index} className='todo'>
                            <div>{todo}</div>
                            {/* TODO: Change Remove Icon to Delete Icon */}
                            <button className='btn btn--red' onClick={() => pop(index)}><AiFillDelete /></button>

                        </div>
                    )
                })}
            </div>) : (<div className="no-todo-text"><h3>Add Todo To Display</h3></div>)}

        </>
    )
}

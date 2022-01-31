import React from 'react';
import { FaTimesCircle } from "react-icons/fa";
const ToDo = (props) => {

 
    return (
        <>
            <div className='todo_style'>

                <p> <FaTimesCircle color='red' onClick={() => {props.onSelect(props.id) }}
                /> {props.text} </p>
            </div>
        </>
    )
};

export default ToDo;

import React, { useEffect, useState } from 'react';
// import { FaTimesCircle } from "react-icons/fa";
// import ExiF from './ExiF';
import ToDo from './ToDo';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Practice = () => {

    const [data, setdata] = useState('')
    const [Items, setItems] = useState([])

    const changeState = (e) => {
        setdata(e.target.value)

    }
    //    console.log(data);

    const storedata = () => {
        setItems((element) => {
            return [...element, data]
        })
        setdata('')
        // toast("Wow so easy!");
    }

    // console.log(Items)


    const deleteItems = (id) => {
        setItems((element) => {
            return element.filter((curElement , index)=>{
                return index!==id;
                
            })
        })
    }

    useEffect(() => {
     localStorage.setItem("items", JSON.stringify(Items))
    
     
    }, [Items]);
    


    return (
        <>
            <div>
                <h1>ToDo List</h1>
                <input type="text" placeholder='Add Student Name' value={data} onChange={changeState} />
                <button onClick={storedata}>+</button>

                <li>
                    {
                        Items.map((current, index) => {
                            return (
                                <ToDo
                                    key={index}
                                    id={index}
                                    text={current}
                                    onSelect={deleteItems}
                                />
                            )
                    })
                    }
                </li>
            </div>
            {/* <ToastContainer /> */}

        </>

    )
};

export default Practice;

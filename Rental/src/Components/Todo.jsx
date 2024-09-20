import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin4Fill } from "react-icons/ri";

const Todo = () => {

    const [data,setdata]=useState('');
    const [todo,settodo]=useState([]);

   const add =()=>{
    if (data.trim() === '') return;
    settodo(
        (old)=>{
            return  [...old, data]
           
        }
      
    )
  
    setdata('')
   }
   

    const get =(e)=>{
        setdata(e.target.value);
    }
    const deleteitem=()=>{
        
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            
            <div className=" bg-slate-300 rounded-xl h-[70vh] w-[50vh]">
            <div className="flex justify-center items-center">
    <h1 className='font-bold text-6xl mt-6 text-gray-500'>TODO'S</h1>
  </div>
                <div className=" flex justify-between items-center mt-5">

                    <input className='h-10 pl-6 w-[300px]   ml-2  rounded-xl' type="text" placeholder='Enter todo' onChange={get} value={data} />
                    <button onClick={add} className= "  flex justify-center items-center bg-blue-500  mr-2 hover:bg-blue-600 text-white font-bold  h-10 w-[100px] rounded-lg">
                        < IoMdAddCircle/> Add
                    </button>
                </div>
<div className=" mt-10">
 {
    todo.map(
        (item,index)=>{
            return(
                <ul ><li   className="flex bg-slate-200 rounded-2xl pl-4 justify-between items-center mr-2 mt-3 ml-1" key={index}>{item }  
                
                <button  key={index} onclick={deleteitem} className="bg-gray-500  flex justify-center items-center  hover:bg-gray-600 text-white font-bold  h-10 w-[100px] rounded-lg">
                       <RiDeleteBin4Fill/>
                    </button>

                 </li></ul>
                
            )
        }
    )
 }
 


</div>

            </div>
        </div>







    )
}

export default Todo

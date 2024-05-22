import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import Sidebar from './Sidebar';
import Changinpart from './Changinpart';
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { useEffect, useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
function App() {
  let arr = [
    { icon: <MdOutlineAttachMoney size={30}/>, data: "Aug 6", category: "Travel", item: "petrol", share: "your share", money: "233" },
    {icon:<MdOutlineAttachMoney size={30}/>,data:"Aug 6",category:"Travel",item:"petrol",share:"your share",money:"233"},
    {icon:<MdOutlineAttachMoney size={30}/>,data:"Aug 6",category:"Travel",item:"petrol",share:"your share",money:"233"},
    { icon: <MdOutlineAttachMoney size={30}/>, data: "Aug 6", category: "Travel", item: "petrol", share: "your share", money: "233" },
    {icon:<MdOutlineAttachMoney size={30}/>,data:"Aug 6",category:"Travel",item:"petrol",share:"your share",money:"233"},

  ]


  const [Data,setData]=useState(arr)

const [username,setUsername]=useState("Gangadhar")

  return (
    <div className='' style={{ height: "650px" }}>
     
      <BrowserRouter>

        <div className='border    flex' style={{ height: "650px" }}>
          <div className='flex flex-col  bg-gray-400 p-4 h-full w-full' style={{ width: "20%" }}>
            <div className='font-bold w-full' style={{color:"yellow"}}>
              <h1>Expense Tracker</h1>
              <ul className='flex flex-col pt-3  gap-4 h-full w-full'>
                <li className='flex items-center gap-2 hover:bg-red-300 h-8'><IoIosHome /><Link to='/Home'>Home</Link></li>
                <li className='flex items-center gap-2 hover:bg-red-300 h-8'><SiSimpleanalytics /><Link to='/Analysis'>Analysis</Link></li>
                <li className='flex items-center gap-2 hover:bg-red-300 h-8'><MdOutlineAttachMoney size={20}/><Link to='/Daily'>Daily</Link></li>
              </ul>
            </div>

            <div className='flex-grow flex flex-col gap-2 justify-end'style={{color:"yellow"}}>
              <h1 className='text-black p-2 rounded-lg flex flex-col justify-center items-center' style={{backgroundColor:"yellow"}}>Add expenses</h1>
              <h1  className="text-black p-2 rounded-lg flex flex-col justify-center items-center "style={{backgroundColor:"yellow"}}>Log out</h1>
            </div>
          </div>
          <div className=' bg-gray-200' style={{ width: "40%" }}>
            <Changinpart></Changinpart>
          </div>
          
          <div className='w-30  bg-gray-200 pt-2 pr-2' style={{ width: "40%" }}>
          <div className='flex gap-2 items-center justify-end font-bold text-white pr-3 p-2'>
            Hi,{username}<FaUserLarge />
          </div>
            {Data?.map((ele, index) => {
              return (
                <div className={`flex justify-between p-3  bg-gray-400 rounded-lg ${index !== arr.length - 1 ? 'mb-4' : ''}`} >
                  <div className='flex gap-2 items-center'>
                  <div className='size-8 text-green-200' style={{ borderRadius: "100%" }}>{ele.icon}</div>
                    <div >
                      <div className='flex gap-2' style={{ color: "yellow" }} >
                        <h1 className='border px-1 rounded-lg border-2'>{ele.data}</h1>
                        <h1 className='border px-1 rounded-lg border-2'>{ele.category}</h1>
                      </div>
                      <div className='pt-1 text-white'>
                        {ele.item}
                      </div>
                    </div>
                  </div>
                  <div className='text-white'>
                    <h1>{ele.share}</h1>
                    <h2 className='flex items-center justify-center '><MdOutlineAttachMoney size={20}/>{ele.money}</h2>
                    <div className='flex justify-end 'style={{color:"yellow"}}>
                    <RiDeleteBin6Fill />
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>







      </BrowserRouter>
    </div>
  );
}

export default App;

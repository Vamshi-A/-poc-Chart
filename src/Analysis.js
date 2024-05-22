import React from 'react'
import { SiSimpleanalytics } from "react-icons/si";
export default function Analysis() {
    return (
        <div>


            <div className="rounded-full mt-20 bg-pink-300  ml-12 flex flex-col items-center justify-center" style={{ height: "400px", width: "400px", borderRadius: "100%" }}>
                <div className="rounded-full bg-gray-400 flex flex-col items-center items-center justify-center" style={{ height: "300px", width: "300px", borderRadius: "100%" }}>
                </div>

            </div>
            <div className='flex bg-gray-400  text-white ml-20  mt-6 p-2 justify-center items-center w-[300px] gap-2 '><SiSimpleanalytics style={{color:"yellow"}}/>Spend Analysis</div>
        </div>
    )
}

import { useState } from "react"
import UserDetail from "./UserDetail"
import "../index.css"

export default function Navbar(){
    const [UserName ,setUsername]=useState("")
    let name=UserName;
    return(
        <>
        <div className="text-[1rem] flex-col sm:text-3xl gap-2 justify-items-center font-sans bg-slate">
        <h2 >
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="icon" className="w-9" /> Github Username
        </h2>
        <input type="text" placeholder="Enter UserName" className="w-96 h-7 border-2 border-cyan-600 rounded-md" onKeyDown={(e)=>{
            if(e.key=='Enter'){
                setUsername(e.target.value)
            }
        }}></input>
        </div>
        <UserDetail name={UserName}/>
        </>
    )
}
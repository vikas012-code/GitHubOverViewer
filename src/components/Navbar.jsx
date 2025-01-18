import { useEffect, useState } from "react"
import UserDetail from "./UserDetail"
import Skeleton from "./skelatonloading"
import "../index.css"

export default function Navbar(){
    const [userName ,setUsername]=useState("")
    const [res ,setRes]=useState([])
    const [isLoading, setIsLoading] = useState(false); 

        const fun=async()=>{
            try{
                setIsLoading(true);
                const response = await fetch(`https://api.github.com/users/${userName}`)
                const data = await  response.json()
                setRes(data)
                setIsLoading(false);
            }
            catch(e){
                console.log(e)
                setIsLoading(false);
            }
        }

        useEffect(() => {
            userName && fun();
        },[userName])
        
        
    return(
        <>
        <div className="text-[1rem] flex-col sm:text-3xl gap-2 justify-items-center font-sans bg-slate">
        <h2 >
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="icon" className="w-9" /> Github Username
        </h2>
        <input type="text"  placeholder="Enter UserName" className="w-96 h-7 border-2 border-cyan-600 rounded-md" onKeyDown={(e)=>{
            if(e.key=="Enter"){
                setUsername(e.target.value)
            }
        }}></input>
        </div>
        { userName ? isLoading ? <Skeleton /> : <UserDetail data={res} /> :""}
        </>
    )
}
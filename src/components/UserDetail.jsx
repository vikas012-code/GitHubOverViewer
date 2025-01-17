


export default function UserDetail({name}){
    let data
    fetch(`https://api.github.com/users/${name}`)
    .then(res=> res.json())
    .then(data=> data)
    .catch(err=> console.log(err))

    {data && fetch(data.repourl)

    }
     
    console.log(data)
    return(
        <>
        <div className="flex-col justify-items-center">
            <div className="text-3xl font-sans flex gap-3 ">
                <h3 >Overview For </h3>
                <h3 className="text-cyan-400">{name ? data ? data: "user not found"  : "User"}</h3>
            </div>
            <div className=" flex gap-5 font-sans font-medium">
                <img className="w-28 h-28 rounded-full" src={data && data.avatar_url?data.avatar_url:"https://img.freepik.com/premium-vector/user-icons-includes-user-icons-people-icons-symbols-premiumquality-graphic-design-elements_981536-526.jpg?semt=ais_hybrid"} alt="Profile" />
                <div className="">
                    <p className="mb-0 mt-4 text-2xl text-cyan-500">{data ? data.login : "user"}</p>
                    <p className=" text-[0.8rem] m-0 text-gray-500"><img className="w-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbtZJeX2DQ756ZAyRUjQzzgLvSNFYoroIoQ&s" alt="location" /> {data ? data.location : "not found"}</p>
                    <a href="" className="text-[0.8rem] no-underline text-gray-500"><img className="w-3" src="https://icons.veryicon.com/png/o/miscellaneous/foundation-icon-5/link-86.png" alt="link" /> {data && data.blog ? data.blog:"Blog Not Found"}</a>
                </div>
            </div>
            <div className="flex-col justify-items-center mt-2">
                <button className=" w-16 h-8 rounded-lg border-none bg-slate-200"onClick={()=>{
                    open(data?data.url:"")
                }
                } >Follow</button>
                <div className="flex gap-10 text-[0.7rem] text-blue-950 font-sans font-medium mt-4">
                    <span>FOLLOWERS <p className="text-center text-3xl mt-0 font-medium text-blue-400">{data ? data.followers : 0}</p></span>
                    <span>FOLLOWING<p className="text-center text-3xl mt-0 font-medium text-blue-400">{data ? data.following :0}</p></span>
                    <span>PUBLIC REPOS<p className="text-center text-3xl mt-0 font-medium text-blue-400">{data ? data.public_repos :0}</p></span>
                    <span>PUBLIC GISTS<p className="text-center text-3xl mt-0 font-medium text-blue-400">{data ? data.public_gists :0}</p></span>
                </div>
            </div>
            <div className="font-sans -mt-8 text-center">
                <h3 className="font-medium text-blue-950">Repositories</h3>
                <div className="flex gap-2 text-[0.7rem] text-start">
                    <div className="border-solid border border-gray-400 w-[10rem] min-h-[5rem] rounded-md pl-2">
                        <p className="font-medium text-blue-800"><img  className="w-[0.54rem]" src="https://www.svgrepo.com/show/448449/git-repo.svg" alt="repo" /> {data ? repo[0].name:"not found"}</p>
                        <p className="text-gray-600" >{data ? repo[0].description:"not found"}</p>
                        <p className="text-gray-600">{data ? repo[0].language:"not found"}  <img  className="w-[0.6rem]" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg" alt="like" /> 0 <img className="h-[0.5rem]" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Octicons-repo-forked.svg" alt="" /> 0 </p>
                    </div>
                    <div className="border-solid border border-gray-400 w-[10rem] min-h-[5rem] rounded-md pl-2">
                    <p className="font-medium text-blue-800"><img  className="w-[0.54rem]" src="https://www.svgrepo.com/show/448449/git-repo.svg" alt="repo" /> {data ? repo[1].name:"not found"}</p>
                        <p className="text-gray-600" >{data ? repo[1].description:"not found"}</p>
                        <p className="text-gray-600">{data ? repo[1].language:"not found"} <img  className="w-[0.6rem]" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg" alt="like" /> 0 <img className="h-[0.5rem]" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Octicons-repo-forked.svg" alt="" /> 0 </p>
                    </div>
                    <div className="border-solid border border-gray-400 w-[10rem] min-h-[5rem] rounded-md pl-2">
                    <p className="font-medium text-blue-800"><img  className="w-[0.54rem]" src="https://www.svgrepo.com/show/448449/git-repo.svg" alt="repo" /> {data ? repo[2].name:"not found"}</p>
                        <p className="text-gray-600" >{data ? repo[2].description:"not found"}</p>
                        <p className="text-gray-600">{data ? repo[2].language:"not found"} <img  className="w-[0.6rem]" src="https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg" alt="like" /> 0 <img className="h-[0.5rem]" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Octicons-repo-forked.svg" alt="" /> 0 </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
Dbounce=(fn,delay)=>{
    let timeout=false;
    return(...arg)=>{
        if(!timeout){
            timeout=true
            clearTimeout(timeout)
        
        setTimeout(()=>{
        fn(...arg)
        timeout=false
        }
        ,delay)
    }
    }
}
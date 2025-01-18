import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Skeleton() {
    return (
      <div>
        <h1 className='w-[50vw] text-5xl mx-auto'>{<Skeleton />}</h1>
        <div className='flex justify-center items-center'>
            {<Skeleton className="h-[10rem]  w-[10rem] mx-auto mb-10 rounded-full" count={1} />}
            {<Skeleton className="h-[2rem] w-[10rem] my-2 relative -top-5 ml-4" count={3} />}
        </div>
        {<Skeleton className="h-20 w-[60vw] mx-auto mt-6 " count={2} />}
      </div>
    );
  }
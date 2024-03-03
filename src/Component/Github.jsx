import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    /*const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/shg2573').then(response=>response.json()).then(data=>setData(data));

    })*/
    const data=useLoaderData()
    console.log(data)
  return (
    <div className='flex w-screen items-center text-teal-50 p-4 flex-col bg-slate-600'>
      <h1>GitHub id: {data.followers}</h1>
      <img width={200} src={data.avatar_url} alt="Github pic" />
    </div>
  )
}

export default Github
//using loader helps to reduce loading time as the data from api is already fetched 
export const githubInfoLoader= async ()=>{
    const res=await fetch ('https://api.github.com/users/shg2573')
    return res.json()
}
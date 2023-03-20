import React ,{useContext} from 'react'
import UserContext from '../context/modal/Contextmodel';

function Saveresultbody() {
  const {savedResultValue,SetSavedResultValue}= useContext(UserContext)
  const handleChange=(e)=>{
    SetSavedResultValue(e.target.value)
  }
  return (
    <>
<h1 className='text-2xl font-semibold'> Enter  name</h1> 
<p>This name will shown in your saved section</p>
<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Johnsmith@gmail.com" value={savedResultValue} onChange={(e)=>handleChange(e)}/>
</>


 )
}

export default Saveresultbody;
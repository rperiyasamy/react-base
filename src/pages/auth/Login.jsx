import React,  {useState} from 'react'
import { LoginButton } from "../../components/LoginButton/LoginButton";
import { Link, Navigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import banner from '../../assets/images/banner.svg'
import elevate from '../../assets/images/elevate.svg'
import BgShape from '../../assets/images/shape.png'
import { useIsAuthenticated } from "@azure/msal-react";
import { PAGECONSTANTS } from '../../constants/Common';
import { LOGIN } from '../../constants/appConstants';

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../globals/authConfig";
import { callMsGraph } from "../../globals/graph"

export const ReDirectToDashboard = () => {
  return  <Navigate to='/dashboard' />
}



const Login = () => {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const [token, setToken] = useState(null);
  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0]
    }).then((response) => {     
      localStorage.setItem("ACCESS_TOKEN", response.accessToken);
        callMsGraph(response.accessToken).then(response =>
           {         
             setGraphData(response) 
            });
    });
}
  
  if(isAuthenticated)
  {
    RequestProfileData();
    //console.log(accounts[0]);
  }
  else
  {
    localStorage.removeItem("ACCESS_TOKEN");
  }


  return (
    <React.Fragment>
      <header className='p-4 flex gap-3 justify-between'>
        <div className='lg:w-1/6'>
          <img src={logo} alt="One Ascent" className='w-full' />
        </div>
        <nav className='flex self-center gap-4'>
          {/* <Link to={'/'}>{PAGECONSTANTS.HOME}</Link>
          <Link to={'/about'}>{PAGECONSTANTS.ABOUT}</Link> */}
        </nav>
      </header>
      <main className='flex h-full items-center px-4 gap-12 w-full justify-between'>
        <div className='hidden md:flex flex-col gap-4'>
          <h1 className='text-3xl'>{LOGIN.WELCOME}</h1>
          <p>{LOGIN.MESSAGE}</p>
          <Link to={'/'} className='text-primary'>{PAGECONSTANTS.SEEMORE}</Link>
          <img src={banner} alt="banner" className='xl:w-2/6 fixed bottom-0' />
        </div>
        <img src={elevate} className='hidden xl:block 2xl:w-96' alt="" />
        <div className='flex justify-center'>
          <div className='bg-primary_opacity-100 p-6 rounded flex flex-col gap-4 lg:w-1/2'>
            <h3 className='text-xl'>{LOGIN.SIGNIN}</h3>
            <p>{LOGIN.LOGINMSG}</p>
            { !isAuthenticated ?
          <LoginButton />   : 
          <ReDirectToDashboard />    
          }
          </div>
        </div>
        {/* <img src={BgShape} className='fixed bottom-0 right-0' alt="" /> */}
      </main>
     
    </React.Fragment>
  )
}

export default Login
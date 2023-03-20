import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import logo from '../assets/images/logo-white.svg'
import { Menu, Transition } from '@headlessui/react'
import { BellAlertIcon} from '@heroicons/react/20/solid'
import { BriefcaseIcon, CurrencyDollarIcon, HomeIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import MasterSearch from './MasterSearch/MasterSearch'
import Button from './Button/Button'
import { LogoutButton } from './LogoutButton/LogoutButton'
import { LoginName } from './LoginName/LoginName'
import { AuthenticatedTemplate} from "@azure/msal-react";
const Header = () => {
    return (
        <header className='bg-dark p-4 flex gap-8 items-center text-white'>
            <div className='w-3/2'>
                <img src={logo} className='w-full' alt='One Ascent' />
            </div>
            <form className="group relative">
                <MasterSearch />
            </form>
            <nav className='text-white gap-4 flex ml-auto'>
                <Link to={'/dashboard'} className='flex gap-1 items-center'><HomeIcon className='w-5' /> Home</Link>
                <Link to={'issuer'} className='flex gap-1 items-center'><CurrencyDollarIcon className='w-5' /> Issuer</Link>
                <Link to={'issuerlist1'} className='flex gap-1 items-center'><LightBulbIcon className='w-5' /> Product</Link>
                <Link to={'issuer'} className='flex gap-1 items-center'><BriefcaseIcon className='w-5' /> Portfolio</Link>
            </nav>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <BellAlertIcon className='w-6' />
                    </Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                <Button value='Edit' variant='transparent' />
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
                <div className='flex items-center gap-2'>
                    <Menu.Button className="inline-flex w-12 h-12 rounded-full overflow-hidden justify-center bg-black bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <img src='https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg' className='h-full' alt='Name' />
                    </Menu.Button>
                    <span>
                        <AuthenticatedTemplate>
                            <LoginName />
                        </AuthenticatedTemplate>
                    </span>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item as="div">
                                <button className={`text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    My Profile
                                </button>
                                <LogoutButton />
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <div className='flex'></div>
        </header>
    )
}

export default Header
import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <React.Fragment>
      <div className='flex'>
        <div className='p-4'>
          <h1 className='text-2xl'>Home</h1>
          <p>Good Morning! John Smith</p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 px-4'>
        <div className='lg:col-span-2 col-span-3 grid grid-cols-2 gap-4'>
          <div className='border p-4 rounded'>
            <p className='font-semibold mb-4'>Message</p>
            <div className='p-4 bg-gray-100'>
              <p className='mb-1'>Please see link below for current  OAIS VBI Standards</p>
              <Link className='text-primary'>2022_09_30_OAIS VBI Standards</Link>
            </div>
          </div>
          <div className='border p-4 rounded'>
            <div className='flex items-center justify-between gap-4'>
              <p className='font-semibold mb-4'>System Health</p>
              <p className='mb-4 text-xs text-gray-300'>Data Import Service Status - @8/29/22 1:30pm</p>
            </div>
            <div className='overflow-x-auto'>
              <table className='table-auto w-full'>
                <thead className='text-left border-b'>
                  <tr>
                    <th className='font-normal p-2'>Data Import Name</th>
                    <th className='font-normal p-2'>Last Update</th>
                    <th className='font-normal p-2'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='even:bg-gray-100 odd:bg-white rounded'>
                    <td className='p-2'>Bloomberg file from API</td>
                    <td className='p-2'>8/29/22  8:45am</td>
                    <td className='p-2'>
                      <div className='bg-green-50 w-6 h-6 rounded-full flex items-center justify-center'>
                        <CheckIcon className='w-4 text-green-500' />
                      </div>
                    </td>
                  </tr>
                  <tr className='even:bg-gray-100 odd:bg-white rounded'>
                    <td className='p-2'>MSCI file from API</td>
                    <td className='p-2'>8/28/22  7:45am</td>
                    <td className='p-2'>
                      <div className='bg-green-50 w-6 h-6 rounded-full flex items-center justify-center'>
                        <CheckIcon className='w-4 text-green-500' />
                      </div>
                    </td>
                  </tr>
                  <tr className='even:bg-gray-100 odd:bg-white rounded'>
                    <td className='p-2'>ISS file from FTP</td>
                    <td className='p-2'>8/27/22  3:15pm</td>
                    <td className='p-2'>
                      <div className='bg-green-50 w-6 h-6 rounded-full flex items-center justify-center'>
                        <CheckIcon className='w-4 text-green-500' />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='border p-4 rounded col-span-2'>
            <div className='flex items-center justify-between gap-4'>
              <p className='font-semibold mb-4'>Dashboard Data Refresh</p>
              <Link className='mb-4 text-sm text-primary'>See More</Link>
            </div>
            <p>All the uploaded data files are immediately processed by the system, However, the Issuer, Products and Portfolio pages only refresh at the following times:</p>
            <div className='flex gap-2 flex-wrap mt-2'>
              <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                <p className='text-gray-600 text-xs'>02:00am</p>
              </div>
              <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                <p className='text-gray-600 text-xs'>02:00am</p>
              </div>
              <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                <p className='text-gray-600 text-xs'>02:00am</p>
              </div>
              <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                <p className='text-gray-600 text-xs'>02:00am</p>
              </div>
              <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                <p className='text-gray-600 text-xs'>02:00am</p>
              </div>
              <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                <p className='text-gray-600 text-xs'>02:00am</p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-1 col-span-3'>
          <div className='border p-4 rounded h-full'>
            <p className='font-semibold mb-4'>Data import status</p>
            <div className='flex gap-4 w-full border-b pb-4'>
              <div className='bg-green-50 w-6 h-6 rounded-full flex items-center justify-center'>
                <CheckIcon className='w-4 text-green-500' />
              </div>
              <div className='flex-1'>
                <div className='flex gap-4 justify-between'>
                  <p>CE7MYABL - 471-TXY</p>
                  <div className='bg-green-50 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-green-500 text-sm'>Completed</p>
                  </div>
                </div>
                <p className='text-sm mb-2'>Bloomberg file from API</p>
                <div className='flex gap-2 flex-wrap'>
                  <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-gray-600 text-sm'>8/29/22  8:45am</p>
                  </div>
                  <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-gray-600 text-sm'>8/29/22  8:48am</p>
                  </div>
                  <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-gray-600 text-sm'>8/29/22  8:48am</p>
                  </div>
                  <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-gray-600 text-sm'>8/29/22  8:48am</p>
                  </div>
                  <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-gray-600 text-sm'>8/29/22  8:48am</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-4 w-full py-4'>
              <div className='bg-green-50 w-6 h-6 rounded-full flex items-center justify-center'>
                <CheckIcon className='w-4 text-green-500' />
              </div>
              <div className='flex-1'>
                <div className='flex gap-4 justify-between'>
                  <p>784WNR-69LMN-8J</p>
                  <div className='bg-green-50 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-green-500 text-sm'>Completed</p>
                  </div>
                </div>
                <p className='text-sm mb-2'>MSLI file from API</p>
                <div className='flex gap-2 flex-wrap'>
                  <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-gray-600 text-sm'>8/29/22  7:45am</p>
                  </div>
                  <div className='bg-gray-100 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-gray-600 text-sm'>8/29/22  7:49am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
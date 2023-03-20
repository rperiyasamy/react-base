import React from 'react'
import RatingList from '../../components/Rating/RatingList'
import Button from '../../components/Button/Button'
import { PencilIcon, ShareIcon } from '@heroicons/react/20/solid'

const ProductDetails = () => {
    const RatingData = [
        {
            id: '1',
            icon: 'communities',
            cell: 3,
            negative: {
                visible: true,
                rating: 2
            },
            passitive: {
                visible: true,
                rating: 1
            }
        },
        {
            id: '2',
            icon: 'customers',
            cell: 3,
            negative: {
                visible: true,
                rating: 1
            },
            passitive: {
                visible: true,
                rating: 0
            }
        },
        {
            id: '3',
            icon: 'employees',
            cell: 3,
            negative: {
                visible: true,
                rating: 0
            },
            passitive: {
                visible: true,
                rating: 3
            }
        },
        {
            id: '4',
            icon: 'environment',
            cell: 3,
            negative: {
                visible: true,
                rating: 2
            },
            passitive: {
                visible: true,
                rating: 1
            }
        },
        {
            id: '5',
            icon: 'society',
            cell: 3,
            negative: {
                visible: true,
                rating: 2
            },
            passitive: {
                visible: true,
                rating: 1
            }
        },
        {
            id: '6',
            icon: 'suppliers',
            cell: 3,
            negative: {
                visible: true,
                rating: 2
            },
            passitive: {
                visible: true,
                rating: 1
            }
        },
    ]
    return (
        <div className='w-full h-full'>
            <div className='flex justify-between px-4 pt-4 border-b'>
                <div className='pb-4'>
                    <h1 className='text-2xl mb-1'>Apple Inc - AAPL </h1>
                    <div className='flex items-center gap-2 text-sm'>
                        <p className='text-gray-400'>Date Last Modified</p>
                        <div className='w-1.5 h-1.5 bg-gray-400 rounded-lg'></div>
                        <p className='text-gray-400'>19 Feb, 2023</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='p-4'>
                    <RatingList RatingData={RatingData} />
                </div>
                <div className='p-4 flex-grow'>
                    <div className='border rounded mb-4'>
                        <div className='p-3 bg-gray-200'>
                            <h3>Company Profile</h3>
                        </div>
                        <table className='w-full'>
                            <tbody>
                                <tr className='border-b last:border-b-0'>
                                    <td className='p-3'>Country of Incorp</td>
                                    <td className='p-3'>USA</td>
                                </tr>
                                <tr className='border-b last:border-b-0'>
                                    <td className='p-3'>Sector</td>
                                    <td className='p-3'>Information Technology</td>
                                </tr>
                                <tr className='border-b last:border-b-0'>
                                    <td className='p-3'>Industry</td>
                                    <td className='p-3'>Technology Hardware, Storage & Peripherals</td>
                                </tr>
                                <tr className='border-b last:border-b-0'>
                                    <td className='p-3'>Investment Style</td>
                                    <td className='p-3'>Large Growth</td>
                                </tr>
                                <tr className='border-b last:border-b-0'>
                                    <td className='p-3'>Indices</td>
                                    <td className='p-3'>R1000, S&P 500</td>
                                </tr>
                                <tr className='border-b last:border-b-0'>
                                    <td className='p-3'>R1000, S&P 500</td>
                                    <td className='p-3'>N/A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='border rounded mb-4'>
                        <div className='p-3 bg-gray-200'>
                            <h3>Description</h3>
                        </div>
                        <div className='p-3'>
                            <p>Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables and accessories, and sells a variety of related accessories. The Company also offers payment, digital content, cloud and advertising services. Apple Inc.'s customers are primarily in consumer, small & mid-sized business, education, enterprise and government markets worldwide.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-4'>
                            <h3>Notes</h3>
                            <Button variant='primary' value='Add notes' />
                        </div>
                        <div className='border rounded'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='border-b'>
                                        <td className='p-2'>Subject</td>
                                        <td className='p-2'>User</td>
                                        <td className='p-2'>Date last Modified</td>
                                        <td className='p-2'>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='p-2'>Conversation with management and investor relations did not assuage supply chain labor ethics concerns raised by MSCI.</td>
                                        <td className='p-2'>Andy Manton</td>
                                        <td className='p-2'>12 Feb, 2023</td>
                                        <td className='p-2'>
                                            <div className='flex gap-2'>
                                                <PencilIcon className='w-5' />
                                                <ShareIcon className='w-5' />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
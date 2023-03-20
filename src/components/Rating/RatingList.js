import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const RatingList = ({ RatingData = [] }) => {

    return (
        <div className='mb-1 flex flex-col items-center gap-4'>
            <Link className='text-xl text-primary underline' to={'/'}>Elevate</Link>
            <div>
                {
                    RatingData.map((data) => (
                        <Rating key={data.id} RatingData={data} />
                    ))
                }
            </div>
            <Link className='text-xl text-primary underline' to={'/'}>Eliminate</Link>
        </div>
    )
}

export default RatingList
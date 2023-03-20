import React from 'react'
import imgCommunities from '../../assets/images/icons/communities.svg'
import imgCustomers from '../../assets/images/icons/customers.svg'
import imgEmployees from '../../assets/images/icons/employees.svg'
import imgEnvironment from '../../assets/images/icons/environment.svg'
import imgSociety from '../../assets/images/icons/society.svg'
import imgSuppliers from '../../assets/images/icons/suppliers.svg'

const Rating = ({ RatingData }) => {
    const ElementIconHandler = () => {
        switch (RatingData.icon) {
            case 'communities':
                return imgCommunities;
            case 'customers':
                return imgCustomers;
            case 'employees':
                return imgEmployees;
            case 'environment':
                return imgEnvironment;
            case 'society':
                return imgSociety;
            case 'suppliers':
                return imgSuppliers;
        }
    }
    const NegativeElements = []
    const PassitiveElements = []
    const NagativeHandler = () => {
        let i = 1;
        if (RatingData.negative.visible) {
            for (i; i <= RatingData.cell; i++) {
                if (i <= RatingData.negative.rating) {
                    NegativeElements.push(<div key={i} className='border-gray-400 h-9 w-9 border-4 last:rounded-l-lg border-r-0 bg-red-500'></div>)
                } else {
                    NegativeElements.push(<div key={i} className='border-gray-400 h-9 w-9 border-4 last:rounded-l-lg border-r-0'></div>)
                }

            }
        }
    }
    const PassitiveHandler = () => {
        let i = 1;
        if (RatingData.passitive.visible) {
            for (i; i <= RatingData.cell; i++) {
                if (i <= RatingData.passitive.rating) {
                    PassitiveElements.push(<div key={i} className='border-gray-400 h-9 w-9 border-4 last:rounded-r-lg border-l-0 bg-green-500'></div>)
                } else {
                    PassitiveElements.push(<div key={i} className='border-gray-400 h-9 w-9 border-4 last:rounded-r-lg border-l-0'></div>)
                }

            }
        }
    }
    NagativeHandler();
    PassitiveHandler();
    return (
        <div className='flex flex-col'>
            <div className='flex items-center'>
                <div className='flex flex-row-reverse'>{NegativeElements}</div>
                <div className='border-primary_opacity-900 h-24 w-24 border-4 -mb-1 justify-center align-middle flex'>
                    <img className='w-3/4' src={ElementIconHandler()} />
                </div>
                <div className='flex'>{PassitiveElements}</div>
            </div>
        </div>
    )
}

export default Rating
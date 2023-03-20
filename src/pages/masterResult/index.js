import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Button from '../../components/Button/Button'
import DynamicCheckbox from '../../components/Checkbox/Checkbox'
import Table from '../../components/Table/Table'

const MasterResult = () => {
    const checkboxes = [
        {
            id: '01',
            label: 'In Porro Eum',
        },
        {
            id: '02',
            label: 'Enim Voluptatibus Neque',
        },
        {
            id: '03',
            label: 'Non Hic Et',
        },
        {
            id: '04',
            label: 'Vitae Fugiat Quia',
        },
        {
            id: '05',
            label: 'Qui Labore Rerum',
        },
    ]
    let data = {
        editColumnNo: 0,
        deleteColumnNo: 11,
        statusColumnNo: 6,
        rowData: [
            {
                id: "1",
                user: "Will Sorrel",
                date_submitted: "08 Feb 2023",
                issuer: "Apple Inc.",
                ticker: "AAPL",
                showStatus: "true",
                issue: "LR-Supply Chain Labor Standards",
                rationale:
                    "AAPL unveils plan to exit supply chain operations in China.",
                attachments: "http://www.google.com",
                status_request_result: ["Approved"],
                note: "some comments",
                showEdit: true,
                showDelete: false,
            },
            {
                id: "2",
                user: "Nathan Willis",
                date_submitted: "08 Feb 2023",
                issuer: "Alphabet Inc.",
                ticker: "AAPL",
                showStatus: "true",
                issue: "LR-Supply Chain Labor Standards",
                rationale:
                    "AAPL unveils plan to exit supply chain operations in China.",
                attachments: "http://www.google.com",
                status_request_result: ["Approved"],
                note: "some comments",
                showEdit: true,
                showDelete: true,
            },
            {
                id: "3",
                user: "Rob Riley",
                date_submitted: "08 Feb 2023",
                issuer: "Amazon Inc.",
                ticker: "AAPL",
                showStatus: "true",
                issue: "LR-Supply Chain Labor Standards",
                rationale:
                    "AAPL unveils plan to exit supply chain operations in China.",
                attachments: "http://www.google.com",
                status_request_result: ["Approved"],
                note: "some comments",
                showEdit: false,
                showDelete: false,
            },
        ],
    };

    const heading = [
        "Edit",
        "id",
        "user",
        "date_submitted",
        "issuer",
        "ticker",
        "status_request",
        "issue",
        "rationale",
        "attachments",
        "status_request_result",
        "note",
        "Delete",
    ];
    return (
        <div className='h-full flex'>
            <div className='flex flex-col bg-gray-50 p-4 w-1/6'>
                <div className='flex border-b justify-between pb-4'>
                    <p className='font-medium'>Filter</p>
                    <p className='text-primary'>Favorite</p>
                </div>
                <div className='flex-1 overflow-auto py-2'>
                    <Disclosure>
                        <Disclosure.Button className='flex items-center gap-1 py-2'>
                            <ChevronRightIcon className={'w-4'} />
                            Issuer
                        </Disclosure.Button>
                        <Disclosure.Panel className='pl-5 flex flex-col gap-2'>
                            {
                                checkboxes.map((data) => (
                                    <div className='flex gap-2 items-center' key={data.id}>
                                        <input type='checkbox' id={data.label} name={data.label} className='rounded' />
                                        <label htmlFor={data.label}>{data.label}</label>
                                    </div>
                                ))
                            }
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className='flex items-center gap-1 py-2'>
                            <ChevronRightIcon className={'w-4'} />
                            Status
                        </Disclosure.Button>
                        <Disclosure.Panel className='pl-5 flex flex-col gap-2'>
                            <DynamicCheckbox checkboxesData={data} />
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className='flex items-center gap-1 py-2'>
                            <ChevronRightIcon className={'w-4'} />
                            Issue
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            Issuer
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className='flex items-center gap-1 py-2'>
                            <ChevronRightIcon className={'w-4'} />
                            Reason
                        </Disclosure.Button>
                        <Disclosure.Panel>
                            Issuer
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
                <div className='flex gap-4'>
                    <Button className='w-full' variant={'primary-outline'} value={'Refine'} />
                    <Button className='w-full' variant={'primary'} value={'Apply'} />
                </div>
            </div>
            <div className='h-full w-full p-4 overflow-hidden'>
                <h1 className='text-xl mb-4'>System Review</h1>
                <Table data={data} heading={heading} />
            </div>
        </div>
    )
}

export default MasterResult
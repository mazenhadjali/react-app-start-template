import React from 'react'
// import money icon from hugeicons react
import { Money01Icon,
    UserSquareIcon,
    Archive01Icon,
    ArrowUpRight01Icon
 } from "hugeicons-react";
import clsx from 'clsx';

export default function Overview() {

    const cardsInfo = [
        {
            title: 'Cashflow',
            value: '100,000 TND',
            color: '[#6366f1]',
            icon: <Money01Icon />,
            description: 'Total cashflow',
            link: 'XX'
        },
        {
            title: 'users',
            value: 463,
            color: '[#6366f1]',
            icon: <UserSquareIcon />,
            description: 'Total users',
            link: 'XX'
        },
        {
            title: 'new orders',
            value: 23,
            color: 'green-500',
            icon: <Archive01Icon />,
            description: 'Total new orders',
            link: 'XX'
        },
        {
            title: 'Growth',
            value: '20%',
            color: 'orange-500',
            icon: <ArrowUpRight01Icon />,
            description: 'Total growth',
            link: 'XX'
        },
    ]

    return (
        <React.Fragment>
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">

                {
                    cardsInfo.map((card, index) => (
                        <div key={index} className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className={clsx(`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gray-50 text-black shadow-blue-200 border border-blue-300 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`)}>
                                {card.icon}
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">{card.description}</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{card.value}</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal">
                                    <strong className="text-blue-600">{card.title}</strong>
                                </p>
                            </div>
                        </div>
                    ))
                }
                
            </div>

            <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-2 w-full">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                        <div>
                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Projects</h6>
                            <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                                <strong>30 done</strong> this month
                            </p>
                        </div>
                        <button aria-expanded="false" aria-haspopup="menu" id=":r5:" className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currenColor" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">companies</p>
                                    </th>
                                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">budget</p>
                                    </th>
                                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">completion</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Material XD Version</p>
                                        </div>
                                    </td>

                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$14,000</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: "60%" }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add Progress Track</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$3,000</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">10%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: "10%" }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Fix Platform Errors</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">Not set</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style={{ width: "100%" }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Launch our Mobile App</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$20,500</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style={{ width: "100%" }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add the New Pricing Page</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$500</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">25%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{ width: "25%" }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

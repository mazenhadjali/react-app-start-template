import React from 'react'
import { Link } from 'react-router-dom'
import StyledLogo from 'src/components/atoms/styledlogo'
import { DASHBOARD, LOGIN } from 'src/routingpaths'
import {
    Home01Icon,
    UserSquareIcon,
    TableIcon,
    Notification01Icon,
    Login03Icon,
    UserAdd01Icon,
    Cancel01Icon,
} from "hugeicons-react";

export default function Aside({ asideState, setAsideState }) {

    const items = [
        {
            title: 'dashboard',
            icon: <Home01Icon />,
            link: DASHBOARD
        },
        {
            title: 'profile',
            icon: <UserSquareIcon />,
            link: DASHBOARD
        },
        {
            title: 'tables',
            icon: <TableIcon />,
            link: DASHBOARD
        },
        {
            title: 'notifactions',
            icon: <Notification01Icon />,
            link: DASHBOARD
        },
    ]

    return (
        <React.Fragment>
            <aside className={`bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-20 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 ${asideState ? 'translate-x-0' : 'xl:translate-x-0'}`}>
                <div className="relative border-b border-white/20">
                    <Link className="flex items-center gap-4 py-6 px-8" to={DASHBOARD}>
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white text-center"> <StyledLogo /> </h6>
                    </Link>
                    <button
                        className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                        type="button"
                        onClick={() => setAsideState(prev => !prev)}
                    >
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 p-2">
                            <Cancel01Icon />
                        </span>
                    </button>
                </div>
                <div className="m-4">
                    <ul className="mb-4 flex flex-col gap-1">
                        {
                            items.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>
                                        <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                            {item.icon}
                                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">{item.title}</p>
                                        </button>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="mb-4 flex flex-col gap-1">
                        <li className="mx-3.5 mt-4 mb-2">
                            <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">auth pages</p>
                        </li>
                        <li>
                            <Link to={LOGIN}>
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <Login03Icon />
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign in</p>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to={LOGIN}>
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <UserAdd01Icon />
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign up</p>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </React.Fragment>
    )
}

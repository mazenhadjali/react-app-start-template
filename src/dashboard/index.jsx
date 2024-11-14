import React, { useState } from 'react'
import Aside from './aside';
import Nav from './nav';
import { Outlet } from 'react-router-dom';

function Dashboard() {

    // use state to toggle the aside open and close with a true or false value
    const [asideState, setAsideState] = useState(false);

    return (
        <React.Fragment>
            <div className="min-h-screen bg-gray-50/50">
                <Aside asideState={asideState} setAsideState={setAsideState} />
                <div className="p-4 xl:ml-80">
                    <Nav setAsideState={setAsideState} />
                    <div className="mt-12">
                        <Outlet />
                    </div>
                </div>

            </div>
        </React.Fragment>

    )
}


export default Dashboard;
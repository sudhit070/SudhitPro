import React from 'react'
import { Outlet } from 'react-router-dom'
import { Slidebar } from './Slidebar'
import { useLocation } from 'react-router-dom'
import { AdFooter } from './AdFooter'
import { Adheader } from './Adheader'

const AdminView = () => {

    const location = useLocation();
    const currentURL = location.pathname;

    console.log(currentURL);

    return (
        <div className='dashboard admin'>

            { currentURL !== '/skypey' && <Adheader />}
            <Adheader />
            
            <Slidebar />
            <div className='content'>
                <Outlet />
                { currentURL !== '/skypey' && <AdFooter />}
            </div>
        </div>
    )
}

export default AdminView
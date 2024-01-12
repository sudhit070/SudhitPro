import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Loader } from '../_components/common/Loader';

const FontSide = React.lazy(() => import('../_components/common/frontside/FontSide'));
const Home = React.lazy(() => import('../_pages/index/Home'));
const Collection = React.lazy(() => import('../_pages/index/Collection'));
const Contact = React.lazy(() => import('../_pages/index/Contact'));
const NotFound = React.lazy(() => import('./NotFound'));
const Practice = React.lazy(() => import('../_pages/Practice'));
const AcoountBalance = React.lazy(() => import('../_pages/practice/AcoountBalance'));
const IncrDecClock = React.lazy(() => import('../_pages/practice/IncrDecClock'));
const Skypey = React.lazy(() => import('../_pages/practice/Skypey'));
const AdminView = React.lazy(() => import('../_components/common/adminside/AdminView'));


const Routes = createBrowserRouter([{
    path: '',
    element: <FontSide />,
    errorElement: <NotFound />,
    children: [
        {
            index: true,
            element: <Suspense fallback={<Loader />}><Home /></Suspense>,
        },
        {
            path: '/collections',
            element: <Suspense fallback={<Loader />}><Collection /></Suspense>,
        },
        {
            path: '/contact',
            element: <Suspense fallback={<Loader />}><Contact /></Suspense>,
        },
        {
            path: '/practice',
            children: [{
                index: true,
                element: <Suspense fallback={<Loader />}><Practice /></Suspense>,
            },{
                path: 'acoount-balance',
                element: <Suspense fallback={<Loader />}><AcoountBalance /></Suspense>,
            },{
                path: 'incr-dec-clock',
                element: <Suspense fallback={<Loader />}><IncrDecClock /></Suspense>,
            }]
        },
    ]
}, {
    path: '*',
    element: <NotFound />,
}, {
    path: '/skypey',
    element: <Suspense fallback={<Loader />}><AdminView /></Suspense>,
    children: [
        {
            index: true,
            element: <Skypey />,
        }
    ]
}]);

export default Routes;
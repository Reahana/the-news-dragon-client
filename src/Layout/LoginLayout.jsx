import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../pages/Shared/Menu/Menu';

const LoginLayout = () => {
    return (
        <div>
           <Menu></Menu>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;
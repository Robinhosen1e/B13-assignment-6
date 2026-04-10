import React from 'react';

const Nav = ({route}) => {
    return (
        <li className='px-4 mr-10 hover:bg-blue-700'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Nav;
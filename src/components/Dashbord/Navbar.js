import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import man1 from '../../images/man 1.svg';
export const Navbar = () => {
    const [menuItems, setMenuItems] = useState([
        { name: 'Home', path: '/' },
        { name: 'packages', path: '/packages' },
        { name: 'dummy text', path: '/dummy text' },
        { name: 'dummy text', path: '/dummy text' },
        { name: 'contact us', path: '/contact us' },
    ]);

    return (
        <div className='max-w-[1450px] xl:max-auto m-0 lg:px-[78px] fixed w-[100%] Navbar'>
            <div className='bg-[#FFFFFF] px-[41px] pb-[10px] rounded-b-[27px] '>
                <div className='flex justify-between lg:gap-[40px] items-center'>
                    <div>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div>
                        <ul className='flex lg:flex-row lg:gap-[50px] items-center'>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex gap-[10px] items-center'>
                        <div>
                            <img src={man1} alt='man' />
                        </div>
                        <p>hello,Jayesh !</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react'
import { LocateIcon, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg"


export const Branding = () => {
    return (
        <div className='flex flex-col gap-5'>
            {/* Logo here */}
            <div className="flex items-center">
                <Link to="/" className="bg-orange-500 p-2 rounded">
                    <img src={logo} className="w-5 h-5 object-cover" alt="logo" />
                </Link>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='flex items-center gap-2'>
                    <Mail className="w-6 h-6 text-white " fill='black' />
                    <Link className='text-gray-800'>hello@instant.com</Link>
                </p>
                <p className='flex items-center gap-2'>
                    <Phone className="w-5 h-5" fill='black' />
                    <Link className='text-gray-800'>+237 682218923</Link>
                </p>
                <p className='flex items-center gap-2'>
                    <MapPin className="w-6 h-6 text-white" fill='black' />
                    <Link className='text-gray-800'>Somewhere in the world</Link>
                </p>
            </div>
        </div>
    );
};

export default Branding
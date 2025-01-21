import React from 'react'

const FooterLinks = ({ title, links }) => {
    return (
        <div className='flex flex-col gap-2'>
            <h3 className='font-semibold'>{title}</h3>
            <ul className='flex flex-col gap-1'>
                {links.map((link, index) => (
                    <a key={index} href={link.href}>{link.text}</a>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks
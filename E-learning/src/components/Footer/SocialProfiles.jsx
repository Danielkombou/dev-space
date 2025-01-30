

import React from 'react'

const SocialProfiles = ({ profiles }) => {
    return (
        <div>
            <h3 className='font-semibold mb-4'>Social Profiles</h3>
            <div className='flex items-center gap-2 '>
                {profiles.map((profile, index) => (
                    <a
                        key={index}
                        className="bg-slate-100 p-1.5 rounded-md"
                        aria-label={profile.label}
                        href={profile.href}
                    >
                        <span>{profile.icon}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialProfiles
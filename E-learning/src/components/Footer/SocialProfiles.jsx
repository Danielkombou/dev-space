

import React from 'react'

const SocialProfiles = ({ profiles }) => {
    return (
        <div>
            <h3>Social Profiles</h3>
            <div className='flex items-center justify-between'>
                {profiles.map((profile, index) => (
                    <a
                        key={index}
                        className=""
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
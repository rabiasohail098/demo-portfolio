import React from 'react';

export const Skills: React.FC = () => {
    return (
        <div>
            <h1 className='heading'>My Skills</h1>
            <div>
                <h2 className='skill-h2'>HTML</h2>
                <div className='bar'></div>
            </div>
            <div>
                <h2 className='skill-h2'>CSS</h2>
                <div className='bar1'></div>
            </div>
            <div>
                <h2 className='skill-h2'>JavaScript</h2>
                <div className='bar2'></div>
            </div>
            <div>
                <h2 className='skill-h2'>TypeScript</h2>
                <div className='bar3'></div>
            </div>
            <div>
                <h2 className='skill-h2'>Next.Js</h2>
                <div className='bar4'></div>
            </div>
            <div>
                <h2 className='skill-h2'>React</h2>
                <div className='bar5'></div>
            </div>
        </div>
    );
};
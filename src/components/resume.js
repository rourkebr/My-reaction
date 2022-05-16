import React from 'react';


function Resume() {
    return (
        <section>
            <h2 className='res-header'>Bryan's Resumer</h2>
            <p className='res-link'>If you would like to look over my resume click here! <a className='dl-link' href={process.env.PUBLIC_URL + '/images/BryanRourke_resume'}>Link.</a></p>
        <div>
            <h3 className='res-subhead'>Check out my skills</h3>
        </div>

        </section>
        _)};
import React from 'react';
import './admin.scss';

import Admin from '../../components/admin/admin.component';


const Admins = (props) => {
    return (
        <div className='sign-in-and-sign-up-page-container'>
            <h1>Admin Log In</h1>
            <div className='sign-in-and-sign-up-container'>
                <Admin onAuthChange={props.onAuthChange} />
                
            </div>
        </div>
    )
}

export default Admins;
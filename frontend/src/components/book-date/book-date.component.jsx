import React from 'react';
import { Link } from 'react-router-dom';

import './book-date.styles.scss';

const BookDate = ({ match }) => {
    return(
        <div className='show-list-container'>
            <h1>These are all the available shows</h1>
            <div className='show-list'>
                <Link to={`${match.url}/10:45`}><span>10:45</span></Link>
                <Link to={`${match.url}/11:30`}><span>11:30</span></Link>
                <Link to={`${match.url}/17:30`}><span>17:30</span></Link>
                <Link to={`${match.url}/19:00`}><span>19:00</span></Link>
                <Link to={`${match.url}/21:55`}><span>21:55</span></Link>
            </div>
        </div>
    );
}

export default BookDate;
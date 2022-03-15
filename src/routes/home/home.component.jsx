import React from 'react';
import Directory from '../../components/directory/directory.component';
import './home.style.scss';

const Home = (props) => {
    console.log(props);
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
};

export default Home;
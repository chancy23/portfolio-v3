import React from 'react';

export const ExpressLogo = () => {
    const style1 = {
        fill:'none',
        stroke:'#6db4c7',
        strokeMiterlimit: '10',
        strokeWidth: '2px',
    }

    const style2 = {
        fill: '#6db4c7',

    }
    return (
        <svg className='icon icon--skills' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 97">
            <title>expressjs-icon</title>
            <rect  className="cls-1" style={style1} x="1" y="1" width="95" height="95" rx="10.02"/>
            <path className="cls-2" style={style2} d="M81.24,67c-2.33.59-3.77,0-5.06-1.91L67,52.36,65.66,50.6,54.93,65.11c-1.23,1.75-2.51,2.51-4.8,1.89L63.87,48.55,51.08,31.89c2.2-.42,3.72-.21,5.07,1.76l9.53,12.87,9.6-12.8C76.51,32,77.83,31.31,80,32l-5,6.57-6.72,8.75a1.82,1.82,0,0,0,0,2.65Zm-64-18.73,1.13-5.53C21.44,31.78,34,27.23,42.62,34c5.06,4,6.31,9.6,6.06,15.9H20.2c-.43,11.34,7.73,18.19,18.14,14.69,3.65-1.22,5.8-4.08,6.87-7.66.55-1.79,1.45-2.07,3.14-1.56-.86,4.48-2.8,8.21-6.9,10.55-6.13,3.5-14.87,2.37-19.47-2.5C19.24,60.59,18.1,57,17.6,53.19c-.08-.63-.24-1.23-.36-1.84,0-1,0-2.07,0-3.1Zm3-.76H46c-.17-8.2-5.27-14-12.25-14.08C26.08,33.35,20.58,39,20.25,47.49Z" transform="translate(-1.38 -1.39)"/>
        </svg>
    );
};
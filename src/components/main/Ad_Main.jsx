import React from 'react';

function Ad_Main({img}) {
    return (
        <a href="/" className="ad-banner_slide flex">
            <div className="ad-img flex">

                <img src={img} alt=""/>
            </div>
        </a>
    );
}

export default Ad_Main;
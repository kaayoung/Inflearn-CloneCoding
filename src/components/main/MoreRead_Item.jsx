import React from 'react';

function MoreRead_Item({img , title , subtitle }) {
    return (
        <li>
            <a href="#" className="reading-course_item">                                    
                    <div className="reading-item_img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="reading-item_title">
                        {title}
                    </div>                                    
                    <div className="reading-item_subtitle">
                        {subtitle}
                    </div>                                    
            </a>
        </li>
    );
}

export default MoreRead_Item;
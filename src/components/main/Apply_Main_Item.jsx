import React from 'react';

function Apply_Main_Item({title , content , apply}) {
    return (
        <div className="apply-content_box flex">
            <h4 className="apply-content_title">{title}</h4>
            <p className="apply-content_sub">{content}</p>
            <a className="apply-content_link" href="/">{apply} 참여하기 →</a>
        </div>
    );
}

export default Apply_Main_Item;
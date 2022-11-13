import React from 'react';

function Apply_Item({title, content , link_name }) {
    return (
        <div className="apply-content_box flex">
            <h4 className="apply-content_title">{title}</h4>
            <p className="apply-content_sub">{content}</p>
            <a className="apply-content_link" href="#">{link_name} →</a>
        </div>
    );
}

export default Apply_Item;
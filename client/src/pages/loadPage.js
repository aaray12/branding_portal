import React, { useEffect } from 'react';
function LoadPage(props) {
    
        
    
    return (
        <div style ={{visibility:"hidden"}}>
            <h1>Loading</h1>
            {window.location.href ="/dashboard"}
        </div>
    )
}
export default LoadPage;
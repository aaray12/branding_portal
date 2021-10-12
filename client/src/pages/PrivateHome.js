import React, { useEffect } from 'react';
import PrivateNav from "../components/layout/PrivateNav"
import DashBoard from "../components/dashboard/Dashboard"

function PrivateHome(props) {
    return (
        <div >
            <PrivateNav />
            <DashBoard userID = {props.userID}/>
        </div>
    )
}
export default PrivateHome;
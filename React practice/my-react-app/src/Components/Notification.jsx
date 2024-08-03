import React from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Notification = () => {

    function show() {
        NotificationManager.info("Welcome 🤗");
        NotificationManager.success("SuccesFully 😊 ");
        NotificationManager.warning("Warning 😐");
        NotificationManager.error("Danger 🫥");
    }

    return (
        <div>
            <div className="text mt-5">
                <button onClick={show} className='btn btn-outline-dark'>Show</button>
                <NotificationContainer />
            </div>
        </div>
    )
}

export default Notification
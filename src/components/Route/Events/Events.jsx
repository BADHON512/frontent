import React from 'react';
import styles from '../../../styles/style';
import EventCart from "./EventsCart.jsx"

const Events = () => {
    return (
        <div>
            <div className={`${styles.section}`}>
                <div className={`${styles.heading}`}>
                    <h1>Popular Events</h1>
                </div>
                <div className="w-full grid">
                        <EventCart/>
                </div>
            </div>
        </div>
    );
};

export default Events;
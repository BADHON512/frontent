import React from 'react';
import Header from './../components/Layout/Header';
import Events from './../components/Route/Events/Events';
import EventsCart from '../components/Route/Events/EventsCart';


const EventsPage = () => {
    return (
        <div>
       <Header activeHeading={4}/>
       <EventsCart active={true}/>
       <EventsCart active={true}/>
       <Events active={true}/>
        </div>
    );
};

export default EventsPage;
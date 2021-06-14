import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Cards from '../components/card/Card';
import Rowpost from 'src/components/rowpost/Rowpost';
import Event from 'src/components/event/Event';

const home = () => {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Cards />
        <Rowpost />
        <Event />
        <Rowpost />
      </div>
  );
}

export default home;
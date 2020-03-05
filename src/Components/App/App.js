import React from 'react';
import './App.css';
import NotificationBar from '../NotificationBar';
import Navbar from '../Navbar';

import { Route } from 'react-router-dom';
import Home from '../../routes/Home';

function App() {
    return (
        <main className="App">
            <NotificationBar />
            <Navbar />
            <Route path="/" component={Home} exact />
            {/* <Route path="/projects" component={Projects} /> */}
        </main>
    );
}

export default App;

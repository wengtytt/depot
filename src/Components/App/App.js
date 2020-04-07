import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NotificationBar from '../NotificationBar';
import Navbar from '../Navbar';
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

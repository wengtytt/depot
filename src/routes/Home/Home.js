import React from 'react';
import Slider from '../../Utilities/Slider';
import './Home.scss';

import { NavLink } from 'react-router-dom';
import configureSlidsStore from './hooks/slides';
import { useStore } from '../../hooks-store/store';

configureSlidsStore();

const Home = props => {
    const state = useStore()[0];
    console.log(state);
    const slides = state.slides.map((item, i) => {
        return (
            <div key={i} data-targetslide={i}>
                <NavLink to={item.path}></NavLink>
            </div>
        );
    });

    return (
        <section>
            <Slider className="HomeSlider">{slides}</Slider>
        </section>
    );
};

export default Home;

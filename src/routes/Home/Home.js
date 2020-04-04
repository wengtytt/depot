import React from 'react';
import Slider from '../../Utilities/Slider';
import './Home.scss';

import { NavLink } from 'react-router-dom';
import configureSlidsStore from '../../hooks-store/slides';
import configureTasksStore from '../../hooks-store/tasks';
import { useStore } from '../../hooks-store/store';

configureTasksStore();
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

    const cActionData = [
        {
            label: '免费报价',
            des: '免费获取3家装修方案与报价',
            img: '2.png'
        },
        {
            label: '精选团队',
            des: '200+优家网精选施工团队为您服务',
            img: '3.png'
        },
        {
            label: '跟踪回访',
            des: '优家网装修顾问一对一跟踪回访',
            img: '1.png'
        },
        {
            label: '资金托管',
            des: '装修款项平台托管更安全',
            img: '4.png'
        }
    ];

    const images = require.context('./assets/contactors', true);

    const contractorActions = cActionData.map((item, i) => {
        return (
            <div className="contactor-action" key={i}>
                <div className="action-inner">
                    <div className="image-container">
                        <img src={images('./' + item.img)}></img>
                    </div>
                    <div className="info">
                        <p className="label">{item.label}</p>
                        <span className="des">{item.des}</span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <section className="Home">
            <section>
                <Slider className="HomeSlider">{slides}</Slider>
            </section>
            <section className="gray contractors">
                <h2>为您安排最值得信赖的渥太华装修公司</h2>
                <hr></hr>
                <p>甄选多伦多本地华人专业装修公司，丰富选择实现理想装修</p>
                <div className="actions">{contractorActions}</div>
                <div className="btn">免费获取报价</div>
            </section>
        </section>
    );
};

export default Home;

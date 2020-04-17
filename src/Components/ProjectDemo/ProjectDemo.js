import React from 'react';
import './ProjectDemo.scss';
// import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../../hooks-store/store';

const ProjectDemo = (props) => {
    const [demos, setDemos] = React.useState({});

    const state = useStore()[0];

    const navs = state.demos.map((i, index) => {
        return (
            <div className="filter-item" key={index}>
                <a href="#">{i.label}</a>
            </div>
        );
    });

    return (
        <div className="project-demo">
            <div className="filters">{navs}</div>
        </div>
    );
};

export default ProjectDemo;

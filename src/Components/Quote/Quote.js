import React from 'react';
import './Quote.scss';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import BgMap from './assets/map.png';
import Udarrow from './assets/udarrow.png';

import {
    Explore,
    Telegram,
    Mail,
    Chat,
    Phone,
    Facebook,
    Twitter,
    Instagram,
} from '@material-ui/icons';

import { useStore } from '../../hooks-store/store';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(0,0,0, 0.6)',
    },
    paper: {
        position: 'absolute',
        width: '60%',
        outline: 'none',
        // border: '2px solid #000',
        padding: '1rem',
    },
    container: {
        maxWidth: '730px',
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0px 0px 20px #666',
        fontSize: '14px',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '3px',
    },
    contactInnerBefore: {
        flex: 1.5,
        backgroundColor: '#123f69f5',
        backgroundImage: `url(${BgMap})`,
        backgroundSize: 'cover',
        color: '#fff',
        boxShadow: '0px 0px 35px 1px #4e4e4e',
        borderRadius: '3px',
        margin: '10px 0px 10px -110px',
        '& .contact-info': {
            margin: '25px',
        },
    },
    contactInner: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.4em',
        flex: 2,
        '& .header': {
            display: 'flex',
            justifyContent: 'space-between',
            '& .title-group': {
                padding: '0px 50px',
                '& > div': {
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#254767',
                },
                '& > span': {
                    marginBottom: '16px',
                    color: '#999',
                    fontSize: '16px',
                },
            },
        },
        '& .input-group': {
            display: 'flex',
            flexDirection: 'row',
            padding: '10px 50px',
            alignItems: 'center',
            '& input, & select': {
                fontSize: '0.80em',
                flex: '80%',
                padding: '10px',
                backgroundColor: '#f7f7f7',
                borderRadius: '2px',
                border: '1px solid #d4d4d4',
                marginTop: '10px',
            },
            '& select': {
                height: '45px',
                backgroundPosition: 'right',
                backgroundSize: 'contain',
                width: '100%',
                outline: 'none',
                boxShadow: 'none !important',
                backgroundImage: `url(${Udarrow})`,
                backgroundRepeat: 'no-repeat',
                appearance: 'none',
            },
        },
        '& .term': {
            padding: '5px 50px',
            fontSize: '13px',
            color: '#999',
            '& a': {
                textDecoration: 'underline',
                fontWeight: 800,
            },
        },
        '& .submit': {
            backgroundColor: '#3d94f6',
            borderRadius: '100px',
            display: 'inline-block',
            cursor: 'pointer',
            color: '#ffffff',
            fontSize: '18px',
            fontWeight: 'bold',
            padding: '10px 35px',
            textDecoration: 'none',
            textShadow: '0px 1px 4px #1570cd',
            '&:hover': {
                background:
                    'linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%)',
                backgroundColor: '#1e62d0',
            },
        },
    },
    infoItem: {
        marginTop: '20px',
        color: '#9abad8',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
            fontSize: '1rem',
            marginRight: '4px',
        },
        '&.social': {
            textDecoration: 'none',
            color: '#7596b38c',
            fontSize: '38px',
            paddingLeft: '10px',
            '& a': {
                textDecoration: 'none',
                color: '#7596b38c',
                fontSize: '38px',
                paddingLeft: '10px',
                '& svg': {
                    fontSize: '1em',
                },
            },
        },
    },
}));

const Quote = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const trigger = React.cloneElement(props.children, { onClick: handleOpen });

    const state = useStore()[0];

    const cities = state.cities.map((i) => {
        let options = i.data.map((item) => {
            return (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            );
        });

        return (
            <optgroup key={i.label} label={i.label}>
                {options}
            </optgroup>
        );
    });

    const citySelect = (
        <select name="city" id="city" required="required">
            <option value="">所在城市</option>
            {cities}
        </select>
    );

    const projects = state.projects.map((i) => {
        let options = i.data.map((item) => {
            return (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            );
        });

        return (
            <optgroup key={i.label} label={i.label}>
                {options}
            </optgroup>
        );
    });

    const projectSelect = (
        <select name="serviceType" id="serviceType" required="required">
            <option value="">服务项目</option>
            {projects}
        </select>
    );

    return (
        <div>
            {trigger}
            <Modal
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <div className={classes.container}>
                        <div className={classes.contactInnerBefore}>
                            <div className="contact-info">
                                <h2> 联系我们</h2>
                                <div className={classes.infoItem}>
                                    <Explore />
                                    Reno Compass | 优家网
                                </div>
                                <div className={classes.infoItem}>
                                    <Telegram />
                                    95 Mural St #102, Richmond Hill, ON L4B 3G2
                                </div>
                                <div className={classes.infoItem}>
                                    <Mail />
                                    Projects@renocompass.ca
                                </div>
                                <div className={classes.infoItem}>
                                    <Chat />
                                    Reno_Consultant
                                </div>
                                <div className={classes.infoItem}>
                                    <Phone />
                                    +1 (905) 597-8566
                                </div>
                                <div className={`${classes.infoItem} social`}>
                                    <a href="https://www.facebook.com/RenoCompass/">
                                        <Facebook />
                                    </a>
                                    <a href="https://twitter.com/renocompass">
                                        <Twitter />
                                    </a>
                                    <a href="https://www.instagram.com/reno_compass/">
                                        <Instagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.contactInner}>
                            <div className="header">
                                <div className="title-group">
                                    <div>立即获取3家报价</div>
                                    <span>优家顾问随后会与您取得联络!</span>
                                </div>
                            </div>
                            <div className="input-group">
                                <input
                                    id="name"
                                    name="name"
                                    required="required"
                                    type="text"
                                    placeholder="姓名"
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    id="phone"
                                    name="phone"
                                    required="required"
                                    type="tel"
                                    placeholder="电话"
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    id="email"
                                    name="email"
                                    required="required"
                                    type="email"
                                    placeholder="邮箱"
                                />
                            </div>
                            <div className="input-group">{citySelect}</div>
                            <div className="input-group">{projectSelect}</div>
                            <div class="term">
                                递交申请表示即您同意我们的
                                <a href="/zh/terms-of-use">用户协议</a>
                            </div>
                            <div class="input-group top-16">
                                <button class="submit">立即获取报价</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Quote;

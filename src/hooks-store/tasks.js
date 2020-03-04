import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        tasks: [
            {
                label: {
                    en: 'Home',
                    zh: '首页'
                },
                path: '/'
            },
            {
                label: {
                    en: 'Projects',
                    zh: '家居装修'
                },
                path: '/projects'
            },
            {
                label: {
                    en: 'Commercial Renovation',
                    zh: '商业装修'
                },
                path: '/commercial-renovation'
            },
            {
                label: {
                    en: '',
                    zh: '装修公司'
                },
                path: '/contractors'
            },
            {
                label: {
                    en: '',
                    zh: '优家智选'
                },
                path: '/landing/interior-renovation/'
            },
            {
                label: {
                    en: 'Blog',
                    zh: '装修攻略'
                },
                path: '/blogs'
            },
            {
                label: {
                    en: 'Services',
                    zh: '装修保障'
                },
                path: '/services'
            },
            {
                label: {
                    en: 'Categories',
                    zh: '装修服务'
                },
                path: '/categories'
            }
        ]
    });
};

export default configureStore;

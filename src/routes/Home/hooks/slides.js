import { initStore } from '../../../hooks-store/store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        slides: [
            {
                img: '1.jpg',
                path: '/'
            },
            {
                img: '2.jpg',
                path: '/projects'
            },
            {
                img: '3.jpg',
                path: '/commercial-renovation'
            },
            {
                img: '4.jpg',
                path: '/contractors'
            },
            {
                img: '5.jpg',
                path: '/landing/interior-renovation/'
            },
            {
                img: '6.jpg',
                path: '/blogs'
            }
        ]
    });
};

export default configureStore;

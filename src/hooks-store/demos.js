import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        demos: [
            {
                value: 'all',
                label: '全部分类',
            },
            {
                value: 'landscaping',
                label: '园艺铺砖',
            },
            {
                value: 'roofing',
                label: '专业屋顶',
            },
            {
                value: 'designs',
                label: '室内设计',
            },
            {
                value: 'interior-renovation',
                label: '室内装修',
            },
            {
                value: 'bathroom',
                label: '浴室装修',
            },
            {
                value: 'kitchen',
                label: '厨房装修',
            },
            {
                value: 'basement',
                label: '地下室装修',
            },
            {
                value: 'flooring',
                label: '地板楼梯',
            },
            {
                value: 'window-door',
                label: '门窗/窗帘',
            },
            {
                value: 'commercial-renovation',
                label: '商业装修',
            },
            {
                value: 'extension',
                label: '翻建/加建',
            },
            {
                value: 'painting',
                label: '刷漆服务',
            },
            {
                value: 'swimming-pool',
                label: '泳池维护',
            },
        ],
    });
};

export default configureStore;

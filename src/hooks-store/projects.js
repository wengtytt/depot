import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        projects: [
            {
                label: '设计与建筑许可',
                data: [
                    {
                        value: '室内设计',
                        label: '室内设计',
                    },
                    {
                        value: '建房设计',
                        label: '建房设计',
                    },
                    {
                        value: '园艺设计',
                        label: '园艺设计',
                    },
                    {
                        value: '商业设计',
                        label: '商业设计',
                    },
                    {
                        value: '建筑许可',
                        label: '建筑许可',
                    },
                    {
                        value: '软装设计',
                        label: '软装设计',
                    },
                    {
                        value: '土地测量',
                        label: '土地测量',
                    },
                ],
            },
            {
                label: '室内项目',
                data: [
                    {
                        value: '室内装修',
                        label: '室内装修',
                    },
                    {
                        value: '商业装修',
                        label: '商业装修',
                    },
                    {
                        value: '地下室装修',
                        label: '地下室装修',
                    },
                    {
                        value: '厨房装修',
                        label: '厨房装修',
                    },
                    {
                        value: '浴室装修',
                        label: '浴室装修',
                    },
                    {
                        value: '地板楼梯',
                        label: '地板楼梯',
                    },
                    {
                        value: '油漆粉刷',
                        label: '油漆粉刷',
                    },
                    {
                        value: '橱柜浴柜',
                        label: '橱柜浴柜',
                    },
                ],
            },
            {
                label: '室外项目',
                data: [
                    {
                        value: '园艺铺砖',
                        label: '园艺铺砖',
                    },
                    {
                        value: '栅栏露台',
                        label: '栅栏露台',
                    },
                    {
                        value: '屋顶',
                        label: '屋顶',
                    },
                    {
                        value: '车库门',
                        label: '车库门',
                    },
                    {
                        value: '车道沥青',
                        label: '车道沥青',
                    },
                    {
                        value: '喷淋灌溉',
                        label: '喷淋灌溉',
                    },
                    {
                        value: '室外泳池',
                        label: '室外泳池',
                    },
                    {
                        value: '园艺维护',
                        label: '园艺维护',
                    },
                ],
            },
        ],
    });
};

export default configureStore;

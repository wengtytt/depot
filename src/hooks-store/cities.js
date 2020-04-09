import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        cities: [
            {
                label: 'Ontario/安大略',
                data: [
                    {
                        value: 'Toronto',
                        label: 'Toronto/多伦多',
                    },
                    {
                        value: 'Markham',
                        label: 'Markham/万锦市',
                    },
                    {
                        value: 'Mississauga',
                        label: 'Mississauga/密西沙加',
                    },
                    {
                        value: 'Richmond Hill',
                        label: 'Richmond Hill/列治文山',
                    },
                    {
                        value: 'Oakville',
                        label: 'Oakville/奥克维尔',
                    },
                    {
                        value: 'Aurora',
                        label: 'Aurora/奥罗拉',
                    },
                    {
                        value: 'Vaughan',
                        label: 'Vaughan/旺市',
                    },
                    {
                        value: 'Ottawa/渥太华',
                        label: 'Ottawa/渥太华',
                    },
                ],
            },
            {
                label: 'British Columbia/卑诗省',
                data: [
                    {
                        value: 'Abbotsford/阿伯兹福德',
                        label: 'Abbotsford/阿伯兹福德',
                    },
                    {
                        value: 'Burnaby/本拿比',
                        label: 'Burnaby/本拿比',
                    },
                    {
                        value: 'Terrace/阳台',
                        label: 'Terrace/阳台',
                    },
                    {
                        value: 'Trail/线索',
                        label: 'Trail/线索',
                    },
                    {
                        value: 'Vancouver/温哥华',
                        label: 'Vancouver/温哥华',
                    },
                    {
                        value: 'Vernon/弗农',
                        label: 'Vernon/弗农',
                    },
                    {
                        value: 'Victoria/维多利亚',
                        label: 'Victoria/维多利亚',
                    },
                    {
                        value: 'Wetaskiwin/韦塔斯基温',
                        label: 'Wetaskiwin/韦塔斯基温',
                    },
                ],
            },
        ],
    });
};

export default configureStore;

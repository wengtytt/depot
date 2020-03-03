import React from 'react';
import './NotificationBar.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';

const NotificationBar = () => {
    return (
        <div class="NotificationBar">
            <FaMapMarkerAlt />
            <b class="city">[渥太华]</b>
            <div class="phone">咨询热线：（905）597-8566</div>
            <div class="right-menus">
                <a href="#" class="coop">
                    商业合作
                </a>
                <a href="#" class="privacy">
                    隐私协议
                </a>
                <a href="#" class="language">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIGSURBVHjaYvzoHfzvwwcmFqYfr55wnz7NgAT+//8PJH/9+vVMWJgNyGBg+MPAABBALP8ePeEsLwRKMH9+x8XF9R8Mfn38yPiPgVmA7/+/f6wsrKJZWSzsPP/+/r0/qRcggFgYeDiAZv178/bvu1cQ1X/+/f8ybfq/H3+5q0qYGRlB+m/f/scpwCQlAbQEIIBYGIDyf//9//2H4c8foNzPK9d//vvF/OARw68fX0+fYfn7l93MlOH797+MHP9//gI6CSCAWP79+sXw9+//37////wJ1PBlxkwWHi5Gbv7/rBx/Fy7+/PiB2Nq1/77/ZGD8zvjrJ1ADQACxMPz48e/3n3+/f//79RvkS2X5/+fO/WflYfzyg+njM2Z1jX///v35+Z2JhROoAOgkgABi+vPjx/8/v4E2/Pv5A6iBJynpm7AI0NO/f3/5IiTGX14OFPwNVPPz199fICcBBBDLvy9fwKp/gtC/fwwcHPwNDd/37GJk5xAyN2fk4PgLdPDPn39ZfzH8BnqUASCAWP68fQr2wK9/QLf9+wc0j5GNlcHUhImNg4GdHagaKPjvx/d/bD+Z/vwBOgkggFiAmv79/M0oJMD09zsjOBCBccIuJAJk/WNgYGJiAgqyKioxC4iBvMrAABBAjLeBGsBR+ImBgffKlR8/fsAjGML4/fv3I0dHNrAyIAAIMAAWsTLdMXjAtwAAAABJRU5ErkJggg==" />
                    <span>English</span>
                </a>
            </div>
        </div>
    );
};

export default NotificationBar;

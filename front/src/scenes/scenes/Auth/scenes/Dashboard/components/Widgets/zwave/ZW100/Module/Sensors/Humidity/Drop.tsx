import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import styles from './index.scss';
import { ScreenSize } from '~/constants/enums';

type Props = {
    size: ScreenSize;
};

function Drop({ size }: Props) {
    const iconClass = cn(styles.icon, { [styles.iconSmall]: size === ScreenSize.small });

    return (
        <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.465 294.465">
            <path d="M174.432 32.465c-6.8-10-12.8-19.2-18.4-27.6-.8-1.2-2-2.4-3.2-3.2-4.8-3.2-11.2-1.6-14.4 3.2-5.2 8.4-11.2 17.2-18.4 27.6-31.6 46.4-78.8 116.4-78.8 156.4 0 29.2 12 55.6 31.2 74.8 19.2 18.8 45.6 30.8 74.8 30.8s55.6-12 74.8-31.2c19.2-19.2 31.2-45.6 31.2-74.8 0-40-47.2-109.6-78.8-156zm33.2 216.4c-15.6 15.6-36.8 24.8-60.4 24.8s-44.8-9.6-60.4-24.8c-15.6-15.6-24.8-36.8-24.8-60.4 0-33.6 45.2-100.4 75.2-144.8 3.6-5.2 6.8-10.4 10-14.8 3.2 4.4 6.4 9.6 10 14.8 30 44.8 75.2 111.2 75.2 144.8 0 23.6-9.6 44.8-24.8 60.4z" />
        </svg>
    );
}

export default observer(Drop);

import React from 'react';
import cn from 'classnames';
import styles from './index.scss';

type Props = {
    className: string;
};

function Rain({ className }: Props) {
    const wrapClass = cn(styles.icon, className);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={wrapClass} viewBox="0 0 100 100">
            <path
                d="M78.637 69.024v-8.961c4.887-2.83 8.182-8.103 8.182-14.156 0-9.036-7.327-16.363-16.365-16.363-3.273 0-6.305.982-8.864 2.64-2.518-10.876-12.221-19.003-23.863-19.003-13.555 0-24.544 10.989-24.544 24.543 0 7.262 3.173 13.763 8.183 18.257v10.057C11.593 60.375 5 49.832 5 37.724 5 19.651 19.653 5 37.727 5c12.282 0 22.97 6.773 28.568 16.78 1.358-.23 2.737-.419 4.159-.419C84.01 21.361 95 32.351 95 45.907c0 10.684-6.835 19.746-16.363 23.117z"
                clipRule="evenodd"
                fillRule="evenodd"
            />
            <path
                d="M33.638 45.909A4.091 4.091 0 0 1 37.727 50v32.726a4.09 4.09 0 1 1-8.18 0V50a4.093 4.093 0 0 1 4.09-4.091z"
                clipRule="evenodd"
                fillRule="evenodd"
                className={styles.rain1}
            />
            <path
                d="M50.001 54.091a4.092 4.092 0 0 1 4.091 4.092v32.726A4.093 4.093 0 0 1 50.001 95a4.093 4.093 0 0 1-4.091-4.091V58.183A4.09 4.09 0 0 1 50 54.09z"
                clipRule="evenodd"
                fillRule="evenodd"
                className={styles.rain2}
            />
            <path
                d="M66.364 45.909A4.091 4.091 0 0 1 70.454 50v32.726a4.09 4.09 0 1 1-8.18 0V50a4.093 4.093 0 0 1 4.09-4.091z"
                clipRule="evenodd"
                fillRule="evenodd"
                className={styles.rain3}
            />
        </svg>
    );
}

export default Rain;

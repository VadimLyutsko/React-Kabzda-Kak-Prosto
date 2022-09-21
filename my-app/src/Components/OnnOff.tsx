import React from 'react';
import styles from './OnnOff.module.css';

type  onnOffProps = {
    indicator: boolean
}

export function OnnOff(props: onnOffProps) {



    return (

            <span className={styles.container}>
                {props.indicator&&  <span className={styles.colorOn}>On</span>}
                {!props.indicator && <span className={styles.colorOff}>Off</span>}
            </span>


    );
}

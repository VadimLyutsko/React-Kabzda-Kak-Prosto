import React, {Component, useEffect, useState} from 'react';
import styles from './AnalogClock.module.css';


export const Clock: React.FC = () => {

    const [toggleClock, setToggleClock] = useState(false);

    const clockToggleHandler = () => {
        setToggleClock(!toggleClock);
    };

    return (
        <div>
            <button style={{marginBottom:'50px'}} onClick={clockToggleHandler}>Toggle clock style </button> <br/>
            {
                toggleClock  ? <AnalogClock/> : <DigitalClock/>
            }
        </div>
    );
};


const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num;

export const DigitalClock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('tick');

        const IntervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(IntervalId);
        };

    }, []);


    const seconds = getTwoDigitsString(date.getHours());
    const minutes = getTwoDigitsString(date.getMinutes());
    const hours = getTwoDigitsString(date.getSeconds());

    return <>
        <span>  {seconds}</span>:
        <span>  {minutes}</span>:
        <span>  {hours}</span>
    </>;
};


export class AnalogClock extends Component {


    state = {
        secondRatio: 0,
        minuteRatio: 0,
        hourRatio: 0
    };


    componentDidMount() {
        setInterval(() => {
            this.setClock();
        }, 1000);
    }

    setClock = () => {

        const currentDate = new Date;
        let secondRatio = currentDate.getSeconds() / 60;
        let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
        let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
        this.setState({secondRatio: secondRatio = currentDate.getSeconds() / 60});
        this.setState({minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60});
        this.setState({hourRatio: hourRatio = (minuteRatio + currentDate.getHours()) / 12});


    };


    render() {
        const {secondRatio, minuteRatio, hourRatio} = this.state;
        return (
            <ClockForAnalog secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
        );
    }

}


type ClockType = {
    hourRatio: any
    minuteRatio: any
    secondRatio: any
}


export function ClockForAnalog({hourRatio, minuteRatio, secondRatio}: ClockType) {

    console.log(secondRatio);


    return (

        <div className={styles.clock}>
            <div className={styles.hand + ' ' + styles.hour}
                 style={{transform: `translate(-50%) rotate(${hourRatio * 360}deg)`}}></div>
            <div className={styles.hand + ' ' + styles.minute}
                 style={{transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`}}></div>
            <div className={styles.hand + ' ' + styles.second}
                 style={{transform: `translate(-50%) rotate(${secondRatio * 360}deg)`}}></div>

            <div className={styles.number + ' ' + styles.number1}>
                <div>1</div>
            </div>
            <div className={styles.number + ' ' + styles.number2}>
                <div>2</div>
            </div>
            <div className={styles.number + ' ' + styles.number3}>
                <div>3</div>
            </div>
            <div className={styles.number + ' ' + styles.number4}>
                <div>4</div>
            </div>
            <div className={styles.number + ' ' + styles.number5}>
                <div>5</div>
            </div>
            <div className={styles.number + ' ' + styles.number6}>
                <div>6</div>
            </div>
            <div className={styles.number + ' ' + styles.number7}>
                <div>7</div>
            </div>
            <div className={styles.number + ' ' + styles.number8}>
                <div>8</div>
            </div>
            <div className={styles.number + ' ' + styles.number9}>
                <div>9</div>
            </div>
            <div className={styles.number + ' ' + styles.number10}>
                <div>10</div>
            </div>
            <div className={styles.number + ' ' + styles.number11}>
                <div>11</div>
            </div>
            <div className={styles.number + ' ' + styles.number12}>
                <div>12</div>
            </div>
        </div>

    );

}



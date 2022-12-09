import React from 'react';
import styles from './Rating.module.css';

export type ratingValueType = 1 | 2 | 3 | 4 | 5 | 0;

export type RatingPropsType = {
    ratingValue: number
    callback: (ratingValue: ratingValueType) => void
}

type StarPropsType = {
    value:ratingValueType
    selected: boolean
    callback: (ratingValue: ratingValueType) => void
}


 function RatingMemo(props: RatingPropsType) {

    return (
        <div className={styles.Rating}>
            <StarMemo callback={props.callback} selected={props.ratingValue > 0} value ={1}/>
            <StarMemo callback={props.callback} selected={props.ratingValue > 1} value ={2}/>
            <StarMemo callback={props.callback} selected={props.ratingValue > 2} value ={3}/>
            <StarMemo callback={props.callback} selected={props.ratingValue > 3} value ={4}/>
            <StarMemo callback={props.callback} selected={props.ratingValue > 4} value ={5}/>
        </div>
    );
}

function Star(props: StarPropsType) {
    return <span onClick={()=>{props.callback(props.value)}}>{props.selected ? <b>star </b> : 'star '}</span>;
}

export const Rating = React.memo(RatingMemo)
const StarMemo = React.memo(Star)
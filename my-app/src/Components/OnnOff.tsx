import React, {useState} from 'react';
import styles from './OnnOff.module.css';

type  onnOffProps = {
    indicator: boolean
}

export const OnnOff: React.FC<onnOffProps> = ( indicator) => {

    const[onOffIndicator,setOnOffIndicator] = useState<boolean>(true);


    const onIndicator={
        marginLeft:'5px',
        width: "30px",
        height: "30px",
        backgroundColor: onOffIndicator? "yellowgreen":"white",
        border:"solid 1px black",
        display:'inline-block'
    }
    const offIndicator={
        marginLeft:'5px',
        width: "30px",
        height: "30px",
        backgroundColor: !onOffIndicator? "rebeccapurple":"white",
        border:"solid 1px black",
        display:'inline-block'
    }
    const indicatorStyle = {
        marginLeft:'5px',
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border:"solid 1px black",
        backgroundColor: onOffIndicator? "yellowgreen":"rebeccapurple",
        display:'inline-block'
    }
    const containerStyle = {
        width:'fit-content',
        display:'flex',
        alignItems:'center',
        margin:'15px auto',
        justifyContent:"center"
    }

    const onIndicatorHandler = ()=>{
        setOnOffIndicator(!onOffIndicator)
    }
    const offIndicatorHandler = ()=>{
        setOnOffIndicator(!onOffIndicator)
    }

    return (
        <div style={containerStyle}>
            <div onClick={onIndicatorHandler}  style={onIndicator}>Onn</div>
            <div onClick={offIndicatorHandler} style={offIndicator}>Off</div>
            <div style={indicatorStyle} ></div>
        </div>
    );
};

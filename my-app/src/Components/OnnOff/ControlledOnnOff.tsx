import React from 'react';

type  onnOffProps = {
    indicator: boolean
    callBack:(IsButtonControlled:boolean)=>void
}

export const ControlledOnnOff = ( props:onnOffProps) => {




    const onIndicator={
        marginLeft:'5px',
        width: "30px",
        height: "30px",
        backgroundColor: props.indicator? "yellowgreen":"white",
        border:"solid 1px black",
        display:'inline-block'
    }
    const offIndicator={
        marginLeft:'5px',
        width: "30px",
        height: "30px",
        backgroundColor: !props.indicator? "rebeccapurple":"white",
        border:"solid 1px black",
        display:'inline-block'
    }
    const indicatorStyle = {
        marginLeft:'5px',
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border:"solid 1px black",
        backgroundColor: props.indicator? "yellowgreen":"rebeccapurple",
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

        props.callBack(!props.indicator)
    }
    const offIndicatorHandler = ()=>{
        props.callBack(!props.indicator)
    }

    return (
        <div style={containerStyle}>
            <div  onClick={onIndicatorHandler}  style={onIndicator}>Onn</div>
            <div onClick={offIndicatorHandler} style={offIndicator}>Off</div>
            <div style={indicatorStyle} ></div>
        </div>
    );
};


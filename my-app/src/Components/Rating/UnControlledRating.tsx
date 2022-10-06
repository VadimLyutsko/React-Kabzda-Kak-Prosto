import React, {useState} from 'react';

type RatingPropsType = {
    value: number
}

type StarPropsType = {
    selected: boolean
}


export function UnControlledRating(props: RatingPropsType) {
    const [ value, setValue] = useState<number>(0)

    const boldStarHandler = (initValue:number)=>{
        setValue(initValue)
    }


        return (
            <div style={{display:'flex', justifyContent:"space-around"}}>
           <span onClick={()=>{boldStarHandler(1)}}><Star  selected={value>0}/></span>
           <span onClick={()=>{boldStarHandler(2)}}><Star  selected={value>1}/></span>
           <span onClick={()=>{boldStarHandler(3)}}><Star  selected={value>2}/></span>
           <span onClick={()=>{boldStarHandler(4)}}><Star  selected={value>3}/></span>
           <span onClick={()=>{boldStarHandler(5)}}><Star  selected={value>4}/></span>
                {/*<Star selected={value>0}/><button onClick={()=>{boldStarHandler(2)}}>1</button>*/}
                {/*<Star selected={value>1}/><button onClick={()=>{boldStarHandler(2)}}>2</button>*/}
                {/*<Star selected={value>2}/><button onClick={()=>{boldStarHandler(3)}}>3</button>*/}
                {/*<Star selected={value>3}/><button onClick={()=>{boldStarHandler(4)}}>4</button>*/}
                {/*<Star selected={value>4}/><button onClick={()=>{boldStarHandler(5)}}>5</button>*/}
            </div>
        )
}

function Star(props: StarPropsType) {
    return (
        <span>
            {props.selected?<span><b>star </b> </span>:<span>star </span>}
        </span>
    )
}
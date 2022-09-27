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
            <div>
                <Star selected={value>0}/><button onClick={()=>{boldStarHandler(1)}}>1</button>
                <Star selected={value>1}/><button onClick={()=>{boldStarHandler(2)}}>2</button>
                <Star selected={value>2}/><button onClick={()=>{boldStarHandler(3)}}>3</button>
                <Star selected={value>3}/><button onClick={()=>{boldStarHandler(4)}}>4</button>
                <Star selected={value>4}/><button onClick={()=>{boldStarHandler(5)}}>5</button>
            </div>
        )
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star </b> </span>
    } else {
        return <span>star </span>
    }


}
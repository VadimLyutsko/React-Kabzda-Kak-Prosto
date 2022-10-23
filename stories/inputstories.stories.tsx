import {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
};

export const UncontrolledInput = () => <input/>;


export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    };
    return <>  <input onChange={onChangeHandler}
    /> - {value} </>;
};

export const GetValueValueUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    };

    return <>  <input ref={inputRef}/>
        <button onClick={save
        }>save
        </button>


        - actual value: {value} </>;
};


export const ControlledInput = () => <input value={'SomeNewName'}/>;
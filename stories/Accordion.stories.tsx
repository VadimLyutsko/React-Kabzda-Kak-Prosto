import Accordion from '../my-app/src/Components/Accordion/Accordion';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Accordion',
    component:Accordion
};


const callBackOnClick = action('Some item was clicked')

export const ModeChangedAccordion = () => {
    const [value, setValue]=useState(true)
    return <Accordion onClick={callBackOnClick} titleValue={'Users'} collapsed={value} onChange={()=>{setValue(!value)}} items={[{title:'Vadim',value:1},{title:'Antonio', value:2},{title:'Kirillo',value:3},{title:'Dyshnillo',value:4}]} />
}
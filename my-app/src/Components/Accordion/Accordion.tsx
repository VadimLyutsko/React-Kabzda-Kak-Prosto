import React from 'react';

export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onChange: () => void
    items: itemType[]
    onClick:(value:any)=>void
}

type itemType = {
    title:string
    value:any
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle onChange={props.onChange} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    onChange: () => void
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const collapsedHandler = () => props.onChange();
    return (
        <h3 onClick={collapsedHandler}>{props.title}</h3>
    );
}

type AccordionBodePropsType = {
    items: itemType[]
    onClick:(value:any)=>void
}

const AccordionBody: React.FC<AccordionBodePropsType> = ({items,onClick}) => {
    return (

        <ul>
            {items.map((item, index) => <li onClick={()=>{  onClick(item.value) }} key={index}>{item.title}</li>)}
        </ul>
    );
};


export default Accordion;

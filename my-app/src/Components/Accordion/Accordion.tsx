import React from 'react';

 export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    callBack: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle callBack={props.callBack} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    callBack: () => void
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const collapsedHandler = () => props.callBack();
    return (
        <h3 onClick={collapsedHandler}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default Accordion;

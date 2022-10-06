import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string;
    // collapsed: boolean
}

function UnControlledAccordion(props: AccordionPropsType) {

    const [toggleCollapsed, setToggleCollapsed] = useState<boolean>(false);
    const toggleHandler = () => [
        setToggleCollapsed(!toggleCollapsed)
    ];

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={toggleHandler}>Toggle</button>
            {!toggleCollapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle');
    return (
        <h3>---{props.title}---</h3>
    );
}

function AccordionBody() {
    console.log('AccordionBody');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default UnControlledAccordion;

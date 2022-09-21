import React from 'react';
import './App.css';
import Accordion from './Components/Accordion';
import {Rating} from './Components/Rating';
import {OnnOff} from './Components/OnnOff';


type PageTitlePropsType = {
    title: string;
}

function App() {
    return (
        <div className="App">
            <Accordion titleValue={'Accordion-title # 1'} collapsed={true}/>
            <Accordion titleValue={'Accordion-title # 2'} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnnOff indicator={true}/>
            {/*<OnnOff indicator={false}/>*/}

        </div>
    );
}


function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    );
}


export default App;

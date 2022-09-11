import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion";
import {Rating} from "./Components/Rating";


type PageTitlePropsType = {
    title:string;
}

function App() {
    return (
        <div className="App">
            <PageTitle title = {'This is App component'}/>
            <PageTitle title = {'My friends'}/>
            Article 1
            <Rating value = {2}/>
            <Accordion titleValue={'Accordion-title # 1'} collapsed={true}/>
            <Accordion titleValue={'Accordion-title # 2'} collapsed={false}/>

            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
        </div>
    );
}


function PageTitle(props:PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}


export default App;

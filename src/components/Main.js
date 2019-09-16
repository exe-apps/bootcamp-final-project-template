import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Component1 from './template/Component1';
import Component2 from './template/Component2';
import Component3 from './template/Component3';

const Main = () => {
    return (
        <main className='content-body'>
            <Switch>
                <Route exact path='/' component={Component1}/>
                <Route path='/component2' component={Component2}/>
                <Route path='/component3' component={Component3}/>
            </Switch>
        </main>
    );
}

export default Main;
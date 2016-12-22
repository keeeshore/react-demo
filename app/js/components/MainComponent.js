/**
 * Created by balank on 21/12/2016.
 */
import React from 'react';
import SubComponent from './SubComponent';

class MainComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello, world new!</h1>
                <ul>
                    <SubComponent/>
                </ul>
            </div>
        );
    }
}

export default MainComponent;

/**
 * Created by balank on 21/12/2016.
 */
import React from 'react';

class SubComponent extends React.Component {

    constructor(props){
        super(props);
        let testFn = (x) => {
            var k = x;
            console.log(this.k);
            innerFn();
            let innerFn = () => {
                console.log(this.k);
            }
        }


    }

    render() {
        return (
            <li><a href="form.html">from a sub component</a></li>
        );
    }
}

export default SubComponent;

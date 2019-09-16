import React, { Component } from 'react';
import ComponentTable from './ComponentTable';

class Component1 extends Component {
    constructor(props) {  
        super(props);
        
        // Set initial state here
        this.state = {
            componentList: [
              {
                id: 1,
                attribute1: 'Sample Attribute1',
                attribute2: 'Sample Attribute2',
                attribute3: 'Sample Attribute3',
              },
              {
                id: 2,
                attribute1: 'Sample Attribute11',
                attribute2: 'Sample Attribute22',
                attribute3: 'Sample Attribute33',
              }
            ],
            componentItem: {
                attribute1: '',
                attribute2: '',
                attribute3: '',
            },
            showComponentModal: false   // value to control component modal visibility
        };
    }

    // Component Lifecycle  - Do initial axios fetch here
    componentDidMount() {
        /*
            axios.get(url).then(res => {
                setState here~
            });
        */
    }


    // Event and Logic functions - use arrow function for automatic context binding 
    /*
    handleChangeInfo = e => {
        const {name, value} = e.target;

        this.setState((prevState) => ({
        user: {
            ...prevState.user,
            [name]: value
        }
        }));
    }

    handleAddUser = e => {

        let user = this.state.user;
        let usersList = [...this.state.usersList];

        usersList.push(user);

        this.setState({usersList : usersList});

        e.preventDefault();
    }

    deleteUser = rowIndex => {

        let usersList = [...this.state.usersList];

        usersList.splice(rowIndex, 1);

        this.setState({usersList: usersList});
    }
  */

    render() {
        return (
            <div>
                <h1>COMPONENT 1</h1>
                <br/>
                <p>You have routed to Component1. Remove this when using your own design.</p>

                <div className="component-table">
                    <ComponentTable componentList={this.state.componentList} />
                </div>

            </div>
        )
    }
}

export default Component1;
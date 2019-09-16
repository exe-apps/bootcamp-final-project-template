import React, { Component } from 'react';
import ComponentTable from './ComponentTable';
import ComponentModal from './ComponentModal';

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
            showComponentModal: false,   // value to control component modal visibility
            modalFlow: 'add'             // value used to identify if modal should add or update
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


    // EVENTS FUNCTION - use arrow function for automatic context binding 
    handleChangeInfo = e => {
        const {name, value} = e.target;

        this.setState((prevState) => ({
            componentItem: {
                ...prevState.componentItem,
                [name]: value
            }
        }));
    }

    handleAddComponent = e => {
        console.log('ADD COMPONENT ITEM', this.state.componentItem);
        
        // Place axios call for delete here
        
        this.hideModal();
    }

    handleUpdateComponent = e => {
        console.log('UPDATE COMPONENT ITEM', this.state.componentItem);
        
        // Place axios call for delete here
        
        this.hideModal();
    }

    deleteComponentItem = componentId => {
        console.log('DELETE COMPONENT ITEM', componentId);
        
        // Place axios call for delete here
    }


    // MODAL VISIBILITY FUNCTIONS
    showModal = () => {
        this.setState(prevState => ({
            ...prevState,
            componentItem: {
                attribute1: '',
                attribute2: '',
                attribute3: '',
            },
            showComponentModal : true, 
            modalFlow: 'add' 
        }))
    }

    showUpdateModal = (componentItem) => {
        this.setState(prevState => ({
            ...prevState,
            componentItem: componentItem,
            showComponentModal : true,
            modalFlow: 'update' 
        }))
    }

    hideModal = () => {
        this.setState({showComponentModal : false});
    }


    // RENDER PORTION
    render() {
        return (
            <div>
                <h1>COMPONENT 1</h1>
                <br/>
                <p>You have routed to Component1. Remove this when using your own design.</p>

                <div className='hidden-modals'>
                    <ComponentModal 
                        handleChangeInfo={this.handleChangeInfo}
                        handleAddComponent={this.handleAddComponent}
                        handleUpdateComponent={this.handleUpdateComponent}
                        showComponentModal={this.state.showComponentModal}
                        modalFlow={this.state.modalFlow}
                        componentItem={this.state.componentItem}
                    />
                </div>

                <div className="component-table">
                    <ComponentTable 
                        componentList={this.state.componentList} 
                        deleteComponentItem={this.deleteComponentItem}
                        showUpdateModal={this.showUpdateModal}
                    />
                </div>
                
                <div>
                    <button type="button" onClick={this.showModal}>ADD COMPONENT MODAL</button>
                </div>
            </div>
        )
    }
}

export default Component1;
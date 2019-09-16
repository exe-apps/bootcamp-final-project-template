import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class ComponentTable extends Component {
    render() {
        const { componentList } = this.props;   // destructure needed props
                                                // const componentList = this.props.componentList   < same thing

        // Render data table
        return (
            <Table striped responsive>
                <thead>
                    <tr className='component-table-row'>
                        <th className='component-table-cell'>ATTRIBUTE 1</th>
                        <th className='component-table-cell'>ATTRIBUTE 2</th>
                        <th className='component-table-cell'>ATTRIBUTE 3</th>
                        <th className='component-table-cell'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        componentList.map((component, index) =>{
                            return (
                                <tr key={index} className='component-table-row'>
                                    <td className='component-table-cell'>{component.attribute1}</td>
                                    <td className='component-table-cell'>{component.attribute2}</td>
                                    <td className='component-table-cell'>{component.attribute3}</td>
                                    <td className='component-table-cell'>
                                        <EditIcon onClick={this.props.showComponentModal} />
                                        <DeleteIcon onClick={() => this.props.deleteComponent(component.id)} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        );
    }
}

export default ComponentTable;
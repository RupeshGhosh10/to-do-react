import React from 'react';
import '../css/list.css'

class List extends React.Component {
    render() {
        return (
            <div className='list-item'>
                <div className='list-to-do-item'>
                    <p className={this.props.completed ? 'strike' : ''}>{this.props.item}</p>
                </div>
                <div className='list-tools'>
                    <button className='btn-item' onClick={() => this.props.completeToDoList(this.props.number)}>&#10004;</button>
                    <button className='btn-item' onClick={() => this.props.delToDoList(this.props.number)}>X</button>
                </div>
            </div>
        );
    }
}

export default List;
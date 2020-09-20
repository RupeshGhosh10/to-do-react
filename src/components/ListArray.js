import React from 'react';
import List from './List';
import '../css/listArray.css';

class ListArray extends React.Component {
    render() {
        return (
            <div className='list-array'> 
                {this.props.todo.map((user, i) => {
                    return <List key={i} item={this.props.todo[i]} completed={this.props.completed[i]} completeToDoList={this.props.completeToDoList} delToDoList={this.props.delToDoList} number={i}/>
                })}
            </div>
        );
    }
}

export default ListArray;
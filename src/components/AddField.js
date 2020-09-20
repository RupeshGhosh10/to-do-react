import React from 'react';
import '../css/addField.css';

class AddField extends React.Component {
    render() {
        return (
            <div className='add-field'>
                <input className='input' type='text' onChange={this.props.updateInputText} value={this.props.text}/>
                <button className='btn' type='button' onClick={this.props.addToDoList}>Add</button>
            </div>
        );
    }
}

export default AddField;
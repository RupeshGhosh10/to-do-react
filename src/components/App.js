import React from 'react';
import ListArray from './ListArray';
import AddField from './AddField';
import Particles from 'react-particles-js';
import '../css/App.css';

const particleOptions = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            completed: [],
            todo: []
        }
    }
    updateInputText = (event) => {
        this.setState({inputText: event.target.value});
    }
    addToDoList = () => {
        if (this.state.inputText !== '') {
            this.setState({
                todo: [...this.state.todo, this.state.inputText],
                inputText: '',
                completed: [...this.state.completed, false]
            });
        }
    }
    delToDoList = (key) => {
        this.setState({
            todo: this.state.todo.filter((user, i) => i !== key ),
            completed: this.state.completed.filter((user, i) => i !== key)
        });
    }
    completeToDoList = (key) => {
        this.setState({completed: this.state.completed.map((user, i) => {
            if (i === key && user === true)
                return false;
            else if (i === key || user === true)
                return true;
            else
                return false;
        })});
    }
    render() {
        return (
            <div className='main'>
                <Particles className='particles' params={particleOptions}/>
                <h1 className='heading'>To Do List</h1>
                <AddField addToDoList={this.addToDoList} updateInputText={this.updateInputText} text={this.state.inputText}/>
                <ListArray todo={this.state.todo} completed={this.state.completed} completeToDoList={this.completeToDoList} delToDoList={this.delToDoList}/>
            </div>
        );
    }
}

export default App;
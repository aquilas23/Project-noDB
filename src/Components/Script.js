import React, {Component} from 'react';
import Verse from './Verse';

class script extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            titleInput: ''
        }
    }

    handleInput = (val) => {
        this.setState({titleInput: val})
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    
    handleEdit = (id) => {
        this.props.editFn(id, this.state.titleInput);
        this.handleToggle();
    }

    render(){
        return (
            <div className="btn"> {this.state.isEditing
                ? (
                    <div>
                        <input 
                            value={this.state.titleInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.script.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.script.title}</p>
                        <p>{this.props.script.quote}</p>
                        <button onClick={this.handleToggle}>Edit Title</button>
                    </div>
                )}
                <button onClick={}>Update</button>
            </div>
        )
    }
}

export default script;
import React, {Component} from 'react';


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
        const {isEditing}= this.state
        const {titleInput}= this.state

        return (
            <div className="btn"> {isEditing
                ? (
                    <div>
                        <input 
                            value={titleInput}
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
                <button >Update</button>
            </div>
        )
    }
}

export default script;
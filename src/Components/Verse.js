import React, {Component} from 'react';
import Finder from './Finder';
import VerseDisplay from './VerseDisplay';
import axios from 'axios';


class Verses extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            quoteScript:"",
            id: 1,
            newScript: "",
            newScriptTitle:"",
            addscript: false
        };
        this.grabInput=this.grabInput.bind(this);
        this.handleScriptInput=this.handleScriptInput.bind(this);
        this.handleTitleInput=this.handleTitleInput.bind(this);
    }
grabInput(e){
    this.setState({quoteScript:e.target.value})
}

nextQuote= (e) =>{
   
    if (this.state.id < 12 ){
        this.setState({id: this.state.id +1})
    }
   
}
prevQuote= (e) =>{
    if (this.state.id > 1 ){
        this.setState({id: this.state.id -1})
    }
}

    handleScriptInput(e){
        this.setState({newScript:e.target.value})

    }
    handleTitleInput(e){
        this.setState({newScriptTitle:e.target.value})

    }
    cancelAddScript=()=>{
        this.setState({newScript:"",newScriptTitle:"", addscript:false})
    }

    handleAddScript = () => {
        const bodyObj={
            newScript:this.state.newScript,
            newScriptTitle: this.state.newScriptTitle
        }
        this.props.addScriptfn(bodyObj)
        this.cancelAddScript();
    }
    toggleAddScript = () =>{
        this.setState({addscript:true})
    }
componentDidMount(){

    axios.get(`/api/script/${this.state.id}`)
    .then(res => {
        this.setState({quoteScript: res.data})
    })
    .catch(err => console.log(err));
  
}
componentDidUpdate(prevProps,prevState){
    if (prevState.id!==this.state.id){
        axios.get(`/api/script/${this.state.id}`)
        .then(res => {
            this.setState({quoteScript: res.data})
        })
        .catch(err => console.log(err));
    }

}
    render(){
        const {quoteScript}=this.state
        const viewQuote={
            1:(<Finder grabInput={this.grabInput} displayName={quoteScript} />),

            2: < VerseDisplay />
        };

        return(
            <section>
                
             <h2>{quoteScript.title}</h2>  
             <p> {quoteScript.quote} </p>
             <button name='1' onClick={this.prevQuote}>Previous quote</button> 
             <button name= '2' onClick={this.nextQuote}>Next Quote</button>
             <button onClick={()=>{this.props.deletefn(this.state.id)}}>Delete script</button>
             <button onClick={this.toggleAddScript}>New Scripture</button> 
             
            {
                this.state.addscript
                ? (
                    <div>
                        <input placeholder="script"  value={this.state.newScript} 
                        onChange={this.handleScriptInput}
                        />
                        <input placeholder="title" value={this.state.newScriptTitle} 
                        onChange={this.handleTitleInput}
                        />
                        <button onClick={this.cancelAddScript}>Cancel</button>
                        <button onClick={this.handleAddScript}>Submit</button>
                    </div>
                ) : null

            }
            </section>
        )
    }
}
export default Verses;
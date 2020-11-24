import React, {Component} from 'react';
import axios from 'axios';

class Finder extends Component{
    constructor(props){
        super(props);
        this.state={ 
            script:[]        
        }
    }

    componentDidMount(){
        this.getScripts();
    }

    getScripts = () => {
        axios.get('/api/scripts')
        .then(res => {
            this.setState({script: res.data})
        })
        .catch(err => console.log(err));
    }
render(){
    console.log(this.state.script)
    const {script} =this.state
    const mappedScript= script.map((e,i)=>(
        <div key={i} className="quote">
            <h6> {e.title}</h6>
            <p>{e.quote} </p>
        </div>
    ));
    
        return (
            <div > 
                {mappedScript}
                </div>
     );
 }
}

export default Finder;
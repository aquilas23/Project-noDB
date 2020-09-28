import React, {Component} from 'react';
import axios from 'axios';
import verseDisplay from './VerseDisplay';

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
        axios.get('/api/script')
        .then(res => {
            this.setState({script: res.data})
        })
        .catch(err => console.log(err));
    }
render(){
    
        return (
            <div > {this.getScripts}</div>
     );
 }
}

export default Finder;
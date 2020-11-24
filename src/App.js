import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Verse from './Components/Verse';
import axios from 'axios';
import Script from './Components/Script'
import Finder from './Components/Finder'


class App extends Component{
    constructor(){
        super();
        this.state={
            selectedScript: { }

        }
        this.addScript=this.addScript.bind(this);
    }
    componentDidMount(){
        axios.get('/api/script/1')
        .then( res => {
            this.setState({selectedScript:res.data})
        })
        .catch(err => console.log(err));

    }

    addScript(bodyObj){
      axios.post('/api/script', bodyObj)
      .then(res => {
        this.setState({selectedScript: res.data})
      })
      .catch(err => console.log(err));
    }
  
    editTitle = (id, newTitle) => {
      let body = {title: newTitle};
  
      axios.put(`/api/script/${id}`, body)
      .then(res => {
        this.setState({selectedScript: res.data})
      })
      .catch(err => console.log(err));
    }
  
    deleteScript = (id) => {
      axios.delete(`/api/script/${id}`)
      .then(res => {
        this.setState({selectedScript: res.data})
      })
      .catch(err => console.log(err));
    }

render(){
    return(
           <div className="App-header">
          <Header />
          < Script editFn={this.editTitle}
          script={this.state.selectedScript}/>
           <Verse 
              deletefn= {this.deleteScript}
              addScriptfn={this.addScript}
              />
              <div className= "all-script"> <Finder /> </div>
       

             </div>
        )
    }
}

export default App;

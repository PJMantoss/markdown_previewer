import React, { Component } from 'react';
import './App.css';
import marked from "marked";
import Editor from "./components/Editor";
import Toolbar from "./components/Toolbar";
import Previewer from "./components/Previewer";


marked.setOptions({
  breaks: true
});

//const renderer = new marked.Renderer();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: placeholder
    }
  }

  handleChange = e => {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="appWrapper">
          <div className="editorWrap">
            <Toolbar text="Editor" />
            <Editor 
                markdown={this.state.markdown} 
                onChange={this.handleChange}
            />
          </div>

          <div className="previewWrap">
            <Toolbar text="Previewer" />
            <Previewer markdown={this.state.markdown}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

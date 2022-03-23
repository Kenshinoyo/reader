import React, { Component } from 'react';
import { render } from 'react-dom';

class Reader1 extends Component {

    // - Create an object for the sake of storing file data
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            fileContent: ''
        };
    }

    //- "Event handler" for when a file is uploaded. Converts JSON data to readable text
    handleFileChange = (e) => {
        const file = e.target.files[0]; // <- local variable for the sake of reading JSON data
        const reader = new FileReader();
        reader.readAsText(file); // <-- converts JSON data to text
        reader.onload = () => {
            this.setState({fileName: file.name, fileContent: reader.result}); // <-- assigns data to previously defined states
        }
        reader.onerror = () => {
            console.log('file error', reader.error)
        }
    }

  render() {
    return (
        <div>
            <h1>Reader 1</h1>
            <input type="file" onChange={this.handleFileChange}></input>
            <br />
            <p>{this.state.fileName}</p>
            <p>{this.state.fileContent}</p>
        </div>
    )
  }
}

export default Reader1;

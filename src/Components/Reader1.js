import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Reader1 extends Component {

    // - Create an object for the sake of storing file data
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            fileContent: ''
        };
    }

    //- "Event handler" for when a file is uploaded. Converts JSON data, and assigns it to state
    handleFileChange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            this.setState({fileName: file.name, fileContent: reader.result});
        }
        reader.onerror = () => {
            console.log('file error', reader.error)
        }
    }

  render() {
    return (
        <div>
            <h1>Reader 2</h1>
            <input type="file" onChange={this.handleFileChange}></input>
            <br>
            <p>{this.state.fileName}</p>
            <p>{this.state.fileContent}</p>
            </br>
        </div>
    )
  }
}

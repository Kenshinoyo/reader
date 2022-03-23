// import React, { useState, useEffect } from "react";
// import { render } from "react-dom";

// const Reader2 = (props) => {

//     const history = useHistory()


//     //- Local states for user data
//     const [fileName, setFileName] = useState('')
//     const [fileContent, setFileContent] = useState('')

//     //- "Event handler" for file upload output. Converts
//     handleFileChange = e => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.readAsText(file);
//         reader.onload = () => {
//             this.setState({fileName: file.name, fileContent: reader.result});
//         }
//         reader.onerror = () => {
//             console.log('file error', reader.error)
//         }
//     }

//     return (
//         <div>
//             <h1>Reader 2</h1>
//             <input type="file" onChange={this.handleFileChange}></input>
//             <br>
//             <p>{this.state.fileName}</p>
//             <p>{this.state.fileContent}</p>
//             </br>
//         </div>
//     )

// }

// export default Reader2;
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import TextField from '@material-ui/core/TextField';


const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [header, setHeader] = useState('')

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form >
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <TextField  id="outlined-basic" placeholder="Enter title for pic" variant="outlined"
      name={header} onChange={(e)=> setHeader(e.target.value)} />
      
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} header={header} /> }
      </div>
    </form>
  );
}

export default UploadForm;



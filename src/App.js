import React, {useRef, Fragment} from "react";
import Button from "@material-ui/core/Button";
import './App.css';
import {uploadImage} from "./db/api";

const App = () => {
    const inputRef = useRef(null)

    const handleChange = async (e) => {
        e.preventDefault()

        const file = e.target.files[0]

        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            console.log('wrong file')
            return
        }

        console.dir(file)
        console.log(file.name)
        const gg = await uploadImage(file, file.name)
        console.log(gg)
    }

  return (
    <div className="App">
      <Fragment>
        <input
            className='upload-input'
            onChange={handleChange}
            type="file"
            ref={inputRef}
        />
        <Button variant="contained"
                color="secondary"
                onClick={() => inputRef.current.click()}>
          Upload image
        </Button>
      </Fragment>
    </div>
  );
}

export default App;

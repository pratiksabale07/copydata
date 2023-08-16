import { useEffect, useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import { db } from './components/config';
import { doc, setDoc, getDoc } from "firebase/firestore";


function App() {
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(null)


  const getData = async () => {
    const docRef = doc(db, "data", "LA");
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      let dataGot = docSnap.data()
      setText(dataGot.data)
    } else {
      console.log("No such document!");
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const copyData = async () => {
    try {
      await navigator.clipboard.writeText(text);
      showAlert("Text Copied", "success");
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  const handleSave = () => {
    setDoc(doc(db, "data", "LA"), {
      data: text
    }).then(() => {
      console.log('Data Submited');
    })
    showAlert("Text Saved", "success");
  }
  return (
    <div className='container m-4'>
      <Alert alert={alert} />
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
      </div>
      <button type="button" className="btn btn-primary m-3" onClick={copyData}>Copy</button>
      <button type="button" className="btn btn-primary m-3" onClick={() => { setText(''); showAlert('Text Cleared', 'warning') }}>Clear</button>
      <button type="button" className="btn btn-primary m-3" onClick={handleSave} >Save</button>
      <button type="button" className="btn btn-primary m-3" onClick={getData} >Get Data</button>

    </div>
  )
}

export default App;

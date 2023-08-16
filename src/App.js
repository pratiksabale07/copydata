import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';

function App() {
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(null)

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
  return (
    <div className='container m-4'>
      <Alert alert={alert} />
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Enter Text</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
      </div>
      <button type="button" className="btn btn-primary m-3" onClick={copyData}>Copy</button>
      <button type="button" className="btn btn-primary m-3" onClick={() => { setText(''); showAlert('Text Cleared', 'warning') }}>Clear</button>
    </div>
  )
}

export default App;

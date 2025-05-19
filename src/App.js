import Dialog from "./component/Dialog";
import StarRating from "./component/StarRating";
import {useState} from 'react';
import './style/index.css';

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const open = () => {setDialogOpen(!dialogOpen)};
  const close = () => {setDialogOpen(false)};
  return (
    <main>
      <div className="container">
        <StarRating/>
        <input className={dialogOpen ?'button': 'openButton'} type="button" onClick={open} value={'show'}></input>
      </div>
      {dialogOpen && <Dialog handleClosed={close}/>}
    </main>
  );
}

export default App;

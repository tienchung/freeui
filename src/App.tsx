import { Button } from 'antd';
import React, { useState } from 'react';
import './App.scss';
import Notification from './components/Notification';
import {dataNotify} from "./constants/data";
import ModalCreateNew from "./components/ModalCreateNew"

function App() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="App">
      <Notification data={dataNotify} />
      <Button className='mx-auto w-full' onClick={()=> setOpen(true)}>Show modal</Button>
      {isOpen && 
        <ModalCreateNew
          isOpen={isOpen}
          setClose={()=>setOpen(false)}
        />
      }
    </div>
  );
}

export default App;

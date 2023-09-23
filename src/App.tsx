import React from 'react';
import './App.css';
import Notification from './components/Notification';

const fakeData =  [
  {
      key: '1',
      name: 'New User',
      noti: true,
      email: true,
      push: true,
  },
  {
      key: '2',
      name: 'New Permission',
      noti: true,
      email: true,
      push: true,
  },
  {
      key: '3',
      name: 'New Comment',
      noti: true,
      email: true,
      push: true,
  },
  {
      key: '4',
      name: 'Task Assignment',
      noti: true,
      email: true,
      push: true,
  },
  {
      key: '5',
      name: 'Follower',
      noti: true,
      email: true,
      push: true,
  },
]

function App() {
  return (
    <div className="App">
      <Notification data={fakeData} />
    </div>
  );
}

export default App;

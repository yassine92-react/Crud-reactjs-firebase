import React from 'react';
import './App.css';
import firebase from './firebase'
import TimesList from './components/times-list'
import AddTimeEntryForm from './components/add-time-entry-form'
// firebase.firestore().collection('time').add({
//   title:'Rublik\'s Cube',
//   time_seconds:45
// })
function App() {
  return (
    <div className="App">
    <h1>test app </h1>
    <TimesList />
    <AddTimeEntryForm />
    </div>
  );
}

export default App;

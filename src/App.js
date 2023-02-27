import './App.css';
import { useEffect, useState } from 'react';
import CreateCard from './createCard';

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [tourLocationData, setTourLocationData] = useState([]);

  const apiFetch = async () => {
    const response = await fetch(url)
    const tourLocations = await (await response).json();
    setTourLocationData(tourLocations)
  }

  useEffect(() => {
    apiFetch()
  }, []);

  const deleteCard = (recievedId) => {
    let NewTourLocaion = tourLocationData.filter(location => {
      return location.id !== recievedId;
    })
    setTourLocationData(NewTourLocaion);

  }

  if (tourLocationData.length === 0) {
    return (
      <div className="App">
        <h1 className='underline'>All cards are deleted</h1>
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1 className='underline'>Our Tour</h1>
      {tourLocationData.map((location) => <CreateCard className="card" key={location.id} location={location} deleteCard = {deleteCard} />)}
    </div>
  );
}



export default App;
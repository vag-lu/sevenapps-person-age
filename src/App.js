import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Person from './components/person';
import Pagination from './components/pagination';
import SearchBar from './components/search-bar';
import { getPeopleList } from './services/people-service';

function App() {

  const [peopleList, setPeopleList] = useState([])
  const [peopleSearchList, setPeopleSearchList] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getPeopleList().then(
      (data) => {
        setPeopleList(data.data)
        setPeopleSearchList(data.data)
        setLoading(false)
      }
    )
  }, [])

  const onSearch = ({name, ageFrom, ageTo}) => {
    setLoading(true)
    setPeopleSearchList(peopleList.filter((person) => {
      if ((name ? person.name.toLowerCase().includes(name.toLowerCase()) : true) &&
        (ageFrom ? person.age >= ageFrom : true) &&
        (ageTo ? person.age <= ageTo : true)) {
        return person;
      }
    }
    ))
    setLoading(false)
  }

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      {!loading ?
        <>{peopleSearchList.length > 0 ?
          <Pagination list={peopleSearchList} numsPerPages={25} />
          :
          <div className='center'>
            <p>No results found :(</p>
          </div>
        }</>
        :
        <div className='center'>
          <p>Loading...</p>
        </div>
      }
    </div>
  );
}

export default App;

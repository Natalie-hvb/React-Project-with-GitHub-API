import './App.css';
import { useEffect, useState } from 'react';
import User from './components/User';
import axios from 'axios';
import Repositories from './components/Repositories';

function App() {
  const [userModel, setUserModel] = useState(null);
  const [userRepos, setUserRepos] = useState([]);
  const [search, setSearch] = useState('aboudmourad');

  const clientId = 'place your client key here';
  const clientSecret = 'place your client secret here';

  useEffect(() => {
    handleSearch();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    if (search) {
      axios
        .get(`http://api.github.com/users/${search}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
        .then(result => {
          setUserModel(result.data);
          getRepos(result.data.login);
        })
        .catch(err => {
          console.log(err);
          setUserModel(null);
          setUserRepos([]);
        });
    } else {
      setUserModel(null);
      setUserRepos([]);
    }
  };

  const getRepos = userName => {
    axios
      .get(`https://api.github.com/users/${userName}/repos?per_page=6`)
      .then(result => {
        setUserRepos(result.data);
      })
      .catch(err => {
        console.log(err);
        setUserRepos([]);
      });
  };

  return (
    <div className="App">
      <div id='search'>
        <label className="col-form-label">Search for GitHub User</label>
        <input name="search" class="form-control" value={search} onChange={e => setSearch(e.target.value)} />
        <button class="btn btn-outline-light" onClick={handleSearch}>Submit</button>
      </div>

      <User userModel={userModel} />
      <Repositories userRepos={userRepos} />
    </div>
  );
}

export default App;



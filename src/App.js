import React, {useEffect, useState} from 'react';
import { getList } from './services/list';
import List from './components/list';

function App() {
  const [data, setList] = useState();

  useEffect(() => {
    async function fetchData() {      
      getList().then(res => {
        setList(res.data.results);
      })
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <h1>NY Times</h1>
      <List data={data} />
    </div>
  );
}

export default App;

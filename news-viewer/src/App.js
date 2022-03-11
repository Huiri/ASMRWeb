import {React, useState, useCallback} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
// node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트
import NewsPage from './pages/NewsPage';
import {Route} from 'react-router-dom';
const App = () => {
  // const [data,setData] = useState(null);
  // const onClick = async() => {
  //   try {
  //     const response = await axios.get(
  //        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e26ba09789544da5a2f8ae4059b7e83b'
  //        );
  //        setData(response.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  // };
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  // e26ba09789544da5a2f8ae4059b7e83b
  return <Route path="/:category?" component={NewsPage}/>;
};

export default App;
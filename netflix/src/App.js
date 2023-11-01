import './App.css';
import {action,originals,topRated} from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={topRated} title="Top Rated" isSmall />

    </div>
  );
}

export default App;

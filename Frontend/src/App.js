// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Login} from '../src/Page/Login';
import {Home} from '../src/Page/Home';
import { CreateNFT } from './Page/CreateNFT';
import { NFTCollection } from './Page/NFTCollection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Switch>
            <Route path="/collection">
              <NFTCollection/>
            </Route>
            <Route path="/create-nft">
              <CreateNFT/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

import './App.scss';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import store from './redux/redux_store';
import List from './components/list/List';
import Header from './components/header/Header';
import Loading from './components/loading/loading';
import About from './components/about/about';

function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route path="/about" render={() => <About />} />
        <Route path="/users" render={() => <Loading />} />
        <Route path="/list" render={() => <List />} />
        <Route path="/" render={() => <List />} />
        <Route exact path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </div>
  );
}
let WrappedApp = withRouter(App);
const MainApp = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;

import Navbar from './components/Navbar';
import Userlist from './components/List';
// redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <Navbar />
        <Userlist />
    </Provider>
  );
}

export default App;

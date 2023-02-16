import './App.css';
import MainPage from './containers/MainPage';
import 'antd/dist/reset.css';
import NavigationPanel from './containers/Menu';
import Expertise from './containers/Expertise';

function App() {
  return (
    <div className='App'>
      <NavigationPanel />
      <MainPage />
      <Expertise />
      {/* <Button type='primary' style={{ zIndex: '2' }}>Button</Button> */}
    </div>
  );
}

export default App;

import './App.css';
import MainPage from './containers/MainPage';
import 'antd/dist/reset.css';
import NavigationPanel from './containers/Menu';

function App() {
  return (
    <div className='App'>
      <NavigationPanel />
      <MainPage />
      <div style={{ minHeight: '100vh', width: '100%', zIndex: '2', backgroundColor: '#0e0e14', color: 'white', position: 'absolute' }}>
        Experience page in progress...
      </div>
      {/* <Button type='primary' style={{ zIndex: '2' }}>Button</Button> */}
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RoutesConfig from './RouterConfig';

function App() {
  return (
    <Router>    
      <RoutesConfig />
    </Router>
  );
}

export default App;

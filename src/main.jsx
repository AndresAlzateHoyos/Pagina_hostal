import { createRoot } from 'react-dom/client';
import App from './App/App.jsx';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <HashRouter>
     <App />
  </HashRouter>
)

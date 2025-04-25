import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
)

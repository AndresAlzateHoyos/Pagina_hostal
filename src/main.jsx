import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
)

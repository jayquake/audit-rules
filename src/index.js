import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'; // Use HashRouter here
import { ModalProvider } from './components/util/ModalContext';
import { LoadingProvider } from './components/util/LoadingContext';  // Import LoadingProvider
import GlobalLoading from './components/util/GlobalLoading';  // Import GlobalLoading

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  {/* No need for basename in HashRouter */}
      <LoadingProvider>  {/* Wrap with LoadingProvider */}
        <ModalProvider>
          <GlobalLoading />  {/* Display loading bar at the top when loading */}
          <App />
        </ModalProvider>
      </LoadingProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

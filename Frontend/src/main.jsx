import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App';
// import { HashRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <HashRouter>
//       <App/>
//     </HashRouter>
  
// )

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
 

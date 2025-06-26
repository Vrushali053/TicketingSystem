// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Login from './components/Login';
// // import Dashboard from './components/Dashboard';
// // import TicketCreation from './components/TicketCreation';
// // import TicketList from './components/TicketList';
// // import AdminPanel from './components/AdminPanel';
// import './App.css';
// import Dashboard from './Components/Dashboard';
// import TicketCreation from './Components/TicketCreation';
// import TicketList from './Components/TicketList';
// import AdminPanel from './Components/AdminPanel';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/create-ticket" element={<TicketCreation />} />
//         <Route path="/ticket-list" element={<TicketList />} />
//         <Route path="/admin" element={<AdminPanel />} /> */}
//         <Route path='/dashboard' element={<Dashboard /> } />
//         <Route path='/create-ticket' element={<TicketCreation />}/>
//         <Route path='ticket-list' element={<TicketList/>}/>
//         <Route path='admin' element={<AdminPanel/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import TicketCreation from './Components/TicketCreation';
import TicketList from './Components/TicketList';
import AdminPanel from './Components/AdminPanel';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-ticket' element={<TicketCreation />} />
        <Route path='/ticket-list' element={<TicketList />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;

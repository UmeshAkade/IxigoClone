// // import React from 'react'
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import {Login} from "./Pages/Login/Login.js";
// // import {Dashboard} from './Pages/Dashboard/Dashboard.js'
// // import { Home } from './Pages/Home/Home'
// // import OTPVerification from './Pages/Login/OTPVerification.js';

// // import { routes } from './Routes/routes'
// // export const App = () => {
// //   return (
// //     <div>

// //      <BrowserRouter>
// //         <Routes>

// //           <Route path="/" element={<Home/>} />
// //           <Route path="/Home" element={<Home/>} />
// //           <Route path="/Login" element={<Login />} />
// //           <Route path="/OTPVerification" element={<OTPVerification />} />
// //           <Route path="/Dashboard" element={<Dashboard/>} />
// //         </Routes>
// //       </BrowserRouter>
// //     </div>

// //   )
// // }

// // import React from 'react'
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import {Login} from "./Pages/Login/Login.js";
// // import {Dashboard} from './Pages/Dashboard/Dashboard.js'
// // import { Home } from './Pages/Home/Home'
// // // import { OtpVerfication} from './Pages/Login/OTPVerification.js'
// // import OTPVerification from './Pages/Login/OTPVerification.js';
// // import { routes } from './Routes/routes'
// // export const App = () => {
// //   return (
// //     <div>

// //      <BrowserRouter>
// //         <Routes>

// //           <Route path="/" element={<Home/>} />
// //           <Route path="/Home" element={<Home/>} />
// //           <Route path="/Login" element={<Login />} />
// //           <Route path="/OTPVerification" element={<OTPVerification/>} />
// //           <Route path="/Dashboard" element={<Dashboard/>} />
// //         </Routes>
// //       </BrowserRouter>
// //     </div>

// //   )
// // }

// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Login} from "./Pages/Login/Login.js";
// import {Dashboard} from './Pages/Dashboard/Dashboard.js'
// import { Home } from './Pages/Home/Home'
// import OTPVerification from './Pages/Login/OTPVerification.js';
// import Profile from './Pages/Profile.js'
// import { routes } from './Routes/routes'
// export const App = () => {
//   return (
//     <div>

//      <BrowserRouter>
//         <Routes>

//           <Route path="/" element={<Home/>} />
//           <Route path="/Home" element={<Home/>} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/OTPVerification" element={<OTPVerification/>} />
//           <Route path="/Dashboard" element={<Dashboard/>} />
//           <Route path="/Profile" element={<Profile/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>

//   )
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import LoginPage from "./Pages/LoginPage";
import LoginPage from "./Pages/Login_page";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import AboutUs from "./components/AboutUs";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] =  useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
           <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<ContactUs />} />

        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

// import React from "react";
// import Home from "./home/Home";
// // import Course from "./components/Course";
// import { Toaster } from "react-hot-toast";
// // import Contact from "./components/Contact";
// import Signup from "./components/Signup";

// import { Route, Routes } from "react-router-dom";
// import Courses from "./courses/Courses";
// import Contact from "./components/Contact";
// function App() {
//   return (
//     <>
//       {
//         /* <Home />
//       <Course /> */
//         <div className="dark:bg-slate-900 dark:text-white">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/course" element={<Courses />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/Contact" element={<Contact />} />
//           </Routes>
//           <Toaster/>
//         </div>
//       }
//     </>
//   );
// }

// export default App;

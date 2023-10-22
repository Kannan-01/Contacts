import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Create from './Pages/Create'
import View from './Pages/View'
import Edit from './Pages/Edit'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
    </div>
  );
}
export default App;

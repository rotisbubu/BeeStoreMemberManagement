import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Member from "./Member";
import CreateMember from "./CreateMember";
import UpdateMember from "./UpdateMember";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Member />} />
          <Route path="/createMember" element={<CreateMember />} />
          <Route path="/updateMember/:id" element={<UpdateMember />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

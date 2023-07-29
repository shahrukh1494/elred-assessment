import React, { useState } from "react";
import "./App.css";
import Biopage from "./BioPage";
import "tailwindcss/tailwind.css";

function App() {
  const [editAboutMe, setEditAboutMe] = useState(false);

  return (
    <div className="my-8">
      <Biopage editAboutMe={editAboutMe} setEditAboutMe={setEditAboutMe} />
    </div>
  );
}

export default App;

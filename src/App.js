import React from "react";
import "./App.css";

import { HeaderComponent } from "./components/header/HeaderComponent";
import { FormComponent } from "./components/form/FormComponent";
import { ProfileImageComponent } from "./components/profile-image/ProfileImageComponent";

function App() {
  return (
    <main id="main-area">
      <section id="register">
        <div className="row m-0">
          <div className="col-lg-4 offset-lg-2">
            <HeaderComponent />
            <ProfileImageComponent />
            <FormComponent />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

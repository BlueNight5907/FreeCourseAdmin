/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";
import { AuthProvider } from "context/authContext";
import { CourseProvider } from "context/courseContext";
import { MessageProvider } from "context/messageContext";
import "prismjs/themes/prism-tomorrow.css";

ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <AuthProvider>
        <CourseProvider>
          <MessageProvider>
            <App />
          </MessageProvider>
        </CourseProvider>
      </AuthProvider>
    </SoftUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

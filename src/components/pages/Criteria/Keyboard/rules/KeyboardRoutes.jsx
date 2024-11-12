// KeyboardRoutes.jsx
import React from "react";
import { Route } from "react-router-dom";
import NonintTabFail from "./Failures/NonintTabFail";
import NonintTabSucc from "./Success/NonintTabSucc";

const KeyboardRoutes = () => (
  <>
    <Route
      path="/keyboard/noninteractive-tabindex_success"
      element={<NonintTabSucc />}
    />
    <Route
      path="/keyboard/noninteractive-tabindex_failure"
      element={<NonintTabFail />}
    />
  </>
);

export default KeyboardRoutes;

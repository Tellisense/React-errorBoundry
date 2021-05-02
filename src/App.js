import React from "react";

import ErrorBoundary from "./ErrorBoundary";

import BuggyCounter from "./component/BuggyCounter";

export default function App() {
  return (
    <ErrorBoundary>
      <BuggyCounter />
      <BuggyCounter />
    </ErrorBoundary>
  );
}

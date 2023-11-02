import React from "react";

export default function EventSheet(nameFromApp) {
  const showAlert = () => alert("Hello Button by " + nameFromApp.name);
  return (
    <>
      <div>EventSheet</div>
      <button onClick={showAlert}>Hello Button</button>
    </>
  );
}

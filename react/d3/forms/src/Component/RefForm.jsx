import React, { useRef } from "react";

function UncontrolledForm() {
  //   const nameInputRef = useRef(null);
  const name = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameVal = name.current.value;
    alert(nameVal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={name} defaultValue="Initial Name" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;

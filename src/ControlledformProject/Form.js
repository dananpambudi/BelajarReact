import React, { useState } from 'react';

const style = {
  margin: '10px'
};

export default function Form() {
  const [firstname, setfirstname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [completename, setcompletename] = useState();
  const handlesubmit = (e) => {
    e.preventDefault();
    const obj = { firstname, lastname };
    setcompletename(obj);
    console.log(obj.firstname);
  };

  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          name=""
          placeholder="First Name"
          id="first"
          style={style}
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input type="text" name="" placeholder="Last Name" id="last" onChange={(e) => setlastname(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(completename)} </pre>
    </div>
  );
}

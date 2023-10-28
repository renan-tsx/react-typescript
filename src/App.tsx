import React from "react";
import { ButtonCount } from "./components/ButtonCount";
import { Input } from "./components/Input";

function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  return (
    <>
      <ButtonCount />

      <hr />

      <Input
        label="Name"
        id="name"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <Input
        label="Date"
        id="date"
        type="date"
        value={date}
        onChange={(event) => setDate(event.currentTarget.value)}
      />
      <Input
        label="Hours"
        id="hours"
        type="time"
        value={time}
        onChange={(event) => setTime(event.currentTarget.value)}
      />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Date: {date}</p>
      <p>Date: {time}</p>
    </>
  );
}

export default App;

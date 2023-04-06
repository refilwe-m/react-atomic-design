import React from "react";

import {
  Header,
  Button,
  ErrorText,
  Avatar,
  ClockPanel,
  FormPanel,
  JobPanel,
} from "./components";

function App() {
  return (
    <div className="App pt-10">
      <Header
        title="Atoms"
        className="underline text-white text-6xl font-bold text-center mb-8"
      />

      <section className="flex justify-evenly">
        <Avatar imgSrc="https://picsum.photos/200" onlineStatus="Online" />
        <Avatar imgSrc="https://picsum.photos/200" />
        <Avatar imgSrc="https://picsum.photos/200" onlineStatus="Offline" />
      </section>

      <section className="flex justify-evenly mt-8">
        <Button text="Default" />
        <Button text="Outline" className="px-3 py-1" variant="outline" />
        <Button text="Text" variant="text" />
        <Button text="Outline with Delete" func="delete" variant="outline" />
      </section>
    </div>
  );
}

export default App;

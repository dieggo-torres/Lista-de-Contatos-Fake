import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://dieggo-torres.github.io/curriculo-diego-moura-torres/imagens/foto-perfil-diego.png" />
      {contacts.map((contact) => (
        <Card
          key={contact.id}
          contactId={contact.id}
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./styles.css";

interface IContact {
  name: string;
  phoneNumber: string;
}

export default function App() {
  const title = "Contact Tracing App";

  const [newContact, setNewContact] = useState<IContact>({
    name: "",
    phoneNumber: ""
  });

  const [contacts, setContacts] = useState<IContact[]>([]);

  const add = () => {
    setContacts([...contacts, newContact]);
    setNewContact({ ...setNewContact, name: "", phoneNumber: "" });
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContact({ ...newContact, name: e.target.value });
  };

  return (
    <div className="App">
      <h1>{title}</h1>

      <label>
        Name:
        <input type="text" value={newContact.name} onChange={changeName} />
      </label>

      <label>
        Phone number:
        <input
          type="text"
          value={newContact.phoneNumber}
          onChange={(e) => {
            setNewContact({ ...newContact, phoneNumber: e.target.value });
          }}
        />
      </label>

      <button onClick={add}>Add</button>

      <ul>
        {contacts
          .sort((a, b) => {
            return a.name < b.name ? -1 : 1;
          })
          .map((contact) => {
            return (
              <li>
                {contact.name}, {contact.phoneNumber}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

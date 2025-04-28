import React from "react";
import { ContactItem, Container } from "./styles";
import { contacts } from "../../utils/consts";

const Contact = () => {
  const handleOnClick = (link) => {
    if (link) window.open(link);
  };

  const renderContacts = (item, index) => {
    return (
      <ContactItem key={index} title={item.title} onClick={() => handleOnClick(item.link)}>
        <img src={item.image} />
      </ContactItem>
    );
  };

  return (
    contacts.length > 0 && (
      <Container>
        <h2>Contacts</h2>

        <div className="cards">{contacts.map(renderContacts)}</div>
      </Container>
    )
  );
};

export default Contact;

import React from "react";
import { CardItem, Container } from "./styles";

const Card = ({ title, parentRef, data = [] }) => {
  const renderCard = (item, index) => {
    return (
      <CardItem
        key={index}
        backgroundColor={item.backgroundColor}
        showBlack={item.showBlack}
      >
        <img src={item.image} />
        {item.title && <span dangerouslySetInnerHTML={{__html: item.title}} />}

        {item.projectName && (
          <div>
            <strong>{item.projectName}</strong>
            <span>{item.projectDescription}</span>

            {item.buttomLabel && (
              <button type="button" onClick={item.onClick}>
                {item.buttomLabel}
              </button>
            )}
          </div>
        )}
      </CardItem>
    );
  };

  return (
    data.length > 0 && (
      <Container ref={parentRef} data-aos="fade-up">
        <h2>{title}</h2>

        <div className="cards">{data.map(renderCard)}</div>
      </Container>
    )
  );
};

export default Card;

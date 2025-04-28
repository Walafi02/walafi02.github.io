import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 40px;

  h2 {
    color: rgba(0, 75, 128, 1);
    font-size: 28px;
    font-weight: 600;
    text-transform: capitalize;
  }

  div.cards {
    display: flex;
  }
`;

export const ContactItem = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 22px;

  &:hover {
    transform: scale(1.05) rotate(0.5deg);
  }
  
  img {
    height: 4rem;
    width: 4rem;
  }
`;

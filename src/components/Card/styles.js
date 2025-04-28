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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || "#F9C95E"};
  border-radius: 16px;

  &:hover {
    transform: scale(1.05) rotate(0.5deg);
  }

  img {
    height: 6rem;
    width: 6rem;
    margin: 18px auto;
  }

  > span {
    padding-bottom: 18px;
    font-size: 26px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
    flex: 1;
    padding: 18px;

    strong {
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    span {
      flex: 1;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
    }

    button {
      background-color: rgba(223, 231, 228, 1);
      border: 1px solid rgba(215, 228, 224, 1);
      padding: 10px 8px;
      font-size: 18px;
      font-weight: 600;
      border-radius: 4px;
      margin-top: 16px;
      cursor: pointer;
    }
  }
`;

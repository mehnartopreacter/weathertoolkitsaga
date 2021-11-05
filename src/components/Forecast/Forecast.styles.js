import styled from "styled-components";

export const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px 0;

  .cast-week-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    background-color: papayawhip;
    margin: 0 10px;
    padding: 10px;
    min-width: 100px;
    border-radius: 5%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

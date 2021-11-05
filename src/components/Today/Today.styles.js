import styled from "styled-components";

export const TodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: aliceblue;
  border-radius: 5%;
  min-width: 600px;
  padding: 40px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .city {
    text-align: center;
    font-size: 50px;
    margin: 10px;
  }

  .today-weather {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .temp {
    font-size: 60px;
    margin: 10px;
  }

  .today-cast {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 10px;
  }

  .condition-text {
    margin: 0;
  }

  .cast-icon {
    display: flex;
    justify-content: center;
  }

  .today-details p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
    margin: 0px 10px;
  }
`;

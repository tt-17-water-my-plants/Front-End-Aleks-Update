import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  margin: auto;

  form {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30%;
  }

  form input {
    padding: 0 10px;
    margin: 10px 10px;
  }
`;

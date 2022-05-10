import styled from "styled-components";

export const AlertMessage = styled.div`
  position: absolute;
  width: 300px;
  height: 50px;
  top: 60px;
  right: -60px;
  padding: 10px;
  margin: 10px;
  animation: fade 4s 2s;

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  } ;
`;

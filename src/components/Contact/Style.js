import styled from "styled-components";
import { colors } from "../../Style";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Line = styled.div`
  display: flex;
  flex: 1 1 20%;
  justify-content: center;
  align-items: center;
  & p:nth-child(1) {
    color: ${colors.gray};
    font-family: "Playfair Display";
    font-weight: bold;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    margin-right: 1rem;
  }
  & p:nth-child(2),
  & :any-link {
    color: ${colors.leadRed};
    font-family: "Playfair Display";
    font-weight: bold;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
  }
  & a:any-link {
    cursor: pointer;
  }
`;

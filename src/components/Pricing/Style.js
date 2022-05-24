import styled from "styled-components";
import { colors, breakingPointPhoneWOPx } from "../../Style";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  align-items: center;

  /* border: 1px solid ${colors.lighterGray}; */
`;

export const SubTitle = styled.div`
  font-family: "Lato";
  letter-spacing: 0.02rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  color: ${colors.gray};
  text-align: center;
  margin: 0.3rem 0 1.5rem 0;
  max-width: 50ch;
`;

export const Title = styled.div`
  font-family: "Playfair Display";
  font-weight: bold;
  letter-spacing: 0.05rem;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.gray};
  /* word-wrap: break-word; */

  & + :not(${SubTitle}) {
    margin-top: 3.5rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.15rem;
  background-color: ${colors.leadRed};
  position: relative;
  margin: 2rem 0 2.5rem 0;

  &::after {
    position: absolute;
    content: "";
    width: 4rem;
    aspect-ratio: 1;
    border-radius: 50%;
    right: ${(props) => {
      return props.side !== 1 ? "2.5rem" : "auto";
    }};
    left: ${(props) => {
      return props.side !== 1 ? "auto" : "2.5rem";
    }};
    top: calc(70% - 1.5rem);
    /* right: 2.5rem; */
    opacity: 0.9;
    background-color: ${colors.leadRed};
  }
`;

export const Line = styled.div`
  display: flex;
  margin: 1.2rem 0;
  color: ${colors.gray};
  font-size: 1.2rem;
  padding-left: 1rem;
`;

export const LineLeft = styled.span`
  font-weight: bold;
  font-family: "Playfair Display";
  font-weight: 600;
`;

export const LineRight = styled.span`
  font-family: "Lato";
  font-weight: 300;
`;

export const TitleWDivider = styled(Line)`
  font-weight: bold;
  position: relative;
  max-width: 50ch;
  text-align: center;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0.13rem;
    left: 0;
    bottom: -0.1rem;
    background-color: ${colors.lighterLeadRed};
  }
`;

import styled, { createGlobalStyle } from "styled-components";

export const breakingPointPhone = "500px";

export const GlobalStyle = createGlobalStyle`
html, body{
    margin:0;
    padding: 0;
    margin:0 auto;
}

*{
    box-sizing:border-box
    }
`;

export const colors = {
  gray: "#434343",
  ecrue: "#f8f5f2",
};

export const BodyContainer = styled.div`
  width: clamp(100px, 90%, 1200px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MainTitle = styled.div`
  font-family: "Playfair Display";
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: ${colors.gray};
`;
export const MainDescription = styled.div`
  font-family: "Lato";
  text-align: center;
  color: ${colors.gray};
  margin: 1rem 0;
`;

export const SectionTitle = styled.div`
  margin: 1rem 0;
  align-self: flex-start;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.gray};
  font-family: "Playfair Display";
`;

export const Classes = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${colors.ecrue};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

import styled from "styled-components";
import { breakingPointPhone, colors } from "../../Style";

export const OpenScheduleTable = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 0.3rem;
  margin-bottom: 2rem;
`;

export const OpenScheduleTableColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.3rem;
`;
export const OpenScheduleTableColumnDayName = styled.div`
  width: 100%;
  text-transform: capitalize;
  text-align: center;
  margin-top: 1rem;
  font-family: "Lato";
`;
export const OpenScheduleTableColumnDate = styled.div`
  width: 100%;
  font-family: "Lato";
  text-align: center;
  margin-bottom: 1rem;
`;
export const OpenScheduleTableActivity = styled.div`
  position: relative;
  border: 1px solid ${colors.lighterGray};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  font-family: "Lato";
  border-radius: 0.3rem;
  text-transform: capitalize;
  gap: 0.2rem;
  padding: 0.4rem;
  background-color: ${colors.white};
  box-shadow: 0.1rem 0.1rem 5px ${colors.lighterGray};
  transition: all 250ms;
  padding: 1rem;

  &:hover {
    transform: scale(1.1);
    z-index: 20;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: ${(props) => {
      return props.type === "Pole" ? "#ffb1d6" : "#d19ff4";
    }};
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    top: 0;
    left: 0;
  }
`;

export const SwitchDateButtonWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SwitchDateButton = styled.button`
  display: inline-block;
  border: none;
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${colors.darkEcrue};
  transition: all 100ms;

  &:active {
    transform: scale(1.2);
  }
`;

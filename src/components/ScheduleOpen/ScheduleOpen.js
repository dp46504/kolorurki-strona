import React, { useEffect, useState } from "react";
import {
  OpenScheduleTable,
  OpenScheduleTableColumn,
  OpenScheduleTableColumnDayName,
  OpenScheduleTableColumnDate,
  OpenScheduleTableActivity,
  SwitchDateButton,
  SwitchDateButtonWrapper,
} from "./Style";
import generateTableData from "./generateTableData.js";
import { breakingPointPhoneWOPx } from "../../Style";
import { ReactComponent as BackArrow } from "../../assets/back-icon.svg";
import ModalForm from "../ModalForm/ModalForm";

function ScheduleOpen(props) {
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [numberOfDays, setNumberOfDays] = useState(
    window.innerWidth <= breakingPointPhoneWOPx ? 3 : 5
  );
  const [tableData, setTableData] = useState(null);

  // Form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [activity, setActivity] = useState(null);

  // Initial fetching data and creating table
  useEffect(() => {
    setTableData(generateTableData(new Date(), numberOfDays));
  }, []);

  // // Rerender on change of number of days
  // useEffect(() => {
  //   setTableData(generateTableData(activeStartDate, numberOfDays));
  // }, [numberOfDays]);

  // Rerender on change of startDate
  useEffect(() => {
    setTableData(generateTableData(activeStartDate, numberOfDays));
  }, [activeStartDate]);

  return (
    <>
      {/* Form modal */}
      <ModalForm
        isOpen={isModalOpen}
        isOpenSetter={setIsModalOpen}
        activity={activity}
        nameSetter={setName}
        surnameSetter={setSurname}
        telephoneSetter={setTelephone}
      ></ModalForm>
      {/* Buttons */}
      <SwitchDateButtonWrapper>
        <SwitchDateButton
          onClick={() => {
            // Disable going back to the past
            if (activeStartDate.toDateString() === new Date().toDateString())
              return;
            setActiveStartDate((lastDate) => {
              return new Date(
                lastDate.getFullYear(),
                lastDate.getMonth(),
                lastDate.getDate() - numberOfDays
              );
            });
          }}
        >
          <BackArrow
            width="20"
            height="20"
            preserveAspectRatio="xMidYMid meet"
          ></BackArrow>
        </SwitchDateButton>

        <SwitchDateButton
          onClick={() => {
            setActiveStartDate((lastDate) => {
              return new Date(
                lastDate.getFullYear(),
                lastDate.getMonth(),
                lastDate.getDate() + numberOfDays
              );
            });
          }}
        >
          <BackArrow
            width="20"
            height="20"
            preserveAspectRatio="xMidYMid meet"
            style={{ transform: "rotate(180deg)" }}
          ></BackArrow>
        </SwitchDateButton>
      </SwitchDateButtonWrapper>
      <OpenScheduleTable>
        {tableData &&
          tableData.map((columnInfo) => {
            return (
              <OpenScheduleTableColumn>
                <OpenScheduleTableColumnDayName>
                  {columnInfo.info.dayName}
                </OpenScheduleTableColumnDayName>
                <OpenScheduleTableColumnDate>{`${columnInfo.info.date.getDate()}/${
                  columnInfo.info.date.getMonth() + 1
                }`}</OpenScheduleTableColumnDate>
                {columnInfo.data.map((activityInfo) => {
                  return (
                    <OpenScheduleTableActivity
                      type={activityInfo.type}
                      onClick={() => {
                        // After clicking on activity
                        setActivity({
                          date: columnInfo.info.date,
                          type: activityInfo.type,
                          start: activityInfo.start,
                          end: activityInfo.end,
                        });
                        setIsModalOpen(true);
                      }}
                    >
                      <span>{activityInfo.type}</span>
                      <span>
                        {activityInfo.start}-{activityInfo.end}
                      </span>
                    </OpenScheduleTableActivity>
                  );
                })}
              </OpenScheduleTableColumn>
            );
          })}
      </OpenScheduleTable>
    </>
  );
}

export default ScheduleOpen;

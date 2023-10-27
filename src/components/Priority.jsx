/* eslint-disable react/prop-types */
import styled from "styled-components";

// import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";

const Select = styled.select`
  width: 95px;
  height: 35px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 10px;
  -webkit-appearance: none;
`;

const Option = styled.option`
  /* Add any specific styling for options here */
  /* For example, you can remove text-decoration: underline; */
  text-decoration: none;
`;

function Priority({ priority, setPriority }) {
  console.log(priority);
  return (
    <>
      <Select
        id="priority"
        name="selectedPriority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <Option value="P1">Priority P1</Option>
        <Option value="P2">Priority P2</Option>
        <Option value="P3">Priority P3</Option>
        <Option selected value="P4">
          Priority P4
        </Option>
      </Select>
    </>
  );
}

export default Priority;

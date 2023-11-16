import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProjectContent from "./ProjectContent";

const ContentStyle = styled.div`
  display: flex;
  height: 800px;
  padding-top: 10px;
  background-color: #fbffdc;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  font-family: Montserrat;
`;

function NewProject() {
  const { id } = useParams();
  return (
    <ContentStyle>
      <ProjectContent Id={id} />
    </ContentStyle>
  );
}

export default NewProject;

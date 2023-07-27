import styled from '@emotion/styled';

const Message = styled.p`
  font-family: 500;
  font-size: 28px;
`;

const ProjectDescription = () => (
  <Message>
    Цей додаток було створено з метою демонстрації потенційному роботодавцю моїх
    навичок роботи з HTML, CSS, JavaScript, React, React Router та Zustand.
    Додаток було створено без бібліоткеки Axios для вдосконалення навичок роботи
    з HTTP-запитами.
  </Message>
);

export default ProjectDescription;

import styled from 'styled-components';

export const Title = styled.h2`
  text-align: left;
`;

export const Item = styled.li`
  margin-right: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DeleteBtn = styled.button`
  height: 20px;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 0px 25px;
  background: #a9dbd8;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  margin-left: 10px;

  &:hover {
    color: #000;
    background-color: #ecf0f4;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  }
`;

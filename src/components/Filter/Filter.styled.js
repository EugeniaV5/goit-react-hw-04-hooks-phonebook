import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  width: 100%;
  height: 20px;

  padding-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: none;
    border-color: #76e8e0;
  }
`;

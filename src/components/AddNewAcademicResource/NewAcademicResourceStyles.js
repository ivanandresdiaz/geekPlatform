import styled from "styled-components";

export const SelectCat = styled.select`
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  width: 250px;
  margin-bottom: 20px;
  margin-top: 8px;
  border: none;
  font-size: 14px;
  border: 1px solid #f0f0f0;

  &:focus {
    color: #ff3b53;
  }

  &::placeholder {
    color: #525151;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

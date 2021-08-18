import styled from "styled-components";

export const IconMenu = styled.img`
  width: 26px;
  height: 20px;
  border: none;
  cursor: pointer;
`;

export const IconButton = styled.span`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #ff3b53;
  border-radius: 50%;
  padding: 5px;
  margin: 2px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
`;

export const IconBadge = styled.span`
  background-color: #ff3b53;
  border-radius: 50%;
  padding: 5px;
  margin: 2px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 200px;
  transform: translateX(-45%);
  background-color: #ffffff;
  box-shadow: 2px -1px 24px -3px rgba(0, 0, 0, 0.46);
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  box-shadow: #333333;
`;

export const MenuItems = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: #333333 500ms;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #ff3b53;
  }
`;

export const Welcome = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: #333333 500ms;
  font-weight: 700;
`;

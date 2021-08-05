import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  height: 100%;
  position: fixed;
  transition: all 1.3s;
  width: 100%;
`;

export const ContainerModal = styled.div`
  width: 730px;
  height: 360;
  background: #fff;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 5px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

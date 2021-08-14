import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

export const ContainerModal = styled(motion.div)`
  position: fixed;
  background: white;
  width: 730px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: 10;
`;

export const ContainerClose = styled(motion.div)`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
export const CloseModalButton = styled(motion.button)`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 60px;
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
  z-index: 9;
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

export const TitleModal = styled.h1`
  color: #662e9b;
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

export const SubtitleModal = styled.h2`
  color: #323941;
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const ResetPassword = styled.a`
  color: #ff3b53;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const LabelModal = styled.label`
  color: #323941;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
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

export const FormTextArea = styled.textarea`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  width: 300px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

import styled from "styled-components";

export const DivContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-color: #f6f6f6;
`;

export const TitleLogin = styled.h1`
  color: #662e9b;
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

export const SubtitleLogin = styled.h2`
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

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelLogin = styled.label`
  color: #323941;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  width: 300px;
  margin-bottom: 20px;
  margin-top  : 10px;
  border: none;
  font-size: 14px;
  border: 1px solid #662e9b;

  &::placeholder {
    color: #242424;
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

export const ContainerLogin = styled.div`
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
  width: 500px;
  height: 600px;
  border-radius: 5px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

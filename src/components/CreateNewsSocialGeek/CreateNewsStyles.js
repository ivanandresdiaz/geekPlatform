import styled from "styled-components";

export const ContainerNewPub = styled.div`
  width: 800px;
  margin: auto;
  height: 170px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  background-color: "#FFFFFE";
  margin-bottom: 20px;
`;

export const ShareTop = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;

export const ShareInput = styled.textarea`
  border: none;
  width: 80%;

  ::focus {
    outline: none;
  }
`;

export const ShareHr = styled.hr`
  margin: 20px;
`;

export const ShareBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShareOptions = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const ShareOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;

export const ShareIcon = styled.div`
  font-size: 18px;
  margin-right: 3px;
`;

//   .shareOptionText{
//       font-size: 14px;
//       font-weight: 500;
//   }

//   .shareButton{
//       border: none;
//       padding: 7px;
//       border-radius: 5px;
//       background-color: green;
//       font-weight: 500;
//       margin-right: 20px;
//       cursor: pointer;
//       color: white;
//   }

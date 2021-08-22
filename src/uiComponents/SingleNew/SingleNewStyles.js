import styled from 'styled-components';

export const Post = styled.div`
  width: 800px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: auto;
  margin-bottom: 30px;
  background-color: #fffffe;
`;

export const PostWrapper = styled.div`
  padding: 10px;
`;

export const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const PostProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
export const PostUsername = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
`;

export const PostDate = styled.span`
  font-size: 12px;
  margin: 0 10px;
`;
export const PostCenter = styled.div`
  margin: 20px 0;
  a{
    font-weight: 900;
  }
`;
export const PostImg = styled.img`
  margin-top: 20px;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;
export const PostBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PostBottomLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const LikeIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;
`;

export const LikeCounter = styled.p`
  font-size: 15px;
  margin-left: 10px;
`;

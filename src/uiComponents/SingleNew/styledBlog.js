/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ImgBlog = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
`;
export const DivComments = styled.div`
  div{
    display:${(props) => (props.showComments ? 'block' : 'none')}
  }
`;

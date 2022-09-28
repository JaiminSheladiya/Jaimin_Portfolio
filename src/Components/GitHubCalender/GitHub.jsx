import React from 'react'
import styled from 'styled-components';
import GithubCalender from "../../Assets/GitHubCalender.png";
import { device } from '../../responsive/device';

export const Title = styled.h1`
  font-size: 6.4rem;
  font-weight: 900;
  color: white;
  text-align : center;
  margin : auto;
  margin-bottom : 15px;
  @media ${device.mobileL} {
    font-size: 3rem;
  }
  @media ${device.mobileS} {
    font-size: 2rem;
  }`

  export const Container = styled.div`
  height: 100%;
  width: 100vw;
  padding: 2rem 0 2rem 0;
  overflow-x: hidden;
  margin : auto;
  margin-bottom: 8rem;
  display : flex;
  align-items : center;
  flex-direction : column;
`;

export const Image = styled.img`
  border : 1px solid #8685e8;
  border-radius : 12px;
  width : 100%;
  margin : auto
  @media ${device.mobileL} {
    font-size: 4rem;
  }
  @media ${device.mobileS} {
    font-size: 3rem;
  }`


const GitHub = () => {
  return (
    <Container>
        <Title>GitHub Contributions</Title>
        <a href='https://github.com/JaiminSheladiya' target='_blank'>
        <Image src={GithubCalender} />
        </a>
    </Container>
  )
}

export default GitHub
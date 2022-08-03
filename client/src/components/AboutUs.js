import styled from "styled-components";
import { aboutUs } from "../data/aboutUsData";
import { Icon } from "react-icons-kit";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { githubSquare } from "react-icons-kit/fa/githubSquare";

const AboutUs = () => {
  return (
    <>
      <BackgroundImage></BackgroundImage>
      <MainDiv>
        <ContactUs>Contact Us!</ContactUs>
        <Wrapper>
          {aboutUs.map((person) => {
            return (
              <>
                <Container>
                  <ImageBox>
                    <Img src={person.Info[1].imgSrc} />
                  </ImageBox>
                  <Overlay>
                    <Text>
                      <Name>{person.Info[0].fullName}</Name>
                      <ContactLinks
                        href={person.Info[2].linkedIn}
                        target="_blank"
                      >
                        <Icon size={32} icon={linkedinSquare} />
                      </ContactLinks>
                      <ContactLinks
                        href={person.Info[3].gitHub}
                        target="_blank"
                      >
                        <Icon size={32} icon={githubSquare} />
                      </ContactLinks>
                    </Text>
                  </Overlay>
                </Container>
              </>
            );
          })}
        </Wrapper>
      </MainDiv>
    </>
  );
};

const BackgroundImage = styled.div`
  background-image: url("https://i.pinimg.com/736x/82/6a/95/826a95fde43be06c60b5c1f5349587c3.jpg");
  background-repeat: repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100%;
  left: 10vw;
`;
const Name = styled.p`
  color: white;
  margin-right: 50px;
  font-weight: 600;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  animation: fadeIn 1s ease-in-out;

  /* justify-content: space-between; */

  padding: 25px;
  /* background-color: white; */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* width: 100%;
  height: 100%; */
`;
const ContactUs = styled.h1`
  margin-bottom: 30px;
  background: white;
  /* border: 4px solid black; */
  padding: 10px 40px;
  background-color: black;
  color: white;
  border-radius: 16px;
  font-size: 50px;
`;
const ContactLinks = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 35px;
`;
const Overlay = styled.div`
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease; */
  /* background-color: white; */
  /* border-radius: 5%;

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.1);
    font-weight: bold;
  } */
`;
const Text = styled.div`
  /* color: white; */
  color: white;
  font-size: 20px;
  position: absolute;
  width: 100%;
  top: 20%;
  left: 75%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  position: relative;
  transition: 1s;
  background-color: black;

  /* border: 4px solid black; */
`;

const ImageBox = styled.div`
  max-width: 250px;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: lightgrey solid 6px; */
  margin-top: 10px;
`;

const Img = styled.img`
  /* border-radius: 5%; */
  margin-top: 50px;

  height: 250px;
  transition: 1s ease-in-out;

  &:hover {
    transform: scale(1.5);
    margin-top: 50px;
    /* border: 1px solid white; */
  }

  /* border: 4px solid black; */
`;
const Wrapper = styled.div`
  display: flex;
  gap: 45px;

  /* justify-content: space-between; */

  padding: 25px;
  /* background-color: white; */
`;

export default AboutUs;

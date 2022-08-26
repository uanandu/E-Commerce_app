import styled from "styled-components"; // styled components

import { aboutUs } from "../data/aboutUsData"; // aboutUsData imported

// all icons imported from react-icons-kit
import { Icon } from "react-icons-kit";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { githubSquare } from "react-icons-kit/fa/githubSquare";

// AboutUs component for displaying our information
const AboutUs = () => {
  return (
    <>
      <BackgroundImage></BackgroundImage>
      <MainDiv>
        <ContactUs>
          <h1>Let's get in touch!</h1>
        <ImageContact src="https://media.giphy.com/media/1dMKKHdu90OYcOQxMv/giphy.gif" />
        </ContactUs>
        <Wrapper>
          {aboutUs.map((person) => {
            return (
              <>
                <Container>
                  <ImageBox>
                    <Img src={person.Info[1].imgSrc} />
                  </ImageBox>
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
                </Container>
              </>
            );
          })}
        </Wrapper>
      </MainDiv>
    </>
  );
};


// styled components
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

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  animation: fadeIn 1s ease-in-out;
  padding: 25px;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

`;
const ContactUs = styled.div`
position: absolute;
  margin-bottom: 30px;
  padding: 10px 40px;
  background-color: black;
  color: white;
  font-size: 50px;
  width: 89.3vw;
  height: 50vh;
  left: 10vw;
  top: 6vh;
  text-align: center;
`;

const ImageContact = styled.img``

const Wrapper = styled.div`
  display: flex;
  gap: 45px;
  padding: 25px;
`;

const Container = styled.div`
  position: relative;
  transition: 1s;
  background-color: black;
  top: 15vh;
  border: 2px solid white;
  border-radius: 10px;
`;

const ImageBox = styled.div`
  max-width: 250px;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Img = styled.img`
  margin-top: 50px;

  height: 250px;
  transition: 1s ease-in-out;

  &:hover {
    transform: scale(1.5);
    margin-top: 50px;
  }
`;

const Text = styled.div`
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

const Name = styled.p`
  color: white;
  margin-right: 50px;
  font-weight: 600;
`;

const ContactLinks = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 35px;
`;

export default AboutUs;

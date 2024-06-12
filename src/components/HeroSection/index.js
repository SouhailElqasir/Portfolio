import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import souhailImg from '../../images/souhail.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import CV from './CV2.pdf';

const HeroSection = () => {
  const openResume = () => {
    const resumePath =  CV;
    window.open(resumePath, '_blank');
  };
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton onClick={openResume}  target='display'>Check Resume</ResumeButton>
                        
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={souhailImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection

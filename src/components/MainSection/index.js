import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
    MainContainer,
    MainBg, 
    VideoBg, 
    MainContent, 
    MainH1, 
    MainP, 
    MainBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './MainElements';

const MainSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <MainContainer id='home'>
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg>
            <MainContent>
                <MainH1>Computer Programming Made Easy</MainH1>
                <MainP>
                    Sign up for a new account today and receive $100
                    discount towards your next course payment.
                </MainP>
                <MainBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover}
                     onMouseLeave={onHover}
                     primary="true"
                     dark="true">
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    );
};

export default MainSection;

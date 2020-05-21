import React from 'react';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import intro from 'assets/illustrations/intro.svg';
import { Wrapper, IntroWrapper, Details, Name, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>
          Hi, I'm
          <Name> Daniel Lindros</Name>
        </h1>
        <h4>A frontend developer.</h4>
      </Details>
      <Thumbnail>
        <img src={intro} alt="Introduction" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);

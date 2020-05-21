import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import who from 'assets/illustrations/who.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={who} alt="About me" />
      </Thumbnail>
      <Details>
        <h1>Who am I?</h1>
        <p>As a long time QA Engineer, I have since embarked on a new and exciting journey as a web developer.</p>
        <Button as={AnchorLink} href="#contact">
          Get in touch!
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);

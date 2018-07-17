import React from 'react'
import FaFacebook from 'react-icons/lib/fa/facebook-official'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaVimeo from 'react-icons/lib/fa/vimeo-square'
import FaGithub from 'react-icons/lib/fa/github'
import styled from 'styled-components'

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.arsenic};
`
const Wrapper = styled.div`
  align-items: end;
  display: flex;
  flex-direction: column;
  justify-content: end;
  > a:first-child {
    margin-left: 0;
    padding-left: 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
`

const A = styled.a`
  color: ${({ theme }) => theme.colors.burntSienna};
`

export const SocialIcons = () => (
  <Wrapper>
    <div>
      <Title>CONNECT WITH US</Title>
    </div>
    <Grid>
      <A href="https://www.facebook.com/HighFivesFoundation/">
        <FaFacebook size="36px" />
      </A>
      <A href="https://twitter.com/Hi5sFoundation">
        <FaTwitter size="36px" />
      </A>
      <A href="https://www.instagram.com/hi5sfoundation/">
        <FaInstagram size="36px" />
      </A>
      <A href="https://vimeo.com/hi5sfoundation/">
        <FaVimeo size="36px" />
      </A>
      <A href="https://github.com/HighFivesFoundation">
        <FaGithub size="36px" />
      </A>
    </Grid>
  </Wrapper>
)

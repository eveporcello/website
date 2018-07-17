import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowRight from 'react-icons/lib/fa/arrow-right'

import { SocialIcons } from './HomeComponents/SocialIcons'
import { HighFivesLogo } from './Icons'
import { theme } from './utils/theme'

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.ecruWhite};
  display: grid;
  grid-template-areas:
    'info'
    'connect'
    'schedule'
    'mailing'
    'banner'
    'bottom';
  width: 100%;

  // ! Need to check if we have established breakpoints yet.
  @media (min-width: 736px) {
    grid-template-areas:
      'info info connect connect'
      'schedule schedule mailing mailing'
      'banner banner banner banner'
      'bottom bottom bottom bottom';
  }
`

const StyledGridArea = styled.div`
  background-color: ${({ color }) => color};
  grid-area: ${({ area }) => area};
  height: 100px;
  padding: 1rem 2rem;
`

// Create to forward props onto <Link />
const UnstyledLink = props => <Link {...props} />

const StyledLink = styled(UnstyledLink)`
  color: ${({ theme }) => theme.colors.ecruWhite};
  font-size: 1.65rem;
`
const Info = StyledGridArea.extend`
  display: flex;
  flex-direction: column;

  a {
    align-items: center;
    color: ${({ theme }) => theme.colors.burntSienna};
    display: flex;
    text-transform: uppercase;
  }
`

const Schedule = StyledGridArea.extend`
  a {
    color ${({ theme }) => theme.colors.burntSienna};
  }
`

const Connect = StyledGridArea.extend`
  height: unset;
`

const Mailing = StyledGridArea.extend`
  align-items: end;
  display: flex;
  flex-direction: column;
  height: unset;

  h2 {
    color: ${({ theme }) => theme.colors.arsenic};
    margin: unset;
    padding-bottom: 1.5rem;
    text-transform: uppercase;
  }

  form {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    width: 100%;
    input {
      padding: 1rem;
      width: 70%;
    }
    button {
      background-color: ${({ theme }) => theme.colors.burntSienna};
      border: none;
      color: ${({ theme }) => theme.colors.ecruWhite};
      outline: none;
      padding: 1rem;
      width: 30%;
    }
  }

  @media (min-width: 736px) {
    form {
      input {
        padding: 1rem;
        width: 280px;
      }
      button {
        background-color: ${({ theme }) => theme.colors.burntSienna};
        border: none;
        color: ${({ theme }) => theme.colors.ecruWhite};
        margin-left: 15px;
        outline: none;
        padding: 1rem;
        width: 120px;
      }
    }
  }
`

const Banner = StyledGridArea.extend`
  background-color: ${({ theme }) => theme.colors.arsenic};
  display: flex;
  flex-direction: column;
  height: unset;

  @media (min-width: 736px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  ul {
    align-items: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: unset;
    padding: 1rem 0;

    @media (min-width: 736px) {
      align-items: center;
      flex-direction: row;
      justify-content: end;
    }

    li {
      letter-spacing: 1.5px;
      margin: 0.65rem 0;

      @media (min-width: 736px) {
        margin: 0 1rem;
      }
    }

    li:last-child {
      background-color: ${({ theme }) => theme.colors.burntSienna};
      padding: 0.5rem 1.5rem;
    }
  }
`

const Bottom = StyledGridArea.extend`
  background-color: ${({ theme }) => theme.colors.arsenic};
  color: ${({ theme }) => theme.colors.ecruWhite};
  display: flex;
  flex-direction: column;
  height: unset;
  justify-content: center;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 736px) {
      flex-direction: row;
    }

    p {
      margin: 0.5rem;
    }
  }

  div:last-child {
    color: ${({ theme }) => theme.colors.burntSienna};
  }

  @media (min-width: 736px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Footer = () => (
  <StyledFooter>
    <Info area="info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, incidunt?
      </p>
      <Link to="/">
        More info <FaArrowRight />
      </Link>
    </Info>
    <Connect area="connect">
      <SocialIcons />
    </Connect>
    <Schedule area="schedule">
      <Link to="/">
        View Full Schedule <FaArrowRight />
      </Link>
    </Schedule>
    <Mailing area="mailing">
      <h2>Join Our Mailing List</h2>
      <form>
        <input placeholder="Email Address" type="text" />
        <button type="submit">Submit</button>
      </form>
    </Mailing>
    <Banner area="banner">
      <HighFivesLogo primaryColor={theme.colors.burntSienna} />
      <ul>
        <li>
          <StyledLink to="/about"> About </StyledLink>
        </li>
        <li>
          <StyledLink to="/programs"> Programs </StyledLink>
        </li>
        <li>
          <StyledLink to="/events"> Events </StyledLink>
        </li>
        <li>
          <StyledLink to="/apply"> Apply </StyledLink>
        </li>
        <li>
          <StyledLink to="/donate"> Donate </StyledLink>
        </li>
      </ul>
    </Banner>
    <Bottom area="bottom">
      <div>
        <p> symbol 1 </p> <p> symbol 2 </p>
        <p> ©2018 High Fives Foundation.All Rights Reserved. </p>
      </div>
      <div>
        <FaArrowUp />
        <p> Back to Top </p>
      </div>
    </Bottom>
  </StyledFooter>
)

export { Footer }

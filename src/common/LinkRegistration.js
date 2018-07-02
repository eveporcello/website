import React from 'react'
import PropTypes from 'prop-types'
import {Link} from '@reach/router'
import styled from 'styled-components'
import {FaLongArrowRight as Icon} from 'react-icons/lib/fa'

const Button = styled.button`
  border: 0;
  background: none;
  text-align: left;
  justify-content: flex-start;
`

export const LinkRegistration = ({className, text, showIcon=true, type='link'}) => {
  let LinkType

  const NavLink = (
    <Link className={className} to='/registration'>
      {text || 'Athlete Application Registration'}
      <Icon />
    </Link>
  )

  switch (type) {
    case 'button':
      LinkType = (
        <Button>
          {NavLink}
        </Button>
      )
      break

    default:
      LinkType = NavLink
  }

  return LinkType
}

LinkRegistration.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
}

export const StyledLinkRegistration = styled(LinkRegistration).attrs({
  className: 'primary'
})`
  display: inline-block;
  color: ${({ theme }) => theme.colors.burntSienna};
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;

  &:visited,
  &:hover {
    color: ${({ theme }) => theme.colors.burntSienna};
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.burntSienna};
  }

  svg {
    margin-left: .5em;
  }
`

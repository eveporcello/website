import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FaExternalLink from 'react-icons/lib/fa/external-link'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border: dashed 8px #aaa;
  border-radius: 20px;
  margin: 10px;

  h2 {
    margin: 10px;
    flex-basis: 100%;
  }

  p {
    margin: 0;
    flex-basis: 100%;
  }
`

export const Placeholder = ({
  title,
  route,
  issues,
  wireframe,
  thumbnail,
  children
}) => (
  <Container>
    <h2>{title}</h2>
    <p>
      Wireframe: &nbsp;
      <a href={wireframe}>
        <FaExternalLink />
      </a>
    </p>
    <p>
      Component Location: <b>{route}</b>
    </p>
    <div>
      <h3>Issues</h3>
      <ul>
        {issues.map((issue, i) => (
          <a key={i} href={issue.url}>
            <li>{issue.title}</li>
          </a>
        ))}
      </ul>
    </div>
    {children}
    <img src={thumbnail} alt='' />
  </Container>
)

Placeholder.propTypes = {
  title: PropTypes.any,
  route: PropTypes.any,
  issues: PropTypes.any,
  wireframe: PropTypes.any,
  thumbnail: PropTypes.any,
  children: PropTypes.any
}

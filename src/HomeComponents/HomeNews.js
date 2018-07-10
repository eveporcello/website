import React from 'react'
import { Query } from 'react-apollo'
import { HOMEPAGE_QUERY } from './Homepage'
import { Spinner } from '../common/Spinner'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Arrow from 'react-icons/lib/fa/long-arrow-right'

export const HomeNews = () => (
  <Query query={HOMEPAGE_QUERY} fetchPolicy="cache-and-network">
    {({ loading, data, error }) => 
      <Container>
        <h1>News</h1>
        {loading && <Spinner />}
        {!error && 
          data && 
          data.allNews && 
          data.allNews.length &&
          data.allNews.map(newsStory => 
          <div className="news-story" key={newsStory.id}>
            <h2>{newsStory.title}</h2>
            <p>{newsStory.description}</p>
            <a href={newsStory.url} target="blank">Read More <Arrow /></a>
          </div>
        )}
        <hr />
        <Link to="/news">See All News <Arrow /></Link>
      </Container>
    }
  </Query>
)

const Container = styled.section`
  width: 50%;
  color: white;
  background-color: ${props => props.theme.colors.limedSpruce};
  padding: 1em;

  h1 {
    text-transform: uppercase;
    font-size: 2em;
    margin: 0;
    padding: 0;
  }

  a {
    text-transform: uppercase;
    font-size: 1.2em;
    color: ${props => props.theme.colors.contrast};
    text-decoration: none;
  }

  div.news-story {

    margin: 50px 0;

    h2, p {
      color: ${props => props.theme.colors.ecruWhite};
    }

    h2 {
      font-size: 1.2em;
    }
  }
`
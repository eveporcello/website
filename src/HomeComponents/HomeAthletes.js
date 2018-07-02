import React from 'react'
import StyledLinkRegistration from '../common'
import styled from 'styled-components'
import classnames from 'classnames'

const Container = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    margin: .2em 0 .5em 0;
  }

  .athlete-containers {
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;

    img {
      min-height: 225px;
      max-width: 225px;
    }
  }
`

// Faux Assets
// This will eventually be a random set of 4 of the entire athlete dataset
const fauxAthletesList = [
  {
    name: 'Athlete 1',
    avatar: require('../Assets/athletes/athlete1.png')
  },
  {
    name: 'Athlete 2',
    avatar: require('../Assets/athletes/athlete2.png')
  },
  {
    name: 'Athlete 3',
    avatar: require('../Assets/athletes/athlete3.png')
  },
  {
    name: 'Athlete 4',
    avatar: require('../Assets/athletes/athlete4.png')
  }
]

export const HomeAthletes = () => (
  <Container className={classnames('row', 'around-xs')}>
    <StyledLinkRegistration type='button' text='Apply to become a High Fives Athlete' />
    <h2 className={classnames('end-sm', 'center-xs')}>Our Athletes</h2>
    <section className={classnames('athlete-containers')}>
      {fauxAthletesList.map((athlete, i) => {
        return (
          <img className='col-xs-2' key={i} src={athlete.avatar} alt={athlete.name} />
        )
      })}
    </section>
  </Container>
)

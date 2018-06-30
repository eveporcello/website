import React from 'react'
import { Placeholder } from '../Placeholder'
import { Link } from 'react-router-dom'

const taskInfo = {
  title: 'Homepage Athletes',
  route: '/src/HomeComponents/HomeAthletes.js',
  issues: [
    {
      title: '#24 - Homepage',
      url: 'https://github.com/HighFivesFoundation/website/issues/24'
    },
    {
      title: '#9 - Athlete Application Form',
      url: 'https://github.com/HighFivesFoundation/website/issues/24'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/athletes.png'
}

export const HomeAthletes = () => (
  <div>
    <Placeholder {...taskInfo}>
      <Link to="/registration">
        <button style={{ height: 70, width: 175 }}>
          Athlete Application Registration
        </button>
      </Link>
    </Placeholder>
  </div>
)

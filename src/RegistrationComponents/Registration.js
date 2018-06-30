import React from 'react'
import { Placeholder } from '../Placeholder'
import { Link } from 'react-router-dom'

const taskInfo = {
  title: 'Registration',
  route: '/src/HomeComponents/Registration.js',
  issues: [
    {
      title: '#9 - Athlete Application Form',
      url: 'https://github.com/HighFivesFoundation/website/issues/9'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/athleteapplication.png'
}

export const Registration = () => (
  <main>
    <h1 style={{ color: '#568f56' }}>Registration Components</h1>
    <div>
      <button>
        <Link to="/registration-1">Start Application</Link>
      </button>
      <Placeholder {...taskInfo} />
    </div>
  </main>
)

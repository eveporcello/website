import React from 'react'
import { Placeholder } from '../Placeholder'

const taskInfo = {
  title: 'Social Icons',
  route: '/src/HomeComponents/SocialIcons.js',
  issues: [
    {
      title: '#21 - Add Homepage Social Icons',
      url: 'https://github.com/HighFivesFoundation/website/issues/21'
    }
  ],
  wireframe: 'https://app.moqups.com/eporcello/BTrdKJSG6L/view/page/ad64222d5',
  thumbnail: '/img/socialicons.png'
}

export const SocialIcons = () => (
  <div>
    <Placeholder {...taskInfo} />
  </div>
)

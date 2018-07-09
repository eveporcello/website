import React from 'react'
import { HomeSplash } from './HomeSplash'
import { HomeDonations } from './HomeDonations'
import { WhatIs } from './WhatIs'
import { HomeAthletes } from './HomeAthletes'
import { HomeNews } from './HomeNews'
import { HomeEvents } from './HomeEvents'
import { MailingList } from './MailingList'
import { gql } from 'apollo-boost'

export const HOMEPAGE_QUERY = gql`
  query homepage {
    allNews(count:3) {
      id
      title
      description
      url
    }
  }
`

export const Homepage = () => (
  <main>
    <h1 style={{ color: '#568f56' }}>Home Components</h1>
    <HomeSplash />
    <HomeDonations />
    <WhatIs />
    <HomeAthletes />
    <HomeNews />
    <HomeEvents />
    <MailingList />
  </main >
)

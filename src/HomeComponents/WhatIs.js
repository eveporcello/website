import React from 'react'
import styled from 'styled-components'

export const Container = styled.section`
  h2 {
    margin: 0 0 .25em 0;
  }

  p {
    margin: 0;
    flex-basis: 100%;
  }
`

export const WhatIs = () => (
  <Container className='row'>
    <div className="col-lg-6 col-md-6 col-sm-12">
      <h2>What is High Fives?</h2>
      <p>The High Fives Foundation supports the dreams of mountain action sports athletes by raising injury prevention awareness while providing resources and inspiration to those who suffer life-altering injuries.</p>
    </div>
  </Container>
)

import React from 'react'
import Layout from 'layout/Layout'
import HeroContainer from 'shared/HeroContainer/HeroContainer'
import Card from './components/Card/Card'

function Home() {
  return (
    <Layout>
      <HeroContainer />
      <Card />
    </Layout>
  )
}

export default Home

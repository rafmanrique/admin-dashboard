import React from 'react'
import Charts from '../../charts/Charts'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from '../../../../dummyData.js'

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  )
}

export default Home
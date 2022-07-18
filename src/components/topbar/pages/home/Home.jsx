import React from 'react'
import Charts from '../../charts/Charts'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from '../../../../dummyData.js'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home
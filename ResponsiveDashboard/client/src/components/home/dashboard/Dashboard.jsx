import React from 'react'
import { Activity } from './activity/Activity'
import { Contentbox } from './contentbox/Contentbox'
import "./Dashboard.css"

export const Dashboard = () => {
  return (
    <div className='dash-content'>
      <div className="overview">
        <div className="title">
          <i class="uil uil-create-dashboard"></i>
          <span className="text">Dashboard</span>
        </div>

        <Contentbox/>
        <Activity/>
      </div>
    </div>
  )
}

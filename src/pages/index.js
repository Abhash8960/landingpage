import React from 'react'
import Customr from '../Components/Custmor/Customr'
import Innovetive from '../Components/Innovetive/Innovetive'
import Layout from '../Components/Layout/Layout'
import Service from '../Components/Service/Service'
import Specialist from '../Components/Specialist/Specialist'
import Subscribe from '../Components/Subscribe/Subscribe'

export default function index() {
  return (
    <Layout>
      <Service/>
      <Innovetive/>
      <Specialist/>
      <Customr/>
     <Subscribe/>
    </Layout>
  )
}

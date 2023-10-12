import React from 'react'
import './missions.css'
import Title from '../../components/title/Title'
import { useLocation, useParams } from 'react-router-dom'
const Missions = () => {
  const params = useParams()
  const location = useLocation()
  const renderTitle = params.updateId? "Client (Mis à jour)":params.destroyId? "Client (Suppression)" :"Client (Nouveau)" 

  return (
    <div id='mission' className="card">
 
      <Title title={renderTitle} />
    
    <div className="card card-top">
      {/* <ClientForm client={client} setClient={setClient} /> */}
    </div>
  </div>
  )
}

export default Missions
import React from 'react'
import CountUp from 'react-countup'
import {
  container,
  grid,
  card,
  blueCard,
  greenCard,
  redCard,
} from './Cards.module.css'

const CardInfo = ({ title, description, value, lastUpdate, className }) => {
  return (
    <div className={`${card} ${className}`}>
      <h1 className='title'>{title}</h1>
      <h2 className='cases'>
        <CountUp start={0} end={value} duration={2.5} separator=',' />
      </h2>
      <h3>{description}</h3>
      <span>{new Date(lastUpdate).toLocaleDateString()}</span>
    </div>
  )
}

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
  if (!confirmed) return 'Loading....'
  return (
    <div className={container}>
      <div className={grid}>
        <CardInfo
          title='Infected'
          value={confirmed.value}
          lastUpdate={lastUpdate}
          description='Active cases of COVID-19'
          className={blueCard}
        />
        <CardInfo
          title='Recovered'
          value={recovered.value}
          lastUpdate={lastUpdate}
          description='Recoveries COVID-19'
          className={greenCard}
        />
        <CardInfo
          title='Deaths'
          value={deaths.value}
          lastUpdate={lastUpdate}
          description='Deaths caused by COVID-19'
          className={redCard}
        />
      </div>
    </div>
  )
}
export default Cards

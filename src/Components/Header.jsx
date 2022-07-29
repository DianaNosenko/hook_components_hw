import React from 'react'

export default function Header() {
    const title = 'Managed Contests'
    const textInfo = ['A Naming Agency Experience (minus the Agency-level price tag)',
    'Our hybrid-solution partners you with a trained Squadhelp branding consultant who will guide your crowdsourcing process step-by-step to get the best results possible.']
  return (
    <div className='header'>
        <h1>{title}</h1>
        <h2>{textInfo[0]}</h2>
        <h3>{textInfo[1]}</h3>
    </div>
  )
}

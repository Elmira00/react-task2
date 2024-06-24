import React, { Component } from 'react'
import './Navi.css'

export default class Navi extends Component {
  render() {
    return (
      <div id='main'>
        <img  style={{padding:"20px"}}src="/images/cinema2.png"  alt='cinema logo'></img>
        <section>
            <div id='firstDiv'>
                <ul>
                    <li>
                        Platinium
                    </li>
                    <li>
                        Dolby Atmos
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        About
                    </li>
                    
                </ul>
            </div>
            <div id='secondDiv'>
                <ul>
                    <li>
                        Home Page
                    </li>
                    <li>
                        Tariff
                    </li>
                    <li>
                        Actions
                    </li>
                    <li>
                        CineBonus
                    </li>
                    
                </ul>
            </div>
        </section>
      </div>
    )
  }
}

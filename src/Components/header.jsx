import React, { Component } from 'react'
import logo from './logo.svg'
import blue from './blue.jpg'
import two from './two_again.png'

export default class Header extends Component {
     render() {
          return (
               <div className="header">
                    <img className="blue-rect" src={blue} alt="BlueRect"/>
                    <img className="two" src={two} alt="two"/>
                    <div className="conteiner">
                              <img className="logo" src={logo} alt="Логотип" />
                              <span className="title">Научиться учиться</span> 
                              <span className="subtitle">Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни?<a href="URL">Узнать-&gt;</a></span>          
                    </div>                                      
               </div>    
          );
     }
}

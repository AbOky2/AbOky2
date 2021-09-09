import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
    return (
        <div className="global-container">
            <h1 className="home-title">
                Bienvenue au <span>Mordor</span>
            </h1>
            <p>Mordor est un site ecommerce destiné à la vente des mugs personnalisés.</p>
            <img src={imgHomeShop} alt="accueil shop" />
        </div>
    )
}

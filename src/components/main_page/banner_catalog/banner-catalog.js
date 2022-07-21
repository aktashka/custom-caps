import React from "react";

import imgCaps from "./banner-catlg-img/painted-caps.png"
import imgUrl from "./banner-catlg-img/catalog-bg.svg"
import CustomService from "../../../services/custom-service";

import './banner-cat.css'

const BannerCatalog = () => {
    return (
        <div className='banner-c-container'>
            <div className="card-container flex-column">

                <div className="card card-adaptive flex-column-top">
                    <div className="card-desc">
                        <div className="card-text-desc">
                            <p className="desc-tittle">Supreme</p>
                            <p className="desc-class">Housten Rocket</p>
                            <div className="card-desc-price">2399c</div>
                        </div>
                        <a href="/prod-info/">
                        <img className="card-img" src={imgCaps} alt="caps-img"/>
                        </a>
                    </div>
                </div>

                <div className="card card-adaptive flex-column-top">
                    <div className="card-desc">
                        <div className="card-text-desc">
                            <p className="desc-tittle">Supreme</p>
                            <p className="desc-class">Housten Rocket</p>
                            <div className="card-desc-price">2399c</div>
                        </div>
                        <a href="/prod-info/">
                        <img className="card-img" src={imgCaps} alt=""/>
                        </a>
                    </div>
                </div>

                <div className="card card-adaptive">
                    <div className="card-desc">
                        <div className="card-text-desc">
                            <p className="desc-tittle">Supreme</p>
                            <p className="desc-class">Housten Rocket</p>
                            <div className="card-desc-price">2399c</div>
                        </div>
                        <a href="/prod-info/">
                        <img className="card-img" src={imgCaps} alt="caps-img"/>
                        </a>
                    </div>
                </div>

            </div>

            <div className='banner-c-desc'>
                <h1 className="c-major-desc">
                    Supreme & New Era
                </h1>
                <p className='c-minor-desc'>collaboration</p>
                <a href='/catalog/' className="c-desc-btn purple-btn btn">Открыть каталог</a> 
            </div>

            <img className='banner-c-caps' src={imgUrl} alt='banner-img'></img>
            <img className='banner-c-caps-adap p-absolute' src={require('./banner-catlg-img/catalog-bg480px.png')} alt='banner-adap-img'></img>
        </div>
    )
}

export default BannerCatalog;
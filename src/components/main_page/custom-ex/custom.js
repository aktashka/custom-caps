import React from "react";
import './custom.css';

const Custom = () => {
    return (
    <div className='custom-card-container'>
        
        <a href='/#brand' name='brand'/>
       
        <div className="card-container card-slider">
            <div className="card flex-row">
                <div className="card-desc card-slider">
                    <a href="/prod-info/">
                    <img className="card-img" src={require('./custom-img/adidas.jpg')} alt=""/>
                    </a>
                    <div className="card-text-desc">
                        <p className="desc-year">2021</p>
                        <p className="desc-tittle">New Era</p>
                        <p className="desc-class">Housten Rocket</p>
                        <div className="text-margin card-desc-price">2399c</div>
                    </div>
                </div>
            </div>

            <div className="card flex-row">
                <div className="card-desc card-slider">
                    <a href="/prod-info/">
                    <img className="card-img" src={require('./custom-img/adidas.jpg')} alt=""/>
                    </a>
                    <div className="card-text-desc">
                        <p className="desc-year">2021</p>
                        <p className="desc-tittle">New Era</p>
                        <p className="desc-class">Housten Rocket</p>
                        <div className="text-margin card-desc-price">2399c</div>
                    </div>
                </div>
            </div>
        
            <div className="card">
                <div className="card-desc card-slider">
                    <a href="/prod-info/">
                    <img className="card-img" src={require('./custom-img/adidas.jpg')} alt=""/>
                    </a>
                    <div className="card-text-desc">
                        <p className="desc-year">2021</p>
                        <p className="desc-tittle">New Era</p>
                        <p className="desc-class">Housten Rocket</p>
                        <div className="text-margin card-desc-price">2399c</div>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='small-caps-container main-container'>
            <div className='small-c-custom s-c-container'>
                <div className='small-c-desc'>
                    <h3>Кастомные</h3>
                    <p>Создай свой стиль</p>
                </div>
            </div>
            <div className='small-c-exclusive s-c-container'>
                <div className='small-c-desc'>
                    <h3>Эксклюзив</h3>
                    <p>Найди уникальные кепки</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Custom;
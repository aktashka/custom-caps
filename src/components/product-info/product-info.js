import React from "react";
import Slider from "../main_page/slider";

import './product-c.css'


const ProductInfo = () => {
    return (
        <div className='main-container'>
            <div className='links-container'>
                <a href='/' className='from-page'>Home</a>
                <p className='from-page'>&gt;</p>
                <a href='/catalog/' className='from-page'>Каталог</a>
                <p className='from-page'>&gt;</p>
                <a href='/prod-info/' className='to-page'>Детали Продукта</a>
            </div>

            
            

            <div className='product-details'>
                <div className='caps-details-img'>
                    <div className='main-cap-container'>
                        <img className='main-cap-img' src={require('./images/main-img.png')} alt='main-c-img'/>
                    </div>
                    <div className='cap-details'>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img1.png')} alt='minor-cap-img'/>
                        </div>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img2.png')} alt='minor-cap-img'/>
                        </div>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img3.png')} alt='minor-cap-img'/>
                        </div>
                    </div>
                </div>

                
                
                <div className='caps-details-info'>
                    
                    <div className='c-d-sizes'>
                        <input className='cart-inp-c' type="button" value='S'/>
                        <input className='cart-inp-c' type="button" value='M'/>
                        <input className='cart-inp-c' type="button" value='L'/>
                        <input className='cart-inp-c' type="button" value='XL'/>
                    </div>
                    <div className='product-count p-c-top'>
                        <input type="button" value='-'/>
                        <p>1</p>
                        <input type="button" value='+'/>
                    </div>
                    
                </div>

                <div className='details-box'>
                    <div className='c-d-tittle'>
                        <h3>New Era</h3>
                        <p>black snapback 59 fifty</p>
                    </div>

                    <div className='c-d-price'>3200 сом</div>
                    <button className='btn yellow-btn c-d-btn'>Добавить в корзину</button>

                </div>
                
            </div>
            
            

            <div className="slider-tittle">
                <h1>Похожие товары</h1>
            </div>
            <Slider />



        </div>
    )
}

export default ProductInfo;
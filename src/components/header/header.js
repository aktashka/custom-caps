import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import CustomService from '../../services/custom-service'

import './header.css';

const Header = () => {
    const [searchValue, setSearchValue] = useState('')
    const [capsName, setCapsName] = useState([])
    const service = new CustomService()
    const getCapsName = () => {
        return service.getAllCaps()
            .then((data) =>
                setCapsName(data)
            )
    }
    useEffect(() => {
        getCapsName()
    }, [])

    const onSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const filteredCaps = capsName.filter(caps => {
        return caps.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    console.log(filteredCaps)

    return (
        <div className='header-container'>
            <div className='d-flex header-in'>
                <Link to='/'>
                    <img className='logo-img-header' src={require('./header-img/logo.png')} alt={'logo-img'} ></img>
                </Link>
                <ul className="list-container d-flex">
                    <li className='list-group-a'>
                        <Link className='list-group-a' to='/catalog/'> Каталог </Link>
                    </li>
                    <li className='list-group-a list-group-a-adap'>Кастомные</li>
                    <li className='list-group-a'><a className='list-group-a' href='/#brand'>Бренды</a></li>
                    <li className='list-group-a'><a className='list-group-a' href='/#aboutUs'>О нас</a></li>
                </ul>

                <div className='input-container '>
                    <form>
                        <input type='text' onChange={onSearchChange} placeholder='type to search' className='search'></input>
                        {/* {
                            Где то тут должен отображаться вроде бы
                            filteredCaps.map((capsName, index) => {
                                return (
                                )
                            })
                        } */}
                        <a href='/search-res/'><i className="fa-solid fa-magnifying-glass"></i></a>
                    </form>
                </div>
                <Link to='/cart/'>
                    <img className='cart-img' src={require('./header-img/shop-cart.png')} alt={'cart-img'}></img>
                </Link>
                <i className="fa-solid fa-bars"></i>
            </div>
            <hr />
        </div>
    );
};

export default Header;
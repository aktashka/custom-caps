import React, {useEffect} from "react";
import CatalogItem from "../catalog-item";
import { fetchCaps } from "../../actions";
import withCapsService from "../hoc";
import { connect } from "react-redux";

import './catalog.css'

const Catalog = ({fetchCaps, caps, loading, error}) => {

    useEffect(() => fetchCaps(), [])
   
    return (
        <div className='catalog-container'>
            <div className='links-container main-container'>
                <a href='/' className='from-page'>Home</a>
                <p className='from-page'>&gt;</p>
                <a href='/catalog/' className='to-page'>Каталог</a>
            </div>
            <div className='catalog-banner-container'>
                <div className='catalog-b-desc'>
                    <h2>НОВАЯ СЕРИЯ</h2>
                    <h2>McLAREN</h2>
                </div>
            </div>
            <div className='catalog-sorting'>
                <select id="sort-product" name="sort">
                    <option  value="popular">Популярные</option>
                    <option value="cheap first">Сначала дешевые</option>
                    <option value="expensive first">Сначала дорогие</option>
                    <option value="new">Новинки</option>
                </select>
            </div>

            <div className='caps-catalog-flex main-container'>
                {caps.map((cap) => {
                    if (loading) {
                        return (
                            <h6> Loading ... </h6>
                        )   
                    }
                    if (error) {
                        return (
                            <h6> Error ... </h6>
                        )   
                    }
                    return (
                    <div key={cap.id}><CatalogItem cap={cap}/></div>
                )})}
            </div>
            <div className='catalog-pages'>
                <a href='/'>1</a>
                <a href='/'>2</a>
                <a href='/'>3</a>
                <a href='/'>4</a>
                <a href='/'>5</a>
                <a href='/'>&gt;</a>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {return state}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {fetchCaps: () => fetchCaps(dispatch, ownProps.capsService)}
}

export default withCapsService(connect(mapStateToProps, mapDispatchToProps)(Catalog));
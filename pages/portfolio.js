import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PortfolioItem from '../components/PortfolioItem';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar line text="Portfolio" currentPage="portfolio"/>
                <div className="portfolio">
                    <PortfolioItem/>
                    <PortfolioItem/>
                    <PortfolioItem/>
                </div>
            </div>
        )
    }
}

export default Portfolio;
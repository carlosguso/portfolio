import React from 'react';

function PortfolioItem(props) {
    return (
        <div className="portfolio-item">
            <div className="portfolio-item-wrapper">
                <img src="/img/code.jpg" alt="my item"></img>
                <p>Portfolio item</p>
                <ul>
                    <li>Nextjs</li>
                    <li>Scss</li>
                    <li>Webpack</li>
                    <li>...</li>
                    {props.tags && props.tags.map(item => {
                        return(
                            <li>{item}</li>
                        );
                    })}
                </ul>
                <button>See more</button>
            </div>
        </div>
    )
}

export default PortfolioItem;

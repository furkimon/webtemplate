import React from 'react'
import '../styles/Card.css'

const Card = ({frontTitle, backTitle, backText, backFooter}) => {
    return (
        <div className="card__container">
            <div className="cardFlip">
                <div className="frontSide">
                    <div className="frontSide__title">
                        {frontTitle}
                    </div>
                    <div className="frontSide__text">
                        Flip me!
                    </div>
                </div>
                <div className="backSide">
                    <div className="backSide__up">
                        <div className="backSide__title">
                            {backTitle}
                        </div>
                    </div>
                    <div className="backSide__mid">
                        <div className="backSide__list">
                            {backText.map((text, i) => {
                                return <span key={i}>{text}</span>
                            })}
                        </div>
                    </div>
                    <div className="backSide__down">
                            <div className="backSide__footer">
                                {backFooter}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

import React, { useState, useEffect } from 'react';
import BtnExport from './BtnExport'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Card = ({ name, description, brand, price, images, sku, qty }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const lastIndex = images.length;
        if (current < 0) {
            setCurrent(lastIndex - 1);
        }
        if (current > lastIndex - 1) {
            setCurrent(0);
        }
    }, [current]);

    return (
        <section className='productCard'>
            <div className='productImage'>
                {images.map((slide, indexImg) => {
                    return (
                        <div
                            className={indexImg === current ? 'slide active' : 'slide'}
                            key={indexImg}
                        >
                            {indexImg === current && (
                                <img src={slide} />
                            )}
                        </div>
                    );
                })}

                <button className='prevBtn' >
                    <RiArrowLeftSLine className='RiArrowLeftSLine' onClick={() => setCurrent(current - 1)} />
                </button>
                <button className='nextBtn'>
                    <RiArrowRightSLine className='RiArrowRightSLine' onClick={() => setCurrent(current + 1)} />
                </button>
            </div>
            <div className='productInfo'>
                <h1>{brand}</h1>
                <h2>{name}</h2>
                <h2>${price}</h2>
                <br />
                <div className='descriptionCard' dangerouslySetInnerHTML={{ __html: description }}></div>
                <BtnExport className='btnExport' data={{ name, description, brand, price, images, sku, qty }} />
            </div>
        </section>)

}
export default Card;
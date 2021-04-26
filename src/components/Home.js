import React from 'react'

const Home = (props) => {
    console.log(props, "fdgdhf");

    return (
        <div>

            <div className="cart-wrapper">
                <img src='' />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf-970-80.jpg.webp' className="img1" />
                </div>
                <div className='text-wrapper item '>
                    <span>
                        I-Phone
                  </span><br />
                    <span>
                        Price:$2000
                  </span>
                </div>
                <div className='btn-wrapper item'>
                    <button className='btn' onClick={
                        () => { props.addToCartHandler({ price: 1000, name: 'i-phone 12' }) }
                    }>Add to Cart</button>

                </div>
            </div>
        </div>
    )
}
export default Home
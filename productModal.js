import React, { useState } from 'react'
import { Spring } from 'react-spring/renderprops'

import { Flipper, Flipped } from 'react-flip-toolkit'
import '../square.css'

export default function({ imgUrl }) {
  const {
    item,
    img,
    info,
    price,
    Price,
    dateOfPurch,
    url,
    img1,
    img2,
    img3,
  } = imgUrl
  const [fullScreen, setFullScreen] = useState(false)

  return (
    <Flipper flipKey={fullScreen} spring="veryGentle">
      <Flipped flipId="square">
        <div className={fullScreen ? 'full-screen-square' : 'square'}>
          <img
            onClick={() => setFullScreen(true)}
            style={{
              maxWidth: fullScreen ? '0%' : '100%',
            }}
            src={img || url}
            alt=""
          />
          <div
            style={{
              display: fullScreen ? 'block' : 'none',

              maxHeight: '100vh',
            }}
          >
            {' '}
            <Flipped flipId="square2" translate>
              <Flipped inverseFlipId="square2">
                <>
                  <h1
                    style={{ marginTop: '-20px' }}
                    className="text-right"
                    onClick={() => setFullScreen(false)}
                  >
                    X
                  </h1>{' '}
                  <h1 className="h4 py-1"> {item} </h1>
                  <img
                    style={{
                      maxWidth: fullScreen ? '250px' : '0',
                      textAlign: 'center',
                      maxHeight: '45vh',
                      margin: 'auto',
                    }}
                    src={url || img}
                    alt=""
                  />
                </>
              </Flipped>
            </Flipped>
            <Flipped inverseFlipId="square3">
              <div>
                {fullScreen && (
                  <Spring
                    config={{ delay: 275, velocity: 200 }}
                    from={{ opacity: 0, transform: 'translate3d(0,-28px,0)' }}
                    to={{
                      opacity: 1,
                      transform: 'translate3d(0,0,0) ',
                    }}
                  >
                    {props => (
                      <div className="px-5 py-3" style={props}>
                        <div
                          style={{
                            color: 'white',
                            fontFamily: 'roboto',
                            fontStyle: 'italic',
                          }}
                        >
                          <p className="h5">Date of Purchase: {dateOfPurch} </p>
                          <p className=" h6">Price: {price || Price}</p>
                          <p className="  h6 ">{info} </p>{' '}
                        </div>
                        <form
                          target="paypal"
                          action="https://www.paypal.com/cgi-bin/webscr"
                          method="post"
                        >
                          <input type="hidden" name="cmd" value="_cart"></input>
                          <input
                            type="hidden"
                            name="business"
                            value="cecastro10@yahoo.com"
                          ></input>
                          <input type="hidden" name="lc" value="US"></input>
                          <input
                            type="hidden"
                            name="item_name"
                            value={item}
                          ></input>
                          <input
                            type="hidden"
                            name="amount"
                            value={price || Price}
                          ></input>
                          <input
                            type="hidden"
                            name="currency_code"
                            value="USD"
                          ></input>
                          <input
                            type="hidden"
                            name="button_subtype"
                            value="products"
                          ></input>
                          <input type="hidden" name="no_note" value="0"></input>
                          <input
                            type="hidden"
                            name="shipping"
                            value="5.00"
                          ></input>
                          <input type="hidden" name="add" value="1"></input>
                          <input
                            type="hidden"
                            name="bn"
                            value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest"
                          ></input>
                          <input
                            type="image"
                            src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
                            border="0"
                            name="submit"
                            alt="PayPal - The safer, easier way to pay online!"
                          ></input>
                          <img
                            alt=""
                            border="0"
                            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                            width="1"
                            height="1"
                          ></img>
                        </form>{' '}
                        <div style={{ color: 'white', marginTop: '-30px' }}>
                          <i
                            style={{ fontSize: '40px' }}
                            class="fa fa-cc-paypal"
                            aria-hidden="true"
                          ></i>
                          {'   '}
                          <i
                            style={{ fontSize: '40px' }}
                            class="fa fa-cc-visa"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    )}
                  </Spring>
                )}
              </div>
            </Flipped>{' '}
          </div>
        </div>
      </Flipped>
    </Flipper>
  )
}

import React, { Component } from 'react'
import Layout from '../components/layout2'
import '../components/styles.css'
import InfoComp from '../components/infoComp'
import InfoComp2 from '../components/infoComp2'

import SlideShow from '../components/SlideShowShoeStore'

import VisibilitySensor from 'react-visibility-sensor'

import { Spring } from 'react-spring/renderprops'
import { ToastContainer } from 'react-toastify'
import { Products, shipInfo, storeinfo } from '../products/shoes/ShoeStoreInfo'
import ShoeMap from '../components/SneakerStore/productCarusel'

import 'react-toastify/dist/reactToastify.css'
export default class Page extends Component {
  render() {
    return (
      <Layout>
        <ToastContainer
          style={{
            maxWidth: '100%',
            margin: 'auto',
            textAlign: 'center',
            left: '0px',
          }}
        />
        <div className="" style={{ position: 'relative', height: '230px' }}>
          <SlideShow />
        </div>
        <div
          style={{ width: '200px', lineHeight: '11px' }}
          className="container text-center w-80 mt-5"
        >
          <div className="d-flex justify-content-center mb-1">
            <a href="https://www.facebook.com">
              <i
                className="fa fa-facebook-square fa-2x px-2"
                aria-hidden="true"
              ></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fa fa-instagram fa-2x px-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <marquee
          style={{ marginBottom: '0px' }}
          width="100%"
          direction="right"
          scrollamount="20"
        >
          <h1
            style={{
              marginTop: '0px',
              color: 'black',
              fontFamily: 'cooper black',
            }}
          >
            Bape | Supremes | ASSC | Yeezy
          </h1>
        </marquee>
        <div style={{ minHeight: '150px' }} className="">
          <InfoComp
            imgUrl="https://cdn.shopify.com/s/files/1/1661/9981/products/8x6x4_1024x1024.jpg?v=1555345494"
            info={shipInfo}
          />
        </div>
        <div style={{ minHeight: '175px' }} className="">
          <InfoComp2 imgUrl={Products.yeezyBlack} info={storeinfo} />
        </div>
        {/* <Carusel
          imgUrl1={Products.yeezyBlack}
          imgUrl2={Products.supremeBag}
          imgUrl3={Products.yeezyBlack}
        />{' '} */}
        <VisibilitySensor partialVisibility offset={{ top: 0 }}>
          {({ isVisible }) => (
            <div style={{ minHeight: '80px' }}>
              {isVisible ? (
                <Spring
                  config={{ delay: 100 }}
                  from={{
                    opacity: 0,
                  }}
                  to={{
                    opacity: 1,
                  }}
                >
                  {props => (
                    <div style={props}>
                      <h1
                        className=""
                        style={{
                          lineHeight: '38px',
                          marginTop: '0px',
                          fontFamily: 'cooper black',
                          fontSize: '44px',
                          color: 'black',
                          margin: 'auto',
                        }}
                      >
                        New Arrivals
                      </h1>
                    </div>
                  )}
                </Spring>
              ) : (
                <div
                  className="w-100 container"
                  style={{ visibility: 'hidden' }}
                >
                  s
                </div>
              )}
            </div>
          )}
        </VisibilitySensor>

        <div className="px-4 ">
          <ShoeMap />
        </div>
        <VisibilitySensor partialVisibility offset={{ top: 0 }}>
          {({ isVisible }) => (
            <div style={{ minHeight: '80px' }}>
              {isVisible ? (
                <Spring
                  config={{ delay: 300 }}
                  from={{
                    opacity: 0,
                  }}
                  to={{
                    opacity: 1,
                  }}
                >
                  {props => (
                    <div style={props}>
                      <h1
                        className="h6"
                        style={{
                          fontsize: '10px',
                          fontFamily: 'cooper black',
                          fontWeight: '700',
                          letterSpacing: '3px',
                          marginTop: '0px',
                        }}
                      >
                        Authenticity Guaranteed
                      </h1>
                      <p
                        style={{
                          lineHeight: '1.5em',
                          padding: '19px 50px',
                          fontSize: '14px',
                          textAlign: 'center',
                          fontWeight: '550',
                        }}
                      >
                        All of our products have never been used or tried on and
                        have all been purchased directly from the
                        manufacutuer/retailer. We own all of our items and do
                        not deal with consignment. All of these things help
                        avoid fake items entering our inventory.
                      </p>
                    </div>
                  )}
                </Spring>
              ) : (
                <div
                  className="w-100 container"
                  style={{ visibility: 'hidden' }}
                >
                  s
                </div>
              )}
            </div>
          )}
        </VisibilitySensor>

        <div style={{ maxWidth: '' }} id="accordion">
          <div style={{ background: 'gray' }} className="card ">
            <div
              style={{ maxHeight: '50px' }}
              className="card-header"
              id="headingOne"
            >
              <h5 className=" mb-0">
                <a
                  style={{ maxHeight: '50px', fontSize: '10px', padding: '0' }}
                  className=" btn btn-link "
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Shop
                </a>{' '}
                <div
                  aria-controls="collapseOne"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  className="float-right "
                >
                  {' '}
                  <i className="fa fa-plus-square" aria-hidden="true"></i>
                </div>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body text-secondary d-flex flex-column">
                <div className="row mt-2">
                  <div className="col d-flex text-center flex-column ">
                    <a className="btn" href="#">
                      Clothing
                    </a>
                    <a className="btn" href="#">
                      Footwear
                    </a>
                    <a className="btn" href="#">
                      Bags
                    </a>
                  </div>
                  <div className="col d-flex text-center flex-column  ">
                    <a className="btn" href="#">
                      Hats
                    </a>
                    <a className="btn" href="#">
                      Backpacks
                    </a>
                    <a className="btn" href="#">
                      Sale
                    </a>
                  </div>{' '}
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: 'gray', maxWidth: '' }} className="card">
            <div
              style={{ background: 'gray' }}
              className="card-header"
              id="headingTwo"
            >
              <h5 className="mb-0">
                <a
                  style={{ maxHeight: '50px', fontSize: '10px', padding: '0' }}
                  className="btn btn-link collapsed "
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Location
                </a>{' '}
                <div
                  aria-controls="collapseTwo"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  className="float-right "
                >
                  {' '}
                  <i className="fa fa-plus-square" aria-hidden="true"></i>
                </div>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse text-center "
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="p-5">
                <a href="https://www.google.com/maps/place/1015+Market+St,+San+Francisco,+CA+94103/data=!4m2!3m1!1s0x80858084fcddfd51:0x422525cfec192890?sa=X&ved=2ahUKEwi-6NTBmffqAhUDIKwKHXx3DGwQ8gEwAHoECAsQAQ">
                  1000 San Marcos St. Austin, Tx
                </a>
              </div>
            </div>
          </div>
          <div style={{ background: 'gray', maxWidth: '' }} className="card">
            <div
              style={{ background: 'gray' }}
              className="card-header"
              id="headingThree"
            >
              <h5 className="mb-0">
                <a
                  style={{ maxHeight: '50px', fontSize: '10px', padding: '0' }}
                  className="btn btn-link collapsed "
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Returns
                </a>{' '}
                <div
                  aria-controls="collapseThree"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  className="float-right "
                >
                  {' '}
                  <i className="fa fa-plus-square" aria-hidden="true"></i>
                </div>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse text-center "
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="">
                <p
                  style={{
                    lineHeight: '1.5em',
                    padding: '19px 50px',
                    fontSize: '14px',
                    textAlign: 'center',
                    fontWeight: '550',
                  }}
                >
                  We Currently do not accept any returns on any items. All of
                  our items have been kept in original packaging. The quality
                  and sizing is determined by the orignal retailer/manufacturer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: '200px', lineHeight: '11px' }}
          className="container text-center w-80 mt-4"
        >
          <div className="d-flex justify-content-center mt-3">
            <a href="#">
              <i
                className="fa fa-facebook-square fa-2x px-2"
                aria-hidden="true"
              ></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram fa-2x px-2" aria-hidden="true"></i>
            </a>
          </div>{' '}
        </div>
        <footer id="footer" className="pb-5 text-center d-flex mx-auto">
          <p
            style={{ lineHeight: '20px', width: '100%' }}
            className=" copyright"
          >
            &copy; PRODUCT Of CesaremilioMedia
          </p>
        </footer>
      </Layout>
    )
  }
}

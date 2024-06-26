import React from 'react'
import "../../Home/ShippingCards/ShippingCards.scss"

const ShippingCards = () => {
  return (
    <div class="shipping-area section-space-y-axis-100">
            <div class="container">
                <div class="shipping-bg">
                    <div class="row shipping-wrap">
                        <div class="col-lg-4 col-md-6">
                            <div class="shipping-item">
                                <div class="shipping-img">
                                    <img src="https://htmldemo.net/pronia/pronia/assets/images/shipping/icon/car.png" alt="Shipping Icon" />
                                </div>
                                <div class="shipping-content">
                                    <h2 class="title">Free Shipping</h2>
                                    <p class="short-desc mb-0">Capped at $319 per order</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="shipping-item">
                                <div class="shipping-img">
                                    <img src="https://htmldemo.net/pronia/pronia/assets/images/shipping/icon/card.png" alt="Shipping Icon" />
                                </div>
                                <div class="shipping-content">
                                    <h2 class="title">Safe Payment</h2>
                                    <p class="short-desc mb-0">With our payment gateway</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                            <div class="shipping-item">
                                <div class="shipping-img">
                                    <img src="https://htmldemo.net/pronia/pronia/assets/images/shipping/icon/service.png" alt="Shipping Icon" / >
                                </div>
                                <div class="shipping-content">
                                    <h2 class="title">Best Services</h2>
                                    <p class="short-desc mb-0">Friendly &amp; Supper Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ShippingCards
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./Checkout.module.css";
import CreditCard from "../../assets/CreditCard.svg";
import Paypal from "../../assets/PayPal.svg";
import CardTotal from "../../components/CardTotal/CardTotal";
import FormInput from "../../components/FormInput/FormInput";
import TextArea from "../../components/TextArea/TextArea";
const Checkout = () => {
  return (
    <div>
      <HeroSection>Checkout</HeroSection>
      {/* <!-- ORDER PART STRAT --> */}
      <div className={styles.order_part}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className={styles.order_content}>
                <div className="order_txt">
                  <h2>Your Order</h2>
                  <p>
                    We all know how hard it can be make sure ead lookis like
                    demo tom make your start intoe the world of easy ase
                    possible have encluded the demom.
                  </p>
                </div>
                <CardTotal />
                <div className={`${styles["payment_method"]} pt-4`}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="payment_head text-uppercase"
                          colspan="2"
                        >
                          Payment method
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="w-50">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment"
                              id="credit_card"
                              value=""
                              checked
                            />
                            <label
                              className="form-check-label"
                              for="credit_card"
                            >
                              Credit Card
                            </label>
                          </div>
                        </th>
                        <td className="w-50">
                          <img
                            src={CreditCard}
                            alt="img"
                            className="credit_card float-right"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="w-50">
                          <div className={`${styles["form-check"]}`}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment"
                              id="paypal"
                              value=""
                            />
                            <label className="form-check-label" for="paypal">
                              Paypal
                            </label>
                          </div>
                        </th>
                        <td className="w-50">
                          <img
                            src={Paypal}
                            alt="img"
                            className="paypal float-right"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="billing_content">
                <div className={`${styles["billing_head"]} text-uppercase`}>
                  <h2>billing details</h2>
                  <div className="billing_form">
                    <form action="#">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                            id="chechout_name"
                            name="chechout_name"
                            placeholder="Name*"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                            id="checkout_nickname"
                            name="checkout_nickname"
                            placeholder="Nick Name*"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="email"
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                            id="checkout_email"
                            name="checkout_email"
                            placeholder="Email*"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                            id="checkout_phonenumber"
                            name="checkout_phonenumber"
                            placeholder="Phone Number"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                            id="checkout_country"
                            name="checkout_country"
                            placeholder="Country"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                            id="checkout_state"
                            name="checkout_state"
                            placeholder="State/Disctrict"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <FormInput
                            type="text"
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                            id="checkout_address"
                            name="checkout_address"
                            placeholder="Address:"
                          />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <input
                            type="text"
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                            id="checkout_postalcode"
                            name="checkout_postalcode"
                            placeholder="Zip/Postal Code"
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
                          <TextArea
                            className={`form-control ${styles["form-controls-form"]} border-radius-0`}
                            id="checkout_billing_textarea"
                            name="checkout_billing_textarea"
                            rows="10"
                            cols="10"
                            placeholder="Note Of Order :"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

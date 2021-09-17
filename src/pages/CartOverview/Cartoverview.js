import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./CartOverview.module.css";
import StrawBerry from "../../assets/MuskMelon.jpg";
import CardTotal from "../../components/CardTotal/CardTotal";
const Cartoverview = () => {
  return (
    <div>
      <HeroSection>Cart Overview</HeroSection>
      {/* <!-- CART OVERVIEW PART START --> */}
      <div className={styles.cart_overview}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 table-responsive">
              <table className="table">
                <thead>
                  <tr className={styles.cartoverview_title}>
                    <th>IMAGES</th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="thamnail_img">
                        <img className="img-fluid" src={StrawBerry} alt="" />
                      </div>
                    </th>
                    <td className="align-middle">
                      <b>🍓Strawberry</b>
                    </td>
                    <td className="align-middle">$590</td>

                    <td className="align-middle">
                      <div className="cart d-flex">
                        <div className="quantity d-flex">
                          <div className="left_arrow">
                            <button type="button">
                              <i className="icofont-arrow-left"></i>
                            </button>
                          </div>
                          <div className="quantity_num">1</div>
                          <div className="right_arrow">
                            <button type="button">
                              <i className="icofont-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$5980</td>
                    <td className="align-middle">
                      <i className="icofont-close text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="thamnail_img">
                        <img className="img-fluid" src={StrawBerry} alt="" />
                      </div>
                    </th>
                    <td className="align-middle">
                      <b>Strawberry</b>
                    </td>
                    <td className="align-middle">$590</td>
                    <td className="align-middle">
                      <div className="cart d-flex">
                        <div className="quantity d-flex">
                          <div className="left_arrow">
                            <button type="button">
                              <i className="icofont-arrow-left"></i>
                            </button>
                          </div>
                          <div className="quantity_num">1</div>
                          <div className="right_arrow">
                            <button type="button">
                              <i className="icofont-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$2780</td>

                    <td className="align-middle">
                      <i className="icofont-close text-danger"></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="thamnail_img">
                        <img className="img-fluid" src={StrawBerry} alt="" />
                      </div>
                    </th>
                    <td className="align-middle">
                      <b>Strawberry</b>
                    </td>
                    <td className="align-middle">$590</td>
                    <td className="align-middle">
                      <div className="cart d-flex">
                        <div className="quantity d-flex">
                          <div className="left_arrow">
                            <button type="button">
                              <i className="icofont-arrow-left"></i>
                            </button>
                          </div>
                          <div className="quantity_num">1</div>
                          <div className="right_arrow">
                            <button type="button">
                              <i className="icofont-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$2250</td>
                    <td className="align-middle">
                      <i className="icofont-close text-danger"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.coupon_part}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div className="serach_btn">
                <form action="#">
                  <div className={styles.search_ber}>
                    <input
                      type="text"
                      className="form-control search_button"
                      id="serach_button"
                      name="serach_button"
                      value=""
                      placeholder="Apply Coupon"
                    />
                    <div className="coupon_btn">
                      <a href="#" className="border-radius-0">
                        APPLY COUPON
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
              <CardTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartoverview;

import React from "react";
import styles from "./CardTotal.module.css";

const CardTotal = () => {
  return (
    <>
      <div className="order_cardTotal">
        <table className="table">
          <thead>
            <tr>
              <th
                scope="col"
                className={`${styles["card_total"]} text-uppercase" colspan="2"`}
              >
                Card total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="subtotal">
                Subtotal:
              </th>
              <td className="text-right">$568</td>
            </tr>
            <tr>
              <th scope="row" className=" ">
                Discount:
              </th>
              <td className="text-right">$80</td>
            </tr>
            <tr>
              <th scope="row">Total:</th>
              <td className={`text-right ${styles["total_num"]}`}>$890</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="chechout_btn text-right">
        <a
          href="checkout.html"
          className="btn border-radius-0 border-transparent"
        >
          Checkout
        </a>
      </div>
      {/* // </div> */}
    </>
  );
};

export default CardTotal;

import { useState,  } from "react";
import "./Playment.css";
import { useNavigate } from "react-router-dom";

export default function Playment() {

  let nevigate = useNavigate();
 

  const price = test?.map((prop) => {
    console.log(`loop ${prop.name}`);
    return prop.price;
  });
  //   price.push()
  let totalvalue = price.reduce((a, b) => a + b, 0);
  console.log(`price : ${price} and totalvalue : ${totalvalue}`);
  //   console.log(test);
  return (
    <div id="box-main-playment">
      <div id="box-playment">
        <div id="box-left">
          <div
            id="bnt-back"
            onClick={() => {
              nevigate(-1);
            
            }}
          >
            <div id="box-btn-back">
              <div>
                <span class="material-symbols-outlined">arrow_back_ios</span>
              </div>
              <div> Back</div>
            </div>
          </div>
          <div id="box-item-overview">
            <p>
              <h2 id="item-overview"> Items overview</h2>
            </p>
            <div id="item-window">
              {test?.map((prop) => {
                let name = prop.name;
                let price = prop.price;
                let size = prop.size;
                let mater = prop.material;
                let condition = prop.condition;
                return (
                  <div className="box-win-item" id={"titem-" + name}>
                    <div id="box-win-item-left">
                      <div className="box-img"> </div>
                    </div>
                    <div id="box-win-item-right">
                      <div id="box-name">
                        <p>{name}</p>
                      </div>
                      <div id="box-option">3dot</div>
                      <div id="box-detail">
                        Size: {size}
                        <br></br>
                        Material: {mater}
                        <br></br>
                        condition: {condition}
                      </div>

                      <div id="box-price">
                        <h1>{"$" + price}</h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="box-right">
          <div id="box-con-right">
            <h1 id="playment-details"> Playment details</h1>
            <p id="fill">
              Fill in your payment details and complete the order.
            </p>
            <form id="from-payment">
              <h5>
                Cardholder name
                <span> *</span>
              </h5>
              <input
                id="input-cardholder name"
                name="cardholder name"
                class="input"
                type="text"
                placeholder=" Cardhlder name"
              ></input>
              <h5>
                Card number
                <span> *</span>
              </h5>
              <input
                id="input-Card number"
                name="cardholder name"
                class="input"
                type="text"
                placeholder=" **** **** **** ****"
              ></input>
              <div id="fram-expiraton">
                <div id="fram-expiraton-left">
                  <h5>
                    Expiration date
                    <span> *</span>
                  </h5>
                  <input
                    id="input-Expiration-data"
                    name="cardholder name"
                    class="input"
                    type="option"
                    placeholder="MM/YY"
                  ></input>
                </div>

                <div id="fram-expiraton-right">
                  <div id="fram-expiraton-right-sub">
                    <h5>
                      CVV
                      <span> *</span>
                    </h5>
                    <div id="box-input-cvv">
                      <input
                        id="input-cvv"
                        name="cardholder name"
                        class="input"
                        type="text"
                        placeholder="***"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <p id="choose">Choose another payment method </p>
              <div id="summary">
                <h2>Summary</h2>
                {test.map((prop) => {
                  let name = prop.name;
                  let price = prop.price;
                  return (
                    <p>
                      <div id="box-summary">
                        <div id="box-summary-left">
                          <span>{name}</span>
                        </div>
                        <div id="box-summary-right">
                          <span> {price}</span>
                        </div>
                      </div>
                    </p>
                  );
                })}
                <div id="box-total">
                  <div id="box-total-left">
                    <h4>total</h4>
                  </div>
                  <div id="box-total-right">{totalvalue}</div>
                </div>
                <div id="box-pay">
                  <div id="bnt-pay">Pay ${totalvalue}</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Logo from "../components/logo.svg";
import "../components/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="styl-main-nav p-3">
        <div className="first-nav">
          <h6>Coins Exchanges Swap</h6>
        </div>
        <div className="logo-nav">
          <img src={Logo} alt="images" />
        </div>
        <div className="second-nav">
          <input type="text" className="form-control" placeholder="Enter Your Trade Name">
          </input>
        </div>

        <button
          type="button"
          class="btn btn-success text-light btn-rounded rounded-5"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Connect Wallet
        </button>

        <div
          class="modal fade modal-"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-style">
        <div className="container">
          <div className="row text-light" style={{ paddingTop: "90px" }}>
            <div className="col-2">
              <h5>Market Cap</h5>
              <p>$1.78t</p>
            </div>
            <div className="col-2">
              <h5>Exchange Vol</h5>
              <p>$75.63b</p>
            </div>

            <div className="col-2">
              <h5>Assets</h5>
              <p>2,295</p>
            </div>
            <div className="col-2">
              <h5>Exchanges</h5>
              <p>73</p>
            </div>
            <div className="col-2">
              <h5>Markets</h5>
              <p>15,760</p>
            </div>
            <div className="col-2">
              <h5>BTC Dom Index</h5>
              <p>34.5%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

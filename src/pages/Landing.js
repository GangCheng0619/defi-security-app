import React from "react";

const Landing = () => {
  return (
    <div className="x-dashboard">
      <div className="container x-container">
        <div className="x-header">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="col-md-6 x-title-section">
          <div className="x-title-section-description">
            <span className="x-font1-large1">DeFi Security</span>
            <span className="x-font1-normal3">
              Our mission is to secure the Decentralized Finance services to
              protect the crypto assets and support adoption of blockchain
              applications
            </span>
            <div className="x-title-section-description-btngroup">
              <div className="x-button-primary">
                <span className="x-font1-normal-bold">GET IN TOUCH</span>
              </div>
              <div className="x-button">
                <span className="x-font1-normal-bold">OUR BLOG</span>
              </div>
            </div>
          </div>
        </div>
        <div className="x-classify-section">
          <div className="col-md-4 x-classify-section-item">
            <div className="x-classify-section-item-feature">
              <img src="/images/feature-icon-01.svg" alt="feature1" />
            </div>
            <span className="x-font1-big">Smart Contract Audit</span>
            <span className="x-font1-normal2">
              We'll conduct a thorough security assessment of your Ethereum
              Solidity smart contracts
            </span>
          </div>
          <div className="col-md-4 x-classify-section-item">
            <div className="x-classify-section-item-feature">
              <img src="/images/feature-icon-02.svg" alt="feature1" />
            </div>
            <span className="x-font1-big">Whitepaper verification</span>
            <span className="x-font1-normal2">
              We'll validate the mathematical models proposed in your whitepaper
            </span>
          </div>
          <div className="col-md-4 x-classify-section-item">
            <div className="x-classify-section-item-feature">
              <img src="/images/feature-icon-03.svg" alt="feature1" />
            </div>
            <span className="x-font1-big">Vulnerability Management</span>
            <span className="x-font1-normal2">
              We'll perform penetration testing and will continuously scan and
              monitor your applications and infrastructure
            </span>
          </div>
        </div>
        <div className="x-customer-section">
          <span className="x-font1-large2">Our Customers</span>
          <div className="x-customer-section-items">
            <div className="x-customer-section-itemline">
              <img src="/images/waves.png" alt="waves" width={200} />
              <img src="/images/nem.png" alt="nem" width={200} height={65} />
              <img
                src="/images/symbol.png"
                alt="symbol"
                width={200}
                height={68}
              />
            </div>
            <div className="x-customer-section-itemline">
              <img src="/images/freeton.png" alt="freeton" width={125.5} />
              <img
                src="/images/vostok.png"
                alt="vostok"
                width={200}
                height={64}
              />
              <img src="/images/east.svg" alt="east" width={200} height={63} />
            </div>
          </div>
        </div>
        <div className="x-contact-section">
          <div class="container mt-3">
            <h2>Get in Touch</h2>
            <div className="x-contact-section-formlabel2 label-style">
              <label>
                <span style={{ color: "red" }}>*</span> required fields
              </label>
            </div>
            <div class="mt-3">
              <label className="label-style">
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="vitalik@buterin.me"
                name="email"
              />
              <div className="x-contact-section-formlabel1 label-style">
                <span className="x-font1-small2">This field is required.</span>
              </div>
            </div>
            <div>
              <label className="label-style">Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Vitalik"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label className="label-style">Company</label>
              <input
                type="email"
                className="form-control"
                id="company"
                placeholder="Ethereum Foundation"
                name="company"
              />
              <label className="label-style">
                Choose the services you may need
              </label>
            </div>

            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Security Monitoring
              </label>
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Smart Contract Audit
              </label>
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Whitepaper Verification
              </label>
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Consulting, Outsourcing
              </label>
            </div>
            <div className="mt-5 mb-3">
              <label className="form-label">
                Anything else you want us to know
              </label>
              <input
                type="text"
                className="form-control"
                id="vitalik"
                placeholder="Vitalik"
                name="vitalik"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
        <div className="x-footer">
          <div className="x-footer-external">
            <img src="/images/logo.svg" alt="logo" />
            <div className="x-footer-external-social">
              <img src="/images/facebook.svg" alt="facebook" height={16} />
              <img src="/images/twitter.svg" alt="twitter" height={16} />
            </div>
          </div>
          <div className="x-footer-introduction">
            <span className="x-font1-small1">
              @ 2020 DeteAct, all rights reserved
            </span>
            <div className="x-footer-external-social">
              <span className="x-font1-small1">About us</span>
              <span className="x-font1-small1">Pentest</span>
            </div>
          </div>
        </div>
      </div>
      <div className="x-header-decoration" />
    </div>
  );
};

export default Landing;

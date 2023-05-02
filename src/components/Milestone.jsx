import React from "react";
import "../App.css";
import "../cssfiles/responsivefront.css";
import { milstonedata } from "../constants";
import CountUp from "react-countup";

const Milestone = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="why-choose-col">
            <h5 className="common-h5">WHY CHOOSE US</h5>
            <h2 className="common-h2">Highest Security Rates 💰</h2>
            <p>
              Right Charity is a charitable organization based in Pakistan that
              provides a wide range of services, including emergency medical
              services, orphanages, and shelters for the homeless. There are
              several reasons why one might choose to donate to the Right
              Charity such as Transparency: Right Charity can provide a
              transparent and auditable record of all transactions, which can
              help donors track where their money is going and ensure that it is
              being used as intended Efficiency: We can reduce administrative
              costs and other expenses associated with traditional financial
              transactions, which can help them allocate more resources towards
              their programs and services Security : inherently secure, which
              can help protect the sensitive personal and financial information
              of both donors and recipients
            </p>
            <button className="common-btn" type="button">
              Contact Us
            </button>
          </div>

          {milstonedata.map((data) => (
            <div className="count-col">
              <div className="stat">
                <div className="count-sub-col">
                  <div className="milestone-counter">
                    <span className="state-count highlight">
                      <CountUp start={0} end={data.count} duration={3} />
                    </span>
                    <div className="milestone-details"> {data.paragraph}</div>
                  </div>
                </div>
              </div>
              <div className="stat-info-par">
                <div className="stat-info-sub-par">
                  <div className="stat-info-div">
                    <p>{data.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="clear"></div>
        </div>
      </section>
    </>
  );
};

export default Milestone;

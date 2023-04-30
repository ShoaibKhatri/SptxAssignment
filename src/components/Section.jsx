import React, { useContext, useEffect } from "react";
import wallet from "../assests/images/wallet.svg";
import bitcoin from "../assests/images/bitcoin.svg";
import cross from "../assests/images/cross.svg";
import customlink from "../assests/images/customlink.svg";
import moneybag from "../assests/images/moneybag.svg";
import copy from "../assests/images/copy.svg";
import share from "../assests/images/share.svg";
import "../assests/css/section.css";
import { Table } from "react-bootstrap";
import { AppContext } from "../Context/AppContext";

const Section = () => {
  const { data, setData, closeAd, setCloseAd } = useContext(AppContext);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
        localStorage.setItem(data.data[0].user, "user_id");
      });
  }, []);

  return (
    <div className="Section-Main">
      <div className="section-heading-main d-flex justify-content-between">
        <span className="section-heading">Section</span>
        <div className="d-flex justify-content-around buy-btn-main">
          <div className="btn-wallet-rectangle wallet-main">
            <div className="d-flex align-items-center">
              <img src={wallet} className="" alt="" />
              <span className="ps-2 dollar-xyz">0.2$XYZ</span>
            </div>

            <div className=" buy-sxyz tier1">Tier 1</div>
          </div>
        </div>
      </div>

      {/* Ad  */}

      <div className={closeAd ? "d-none" : "ad-main"}>
        <div className="ad-text">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <div className="tutorial-btn">Tutorial</div>
        </div>
        <div>
          <img src={bitcoin} alt="" />
        </div>
        <img
          src={cross}
          className="cross-btn"
          onClick={() => setCloseAd(true)}
          alt=""
        />
      </div>

      {/* Reward */}

      <div className="reward-main">
        <div>
          <div className="reward-heading-main">Your rewards</div>
          <div className="reward-amount-main">$ 0.26231428</div>
          <div className="balance-main ">
            <div className="balance">$40 AVAX</div>
            <div className="balance ms-2">$10 BNB</div>
            <div className="balance ms-2">$210 BTC</div>
          </div>
        </div>

        <div className="custom-link-main">
          <img src={customlink} alt="" />
          <span className="custom-link-text">Custom Link</span>
        </div>
      </div>

      {/* fee */}

      <div className="fee-outer-main">
        <div className="fee-main">
          <div className="d-flex ">
            <img src={moneybag} alt="" />
            <span className="fee-percentage ms-2">12.5% of fee</span>
          </div>
          <div className="referal-text">Your Referral Link for xyz</div>
          <div className="referal-link-main">
            <span className="referal-link">https://unityexchange.design</span>
            <img src={copy} alt="" />
          </div>
        </div>

        <div className="fee-main">
          <div className="d-flex ">
            <img src={moneybag} alt="" />
            <span className="fee-percentage ms-2">12.5% of fee</span>
          </div>
          <div className="referal-text">Your Referral Link for xyz</div>
          <div className="referal-link-main">
            <span className="referal-link">https://unityexchange.design </span>
            <img src={copy} alt="" />
          </div>
        </div>
      </div>

      {/* tabs */}

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            First Tab
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Second Tab
          </button>
        </li>
      </ul>
      {/* tab content */}

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ASSET</th>
                <th>AMOUNT </th>
                <th>USER ACCOUNT</th>
                <th>REFERAL EARNING</th>
              </tr>
            </thead>
            <tbody>
              {data
                ? data.map((stock) => {
                    return (
                      <tr>
                        <td>
                          <div className="asset-main ">
                            <img src={stock.img} alt="" />
                            <div>
                              <span className="asset-name">{stock.asset}</span>
                              <div className="asset-type-main">
                                <span className="asset-type">{stock.type}</span>
                                <div className="chain-main ms-1">
                                  <img src={stock.chain.img} alt="" />
                                  <span className="chain-name">
                                    {stock.chain.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="amount">{stock.amount}</div>
                          <div className="amount-state">{stock.state}</div>
                        </td>
                        <td>
                          <div className="user-id">{stock.user}</div>
                        </td>
                        <td>
                          <div>
                            <div className="amount">
                              {stock.referral_earnings}
                            </div>
                            <div className="share">
                              <div>View on BSC Scan</div>
                              <img src={share} alt="" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </Table>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Second Tab
        </div>
      </div>
    </div>
  );
};

export default Section;

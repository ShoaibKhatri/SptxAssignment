import { Dropdown } from "react-bootstrap";
import avalanche from "../assests/images/avalancha.svg";
import wallet from "../assests/images/wallet.svg";
import arrow from "../assests/images/arrow.svg";
import customlink from "../assests/images/customlink.svg";
import cancel from "../assests/images/cancel.svg";
import "../assests/css/custom.css";

const Custom = () => {
  return (
    <div>
      <div className="dropdown-main">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className=" avalanche">
            <img src={avalanche} alt="" />
            <span className="avalanche-button">Dropdown Button</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="user-wallet"
          >
            <img src={wallet} alt="" />
            <span className="wallet-user-id">0xf6...1353</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="custom-main">
        <div className="arrow-custom-main">
          <img src={arrow} alt="" />
          <div className="ms-2">Custom link</div>
        </div>
        <div className="test-link">https://testnet.xyz.xyz/trade?ref=</div>
        <div className="link-input-main">
          <input className="link-input" type="text" placeholder="ENTER" />
        </div>
        <div className="custom-cancel-main">
          <div className="custom-link-main">
            <img src={customlink} alt="" />
            <span className="custom-link-text">Custom Link</span>
          </div>
          <div className="cancel-main">
            <img src={cancel} alt="" />
            <span className="custom-link-text">Cancel </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;

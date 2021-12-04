import React from "react";
import Navbar from "../Navbar/Navbar";
import "./account.css";
import OrderCard from "./OrderCard";

const General = () => {
  return (
    <div class="tab-pane fade active show" id="account-general">
      <div class="card-body media align-items-center d-flex">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          alt=""
          class="d-block ui-w-80"
        />
        <div class="media-body ml-4">
          <label class="btn btn-outline-primary form-group">
            Upload new photo
            <input type="file" class="account-settings-fileinput" />
          </label>{" "}
          <div class="text-light small mt-1 form-group">
            Allowed JPG, GIF or PNG. Max size of 800K
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input
            type="text"
            class="form-control"
            defaultValue="Rhythm Shandlya"
          />
        </div>
        <div class="form-group">
          <label class="form-label">Email Address</label>
          <input
            type="text"
            class="form-control mb-1"
            value="armaan@mail.com"
          />
          <div class="alert alert-warning mt-3">
            Your email is not confirmed. Please check your inbox.
            <br />
            <a href="#">Resend confirmation</a>
          </div>
          <div class="alert alert-warning mt-3">
            Your email cannot be changed.
            <br />
            <a href="#">Request change?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
const ChangePassword = () => {
  return (
    <div class="tab-pane fade active show" id="account-change-password">
      <div class="card-body pb-2">
        <div class="form-group">
          <label class="form-label">Current password</label>
          <input type="password" class="form-control" />
        </div>

        <div class="form-group">
          <label class="form-label">New password</label>
          <input type="password" class="form-control" />
        </div>

        <div class="form-group">
          <label class="form-label">Repeat new password</label>
          <input type="password" class="form-control" />
        </div>
      </div>
    </div>
  );
};

const AddressInfo = () => {
  return (
    <div class="tab-pane fade active show" id="account-info">
      <div class="card-body pb-2">
        <div class="form-group">
          <label class="form-label">Address Information</label>
          <textarea class="form-control" rows="5"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Pincode</label>
          <input type="text" class="form-control" defaultValue="" />
        </div>
        <div class="form-group">
          <label class="form-label">City</label>
          <input type="text" class="form-control" defaultValue="" />
        </div>
        <div class="form-group">
          <label class="form-label">State</label>
          <input type="text" class="form-control" defaultValue="" />
        </div>
      </div>
      <div class="card-body pb-2">
        <h6 class="mb-4">Contacts</h6>
        <div class="form-group">
          <label class="form-label">Phone</label>
          <input type="text" class="form-control" defaultValue="+91 " />
        </div>
        <div class="form-group">
          <label class="form-label">Alternate Phone</label>
          <input type="text" class="form-control" defaultValue="+91 " />
        </div>
      </div>
    </div>
  );
};

const MyOrders = () => {
  return (
    <div class="tab-pane fade active show" id="account-social-links">
      <OrderCard />
    </div>
  );
};

const Notifications = () => {
  return (
    <div class="tab-pane fade active show" id="account-notifications">
      <div class="card-body pb-2">
        <h6 class="mb-4">Activity</h6>

        <div class="form-group">
          <label class="switcher">
            <input type="checkbox" class="switcher-input" checked="" />
            <span class="switcher-indicator">
              <span class="switcher-yes"></span>
              <span class="switcher-no"></span>
            </span>
            <span class="switcher-label">
              Email me when someone comments on my article
            </span>
          </label>
        </div>
        <div class="form-group">
          <label class="switcher">
            <input type="checkbox" class="switcher-input" checked="" />
            <span class="switcher-indicator">
              <span class="switcher-yes"></span>
              <span class="switcher-no"></span>
            </span>
            <span class="switcher-label">
              Email me when someone answers on my forum thread
            </span>
          </label>
        </div>
        <div class="form-group">
          <label class="switcher">
            <input type="checkbox" class="switcher-input" />
            <span class="switcher-indicator">
              <span class="switcher-yes"></span>
              <span class="switcher-no"></span>
            </span>
            <span class="switcher-label">Email me when someone follows me</span>
          </label>
        </div>
      </div>
      <hr class="border-light m-0" />
      <div class="card-body pb-2">
        <h6 class="mb-4">Application</h6>

        <div class="form-group">
          <label class="switcher">
            <input type="checkbox" class="switcher-input" checked="" />
            <span class="switcher-indicator">
              <span class="switcher-yes"></span>
              <span class="switcher-no"></span>
            </span>
            <span class="switcher-label">News and announcements</span>
          </label>
        </div>
        <div class="form-group">
          <label class="switcher">
            <input type="checkbox" class="switcher-input" />
            <span class="switcher-indicator">
              <span class="switcher-yes"></span>
              <span class="switcher-no"></span>
            </span>
            <span class="switcher-label">Weekly product updates</span>
          </label>
        </div>
        <div class="form-group">
          <label class="switcher">
            <input type="checkbox" class="switcher-input" checked="" />
            <span class="switcher-indicator">
              <span class="switcher-yes"></span>
              <span class="switcher-no"></span>
            </span>
            <span class="switcher-label">Weekly blog digest</span>
          </label>
        </div>
      </div>
    </div>
  );
};

const Options = ({ handleState }) => {
  function handleClick(e) {
    console.log(e.target.innerHTML);
    handleState(e.target.innerHTML);
  }
  return (
    <div class="col-md-3 pt-0">
      <div class="list-group list-group-flush account-settings-links">
        <button
          class="list-group-item list-group-item-action"
          onClick={handleClick}
        >
          General
        </button>
        <button
          class="list-group-item list-group-item-action"
          onClick={handleClick}
        >
          My Orders
        </button>
        <button
          class="list-group-item list-group-item-action"
          onClick={handleClick}
        >
          Change Password
        </button>
        <button
          class="list-group-item list-group-item-action"
          onClick={handleClick}
        >
          Delivery Address
        </button>
        <button
          class="list-group-item list-group-item-action"
          onClick={handleClick}
        >
          Notifications
        </button>
      </div>
    </div>
  );
};

const Account = () => {
  const [settingType, setSettingType] = React.useState("General");
  return (
    <React.Fragment>
      <Navbar />
      <div className="accounts-wrapper">
        <div class="container light-style flex-grow-1 container-p-y">
          <h4 class="font-weight-bold py-3 mb-4 center">Account Information</h4>

          <div class="card overflow-hidden">
            <div class="row no-gutters row-bordered row-border-light">
              <Options handleState={setSettingType} />
              <div class="col-md-9">
                <div class="tab-content">
                  {settingType === "General" && <General />}
                  {settingType === "Change Password" && <ChangePassword />}
                  {settingType === "Delivery Address" && <AddressInfo />}
                  {settingType === "My Orders" && <MyOrders />}
                  {settingType === "Notifications" && <Notifications />}
                </div>
              </div>
            </div>
          </div>
          <div class="text-right mt-3">
            <button type="button" class="btn btn-dark">
              Save changes
            </button>
            &nbsp;
            <button type="button" class="btn btn-default">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;

import React, { Component } from "react";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
          <div class="container-fluid">
            <a class="navbar-brand" id="headItem" href=".">
              <img src="https://blogzine.webestica.com/assets/images/logo.svg" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <h6 id="offcanvasRightLabel">Navigation Bar</h6>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div class="navbar-nav">
                  <a
                    class="nav-link active"
                    id="Item1"
                    aria-current="page"
                    href="."
                  >
                    Home
                  </a>
                  <a class="nav-link" id="Item1" href=".">
                    Features
                  </a>
                  <a class="nav-link" id="Item1" href=".">
                    About Us
                  </a>
                  <a class="nav-link" id="Item1" href=".">
                    Login
                  </a>
                  <a class="nav-link" id="Item1" href=".">
                    Signup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

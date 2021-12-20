import React, { Component } from "react";

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid foot">
          <div class="row row-no-gutters">
            <div class="col-xs-12 col-sm-6 col-lg-4">
              <ul>
                <li class="col-heading">Navigation</li>
                <li>
                  <a href=".">Home</a>
                </li>
                <li>
                  <a href=".">Products</a>
                </li>
                <li>
                  <a href=".">Reviews</a>
                </li>
                <li>
                  <a href=".">Login</a>
                </li>
                <li>
                  <a href=".">Signup</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4">
              <ul>
                <li class="col-heading">Get Regular Updates</li>
                <li>
                  <a href=".">
                    <i class="fab fa-whatsapp fa-fw me-2"></i>WhatsApp
                  </a>
                </li>
                <li>
                  <a href=".">
                    <i class="fab fa-youtube fa-fw me-2"></i>YouTube
                  </a>
                </li>
                <li>
                  <a href=".">
                    <i class="far fa-bell fa-fw me-2"></i>Website Notifications
                  </a>
                </li>
                <li>
                  <a href=".">
                    <i class="far fa-envelope fa-fw me-2"></i>Newsletters
                  </a>
                </li>
                <li>
                  <a href=".">
                    <i class="fas fa-headphones-alt fa-fw me-2"></i>Podcasts
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4">
              <ul>
                <li class="col-heading">Contact Us</li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:99-999-999-9999">+91 7036422879</a>
                </li>
                <li>
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                  <a href="sms:99-999-999-9999" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Message Us</a>
                  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Rajendra Prasad Bhukya</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Write Your Message Here</label> 
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="start typing..."></textarea>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-success" data-bs-dismiss="modal">Send</button>
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Discard</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <a href=".">Address</a>
                </li>
                <li>
                  <i class="fa fa-envelope-square" aria-hidden="true"></i>
                  <a href="mailto:someone@yoursite.com?subject=Email Subject line">
                    Email Us
                  </a>
                </li>
                <li>
                  <i class="fa fa-details"></i>
                  <a href=".">About Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row row-no-gutters" id="bottom-footer">
            <div class="col-xs-12 col-md-5 text-center">
              <ul class="vertical-links small">
                <li>
                  <a href=".">Privacy</a>
                </li>
                <li>
                  <a href=".">Terms & Conditions</a>
                </li>
                <li>
                  <a href=".">Site Map</a>
                </li>
                <li>
                  <a href=".">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-md-2 text-center">
              <p>
                <i class="fa fa-heart-o" aria-hidden="true"></i>
              </p>
            </div>
            <div class="col-xs-12 col-md-5 text-center">
              <ul>
                <li class="small">
                  © Copyright 2021 Website by <a href=".">Rajendra Prasad</a>.
                  All Rights reserved.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

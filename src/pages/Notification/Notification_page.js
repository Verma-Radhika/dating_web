import React from "react";
import "./Notification.css";
export const Notification_page = () => {
  return (
    <div>
      <section class="section-50">
        <div class="container">
          {/* <h3 class="m-b-50 heading-line">
            Notifications <i class="fa fa-bell text-muted"></i>
          </h3> */}

          <div class="notification-ui_dd-content">
            <div class="notification-list notification-list--unread">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>John Doe</b> reacted to your post
                  </p>

                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/AbZqFnR.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
            <div class="notification-list notification-list--unread">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/w4Mp4ny.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>Richard Miles</b> liked your post
                  </p>

                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/AbZqFnR.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
            <div class="notification-list">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/ltXdE4K.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>Brian Cumin</b> reacted to your post
                  </p>

                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/bpBpAlH.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
            <div class="notification-list">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/CtAQDCP.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>Lance Bogrol</b> reacted to your post
                  </p>

                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/iIhftMJ.jpg"
                  alt="Feature image"
                /> 
              </div>
            </div>
            <div class="notification-list">
              <div class="notification-list_content">
                <div class="notification-list_img">
                  <img src="https://i.imgur.com/zYxDCQT.jpg" alt="user" />
                </div>
                <div class="notification-list_detail">
                  <p>
                    <b>Parsley Montana</b> reacted to your post
                  </p>

                  <p class="text-muted">
                    <small>10 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="notification-list_feature-img">
                <img
                  src="https://i.imgur.com/bpBpAlH.jpg"
                  alt="Feature image"
                />
              </div>
            </div>
          </div>

          <div class="text-center">
            <a href="#!" class="dark-link">
              Load more activity
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

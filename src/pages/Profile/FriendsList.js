// import "./profile.css";

import "./ProfileStyles/profile.css";
export const FriendsList = () => {
  const newValue = "0 3 4 2";
  const formula = "a+ (n-1)*d";
  // a+d  ,  3, 6, 9, 12, 15
  //  6, 8, 10 ,12 ,
  return (
    <div class="tab-content p-0">
      <div class="tab-pane fade in active show" id="profile-friends">
        <h4 class="m-t-0 m-b-20">Friend List (14)</h4>
        <div class="row row-space-2">
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">James Pittman</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                      aria-expanded="false"
                    ></a>
                    <ul
                      class="dropdown-menu dropdown-menu-right"
                      x-placement="bottom-end"
                      style={{
                        position: "absolute",
                        willChange: "transform",
                        top: " 0px",
                        left: "0px",
                        transform: "translate3d(101px, 34px, 0px)",
                      }}
                    >
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Mitchell Ashcroft</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Ella Cabena</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                      aria-expanded="false"
                    ></a>
                    <ul
                      class="dropdown-menu dropdown-menu-right"
                      x-placement="top-end"
                      style={{
                        position: "absolute",
                        willChange: "transform",
                        top: "0px",
                        left: "0px",
                        transform: "translate3d(101px, -2px, 0px)",
                      }}
                    >
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Declan Dyson</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">George Seyler</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Patrick Musgrove</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Taj Connal</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Laura Pollock</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Dakota Mannix</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Timothy Woolley</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Benjamin Congreve</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Mariam Maddock</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Blake Gerrald</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 m-b-2">
            <div class="p-10 bg-white">
              <div class="media media-xs overflow-visible">
                <a class="media-left" href="javascript:;">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    alt=""
                    class="media-object img-circle"
                  />
                </a>
                <div class="media-body valign-middle">
                  <b class="text-inverse">Gabrielle Bunton</b>
                </div>
                <div class="media-body valign-middle text-right overflow-visible">
                  <div class="btn-group dropdown">
                    <a href="javascript:;" class="btn btn-default">
                      Friends
                    </a>
                    <a
                      href="javascript:;"
                      data-toggle="dropdown"
                      class="btn btn-default dropdown-toggle"
                    ></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a href="javascript:;">Action 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Action 3</a>
                      </li>
                      <li class="divider"></li>
                      <li>
                        <a href="javascript:;">Action 4</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const SearchPageData = ({ data }) => {
  console.log("data", data);
  return (
    <div class="container cardContainer py-5">
      <div class="row pb-5 mb-4">
        {data?.map((el) => (
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div
              class="card shadow-sm border  border-1 rounded-0"
              style={{ marginTop: "20px" }}
            >
              <div class="card-body p-0">
                <img
                  // src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                  src={el.image}
                  alt=""
                  class="w-100 card-img-top"
                />
                <div class="p-2" style={{ borderTop: "1px solid #e5e5e5" }}>
                  {/* <h5 class="mb-0">{el.name}</h5> */}
                  <p class="small ">{el.name}</p>
                  {/* <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item m-0">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item m-0">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item m-0">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item m-0">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div class="card shadow-sm border-0 rounded">
            <div class="card-body p-0">
              <img
                src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg"
                alt=""
                class="w-100 card-img-top"
              />
              <div class="p-4">
                <h5 class="mb-0">Mark Rockwell</h5>
                <p class="small text-muted">CEO - Consultant</p>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div class="card shadow-sm border-0 rounded">
            <div class="card-body p-0">
              <img
                src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
                alt=""
                class="w-100 card-img-top"
              />
              <div class="p-4">
                <h5 class="mb-0">Mark Rockwell</h5>
                <p class="small text-muted">CEO - Consultant</p>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div class="card shadow-sm border-0 rounded">
            <div class="card-body p-0">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg"
                alt=""
                class="w-100 card-img-top"
              />
              <div class="p-4">
                <h5 class="mb-0">Mark Rockwell</h5>
                <p class="small text-muted">CEO - Consultant</p>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item m-0">
                    <a href="#" class="social-link">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import "./cards.css";
// const Cards = () => {
//   return (
//     <>
//       <div class="container cardContainer py-5">
//         <div class="row pb-5 mb-4">
//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card shadow-sm border-0 rounded">
//               <div class="card-body p-0">
//                 <img
//                   src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
//                   alt=""
//                   class="w-100 card-img-top"
//                 />
//                 <div class="p-4">
//                   <h5 class="mb-0">Mark Rockwell</h5>
//                   <p class="small text-muted">CEO - Consultant</p>
//                   <ul class="social mb-0 list-inline mt-3">
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-linkedin"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card shadow-sm border-0 rounded">
//               <div class="card-body p-0">
//                 <img
//                   src="https://bootstrapious.com/i/snippets/sn-cards/profile-3_ybnq8v.jpg"
//                   alt=""
//                   class="w-100 card-img-top"
//                 />
//                 <div class="p-4">
//                   <h5 class="mb-0">Mark Rockwell</h5>
//                   <p class="small text-muted">CEO - Consultant</p>
//                   <ul class="social mb-0 list-inline mt-3">
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-linkedin"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card shadow-sm border-0 rounded">
//               <div class="card-body p-0">
//                 <img
//                   src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
//                   alt=""
//                   class="w-100 card-img-top"
//                 />
//                 <div class="p-4">
//                   <h5 class="mb-0">Mark Rockwell</h5>
//                   <p class="small text-muted">CEO - Consultant</p>
//                   <ul class="social mb-0 list-inline mt-3">
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-linkedin"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card shadow-sm border-0 rounded">
//               <div class="card-body p-0">
//                 <img
//                   src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg"
//                   alt=""
//                   class="w-100 card-img-top"
//                 />
//                 <div class="p-4">
//                   <h5 class="mb-0">Mark Rockwell</h5>
//                   <p class="small text-muted">CEO - Consultant</p>
//                   <ul class="social mb-0 list-inline mt-3">
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-facebook-f"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-twitter"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-instagram"></i>
//                       </a>
//                     </li>
//                     <li class="list-inline-item m-0">
//                       <a href="#" class="social-link">
//                         <i class="fa fa-linkedin"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2 class="font-weight-bold mb-2">Active Profiles</h2>
//         <p class="font-italic text-muted mb-4">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt.
//         </p>

//         <div class="row pb-5 mb-4">
//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card rounded shadow-sm border-0">
//               <div class="card-body p-0">
//                 <div class="bg-primary px-5 py-4 text-center card-img-top">
//                   <img
//                     src="https://bootstrapious.com/i/snippets/sn-cards/teacher-4.jpg"
//                     alt="..."
//                     width="100"
//                     class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
//                   />
//                   <h5 class="text-white mb-0">Emma Nevoresky</h5>
//                   <p class="small text-white mb-0">Elite user</p>
//                 </div>
//                 <div class="p-4 d-flex justify-content-center">
//                   <ul class="list-inline mb-0">
//                     <li class="list-inline-item">
//                       <h5 class="font-weight-bold mb-0 d-block">241</h5>
//                       <small class="text-muted">
//                         <i class="fa fa-picture-o mr-1 text-primary"></i>Photos
//                       </small>
//                     </li>
//                     <li class="list-inline-item">
//                       <h5 class="font-weight-bold mb-0 d-block">84K</h5>
//                       <small class="text-muted">
//                         <i class="fa fa-user-circle-o mr-1 text-primary"></i>
//                         Followers
//                       </small>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card rounded shadow-sm border-0">
//               <div class="card-body p-0">
//                 <div class="bg-success px-5 py-4 text-center card-img-top">
//                   <img
//                     src="https://bootstrapious.com/i/snippets/sn-cards/teacher-2.jpg"
//                     alt="..."
//                     width="100"
//                     class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
//                   />
//                   <h5 class="text-white mb-0">Samuel Hardy</h5>
//                   <p class="small text-white mb-0">Elite user</p>
//                 </div>
//                 <div class="p-4 d-flex justify-content-center">
//                   <ul class="list-inline mb-0">
//                     <li class="list-inline-item">
//                       <h5 class="font-weight-bold mb-0 d-block">241</h5>
//                       <small class="text-muted">
//                         <i class="fa fa-picture-o mr-1 text-success"></i>Photos
//                       </small>
//                     </li>
//                     <li class="list-inline-item">
//                       <h5 class="font-weight-bold mb-0 d-block">84K</h5>
//                       <small class="text-muted">
//                         <i class="fa fa-user-circle-o mr-1 text-success"></i>
//                         Followers
//                       </small>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card rounded shadow-sm border-0">
//               <div class="card-body p-0">
//                 <div class="bg-info px-5 py-4 text-center card-img-top">
//                   <img
//                     src="https://bootstrapious.com/i/snippets/sn-cards/teacher-7.jpg"
//                     alt="..."
//                     width="100"
//                     class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
//                   />
//                   <h5 class="text-white mb-0">Tom Sunderland</h5>
//                   <p class="small text-white mb-0">Elite user</p>
//                 </div>
//                 <div class="p-4 d-flex justify-content-center">
//                   <ul class="list-inline mb-0">
//                     <li class="list-inline-item">
//                       <h5 class="font-weight-bold mb-0 d-block">241</h5>
//                       <small class="text-muted">
//                         <i class="fa fa-picture-o mr-1 text-info"></i>Photos
//                       </small>
//                     </li>
//                     <li class="list-inline-item">
//                       <h5 class="font-weight-bold mb-0 d-block">84K</h5>
//                       <small class="text-muted">
//                         <i class="fa fa-user-circle-o mr-1 text-info"></i>
//                         Followers
//                       </small>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card rounded shadow-sm border-0">
//               <div class="card-body p-0">
//                 <div class="bg-warning px-5 py-4 text-center card-img-top">
//                   <img
//                     src="https://bootstrapious.com/i/snippets/sn-cards/teacher-1.jpg"
//                     alt="..."
//                     width="100"
//                     class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
//                   />
//                   <h5 class="text-white mb-0">John Tarly</h5>
//                   <p class="small text-white mb-0">Elite user</p>
//                 </div>
//                 <div class="p-4 d-flex justify-content-center">
//                   <ul class="list-inline mb-0">
//                     <li class="list-inline-item">
//                       <h5 class="font-weight-bold mb-0 d-block">241</h5>
//                       <small class="text-muted">
//                         <i class="fa fa-picture-o mr-1 text-warning"></i>Photos
//                       </small>
//                     </li>
//                     <li class="list-inline-item">
//                       <h5 class="font-weight-bold mb-0 d-block">84K</h5>
//                       <small class="text-muted">
//                         <i class="fa fa-user-circle-o mr-1 text-warning"></i>
//                         Followers
//                       </small>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="row pb-5">
//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card rounded shadow-sm border-0">
//               <div class="card-body p-5">
//                 <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
//                 <h5>Products Sales</h5>
//                 <p class="small text-muted font-italic">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 </p>
//                 <div class="progress rounded-pill">
//                   <div
//                     role="progressbar"
//                     aria-valuenow="70"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                     style={{ width: "70%" }}
//                     class="progress-bar rounded-pill"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card rounded shadow-sm border-0">
//               <div class="card-body p-5">
//                 <i class="fa fa-tasks fa-2x mb-3 text-success"></i>
//                 <h5>Completed Tasks</h5>
//                 <p class="small text-muted font-italic">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 </p>
//                 <div class="progress rounded-pill">
//                   <div
//                     role="progressbar"
//                     aria-valuenow="80"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                     style={{ width: "80%" }}
//                     class="progress-bar bg-success rounded-pill"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card rounded shadow-sm border-0">
//               <div class="card-body p-5">
//                 <i class="fa fa-user-circle-o fa-2x mb-3 text-info"></i>
//                 <h5>New Users</h5>
//                 <p class="small text-muted font-italic">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 </p>
//                 <div class="progress rounded-pill">
//                   <div
//                     role="progressbar"
//                     aria-valuenow="70"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                     style={{ width: "70%" }}
//                     class="progress-bar bg-info rounded-pill"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//             <div class="card rounded shadow-sm border-0">
//               <div class="card-body p-5">
//                 <i class="fa fa-shopping-bag fa-2x mb-3 text-warning"></i>
//                 <h5>New Products</h5>
//                 <p class="small text-muted font-italic">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 </p>
//                 <div class="progress rounded-pill">
//                   <div
//                     role="progressbar"
//                     aria-valuenow="70"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                     style={{ width: "70%" }}
//                     class="progress-bar bg-warning rounded-pill"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;

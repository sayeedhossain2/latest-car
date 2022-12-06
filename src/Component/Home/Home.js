import React from "react";
import banner from "../../assets/bg.png";
import car1 from "../../assets/car 01.jpg";
import car2 from "../../assets/car 02.jpg";
import car3 from "../../assets/car 03.jpg";
import Category from "../Category/Category";
import { FaGoogle, FaDownload } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <div
        className=" bg-cover"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        {/* {hero start} */}
        <div>
          <div className="hero min-h-screen text-accent">
            <div className="hero-content grid md:grid-cols-2 ">
              {/* 1st part start */}
              <div className="text-center lg:text-left lg:mr-52">
                <h1 className="text-5xl font-bold mb-5">
                  A burning <br /> passion for <br /> excessence
                </h1>

                <div className="lg:flex  ">
                  {/* car avater start */}
                  <div className="avatar-group -space-x-6 ml-28 lg:ml-0 lg:mr-3">
                    <div className="avatar">
                      <div className="w-12">
                        <img src={car1} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src={car2} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src={car3} />
                      </div>
                    </div>
                  </div>
                  {/* car avater end */}

                  {/* car avater describe start */}
                  <div>
                    <h2>
                      Get auto-zoned by joining{" "}
                      <strong>
                        {" "}
                        auto <br /> chase
                      </strong>{" "}
                    </h2>
                  </div>

                  {/* car avater describe end */}
                </div>
                <div className="lg:ml-32">
                  <h3>
                    dive into auto chase and explore <br /> more than{" "}
                    <strong>10000 </strong> cars
                  </h3>
                </div>
                <div className="flex justify-start items-center mt-5">
                  <button className="bg-accent btn bg-primary rounded-xl font-bold">
                    join now
                  </button>
                  <span className="flex items-center">
                    <span className="mx-3 text-sm">
                      <FaDownload />
                    </span>{" "}
                    DownloadIOS App
                  </span>
                </div>
              </div>

              {/* 1st part end */}
              <div className="card flex-shrink-0 w-full lg:mt-16 lg:w-1/2  max-w-sm shadow-2xl bg-info lg:ml-[55%] mt-10">
                <h1 className="text-2xl font-bold">Create Free Account</h1>
                <div className="card-body ">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="First & Last Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="password"
                      placeholder="
                      create Password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="flex">
                    <small className="text-left">
                      i agree with the <span>terms & condition</span> of Clarity
                    </small>
                    <input type="checkbox" className="checkbox " disabled />
                  </div>
                  <div className="form-control ">
                    <button className="btn btn-sm btn-accent -mb-5">
                      Sign up
                    </button>
                  </div>
                  <div className="form-control mt-6 flex">
                    <button className="btn btn-sm btn-accent">
                      <span className="mr-2 text-blue-700">
                        <FaGoogle />
                      </span>{" "}
                      Sign up with google
                    </button>
                  </div>
                  <h2 className="text-primary">
                    <span className="text-sm"> Don't have an account? </span>
                    <span className="text-accent font-bold">sign up</span>{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hero end */}
      </div>
      <Category></Category>
      <Footer></Footer>
    </div>
  );
};

export default Home;

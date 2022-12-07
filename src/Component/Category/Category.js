import React from "react";
import lamborgini from "../../assets/car11.jpg";
import tesla from "../../assets/car12.jpg";
import ferari from "../../assets/car13.jpg";
import honda from "../../assets/car14.jpg";
import audi from "../../assets/car15.jpg";
import rangerover from "../../assets/car16.jpg";

const Category = () => {
  return (
    <div className="text-accent mt-10 bg-info  -mt-0">
      <h2 className="text-4xl font-bold pt-10">Latest Cars</h2>
      <p className="text-xl mb-5">
        Here is our new collection , if you want to buy please stay sometimes
        and see all featured, <br />
        our product quality are so premium
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:w-11/12 mx-auto">
        {" "}
        {/* car-1 */}
        <div className="card w-full bg-base-100 shadow-xl  bg-neutral text-primary  hover:scale-105 duration-500">
          <figure className="px-10 pt-10">
            <img
              style={{
                width: "400px",
                height: "250px",
                objectFit: "cover",
              }}
              src={lamborgini}
              alt="lamborgini"
              className="rounded-xl"
              title="Lamborgini New Edition !"
            />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title  ">Lamborgini</h2>
            {/* <h2 className="border mt-3 border-gray-600"></h2> */}
            <p
              className="flex justify-around items-center "
              style={{
                borderTop: "1px solid gray",
                width: "full",
              }}
            >
              <span> $ 3.75 crore onwards </span>{" "}
              <span>
                <button className="bg-info text-primary rounded-xl  border-none btn btn-sm ml-20">
                  Available
                </button>
              </span>
            </p>
            <div className="card-actions ">
              <button className="btn bg-info text-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* car-2 */}
        <div className="card w-full bg-base-100 shadow-xl  bg-neutral text-primary  hover:scale-105 duration-500">
          <figure className="px-10 pt-10">
            <img
              style={{
                width: "400px",
                height: "250px",
                objectFit: "cover",
              }}
              src={tesla}
              alt="tesla"
              className="rounded-xl"
              title="
              Tesla !"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tesla</h2>
            <p
              className="flex justify-around items-center mt-3"
              style={{
                borderTop: "1px solid gray",
                width: "full",
              }}
            >
              <span> $ 2.75 crore onwards </span>{" "}
              <span>
                <button className="bg-info text-primary  mt-3 rounded-xl border-none btn btn-sm ml-20">
                  Available
                </button>
              </span>
            </p>
            <div className="card-actions">
              <button className="btn bg-info text-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* car-3 */}
        <div className="card w-full bg-base-100 shadow-xl bg-neutral text-primary  hover:scale-105 duration-500">
          <figure className="px-10 pt-10">
            <img
              style={{
                width: "400px",
                height: "250px",
                objectFit: "cover",
              }}
              src={ferari}
              alt="ferari"
              className="rounded-xl"
              title="Ferari !"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Ferari</h2>
            <p
              className="flex justify-around items-center "
              style={{
                borderTop: "1px solid gray",
                width: "full",
              }}
            >
              <span> $ 3.44 crore onwards </span>{" "}
              <span>
                <button className="bg-info text-primary rounded-xl  mt-3 border-none btn btn-sm ml-20">
                  Available
                </button>
              </span>
            </p>
            <div className="card-actions">
              <button className="btn bg-info text-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* car-4 */}
        <div className="card w-full bg-base-100 shadow-xl bg-neutral text-primary  hover:scale-105 duration-500">
          <figure className="px-10 pt-10">
            <img
              style={{
                width: "400px",
                height: "250px",
                objectFit: "cover",
              }}
              src={honda}
              alt="ferari"
              className="rounded-xl"
              title="Ferari !"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Ferari</h2>
            <p
              className="flex justify-around items-center "
              style={{
                borderTop: "1px solid gray",
                width: "full",
              }}
            >
              <span> $ 3.25 crore onwards </span>{" "}
              <span>
                <button className="bg-info text-primary rounded-xl  mt-3 border-none btn btn-sm ml-20">
                  Available
                </button>
              </span>
            </p>
            <div className="card-actions">
              <button className="btn bg-info text-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* car-5 */}
        <div className="card w-full bg-base-100 shadow-xl bg-neutral text-primary  hover:scale-105 duration-500">
          <figure className="px-10 pt-10">
            <img
              style={{
                width: "400px",
                height: "250px",
                objectFit: "cover",
              }}
              src={audi}
              alt="ferari"
              className="rounded-xl"
              title="Ferari !"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Ferari</h2>
            <p
              className="flex justify-around items-center "
              style={{
                borderTop: "1px solid gray",
                width: "full",
              }}
            >
              <span> $ 3.70 crore onwards </span>{" "}
              <span>
                <button className="bg-info text-primary rounded-xl  mt-3 border-none btn btn-sm ml-20">
                  Available
                </button>
              </span>
            </p>
            <div className="card-actions">
              <button className="btn bg-info text-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* car-6 */}
        <div className="card w-full bg-base-100 shadow-xl bg-neutral text-primary  hover:scale-105 duration-500">
          <figure className="px-10 pt-10">
            <img
              style={{
                width: "400px",
                height: "250px",
                objectFit: "cover",
              }}
              src={rangerover}
              alt="ferari"
              className="rounded-xl"
              title="Ferari !"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">Ferari</h2>
            <p
              className="flex justify-around items-center "
              style={{
                borderTop: "1px solid gray",
                width: "full",
              }}
            >
              <span> $ 3.33 crore onwards </span>{" "}
              <span>
                <button className="bg-info text-primary rounded-xl  mt-3 border-none btn btn-sm ml-20">
                  Available
                </button>
              </span>
            </p>
            <div className="card-actions">
              <button className="btn bg-info text-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn bg-neutral text-primary my-10">View All</button>
    </div>
  );
};

export default Category;

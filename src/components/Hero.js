import React from "react";
import { createPopper } from "@popperjs/core";

function Hero() {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <div className=" px-6 py-16 mx-auto  text-center">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex w-1/2 mx-auto my-10 bg-white rounded-lg ">
          <div className="bg-white rounded-lg shadow max-w-full mx-5 sm:w-full sm:mx-auto sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
              <h1 className="max-w-7xl text-2xl font-bold text-gray-800 dark:text-white md:text-2xl">
                What do you know about pakistan?
              </h1>

              <div className="mt-6">
                <div className="w-full space-y-6">
                  <div className="w-full">
                    <div className=" relative ">
                      <input
                        type="email"
                        placeholder="Enter your answer here"
                        className="w-full h-10 px-4 py-2 m-1 text-gray-700 focus:outline-none placeholder-gray-400 border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block w-full rounded-md shadow-sm">
                      <button
                        type="button"
                        className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Next question
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
              {/* <p className="text-xs leading-5 text-gray-500">
                This data are display for information and can change
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

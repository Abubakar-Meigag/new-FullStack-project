import React from "react";

const ListHeader = ({ listName }) => {
  return (
    <div className="py-10 bg-base-200">
      <div className="hero-content flex flex-col sm:flex-row md:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            {listName}
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row p-2 gap-2 text-center sm:text-center md:text-center ">
          <div>
            <button className="btn btn-accent text-base sm:text-xl">
              ADD NEW
            </button>
          </div>
          <div>
            <button className="btn btn-error text-base sm:text-xl">
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListHeader;

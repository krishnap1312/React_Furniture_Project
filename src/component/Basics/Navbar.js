import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div className="divHead"><h1 class = "Heading">Black Friday Furniture🪵</h1></div>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;

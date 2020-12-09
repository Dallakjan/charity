import React from "react";
import "../scss/_threecolumns.scss";

export default function ThreeColumns() {
  return (
    <>
      <div className="threeColumns">
        <div className="threeColumns__left">
          <h3>10</h3>
          <h4>Oddanych worków</h4>
          <p>lorem kjsadlkajsljas askdjlkasjdklasj</p>
        </div>
        <div className="threeColumns__middle">
        <h3>5</h3>
          <h4>Wspartych organizacji</h4>
          <p>lorem kjsadlkajsljas askdjlkasjdklasj</p>
        </div>
        <div className="threeColumns__right">
        <h3>7</h3>
          <h4>zorganizowanych zbiórek </h4>
          <p>lorem kjsadlkajsljas askdjlkasjdklasj</p>
        </div>
      </div>
    </>
  );
}

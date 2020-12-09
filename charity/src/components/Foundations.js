import React from "react";
import "../scss/_foundations.scss";

export default function Foundations() {
  return (
    <>
      <div className="foundation" id="foundations">
        <div className="foundation__header">Komu Pomagamy?</div>
        <div className="foundation__header--decoration"></div>
        <div className="foundation__btn">
          <div>
            <div>
              <button>Fundacjom</button>
            </div>
            <button>
              Organizacjom <br />
              Pozarządowym
            </button>
            <div>
              <button>
                Lokalnym <br />
                Zbiórkom
              </button>
            </div>
          </div>
        </div>
        <div className="foundation__content">
          <div className="foundation__content--header">Header</div>
          <div className="foundation__content--body">Body</div>
          <div className="foundation__content--btn">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
      </div>
    </>
  );
}

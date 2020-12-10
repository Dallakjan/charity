import React, { useState } from "react";
import "../scss/_foundations.scss";

export default function Foundations() {
  const [foundations, setFoundations] = useState(
    `W naszej bazie znajduję się lista zweryfikowanych Fundacji, z którymi współpracujemy. Mozesz sprawdzic  czym się zajmują, komu pomagają i czego potrzebują.`
  );

  const handleFoundations = () => {
    setFoundations(
      "W naszej bazie znajduję się lista zweryfikowanych Fundacji, z którymi współpracujemy. Mozesz sprawdzic  czym się zajmują, komu pomagają i czego potrzebują."
    );
  };

  const handleOrganizations = () => {
    setFoundations("Pomagamy Organizacjom");
  };

  const handleLocal = () => {
    setFoundations("Pomagamy Lokalnie");
  };

  return (
    <>
      <div className="foundation" id="foundations">
        <div className="foundation__header">Komu Pomagamy?</div>
        <div className="foundation__header--decoration"></div>
        <div className="foundation__btn">
          <div>
            <div>
              <button onClick={handleFoundations}>Fundacjom</button>
            </div>
            <button onClick={handleOrganizations}>
              Organizacjom <br />
              Pozarządowym
            </button>
            <div>
              <button onClick={handleLocal}>
                Lokalnym <br />
                Zbiórkom
              </button>
            </div>
          </div>
        </div>
        <div className="foundation__content">
          <div className="foundation__content--header">{foundations}</div>
          <div className="foundation__content--body"></div>
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

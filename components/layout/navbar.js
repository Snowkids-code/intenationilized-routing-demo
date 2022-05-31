import { useState } from "react";

export default function Navbar() {
  const [language, setLanguage] = useState("USD");
  const [lDrop, setLDrop] = useState(false);
  const currency = ["USD", "EUR", "GBP"];

  return (
    <div className="navbar-container">
      <div className="navbar-left-wrapper">Hello</div>
      <div className="navbar-right-wrapper">
        <div
          className="navbar-currency-wrapper"
          onClick={() => setLDrop(!lDrop)}
        >
          <p>{language}</p>
          {lDrop && (
            <div className="navbar-currency-display">
              {currency.map((money, id) => (
                <div key={id} onClick={()=>setLanguage(currency[id])}>
                  <p>{money}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

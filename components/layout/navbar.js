import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dollar, euro, pounds } from "../../redux/currencySlice";

export default function Navbar() {
  const [language, setLanguage] = useState("USD");
  const [lDrop, setLDrop] = useState(false);
  const currency = ["USD", "EUR", "GBP"];

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="navbar-container">
      <div className="navbar-left-wrapper">Hello</div>
      <div className="navbar-right-wrapper">
        <div
          className="navbar-currency-wrapper"
          onClick={() => setLDrop(!lDrop)}
        >
          <p>{language}</p>
          <p>{count}</p>
          {lDrop && (
            <div className="navbar-currency-display">
              {currency.map((money, id) => (
                <div
                  key={id}
                  onClick={() => {
                    setLanguage(currency[id]);
                    currency[id] === "GBP" && dispatch(pounds());
                    currency[id] === "EUR" && dispatch(euro());
                    currency[id] === "USD" && dispatch(dollar());
                  }}
                >
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

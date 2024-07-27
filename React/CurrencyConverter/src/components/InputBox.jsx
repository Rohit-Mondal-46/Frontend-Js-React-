import React from "react";

function InputBox({
  label,
  amount,
  selectedCurrency = "inr",
  currenyList = [],
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <>
      <div className="d-flex flex-row my-3">
        <div className="col-md-6 mx-5">
          <label htmlFor="inputCity" className="form-label">
            {label}
          </label>
          <input
            type="text"
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            value={amount}
            placeholder="Amount"
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-4 mx-5">
          <label htmlFor="inputState" className="form-label">
            Currency Type
          </label>
          <select
            id="inputState"
            className="form-select"
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currenyList.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;

// InputField.jsx
import React, { useContext } from "react";
import Context from "./LoanContext";

function InputField() {
  const { loanAmount, setLoanAmount } = useContext(Context);

  return (
    <div style={{ marginBottom: "15px" }}>
      <label>Loan Amount: </label>
      <input
        type="number"
        value={loanAmount}
        placeholder="Enter loan amount"
        onChange={(e) => setLoanAmount(e.target.value)}
      />
    </div>
  );
}

export default InputField;

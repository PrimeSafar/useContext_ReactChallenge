import React from "react";
import { useContext } from "react";
import Context from "./LoanContext";
export default function Summary(){
    const {loanAmount }=useContext(Context)

    return(
    <div>
      <h3>Summary</h3>
      <p>You entered a loan amount of: <strong>{loanAmount || "N/A"}</strong></p>
    </div>
    );
}
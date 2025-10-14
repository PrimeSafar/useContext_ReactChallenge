import React from "react";
import InputField from "./InputField";
import UseContext from "./useContext";
import Summary from "./Summary";
import { useContext } from "react";
export default function Form(){
  const UseName = useContext(UseContext)
    return(
       <div style={{ 
      background: 'lightblue', 
      padding: '20px', 
      margin: '10px',
      borderRadius: '10px'
    }}>
      <h2>Child Component</h2>
      <p>Hello, {UseName}!</p>
      <p>This text comes from context!</p>
    </div>
    );
}
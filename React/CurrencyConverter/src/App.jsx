import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("usd");
  const currenyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currenyInfo);
  let swap = ()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }
  let convert = ()=>{
    setConvertedAmount(amount * currenyInfo[toCurrency])
  }
  
  return (
    <>
      <InputBox 
      label = "From" 
      amount = {amount}
      selectedCurrency = {fromCurrency}
      currenyList = {options}
      onAmountChange = {(newAmount) => setAmount(newAmount)}
      onCurrencyChange = {(currency) => setFromCurrency(currency)}
/>
      <InputBox 
        label = "To"
        amount = {convertedAmount}
        selectedCurrency = {toCurrency}
        currenyList = {options}
        onCurrencyChange = {(currency) => setToCurrency(currency)}
      />
      <div className='d-flex justify-content-between'>
        <button type="button" onClick={swap} className="btn btn-primary mx-5">Swap</button>
        <button type="button" className="btn btn-primary" onClick={convert}>Convert</button>
      </div>
    </>
  )
}

export default App

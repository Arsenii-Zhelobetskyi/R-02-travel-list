import { useState } from "react";
function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  function handleReset() {
    setBill(0);
    setService(0);
    setFriendService(0);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        gap: "20px",
        marginTop: "120px",
        marginBottom: "120px",
        alignItems: "left",
      }}
    >
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage service={service} setService={setService}>
        <label>How did you like the service?</label>
      </SelectPercentage>
      <SelectPercentage service={friendService} setService={setFriendService}>
        <label>How did your friend like the service?</label>
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} service={service} friendService={friendService} />
          <Reset onClick={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
    </div>
  );
}
function SelectPercentage({ service, setService, children }) {
  return (
    <div>
      {children}
      <select value={service} onChange={(e) => setService(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, service, friendService }) {
  return (
    <div>
      You pay ${bill + (service + friendService) / 2} (${bill}+ $
      {(service + friendService) / 2} tip )
    </div>
  );
}
function Reset({ onClick }) {
  return <button onClick={onClick}>Reset</button>;
}
export default TipCalculator;

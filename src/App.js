import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("small");
  const [contactInfo, setContactInfo] = useState("");
  const [orderIsSubmitted, setOrderIsSubmitted] = useState(false);

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const selectSize = (e) => setSize(e.target.value);
  const updateContactField = (e) => setContactInfo(e.target.value);

  const submitOrder = (e) => {
    e.preventDefault();
    setOrderIsSubmitted(true);
  };

  if (orderIsSubmitted) {
    return (
      <div>
        <h1>Thank you for your order!</h1>
        <h2>Order Summary:</h2>
        <p>Size: {size}</p>
        <p>Pepperoni: {pepperoniIsChecked ? "Yes" : "No"}</p>
        <p>We'll contact you at: {contactInfo}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Place an Order</h1>
      <form onSubmit={submitOrder}>
        <div>
          <h3>Toppings</h3>
          <label>
            <input
              type="checkbox"
              checked={pepperoniIsChecked}
              onChange={togglePepperoni}
            />
            Add pepperoni
          </label>
        </div>

        <div>
          <h3>Size</h3>
          <label htmlFor="select-size">Select pizza size:</label>
          <select id="select-size" value={size} onChange={selectSize}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <h3>Contact Information</h3>
          <label htmlFor="contact-info">Email or Phone:</label>
          <input
            type="text"
            id="contact-info"
            value={contactInfo}
            onChange={updateContactField}
            required
          />
        </div>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default App;
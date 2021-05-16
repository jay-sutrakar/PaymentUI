import { useState } from "react";
import styles from "./cardPayment.module.css";
import { Button, Input, Form, InputGroup } from "reactstrap";
import PaymentCard from "./PaymentCard";
export default function CardPayment() {
  const [cardNumber, setCardNumber] = useState([]);
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const handleCardNumber = (e) => {
    const temp = [...e.target.value];
    setCardNumber(temp);
  };

  return (
    <div className={styles.container}>
      <PaymentCard
        cardNumber={cardNumber}
        nameOnCard={nameOnCard}
        cardExpiryDate={cardExpiryDate}
        cardCVV={cardCVV}
      />
      <div className={styles.Form}>
        <InputGroup className={styles.InputGroup}>
          <label>
            Card Number<b style={{ color: "red" }}> *</b>
          </label>
          <input
            placeholder="xxxx xxxx xxxx xxxx"
            maxLength="16"
            onChange={(e) => handleCardNumber(e)}
            required
          />
        </InputGroup>
        <InputGroup className={styles.InputGroup}>
          <label>
            Expiry date<b style={{ color: "red" }}> *</b>
          </label>
          <input
            type="date"
            onChange={(e) => console.log(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup className={styles.InputGroup}>
          <label>Name on card</label>
          <input
            placeholder="Card holder name"
            maxLength="25"
            onChange={(e) => setNameOnCard(e.target.value)}
          />
        </InputGroup>
        <InputGroup className={styles.InputGroup}>
          <label>
            Security code / CVV<b style={{ color: "red" }}> *</b>
          </label>
          <div style={{ display: "inline" }}>
            <input maxLength="3" onChange={(e) => setCardCVV(e.target.value)} />{" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTF8NI1coEqHCbmwSuhihILjY4vvspRshnG1625deLMomLSkVAj-LxY0sbQCibYXEHpGo&usqp=CAU"
              alt=""
            />
          </div>
        </InputGroup>
      </div>
    </div>
  );
}

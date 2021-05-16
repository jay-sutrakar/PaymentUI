import styles from "./paymentCard.module.css";
import { Card } from "reactstrap";
export default function PaymentCard(props) {
  const cardNumber = props.cardNumber;
  const cardValidityDate = props.cardValidityDate;
  const cardHolderName = props.nameOnCard;
  return (
    <div className={styles.cardBox}>
      <div className={styles.paymentCardLogo}>
        <img
          src="https://banner2.cleanpng.com/20181128/gkr/kisspng-mastercard-logo-visa-credit-card-portable-network-mastercard-plus-datacenter-trkiyeampaposde-5bfe50c6987830.6480665815433934786245.jpg"
          alt=""
        />
      </div>
      <div className={styles.paymentCardChip}>
        <img
          src="https://cdn.imgbin.com/19/18/21/imgbin-chip-pin-solutions-ltd-emv-payment-card-credit-card-chip-rectangular-brown-and-black-sim-card-illustration-BecxwfCimCTSSy8ieXve06qte.jpg"
          alt=""
        />
      </div>

      <div className={styles.paymentCardNumber}>
        {cardNumber.map((n, i) => {
          return <div key={i}>{n}</div>;
        })}
      </div>
      <div className={styles.paymentCardDates}>
        <div>valid throw : {cardValidityDate}</div>
      </div>
      <div className={styles.paymentCardHolderName}>{cardHolderName}</div>
    </div>
  );
}

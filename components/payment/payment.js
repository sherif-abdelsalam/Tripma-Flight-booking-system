"use client";
import React, { useState } from "react";
import Image from "next/image";

import "./payment.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PaymentForm = ({ flightId }) => {
  const [payInfoK, setPayInfoK] = useState(false);
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    validateCreditCardDetails();
  };

  const [creditCardDetails, setCreditCardDetails] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const validateCreditCardDetails = (updatedDetails) => {
    const { nameOnCard, cardNumber, cvv } = updatedDetails || creditCardDetails;

    // const isNameValid = nameOnCard.trim().length > 0;
    // const isCardNumberValid = /^[0-9]{16}$/.test(cardNumber); // 16-digit card number
    // const isCvvValid = /^[0-9]{3,4}$/.test(cvv); // 3-4 digit CVV
    const isExpiryDateValid = !!selectedDate; // Ensures an expiration date is selected

    setPayInfoK(nameOnCard && cardNumber && cvv && isExpiryDateValid);
  };

  const handleCreditCardChange = (e) => {
    const { name, value } = e.target;

    setCreditCardDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, [name]: value };

      // Validate the details with the updated data
      validateCreditCardDetails(updatedDetails);

      return updatedDetails;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", {
      creditCardDetails,
    });
  };

  return (
    <div className="payment-form">
      <div className="payment-header">
        <h3>Payment method</h3>
        <p>
          Select a payment method below. Tips are presented in your payment
          currency with a foreign-currency description.
        </p>

        <div className="payment-methods">
          <div className="pay credit-card">
            <Image
              className="payment-method-icon"
              src={"/images/payment/credit-card.svg"}
              alt="credit-card"
              width={18}
              height={18}
            />
            <button>Credit Card</button>
          </div>
          <div className="pay">
            <Image
              src={"/images/payment/google.svg"}
              alt="google pay"
              width={18}
              height={18}
            />
            <button>Google Pay</button>
          </div>

          <div className="pay">
            <Image
              src={"/images/payment/apple.svg"}
              alt="Apple pay"
              width={18}
              height={18}
            />
            <button>Apple pay</button>
          </div>
          <div className="pay">
            <Image
              src={"/images/payment/paypal.svg"}
              alt="PayPal"
              width={18}
              height={18}
            />
            <button>PayPal</button>
          </div>
          <div className="pay">
            <Image
              src={"/images/payment/crypto.svg"}
              alt="stripe"
              width={20}
              height={20}
            />
            <button>Crypto</button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="credit-card-details">
          <h3>Credit Card Details</h3>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            placeholder="Name on card"
            value={creditCardDetails.nameOnCard}
            onChange={handleCreditCardChange}
          />
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Card number"
            value={creditCardDetails.cardNumber}
            onChange={handleCreditCardChange}
          />
          <div className="expiry-cvv">
            <div>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/yyyy"
                placeholderText="Expiration date"
                className="expiry-date"
              />
            </div>
            <div>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="CVV"
                value={creditCardDetails.cvv}
                onChange={handleCreditCardChange}
              />
            </div>
          </div>
        </div>
        <div className="policy">
          <h3>Cancellation policy</h3>
          <p>
            This flight has a flexible cancellation policy. If you cancel or
            change your flight up to 30 days before the departure date, you are
            eligible for a free refund. All flights booked on Tripma are backed
            by our satisfaction guarantee, however cancellation policies vary by
            airline. See the full cancellation policy for this flight.
          </p>
        </div>
        <div className="payment-btns">
          <button className="back-btn" onClick={() => router.back()}>
            Back to seat select
          </button>

          {payInfoK ? (
            <Link href={`/flights/${flightId}/flight_summary`}>
              <button type="submit" className="sub-btn">
                Continue to pay
              </button>
            </Link>
          ) : (
            <button disabled className="in-active-btn">
              Continue to pay
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;

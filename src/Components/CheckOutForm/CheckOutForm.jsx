import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import useCart from "../../Pages/Hooks/useCart";
import useAuth from "../../Pages/Hooks/useAuth";

const CheckOutForm = () => {
  const [err, setErr] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState('');
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment Error", error);
      setErr(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setErr("");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

      if(confirmError){
        console.log('confirm error', confirmError);
      }
      else{
        console.log('payment Intent', paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            console.log('Trasection ID', paymentIntent.id);
            setTransactionId(paymentIntent.id)
        }
      }
  };
  return (
    <form onSubmit={handleSubmit} className="mt-12 ml-12">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        className="btn mt-6 btn-primary btn-lg"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{err}</p>
      {
        transactionId && <p className="text-green-600">Your Transaction ID : {transactionId}</p>
      }
    </form>
  );
};

export default CheckOutForm;

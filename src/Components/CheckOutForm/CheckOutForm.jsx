import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    })

    if(error){
        console.log('Payment Error', error);
    } else{
        console.log('Payment Method', paymentMethod);
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
      >
        

      </CardElement>
        <button className="btn mt-6 btn-primary btn-lg" type="submit">
          Pay
        </button>
    </form>
  );
};

export default CheckOutForm;

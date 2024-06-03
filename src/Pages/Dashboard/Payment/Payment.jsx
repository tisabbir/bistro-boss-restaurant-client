import { loadStripe } from "@stripe/stripe-js";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../../Components/CheckOutForm/CheckOutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//TODO: add publishable key pk
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
const Payment = () => {
  return (
    <div>
      <SectionTitles
        headings={"Payment"}
        subheadings={"Please pay for your foods"}
      />

      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
};

export default Payment;

import { loadStripe } from "@stripe/stripe-js";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import { Elements } from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//TODO: add publishable key pk
const stripePromise = loadStripe("klaslkdjf");
const Payment = () => {
  return (
    <div>
      <SectionTitles
        headings={"Payment"}
        subheadings={"Please pay for your foods"}
      />

      <Elements stripe={stripePromise}>
        
      </Elements>
    </div>
  );
};

export default Payment;

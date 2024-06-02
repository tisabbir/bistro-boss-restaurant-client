import { CardCvcElement, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card == null){
            return;
        }
    } 
    return (
        <form onSubmit={handleSubmit}>
            <CardCvcElement
                 options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                  }}
            >
                 <button type="submit" disabled={!stripe}>
        Pay
      </button>
            </CardCvcElement>
        </form>
    );
};

export default CheckOutForm;
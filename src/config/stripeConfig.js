import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
       'pk_test_51SLhGWJw0XPCgjPB6kbFyYvYICUP54uGctvgPokgOcQAGwzLS6Mq2HEAZ4RGwKa05pFZAnUn8xQ2pRDlxOzhNthR00IXTZxkzQ'
);

export default stripePromise;
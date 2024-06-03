import {
  handleProcessWebhookUpdatedSubscription,
  stripe,
} from "@/services/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error: any) {
    console.error(`Webhook error ${error.message}`);
    return new Response(`Webhook error ${error.message}`, { status: 400 });
  }

  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated":
      await handleProcessWebhookUpdatedSubscription(event.data);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response(`{ recived: true }`, { status: 200 });
}

export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: "price_1PNI4KB0Mko3D08MFq01QTug",
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: "price_1PNI52B0Mko3D08MEKK7t0FQ",
        quota: {
          TASKS: 100,
        },
      },
    },
  },
};

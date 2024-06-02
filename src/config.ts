export const config = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    webhookSecret: "",
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

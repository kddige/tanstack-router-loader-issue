import { createFileRoute } from "@tanstack/react-router";

const getCustomerById = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "123",
        name: "John Doe",
      });
    }, 1000);
  });

export const Route = createFileRoute("/(app)/_layout/customers/$id/")({
  loader: async () => {
    const customer = await getCustomerById();
    return { customer };
  },
});

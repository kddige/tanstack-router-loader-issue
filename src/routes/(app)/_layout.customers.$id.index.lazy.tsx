import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_layout/customers/$id/")({
  component: () => <Page />,
});

function Page() {
  const { customer } = Route.useLoaderData();
  return <pre>
    {JSON.stringify(customer, null, 2)}
  </pre>;
}

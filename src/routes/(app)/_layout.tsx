import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_layout')({
  component: () => <div>
    <h1>(app) Dashboard</h1>
    <Outlet />
  </div>
})
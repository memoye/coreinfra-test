import { Dashboard } from "@/components/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

// Dashboard
function Index() {
  return <Dashboard />;
}

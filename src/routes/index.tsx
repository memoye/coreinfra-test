import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

// Dashboard
function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}

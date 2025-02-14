import { Step } from "@/components/steps";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CreateAccountStep() {
  return (
    <Step title="Create a Novu account">
      If you don't have a Novu account, you can create one{" "}
      <Link href="https://dashboard-v2.novu.co/auth/sign-up">here</Link>.
    </Step>
  );
}

export function BuildWorkflowStep() {
  return (
    <Step title="Next: Build a workflow">
      Navigate through the sections below to create your first custom workflow.
      <Button color="secondary" size="sm" className="h-8 px-4">
        Create a workflow
      </Button>
    </Step>
  );
}

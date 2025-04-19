import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
      <ModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}

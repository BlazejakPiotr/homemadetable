import { auth } from "@/auth";
import { Button } from "./ui/button";
import Link from "next/link";

export const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex bg-accent justify-end">
      {session?.user ? (
        <Button variant="link" size="lg" asChild>
          <Link href="/api/auth/signout">Logout</Link>
        </Button>
      ) : null}
    </nav>
  );
};

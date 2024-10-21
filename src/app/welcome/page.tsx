import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeScreen() {
  return (
    <main className="flex flex-col p-4 gap-4 max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center">
        <Image src="/logo.png" alt="logo" width={200} height={500} />
        <Button variant="outline" size="lg" asChild>
          <Link href="/api/auth/signin"> Sign in</Link>
        </Button>
      </div>
      <Separator />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Home Poker Table
      </h1>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Manage your homemade cash games
      </h4>
      <p className="leading-7 [&:not(:first-child)]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fugit
        reprehenderit, incidunt suscipit earum assumenda.
      </p>
      <p className="leading-7 [&:not(:first-child)]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
        voluptatum neque rerum nobis quia ducimus deserunt, possimus cumque
        fugiat iure illum veritatis voluptates distinctio, sint minus tempora
        cupiditate excepturi fugit.
      </p>
      <p className="leading-7 [&:not(:first-child)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum
        voluptatibus placeat dignissimos voluptatum officia ducimus voluptates
        voluptas? Enim possimus vitae hic perspiciatis, doloribus molestias
        excepturi officia sint? Iste accusantium ipsam vero voluptates quibusdam
        quis facere amet rem voluptatem, laboriosam in fugiat veniam sint eaque
        adipisci ipsa. Saepe, repellat optio.
      </p>
      <Button className="w-full font-medium" asChild>
        <Link href="/api/auth/signin">Join now</Link>
      </Button>
    </main>
  );
}

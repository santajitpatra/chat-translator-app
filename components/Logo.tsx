import Link from "next/link";
import CTlogo from "@/images/CTlogo.png";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
          <Image
            priority
            src={CTlogo}
            alt="Image"
            className="dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function UserAvatar({
  name,
  profileImage,
  className,
}: {
  name: string;
  profileImage: string;
  className?: string;
}) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {profileImage && (
        <Image
          src={profileImage}
          width={40}
          height={40}
          alt={name}
          className="rounded-full"
        />
      )}

      <AvatarFallback delayMs={1000} className="dark:bg-white dark:text-black">
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}

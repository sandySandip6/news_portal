import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type NewsCardProps = {
  title: string;
  category: string;
  excerpt?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
};

export function NewsCard({
  title,
  category,
  excerpt,
  imageSrc = "/news.jpg",
  imageAlt = "",
  href = "#",
  className,
}: NewsCardProps) {
  return (
    <Link href={href} className={cn("group block cursor-pointer", className)}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="relative aspect-[5/3]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      <div className="mt-4">
        <span className="text-sm font-semibold text-red-600">{category}</span>

        <h2 className="mt-2 font-heading text-xl font-bold transition group-hover:text-red-600 sm:text-2xl">
          {title}
        </h2>

        {excerpt ? (
          <p className="mt-2 line-clamp-2 text-muted-foreground">{excerpt}</p>
        ) : null}
      </div>
    </Link>
  );
}

export default NewsCard;

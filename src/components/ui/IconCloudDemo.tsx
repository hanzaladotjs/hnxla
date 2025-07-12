import { IconCloud } from "./Cloud";
 
const slugs = [
  "typescript",
  "javascript",
  
  "react",
 
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "render",
  "supabase",
 
  "vercel",
  "postman",
  "solidity",
  "zod",
  "axios",
  "git",
 
  "github",
  "gitlab",
  "visualstudiocode",
];
 
export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
 
  return (
    <div className="relative flex size-80 items-center justify-center overflow">
      <IconCloud images={images} />
    </div>
  );
}
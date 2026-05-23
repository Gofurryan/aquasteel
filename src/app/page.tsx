import fs from "fs";
import path from "path";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  const galeriDir = path.join(process.cwd(), "public/galeri");
  let images: string[] = [];
  
  try {
    images = fs.readdirSync(galeriDir).filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
  } catch (error) {
    console.error("Failed to read galeri directory", error);
  }

  return <HomeClient images={images} />;
}

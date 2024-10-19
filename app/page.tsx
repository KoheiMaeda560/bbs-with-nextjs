import Image from "next/image";
import Link from "next/link";
import { BBSCardList } from "./components/layouts/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store", // SSR
  });

  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}

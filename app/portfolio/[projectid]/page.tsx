"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Page() {
  // export default function Page({ prop }: { prop: { projectid: string } }) {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <h1>Portfolio project</h1>
      <p>This is the project page</p>
    </div>
  );
}

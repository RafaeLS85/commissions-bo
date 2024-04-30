import BaseLayout from "@/components/common/layouts/Base";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function IndexPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/comisiones-base/sellers");
  });

  return (
    <BaseLayout title="">
      <div></div>
    </BaseLayout>
  );
}

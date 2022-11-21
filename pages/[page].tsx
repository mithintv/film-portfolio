import { useRouter } from "next/router";
import Heading from "../src/layout/Heading";

export default function Page() {
  const { page } = useRouter().query;

  return (
    <div>
      <Heading title={page} />
    </div>
  );
}

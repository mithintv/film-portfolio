import { useRouter } from "next/router";

export default function Page() {
  const { page } = useRouter().query;

  return (
    <div>
      <p>{page}</p>
    </div>
  );
}

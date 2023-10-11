// import { usePost } from "@/hooks/use-post";
import axios from "axios";

export default async function Home() {
  const wait = (number) =>
    new Promise((resolve) => setTimeout(resolve, number));

  // const { data, isLoading } = usePost(2);

  // const { data } = await axios.get(
  //   `https://jsonplaceholder.typicode.com/posts/2`
  // );

  const data = await test();

  // const result = test();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
    </main>
  );
}

async function test() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
  return res.json();
}

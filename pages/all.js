import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function All() {
  const [data, setData] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    fetch(`/api/all`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  return (
    <div className="p-3 w-screen h-screen bg-zinc-50 dark:bg-zinc-800">
      <Head>
        <title>All requests | Edify</title>
        <meta
          name="description"
          content="A platform that allows you to help people in economic need for their education, at your ease."
        />
      </Head>
      <main className="w-full h-full overflow-scroll bg-zinc-50 dark:bg-zinc-800 space-y-4">
        {data?.map((df, ind) => {
          return (
            <div
              className="p-6 bg-zinc-200 dark:bg-zinc-700 text-xl md:text-2xl text-zinc-900 dark:text-zinc-200 rounded-md"
              key={ind}
            >
              Name:
              <br /> {df?.name}
              <br />
              Email:
              <br /> {df?.mail}
              <br />
              Current Education Status:
              <br /> {df?.ced}
              <br />
              Institution:
              <br /> {df?.school}
              <br />
              Institution Email:
              <br /> {df?.smail}
              <br />
              Institution Phone Number:
              <br /> {df?.sphnum}
            </div>
          );
        })}
        <p className="text-base bottom-0 font-normal md:text-2xl bg-zinc-50 dark:bg-zinc-900">
          Please note, you are at your own risk when you donate to them. This is
          only a platform that shares the information of the people that need
          help. It might also contain misinformation or spam. Now, we do try our
          best to combat it, but we highly recommend that you verify the
          identity of the person.
        </p>
      </main>
    </div>
  );
}

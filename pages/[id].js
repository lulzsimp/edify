import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SingleReq() {
  const [data, setData] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    fetch(`/api?id=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  return (
    <div className="w-screen h-screen bg-zinc-50 dark:bg-zinc-800 overflow-auto">
      <Head>
        <title>{data?.name}&apos;s request | Edify</title>
        <meta
          name="description"
          content="A platform that allows you to help people in economic need for their education, at your ease."
        />
      </Head>
      <main className="w-full h-full p-3 text-base font-bold flex flex-col md:items-center justify-center">
        <div className="p-6 bg-zinc-200 dark:bg-zinc-700 text-xl md:text-2xl text-zinc-900 dark:text-zinc-200 rounded-md">
          Name:
          <br /> {data?.name}
          <br />
          Email:
          <br /> {data?.mail}
          <br />
          Current Education Status:
          <br /> {data?.ced}
          <br />
          Institution:
          <br /> {data?.school}
          <br />
          Institution Email:
          <br /> {data?.smail}
          <br />
          Institution Phone Number:
          <br /> {data?.sphnum}
        </div>
      </main>
      <p className="text-base bottom-0 font-normal p-3 md:text-2xl">
        Please note, you are at your own risk when you donate to them. This is
        only a platform that shares the information of the people that need
        help. It might also contain misinformation or spam. Now, we do try our
        best to combat it, but we highly recommend that you verify the identity
        of the person.
      </p>
    </div>
  );
}

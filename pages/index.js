import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { validate } from "../validate";

export default function Home() {
  const [name, sname] = useState("");
  const [email, semail] = useState("");
  const [ced, sced] = useState("");
  const [school, sschool] = useState("");
  const [smail, ssmail] = useState("");
  const [sphnum, ssphnum] = useState("");
  const createRequest = async (vobj) => {
    const val = await validate(vobj);
    if (val.error) alert(val.error);
    else {
      fetch("/api/", {
        method: "POST",
        body: JSON.stringify(val.value),
      })
        .then((res) => res.json())
        .then((data) =>
          alert(
            `This is the link for your request: https://edify.vercel.app/${data.id}`
          )
        );
    }
  };
  return (
    <div className="w-screen h-screen bg-zinc-50 dark:bg-zinc-800">
      <Head>
        <title>Edify</title>
        <meta
          name="description"
          content="A platform that allows you to help people in economic need for their education, at your ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full overflow-scroll mb-5 flex flex-col">
        <section className="h-max w-full bg-zinc-200 dark:bg-zinc-900 p-3 flex flex-col items-center justify-between">
          <article className="space-y-8 p-3">
            <h1 className="text-left sticky top-0 bg-zinc-200 dark:bg-zinc-900 right-0 left-0 w-full p-3">
              Edify
            </h1>
            <p className="h-max">
              A platform that helps you help others, or get help if you are in
              an economic situation wherein you need help for your studies or
              you&apos;re willing to help people who are in need for money
              towards their education. Please note that all details you enter on
              the site ARE MADE PUBLIC, and also that YOU ARE ON YOUR OWN RISK
              WHEN DONATING. We request you to verify with the source before
              donating to them.
            </p>
          </article>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/arrow-down.svg"
            width="32"
            height="32"
            className="block"
            alt=""
          />
        </section>
        <form
          className="flex flex-col h-screen space-y-4 items-center justify-center pt-4 mb-10"
          onSubmit={(e) => {
            e.preventDefault();
            createRequest({
              name: name,
              mail: email,
              ced: ced,
              school: school,
              smail: smail,
              sphnum: sphnum,
            });
          }}
        >
          <section className="w-5/6">
            <label>Student / Canidate&apos;s name</label>
            <input
              placeholder="Name"
              autoComplete="name"
              onChange={(e) => sname(e.target.value)}
            />
          </section>
          <section className="w-5/6">
            <label>Email ID</label>
            <input
              placeholder="Email"
              autoComplete="email"
              onChange={(e) => semail(e.target.value)}
            />
          </section>
          <section className="w-5/6">
            <label>Class / Degree</label>
            <input
              placeholder="Education"
              onChange={(e) => sced(e.target.value)}
            />
          </section>
          <section className="w-5/6">
            <label>School / College Name</label>
            <input
              placeholder="Institution"
              onChange={(e) => sschool(e.target.value)}
            />
          </section>
          <section className="w-5/6">
            <label>School / College Email ID</label>
            <input
              placeholder="Email"
              onChange={(e) => ssmail(e.target.value)}
            />
          </section>
          <section className="w-5/6">
            <label>School / College Phone number</label>
            <input
              placeholder="Phone Number"
              onChange={(e) => ssphnum(e.target.value)}
            />
          </section>
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}

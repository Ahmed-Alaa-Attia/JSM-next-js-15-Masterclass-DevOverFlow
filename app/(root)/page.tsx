import { auth } from "@/auth";

const page = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Hello Next.js</h1>
      <h1 className="h1-bold font-space-grotesk">Hello Next.js</h1>
    </>
  );
};

export default page;

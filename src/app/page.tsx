import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2">
        <Image src="/logo.svg" alt="logo" className="h-24" width={200} height={200} />
        <h1 className="text-6xl font-bold">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">pages/index.js</code>
        </h1>
      </div>
    </>
  );
}

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Daine Marshall Digital Artist</title>
        <meta name="description" content="My digital art gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="w-full h-full relative p-0 m-0 bg-gray-500">
        <div>
          <div className="flex">
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block ml-2 w-3 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
          </div>  
        </div>
      </body>
    </div>
  );
}

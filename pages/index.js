import Head from "next/head";
import Button from "/components/shared/Button.js";
import Title from "/components/index/Title.js";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>This vs That</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title />

        <Link href="/create/">
          <Button>Create a ranking</Button>
        </Link>  
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .login {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 10px 15px;
          font-size: 1em !important;
          border-radius: 10px;
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

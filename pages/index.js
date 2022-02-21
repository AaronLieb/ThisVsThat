import Head from "next/head";
import Header from "/components/header.js";
import buttons from "/styles/buttons.module.scss";
import home from "/styles/home.module.scss";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={`title ${home.floaty}`}>
          <span className={home.red}> This </span>
          <span className={home.gray}> vs </span>
          <span className={home.blue}> That </span>
        </h1>

        <div className="buttons">
          <a className={buttons.normal}> Create a ranking</a>
          <a className={buttons.red}> View your rankings </a>
          <a className={buttons.blue}> Login </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
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
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

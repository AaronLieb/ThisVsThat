import Head from "next/head";
import { Header, Button } from "/components/shared/Button.js";
import styles from "/components/shared/Panel.module.scss";
export default function Login() {
  return (
    <div>
      <div className="container">
        <Head>
          <title> Login - This Vs That</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={styles.container}>
            <h3>Login</h3>
            <label> Username </label>
            <input type="text" />
            <label> Password </label>
            <input type="password" />
            <Button> Login </Button>
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
    </div>
  );
}

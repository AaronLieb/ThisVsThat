import Header from "../components/shared/Header";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";
import buttonStyles from "../components/shared/Button.module.scss";
import singlepage from "../styles/page.module.scss";
import styles from "./create.module.scss";
import BigInput from "../components/shared/BigInput";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function create() {
  const [name, setName] = useState("");
  const [choices, setChoices] = useState("");
  const [fileReader, setFileReader] = useState({});

  const router = useRouter();


  useEffect(() => {
    setFileReader(new FileReader());
  }, [])

  const uploadCSV = (e) => {
    fileReader.readAsText(e.target.files[0]);

    fileReader.onload = function (event) {
      console.log(event.target.result)
      setChoices(event.target.result);
    };
  };


  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateChoices = (e) => {
    setChoices(e.target.value);
  };

   const submitRanking = () => {
     fetch("/api/create", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         name: name,
         choices: choices.replace(/\s+/g, "").split(","),
       }),
     })
       .then((res) => res.json())
       .then((data) => router.push(`${data.rankingId}/success`));
   };

  return (
    <div>
      <Header />
      <div className={singlepage.content}>
        <Title className={singlepage.title}> Create a Ranking </Title>
        <div>
          <h2> Ranking Name: </h2>
          {/* <input onChange={nameUpdate} placeholder="Favorite Fruit" type="text"></input> */}
          <BigInput value={name} onChange={updateName} type="input" className={styles.name}>
            Favorite Fruit
          </BigInput>
        </div>
        <div className={singlepage.split}>
          <div>
            <BigInput value={choices} onChange={updateChoices} type="textarea" className={styles.choices}>
              apples, oranges, peaches, bananas
            </BigInput>
          </div>
          <div>
            <h1> Or </h1>
          </div>
          <div>
            <h3> upload a CSV file</h3>
              <div>
                <input className={`${buttonStyles.button} ${styles.file}`} type={"file"} id={"csvFileInput"} accept={".csv"} onChange={uploadCSV} />
              </div>
          </div>
        </div>
        <Button size="20" onClick={submitRanking}>
          Create
        </Button>
      </div>
    </div>
  );
}

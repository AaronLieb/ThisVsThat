import Header from "../../components/shared/Header";
import VotingBox from "../../components/voting/VotingBox";
import styles from "../../styles/vote.module.scss";
import page from "../../styles/page.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../../components/shared/Button";

const loadingText = "Loading...";
const loading = [
  { text: loadingText, id: -1 },
  { text: loadingText, id: -1 },
];

function vote() {
  const router = useRouter();

  const [name, setName] = useState(loadingText);
  const [choices, setChoices] = useState(loading);
  const [prev, setPrev] = useState([]);

  const updateChoices = () => {
    fetch(`/api/${router.query.rankingId}/choices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prev: prev,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.outOfChoices) {
          router.push(`/${router.query.rankingId}/finished`);
          setChoices(loading);
          return;
        }
        setChoices(data.choices);
        setName(data.name);
        setPrev(prev.concat([[data.choices[0].id, data.choices[1].id]]));
      });
  };

  const sendVote = (winner, loser) => {
    if (winner < 0 || loser < 0) return;
    setChoices(loading);
    fetch(`/api/${router.query.rankingId}/vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        winnerId: winner,
        loserId: loser,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        updateChoices();
      });
  };

  useEffect(() => {
    if (!router.isReady) return;
    updateChoices();
  }, [router.isReady]);

  return (
    <div>
      <Header />
      <div className={page.content}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.voting_boxes}>
          <VotingBox
            onClick={() => {
              sendVote(choices[0].id, choices[1].id);
            }}
            color="red"
          >
            {" "}
            {choices[0].text}{" "}
          </VotingBox>
          <VotingBox
            onClick={() => {
              sendVote(choices[1].id, choices[0].id);
            }}
            color="blue"
          >
            {" "}
            {choices[1].text}{" "}
          </VotingBox>
        </div>
        <div className={styles.viewResults}>
          <Link size="25" href={`/${router.query.rankingId}/results`}>
            <Button className={page.button}>
              View Results
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default vote;

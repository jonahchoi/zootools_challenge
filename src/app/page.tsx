"use client";
import CustomIcon from "@/components/CustomIcon";
import styles from "./page.module.css";
import SimpleBarChart from "@/components/SimpleBarChart";
import { mockMonthData } from "@/constants/mockData";
import { GoPeople } from "react-icons/go";
import { mockInsights } from "@/constants/mockInsights";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.flex}>
        <h1>Summer referral competition</h1>
        <div>select time period</div>
      </header>

      <section className={styles.container}>
        <div>
          <p>
            100,000 <GoPeople />
          </p>
          <p>Participants</p>
        </div>
        <SimpleBarChart data={mockMonthData} />
      </section>
      <section className={styles.container}>
        <h2>ZooTools insights</h2>
        <p>Making analytics simple and actionable</p>
        <div className={styles.grid}>
          <div>
            <h3>Summary</h3>
            <ul className={styles.list}>
              {mockInsights.map((data, i) => (
                <li key={i}>
                  <CustomIcon type={data.symbol} />
                  {data.summary}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Recommendation</h3>
            <ul className={styles.list}>
              {mockInsights.map((data, i) => (
                <li key={i}>{data.recommendation}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.grid}>
        <article className={styles.container}>
          <h2>User leaderboard</h2>

          <Link className={styles.linkButton} href="/leaderboard">See leaderboard</Link>
        </article>
        <article className={styles.container}>
          <h2>Traffic</h2>

          <Link className={styles.linkButton} href="/leaderboard">
            See traffic sources
          </Link>
        </article>
        <article className={styles.container}>
          <h2>Signup location</h2>

          <Link className={styles.linkButton} href="/leaderboard">See all countries</Link>
        </article>
        <article className={styles.container}>
          <h2>Behaviour</h2>

          <Link className={styles.linkButton} href="/leaderboard">See all countries</Link>
        </article>
      </section>
    </main>
  );
}

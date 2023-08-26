"use client";
import CustomIcon from "@/components/CustomIcon";
import styles from "./page.module.css";
import SimpleBarChart from "@/components/SimpleBarChart";
import {
  mockMonthData,
  mockUserData,
  mockTrafficData,
  mockSignupLocationData,
} from "@/constants/mockData";
import { GoPeople } from "react-icons/go";
import { mockInsights } from "@/constants/mockInsights";
import Link from "next/link";
import Table from "@/components/Table";
import HorizBarChart from "@/components/HorizBarChart";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.flex}>
        <h1>Summer referral competition</h1>
        <div>select time period</div>
      </header>

      <section className={styles.container}>
        <div>
          <h2 className={styles.headingText}>
            <span>
              100,000 <GoPeople fontSize="1.5rem" />
            </span>
            <span className={styles.smallHeading}>Participants</span>
          </h2>
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
          <Table data={mockUserData} />
          <Link className={styles.linkButton} href="/leaderboard">
            See leaderboard
          </Link>
        </article>
        <article className={styles.container}>
          <h3>Traffic</h3>
          <HorizBarChart
            data={mockTrafficData}
            barKey="numUsers"
            axisKey="source"
          />
          <Link className={styles.linkButton} href="/traffic">
            See traffic sources
          </Link>
        </article>
        <article className={styles.container}>
          <h3>Signup location</h3>
          <HorizBarChart
            data={mockSignupLocationData}
            barKey="numUsers"
            axisKey="country"
          />
          <Link className={styles.linkButton} href="/countries">
            See all countries
          </Link>
        </article>
        <article className={styles.container}>
          <h3>Behaviour</h3>
          <HorizBarChart
            data={mockSignupLocationData}
            barKey="numUsers"
            axisKey="country"
          />
          <Link className={styles.linkButton} href="/countries">
            See all countries
          </Link>
        </article>
      </section>
    </main>
  );
}

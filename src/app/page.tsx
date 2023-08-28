"use client";
import CustomIcon from "@/components/CustomIcon/CustomIcon";
import styles from "./page.module.css";
import SimpleBarChart from "@/components/SimpleBarChart/SimpleBarChart";
import {
  mockUserData,
  mockTrafficData,
  mockSignupLocationData,
  getDataByTimeInterval,
  TimeFrames,
} from "@/constants/mockData";
import { GoPeople } from "react-icons/go";
import { mockInsights } from "@/constants/mockInsights";
import Link from "next/link";
import Table from "@/components/Table/Table";
import HorizBarChart from "@/components/HorizBarChart/HorizBarChart";
import ToggleButtons from "@/components/ToggleButtons/ToggleButtons";
import { useState } from "react";

const timeSets: TimeFrames[] = ["1h", "24h", "30d", "60d"];

export default function Home() {
  const [currentMinuteInterval, setCurrentMinuteInterval] =
    useState<TimeFrames>("1h");

  const currentTimeData = getDataByTimeInterval(currentMinuteInterval);

  const handleClick = (timeFrame: string) => {
    setCurrentMinuteInterval(timeFrame as TimeFrames);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Summer referral competition</h1>
        <div className={styles.smallContainer}>
          <ToggleButtons options={timeSets} afterClick={handleClick} />
        </div>
      </header>

      <section className={styles.container}>
        <h2 className={styles.headerStackedText}>
          <span>
            100,000 <GoPeople fontSize="1.5rem" />
          </span>
          <span className={styles.smallHeadingText}>Participants</span>
        </h2>
        <SimpleBarChart
          data={currentTimeData}
          minuteInterval={currentMinuteInterval}
        />
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
                data.recommendation ? <li key={i}>{data.recommendation}</li> : null
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.grid}>
        <section className={styles.container}>
          <Table data={mockUserData} />
          <Link className={styles.linkButton} href="/leaderboard">
            See leaderboard
          </Link>
        </section>
        <section className={styles.container}>
          <header className={styles.sectionHeader}>
            <h3>Traffic</h3>
            <ToggleButtons options={['Source', 'City']} afterClick={() => {}} />
          </header>
          <HorizBarChart
            data={mockTrafficData}
            barKey="numUsers"
            axisKey="source"
          />
          <Link className={styles.linkButton} href="/traffic">
            See traffic sources
          </Link>
        </section>
        <section className={styles.container}>
          <header className={styles.sectionHeader}>
            <h3>Signup location</h3>
            <ToggleButtons options={['Country', 'City']} afterClick={() => {}} />
          </header>
          <HorizBarChart
            data={mockSignupLocationData}
            barKey="numUsers"
            axisKey="country"
          />
          <Link className={styles.linkButton} href="/countries">
            See all countries
          </Link>
        </section>
        <section className={styles.container}>
        <header className={styles.sectionHeader}>
            <h3>Behaviour</h3>
            <ToggleButtons options={['Browsers', 'Decides']} afterClick={() => {}} />
          </header>
          <HorizBarChart
            data={mockSignupLocationData}
            barKey="numUsers"
            axisKey="country"
          />
          <Link className={styles.linkButton} href="/countries">
            See all countries
          </Link>
        </section>
      </div>
    </main>
  );
}

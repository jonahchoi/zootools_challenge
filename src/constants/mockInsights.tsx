import Link from "next/link";
import React from "react";

interface Insights {
  summary: React.ReactElement;
  recommendation: React.ReactElement | null;
  symbol: "positive" | "negative" | "neutral";
}

export const mockInsights: Insights[] = [
  {
    summary: (
      <p>
        <strong>Signups are slowing down.</strong> -5% new than last week.
      </p>
    ),
    recommendation: (
      <p>
        <strong>
          Make sure to promote and <Link href="">share your form</Link>
        </strong>
      </p>
    ),
    symbol: "negative",
  },
  {
    summary: (
      <p>
        <strong>80%</strong> of your signups were invited by other members.
      </p>
    ),
    recommendation: (
      <p>
        <strong>
          Congrats! This is huge. Keep giving rewards for your users
        </strong>
      </p>
    ),
    symbol: "positive",
  },
  {
    summary: (
      <p>
        <strong>80%</strong> of your signups were invited by a friend
      </p>
    ),
    recommendation: null,
    symbol: "neutral",
  },
  {
    summary: (
      <p>
        <strong>80%</strong> of your signups were invited by a friend
      </p>
    ),
    recommendation: null,
    symbol: "neutral",
  },
];

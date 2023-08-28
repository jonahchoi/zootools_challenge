import { addDays, addHours, addMinutes } from "date-fns";

export interface TimeData {
  date: Date;
  signups: number;
}

export type TimeFrames = "1h" | "24h" | "30d" | "60d";

/**
 * @returns An array of randomized objects that include a date and number of signups.
 *
 * @param startDate - The first date/time as a string
 * @param numPoints - The number of data points to return
 * @param maxValue - The maximum value that can be randomized
 * @param interval - The time interval between data points
 **/
const createMockTimeData = (
  startDate: string,
  numPoints: number,
  maxValue: number,
  interval: "day" | "hour" | "min",
) => {
  const result: TimeData[] = [];

  let curDate = new Date(startDate);

  for (let i = 0; i < numPoints; i++) {
    const randomSignups = Math.floor(Math.random() * maxValue);

    result.push({
      date: curDate,
      signups: randomSignups,
    });

    if (interval === "day") {
      curDate = addDays(curDate, 1);
    } else if (interval === "hour") {
      curDate = addHours(curDate, 1);
    } else if (interval === "min") {
      curDate = addMinutes(curDate, 1);
    }
  }

  return result;
};

const mockMonthData = createMockTimeData("07/01/2023", 60, 5000, "day");

const mockHourData = createMockTimeData("08/28/2023 09:00", 60, 200, "min");

const mockDayData = createMockTimeData("08/28/2023", 24, 1000, "hour");

/**
 * @returns An array of mocked time data, represented as an object.
 *
 * @param timeSpan - The amount of time that correlates with each data set.
 *
 **/
export const getDataByTimeInterval = (timeSpan: TimeFrames) => {
  if (timeSpan === "1h") {
    return mockHourData;
  } else if (timeSpan === "24h") {
    return mockDayData;
  } else if (timeSpan === "30d") {
    return mockMonthData.slice(30);
  } else {
    return mockMonthData;
  }
};

export interface UserData {
  email: string;
  numFriendsInvited: number;
  country: string;
}

export const mockUserData: UserData[] = [
  {
    email: "paula.suarze@gmail.com",
    numFriendsInvited: 6500,
    country: "USA",
  },
  {
    email: "laura.keney.3@yahoo.com",
    numFriendsInvited: 2300,
    country: "Monaco",
  },
  {
    email: "aaron.michael@arg.org",
    numFriendsInvited: 1200,
    country: "Prague",
  },
  {
    email: "jeremy.runner@aol.com",
    numFriendsInvited: 900,
    country: "China",
  },
];

interface TrafficData {
  source: string;
  numUsers: number;
}

export const mockTrafficData: TrafficData[] = [
  {
    source: "Google",
    numUsers: 30000,
  },
  {
    source: "Twitter",
    numUsers: 20000,
  },
  {
    source: "Facebook",
    numUsers: 10000,
  },
  {
    source: "Linkedin",
    numUsers: 5000,
  },
  {
    source: "YouTube",
    numUsers: 3000,
  },
  {
    source: "Other",
    numUsers: 2000,
  },
];

interface SignupLocationData {
  country: string;
  numUsers: number;
}

export const mockSignupLocationData: SignupLocationData[] = [
  {
    country: "United States",
    numUsers: 30000,
  },
  {
    country: "Germany",
    numUsers: 20000,
  },
  {
    country: "Netherlands",
    numUsers: 10000,
  },
  {
    country: "India",
    numUsers: 5000,
  },
  {
    country: "Japan",
    numUsers: 3000,
  },
  {
    country: "Other",
    numUsers: 2000,
  },
];

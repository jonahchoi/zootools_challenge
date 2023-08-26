export interface MonthData {
  date: Date;
  signups: number;
}

export const mockMonthData: MonthData[] = [
  {
    date: new Date("07/24/2023"),
    signups: 500,
  },
  {
    date: new Date("07/25/2023"),
    signups: 800,
  },
  {
    date: new Date("07/26/2023"),
    signups: 500,
  },
  {
    date: new Date("07/27/2023"),
    signups: 800,
  },
  {
    date: new Date("07/28/2023"),
    signups: 1200,
  },
  {
    date: new Date("07/29/2023"),
    signups: 1400,
  },
  {
    date: new Date("07/30/2023"),
    signups: 1100,
  },
  {
    date: new Date("07/31/2023"),
    signups: 1300,
  },
  {
    date: new Date("08/01/2023"),
    signups: 1100,
  },
  {
    date: new Date("08/02/2023"),
    signups: 800,
  },
  {
    date: new Date("08/03/2023"),
    signups: 1200,
  },
  {
    date: new Date("08/04/2023"),
    signups: 1000,
  },
  {
    date: new Date("08/05/2023"),
    signups: 1100,
  },
  {
    date: new Date("08/06/2023"),
    signups: 1000,
  },
  {
    date: new Date("08/07/2023"),
    signups: 1100,
  },
  {
    date: new Date("08/08/2023"),
    signups: 1200,
  },
  {
    date: new Date("08/09/2023"),
    signups: 1200,
  },
  {
    date: new Date("08/10/2023"),
    signups: 1100,
  },
  {
    date: new Date("08/11/2023"),
    signups: 1300,
  },
  {
    date: new Date("08/12/2023"),
    signups: 1500,
  },
  {
    date: new Date("08/13/2023"),
    signups: 1300,
  },
  {
    date: new Date("08/14/2023"),
    signups: 1500,
  },
  {
    date: new Date("08/15/2023"),
    signups: 1900,
  },
  {
    date: new Date("08/16/2023"),
    signups: 1700,
  },
  {
    date: new Date("08/17/2023"),
    signups: 1900,
  },
  {
    date: new Date("08/18/2023"),
    signups: 2100,
  },
  {
    date: new Date("08/19/2023"),
    signups: 2400,
  },
  {
    date: new Date("08/20/2023"),
    signups: 2300,
  },
  {
    date: new Date("08/21/2023"),
    signups: 2400,
  },
  {
    date: new Date("08/22/2023"),
    signups: 2500,
  },
  {
    date: new Date("08/23/2023"),
    signups: 2400,
  },
  {
    date: new Date("08/24/2023"),
    signups: 2600,
  },
  {
    date: new Date("08/25/2023"),
    signups: 2800,
  },
  {
    date: new Date("08/26/2023"),
    signups: 3000,
  },
];

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

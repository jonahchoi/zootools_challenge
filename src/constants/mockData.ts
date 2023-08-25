interface MonthData {
  date: Date;
  signups: number;
}

export const mockMonthData: MonthData[] = [
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

interface UserData {
  email: string;
  numFriendsInvited: number;
  country: string;
}

export const mockUserData: UserData[] = [
  {
    email: 'paula.suarze@gmail.com',
    numFriendsInvited: 6500,
    country: 'USA'
  },
  {
    email: 'laura.keney.3@yahoo.com',
    numFriendsInvited: 2300,
    country: 'Monaco'
  },
  {
    email: 'aaron.michael@arg.org',
    numFriendsInvited: 1200,
    country: 'Prague'
  },
  {
    email: 'jeremy.runner@aol.com',
    numFriendsInvited: 900,
    country: 'China'
  },
];

interface TrafficData {
  source: string;
  numUsers: number;
}

export const mockTrafficData: TrafficData[] = [
  {
    source: 'Google',
    numUsers: 30000,
  },
  {
    source: 'Twitter',
    numUsers: 20000,
  },
  {
    source: 'Facebook',
    numUsers: 10000,
  },
  {
    source: 'Linkedin',
    numUsers: 5000,
  },
  {
    source: 'YouTube',
    numUsers: 3000,
  },
  {
    source: 'Other',
    numUsers: 2000,
  },
];

interface SignupLocationData {
  country: string;
  city: string;
  numUsers: number;
}

export const mockSignupLocationData: SignupLocationData[] = [
  // {
  //   country: 'United States',
  //   city: '',
  //   numUsers: ,
  // },
  // {
  //   country: '',
  //   city: '',
  //   numUsers: ,
  // },
  // {
  //   country: '',
  //   city: '',
  //   numUsers: ,
  // },
  // {
  //   country: '',
  //   city: '',
  //   numUsers: ,
  // },
  // {
  //   country: '',
  //   city: '',
  //   numUsers: ,
  // },
  // {
  //   country: '',
  //   city: '',
  //   numUsers: ,
  // },
];

interface BehaviourData {
  country: string;
  numUsers: number;
}

export const mockBehaviourData = [

];


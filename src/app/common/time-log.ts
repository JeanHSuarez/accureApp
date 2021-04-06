export class TimeLog {
  timeLogId: number;
  signIn: string;
  signOut: string;
  durationInMins: number;
  billingUnits: number;
  billableAmount: string;
  user: {
    id: number;
    username: string;
    email: string;
    organization: {
      id: number;
      name: string;
    }
  }
}

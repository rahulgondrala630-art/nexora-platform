export type Status = 'On track' | 'At risk' | 'Blocked';
export type Priority = 'High' | 'Medium' | 'Low';

export type Workstream = {
  id: string;
  title: string;
  owner: string;
  initials: string;
  status: Status;
  priority: Priority;
  progress: number;
  due: string;
  accent: string;
};

export type Activity = {
  id: string;
  title: string;
  detail: string;
  time: string;
  kind: 'decision' | 'milestone' | 'risk';
};

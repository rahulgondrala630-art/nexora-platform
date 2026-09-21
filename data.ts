import type { Activity, Workstream } from './types';

export const workstreams: Workstream[] = [
  { id: 'nexora-01', title: 'Workspace onboarding', owner: 'Maya Chen', initials: 'MC', status: 'On track', priority: 'High', progress: 78, due: 'Today', accent: '#8b7cff' },
  { id: 'nexora-02', title: 'Usage insights', owner: 'Rahul Gondrala', initials: 'RG', status: 'At risk', priority: 'High', progress: 52, due: 'Tomorrow', accent: '#e9a34b' },
  { id: 'nexora-03', title: 'API reliability', owner: 'Jordan Lee', initials: 'JL', status: 'On track', priority: 'Medium', progress: 91, due: 'Sep 25', accent: '#36cfa0' },
  { id: 'nexora-04', title: 'Design system refresh', owner: 'Ari Patel', initials: 'AP', status: 'Blocked', priority: 'Medium', progress: 34, due: 'Sep 27', accent: '#f36f8c' },
];

export const activities: Activity[] = [
  { id: 'a1', title: 'Decision recorded', detail: 'Keep workstream ownership visible in every list view.', time: '12 min ago', kind: 'decision' },
  { id: 'a2', title: 'Usage insights reached 50%', detail: 'Dashboard instrumentation is ready for review.', time: '48 min ago', kind: 'milestone' },
  { id: 'a3', title: 'Design system refresh needs attention', detail: 'Two accessibility tokens are still unresolved.', time: '2 hrs ago', kind: 'risk' },
  { id: 'a4', title: 'API reliability milestone shipped', detail: 'Health checks now expose dependency status.', time: 'Yesterday', kind: 'milestone' },
];

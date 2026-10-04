/**
 * Impact metrics displayed in the hero statistics bar.
 * Numbers animate from 0 to target value via GSAP tween without triggering React state updates.
 */
export const heroStats = [
  {
    id: 'stat-pickup-1',
    value: 58,
    suffix: '%',
    label: 'Increase in pickup point use',
    detail: 'Omnichannel routing efficiency',
  },
  {
    id: 'stat-calls-1',
    value: 23,
    suffix: '%',
    label: 'Decreased customer phone calls',
    detail: 'Automated self-service resolution',
  },
  {
    id: 'stat-pickup-2',
    value: 27,
    suffix: '%',
    label: 'Growth in active return hubs',
    detail: 'Decentralized reverse logistics',
  },
  {
    id: 'stat-calls-2',
    value: 40,
    suffix: '%',
    label: 'Reduction in response latency',
    detail: 'Real-time telemetry pipeline',
  },
];

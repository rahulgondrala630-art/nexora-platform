type Props = { label: string; value: string; trend: string; tone?: 'positive' | 'neutral' | 'warning' };

export default function MetricCard({ label, value, trend, tone = 'positive' }: Props) {
  return <article className="metric-card">
    <div className="metric-label">{label}<span className={`trend-dot ${tone}`} /></div>
    <div className="metric-value">{value}</div>
    <div className={`metric-trend ${tone}`}>{trend}</div>
  </article>;
}

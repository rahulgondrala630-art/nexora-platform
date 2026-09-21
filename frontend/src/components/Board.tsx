import type { Workstream } from '../types';

type Props = { items: Workstream[]; onSelect: (item: Workstream) => void };
export default function Board({ items, onSelect }: Props) {
  return <section className="board-card"><div className="section-heading"><div><span className="eyebrow">WORKSTREAMS</span><h2>What is moving this week?</h2></div><button className="ghost-button">View board <span>↗</span></button></div><div className="workstream-list">{items.map(item => <button className="workstream-row" key={item.id} onClick={() => onSelect(item)}><span className="workstream-accent" style={{background:item.accent}} /><span className="workstream-main"><strong>{item.title}</strong><small>{item.owner} · Due {item.due}</small></span><span className={`status-pill ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</span><span className="progress-wrap"><span className="progress-track"><span className="progress-fill" style={{width:`${item.progress}%`, background:item.accent}} /></span><small>{item.progress}%</small></span><span className="row-arrow">→</span></button>)}</div></section>;
}

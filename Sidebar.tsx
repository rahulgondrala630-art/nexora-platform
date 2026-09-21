type Props = { active: string; onNavigate: (item: string) => void };
const items = [['⌂', 'Overview'], ['▦', 'Workstreams'], ['◫', 'Insights'], ['◌', 'Activity'], ['⚙', 'Settings']];

export default function Sidebar({ active, onNavigate }: Props) {
  return <aside className="sidebar">
    <div className="brand"><span className="brand-mark">N</span><span>Nexora</span></div>
    <div className="workspace-switcher"><span className="workspace-icon">W</span><span><strong>Product Studio</strong><small>Personal workspace</small></span><span className="chevron">⌄</span></div>
    <nav aria-label="Main navigation">{items.map(([icon, label]) => <button key={label} className={`nav-item ${active === label ? 'active' : ''}`} onClick={() => onNavigate(label)}><span>{icon}</span>{label}</button>)}</nav>
    <div className="sidebar-bottom"><div className="upgrade-card"><span className="spark">✦</span><strong>Make work visible</strong><p>Invite your team when you are ready to collaborate.</p><button onClick={() => onNavigate('Settings')}>Explore workspace</button></div><div className="profile-row"><span className="avatar avatar-purple">RG</span><span><strong>Rahul Gondrala</strong><small>Builder account</small></span><span className="more">•••</span></div></div>
  </aside>;
}

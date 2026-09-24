import { useState, type ReactNode } from 'react'
import { BarChart3, Bell, Check, ChevronDown, ChevronLeft, Inbox, LayoutDashboard, LogOut, MessageSquareText, Plus, Search, Settings, Sparkles, Tags, Users, X } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Avatar } from '../components/ui/Avatar'
import { Stat } from '../components/ui/Stat'
import { Tabs } from '../components/ui/Tabs'
import { EmptyState } from '../components/ui/EmptyState'
import { Alert } from '../components/ui/Alert'
import { FormField, Input } from '../components/ui/Input'
import { DataTable } from '../components/ui/DataTable'
import { Tooltip } from '../components/ui/Tooltip'
import { Logo } from '../components/Logo'
import { WorkspaceKitPage } from './WorkspaceKitPage'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Requests', icon: Inbox, count: 24 },
  { label: 'Themes', icon: Tags },
  { label: 'Roadmap', icon: BarChart3 },
  { label: 'Workspace kit', icon: Sparkles },
]

const requests = [
  { initials: 'AC', company: 'Acme Co.', text: 'Could we export reports as PDF?', votes: 28, tag: 'Reporting', tone: 'violet' },
  { initials: 'N', company: 'Northstar', text: 'A Slack digest would save our Fridays.', votes: 21, tag: 'Integrations', tone: 'orange' },
  { initials: 'OL', company: 'Owl Labs', text: 'Please add custom dashboard views.', votes: 17, tag: 'Customization', tone: 'blue' },
  { initials: 'D', company: 'Daylight', text: 'Can teammates subscribe to a theme?', votes: 14, tag: 'Collaboration', tone: 'lime' },
]

export function DashboardPage({ email, onLogout }: { email: string; onLogout: () => void }) {
  const [active, setActive] = useState('Overview')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState<typeof requests[number] | null>(null)
  const firstName = email.split('@')[0].split(/[._-]/)[0] || 'there'
  const displayName = firstName.charAt(0).toUpperCase() + firstName.slice(1)

  return (
    <div className="dashboard-shell">
      <aside className={`dashboard-sidebar ${mobileOpen ? 'dashboard-sidebar--open' : ''}`}>
        <div className="dashboard-brand"><Logo compact /><button className="dashboard-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={20} /></button></div>
        <div className="workspace-switcher"><Avatar name="Scopebird" size="small" /><span><strong>Scopebird</strong><small>Acme workspace</small></span><ChevronDown size={15} /></div>
        <nav className="dashboard-nav" aria-label="Workspace navigation">
          <span className="dashboard-nav__label">Workspace</span>
          {navItems.map(({ label, icon: Icon, count }) => <button key={label} className={active === label ? 'dashboard-nav__item dashboard-nav__item--active' : 'dashboard-nav__item'} onClick={() => { setActive(label); setSelectedRequest(null); setMobileOpen(false) }}><Icon size={18} /><span>{label}</span>{count && <em>{count}</em>}</button>)}
        </nav>
        <div className="sidebar-bottom"><button className={`dashboard-nav__item ${active === 'Team' ? 'dashboard-nav__item--active' : ''}`} onClick={() => { setActive('Team'); setSelectedRequest(null); setMobileOpen(false) }}><Users size={18} /><span>Team</span></button><button className={`dashboard-nav__item ${active === 'Settings' ? 'dashboard-nav__item--active' : ''}`} onClick={() => { setActive('Settings'); setSelectedRequest(null); setMobileOpen(false) }}><Settings size={18} /><span>Settings</span></button><button className={`dashboard-nav__item ${active === 'Notifications' ? 'dashboard-nav__item--active' : ''}`} onClick={() => { setActive('Notifications'); setSelectedRequest(null); setMobileOpen(false) }}><Bell size={18} /><span>Notifications</span></button><button className="dashboard-logout" onClick={onLogout}><LogOut size={17} /> Log out</button></div>
      </aside>
      <main className="dashboard-main">
         <header className="dashboard-header"><button className="dashboard-menu" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Logo compact /></button><div className="dashboard-breadcrumb"><span>Workspace</span><strong>/ {active}</strong></div><div className="dashboard-header-actions"><Tooltip label="Search your workspace"><button className="icon-button" aria-label="Search"><Search size={18} /></button></Tooltip><div className="dashboard-user"><Avatar name={displayName} /><span>{displayName}</span><ChevronDown size={14} /></div></div></header>
        <div className="dashboard-content">
           {active === 'Overview' && <OverviewPage displayName={displayName} onRequests={() => setActive('Requests')} onSelectRequest={setSelectedRequest} />}
           {active === 'Requests' && <RequestsPage selectedRequest={selectedRequest} onSelectRequest={setSelectedRequest} />}
           {active === 'Themes' && <ThemesPage />}
           {active === 'Roadmap' && <RoadmapPage />}
           {active === 'Team' && <TeamPage />}
           {active === 'Settings' && <SettingsPage email={email} />}
            {active === 'Notifications' && <NotificationsPage />}
            {active === 'Workspace kit' && <WorkspaceKitPage />}
        </div>
      </main>
    </div>
  )
}

function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return <div className="workspace-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>{action}</div>
}

function OverviewPage({ displayName, onRequests, onSelectRequest }: { displayName: string; onRequests: () => void; onSelectRequest: (request: typeof requests[number]) => void }) {
  return <>
    <PageHeading eyebrow="Tuesday, October 24" title={`Good morning, ${displayName}.`} description="Here’s what your customers are telling you this week." action={<Button><Plus size={17} /> Add request</Button>} />
    <div className="dashboard-stats"><Stat icon={<Inbox size={19} />} tone="blue" label="Open requests" value="24" note="+12% this month" /><Stat icon={<Tags size={19} />} tone="orange" label="Active themes" value="8" note="2 new this week" /><Stat icon={<Users size={19} />} tone="lime" label="Contributors" value="146" note="+18 this month" /><Stat icon={<Sparkles size={19} />} tone="violet" label="Signal captured" value="78%" note="Across 4 channels" /></div>
    <div className="dashboard-grid"><section className="dashboard-panel request-panel"><div className="panel-heading"><div><h2>Top customer requests</h2><p>Prioritized by customer impact and momentum.</p></div><button className="text-button" onClick={onRequests}>View all <ChevronDown size={15} /></button></div><RequestList onSelect={onSelectRequest} /></section><section className="dashboard-panel insight-panel"><div className="panel-heading"><div><h2><Sparkles size={18} /> Scopebird insight</h2><p>Based on your latest feedback</p></div></div><div className="insight-highlight"><strong>Reporting is your biggest opportunity.</strong><p>12 customers mentioned exports or custom reports this month, representing <b>$42k</b> in active opportunities.</p><Button variant="secondary" size="small" onClick={onRequests}>Explore requests <ChevronDown size={14} /></Button></div><div className="sentiment-row"><span>Customer sentiment</span><strong>Very positive</strong><div className="sentiment-bar"><i /></div></div></section></div>
    <div className="dashboard-footer-note"><span>✦</span> Your next roadmap decision is backed by <strong>146 customer voices</strong>.</div>
  </>
}

function RequestList({ onSelect }: { onSelect: (request: typeof requests[number]) => void }) {
  return <div className="dashboard-request-list">{requests.map((request) => <button className="dashboard-request" key={request.text} onClick={() => onSelect(request)}><span className={`request-avatar request-avatar--${request.tone}`}>{request.initials}</span><span className="dashboard-request__body"><strong>{request.text}</strong><span>{request.company} · Updated 2h ago</span></span><Badge tone="neutral">{request.tag}</Badge><span className="dashboard-votes"><MessageSquareText size={15} /> {request.votes}</span></button>)}</div>
}

function RequestsPage({ selectedRequest, onSelectRequest }: { selectedRequest: typeof requests[number] | null; onSelectRequest: (request: typeof requests[number] | null) => void }) {
  if (selectedRequest) return <section className="dashboard-panel request-detail"><button className="text-button" onClick={() => onSelectRequest(null)}><ChevronLeft size={15} /> Back to requests</button><div className={`request-avatar request-avatar--${selectedRequest.tone}`}>{selectedRequest.initials}</div><Badge tone="neutral">{selectedRequest.tag}</Badge><h1>{selectedRequest.text}</h1><p className="request-detail__meta">Submitted by {selectedRequest.company} · 2 hours ago · {selectedRequest.votes} customer votes</p><div className="detail-columns"><div><h3>Why it matters</h3><p>Customers want a faster way to turn their feedback into a shareable update. This request is gaining momentum across teams with reporting workflows.</p></div><div><h3>Next step</h3><p>Review the related theme with your team and decide whether it belongs in the next planning cycle.</p><Button><Check size={16} /> Mark for review</Button></div></div></section>
  return <><PageHeading eyebrow="Customer voice" title="Request inbox" description="Sort, discuss, and prioritize everything your customers are asking for." action={<Button><Plus size={17} /> Add request</Button>} /><Tabs items={['Most voted', 'Recently added', 'Unassigned']} value="Most voted" onChange={() => undefined} /><div className="request-toolbar"><span><strong>24</strong> open requests</span></div><section className="dashboard-panel"><RequestList onSelect={onSelectRequest} /></section></>
}

function ThemesPage() { return <><PageHeading eyebrow="Organize the signal" title="Themes" description="Group related requests into the opportunities worth solving next." action={<Button><Plus size={17} /> New theme</Button>} /><div className="theme-grid">{[['Reporting', '12 requests', '$42k opportunity', 'violet'], ['Integrations', '8 requests', '21% of all signal', 'orange'], ['Collaboration', '6 requests', 'Growing this month', 'blue'], ['Customization', '5 requests', '17 active customers', 'lime']].map(([name, count, detail, tone]) => <section className="dashboard-panel theme-card" key={name}><span className={`theme-mark theme-mark--${tone}`}><Tags size={18} /></span><h2>{name}</h2><strong>{count}</strong><p>{detail}</p><button className="text-button">View requests <ChevronDown size={15} /></button></section>)}</div></> }

function RoadmapPage() {
  const columns: { title: string; subtitle: string; items: string[][] }[] = [
    { title: 'Now', subtitle: 'In progress', items: [['PDF exports', 'Reporting', '68%'], ['Slack digest', 'Integrations', '42%']] },
    { title: 'Next', subtitle: 'Planned', items: [['Custom views', 'Customization', 'Ready to start'], ['Theme subscriptions', 'Collaboration', 'Scoping']] },
    { title: 'Later', subtitle: 'Exploring', items: [['Advanced roles', 'Administration', '12 requests']] },
  ]
  return <><PageHeading eyebrow="Plan with confidence" title="Roadmap" description="Turn the strongest customer signals into a clear plan for your team." action={<Button><Plus size={17} /> Add initiative</Button>} /><div className="roadmap-columns">{columns.map(({ title, subtitle, items }) => <section className="roadmap-column" key={title}><div className="roadmap-column__heading"><h2>{title}</h2><span>{subtitle}</span></div>{items.map(([item, tag, progress]) => <div className="roadmap-card" key={item}><strong>{item}</strong><Badge tone="neutral">{tag}</Badge><span>{progress}</span></div>)}</section>)}</div></>
}

function TeamPage() { return <><PageHeading eyebrow="Your workspace" title="Team" description="See who is turning customer feedback into better product decisions." action={<Button><Plus size={17} /> Invite teammate</Button>} /><section className="dashboard-panel team-panel"><div className="panel-heading"><div><h2>Workspace members</h2><p>4 teammates · 2 active today</p></div><Badge tone="blue">Pro workspace</Badge></div><DataTable columns={['Member', 'Role', 'Access']} rows={[[<span className="table-person"><Avatar name="Jordan Davis" /> Jordan Davis</span>, 'Product lead', <Badge tone="neutral">Owner</Badge>], [<span className="table-person"><Avatar name="Maya Kim" /> Maya Kim</span>, 'Customer success', <Badge tone="neutral">Editor</Badge>], [<span className="table-person"><Avatar name="Ravi Shah" /> Ravi Shah</span>, 'Engineering', <Badge tone="neutral">Editor</Badge>], [<span className="table-person"><Avatar name="Erin Lee" /> Erin Lee</span>, 'Product design', <Badge tone="neutral">Viewer</Badge>]]}/></section></> }

function SettingsPage({ email }: { email: string }) { return <><PageHeading eyebrow="Workspace preferences" title="Settings" description="Shape how Scopebird works for your team." /><div className="settings-grid"><section className="dashboard-panel settings-card"><h2>Workspace details</h2><FormField label="Workspace name"><Input value="Scopebird" readOnly /></FormField><FormField label="Workspace URL"><Input value="scopebird.acme" readOnly /></FormField><Button>Save changes</Button></section><section className="dashboard-panel settings-card"><h2>Your profile</h2><FormField label="Email address"><Input value={email} readOnly /></FormField><FormField label="Role"><Input value="Workspace owner" readOnly /></FormField><Button variant="secondary">Manage notifications</Button></section></div></> }

function NotificationsPage() { return <><PageHeading eyebrow="Stay in the loop" title="Notifications" description="The latest activity from your customers and team, all in one place." /><Alert tone="success" title="Inbox is up to date">You have no urgent notifications.</Alert><section className="dashboard-panel notification-list">{[['New request received', 'Acme Co. asked for PDF exports', '12 minutes ago'], ['Theme reached a milestone', 'Reporting passed 10 customer votes', '2 hours ago'], ['Maya commented on a request', '“This would unblock our weekly review.”', 'Yesterday'], ['Weekly signal digest ready', 'Your team captured 38 new customer voices', 'Monday']].map(([title, detail, time]) => <div className="notification-row" key={title}><span className="notification-dot" /><span><strong>{title}</strong><small>{detail}</small></span><time>{time}</time></div>)}</section><EmptyState icon={<Inbox size={18} />} title="No saved searches yet" description="Save a view when you want a quieter way to revisit customer signal." /></> }

"use client";

import { useState } from "react";
import {
  Activity,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  CircleHelp,
  FileText,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  Search,
  Settings,
  Sparkles,
  Target,
  UserRound,
  Users,
  Video,
  WalletCards,
  X,
} from "lucide-react";

const nav = [
  { label: "HOME", items: [{ icon: LayoutDashboard, label: "Dashboard" }] },
  {
    label: "CAREER OS",
    items: [
      { icon: UserRound, label: "Career Passport" },
      { icon: WalletCards, label: "Career Vault" },
      { icon: Users, label: "Personas" },
      { icon: FileText, label: "Resume Studio" },
    ],
  },
  {
    label: "OPPORTUNITIES",
    items: [
      { icon: Globe2, label: "Global Jobs", count: 18 },
      { icon: Search, label: "Job Discovery" },
      { icon: Target, label: "Saved Opportunities", count: 7 },
      { icon: Activity, label: "Job Sources" },
    ],
  },
  {
    label: "APPLICATIONS",
    items: [
      { icon: Sparkles, label: "Application Studio" },
      { icon: BriefcaseBusiness, label: "Application Pipeline", count: 12 },
      { icon: Building2, label: "Companies" },
    ],
  },
  {
    label: "INTERVIEWS",
    items: [
      { icon: GraduationCap, label: "Interview Prep" },
      { icon: Video, label: "Live Interview" },
    ],
  },
  {
    label: "CAREER INTELLIGENCE",
    items: [
      { icon: Target, label: "Skill Gaps" },
      { icon: BarChart3, label: "Market Intelligence" },
      { icon: Globe2, label: "Global Mobility" },
      { icon: BarChart3, label: "Analytics" },
    ],
  },
  { label: "SYSTEM", items: [{ icon: Settings, label: "Settings" }] },
];

const jobs = [
  { company: "Deloitte", title: "Senior Cybersecurity Architect", meta: ["Remote · India", "$145–180K", "Enterprise"], score: 86, note: "Strong capability and experience alignment" },
  { company: "Microsoft", title: "Cloud Security Lead", meta: ["Hybrid · Singapore", "$160–205K", "Visa possible"], score: 78, note: "Excellent security leadership fit" },
  { company: "ServiceNow", title: "Principal Security Strategist", meta: ["Remote · Global", "$155–190K", "Senior level"], score: 74, note: "High evidence coverage; 2 skill gaps" },
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="career-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">C</div>
          <div><div className="brand-name">CareerOS</div><div className="brand-sub">Career Intelligence</div></div>
        </div>
        <nav className="nav">
          {nav.map((group) => (
            <div key={group.label}>
              <div className="nav-label">{group.label}</div>
              {group.items.map(({ icon: Icon, label, count }) => (
                <button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => setActive(label)}>
                  <Icon size={15} strokeWidth={1.8} /><span>{label}</span>{count ? <span className="nav-count">{count}</span> : null}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="user-mini"><div className="avatar">AS</div><div className="user-copy"><div style={{fontSize:11,fontWeight:700,color:"#fff"}}>Arun Singh</div><div style={{fontSize:9,color:"#858b98"}}>Career Workspace</div></div></div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="breadcrumb">CareerOS <ChevronRight size={12} /> <b style={{color:"#303540"}}>{active}</b></div>
          <div className="search">
            <Search className="search-icon" size={15} />
            <input aria-label="Global search" placeholder="Search jobs, companies, skills, people..." onFocus={() => setSearchOpen(true)} />
            <span className="shortcut">⌘ K</span>
          </div>
          <div className="top-actions">
            <button className="icon-btn" aria-label="Notifications"><Bell size={17} /></button>
            <button className="icon-btn" aria-label="Help"><CircleHelp size={17} /></button>
            <button className="icon-btn" aria-label="Profile"><UserRound size={17} /></button>
          </div>
        </header>

        <section className="content">
          <div className="page-head">
            <div><div className="eyebrow">Monday · Career intelligence</div><h1 className="page-title">Good morning, Arun.</h1><p className="page-description">Your global career workspace is ready. Here is what needs your attention today.</p></div>
            <button className="primary">Open Career Assistant</button>
          </div>

          <div className="grid metrics">
            <div className="card metric"><div className="metric-label">Career readiness</div><div className="metric-value">82%</div><div className="metric-foot">↑ 6% this month</div><div className="progress"><span style={{width:"82%"}} /></div></div>
            <div className="card metric"><div className="metric-label">Strong opportunities</div><div className="metric-value">18</div><div className="metric-foot">5 new since yesterday</div></div>
            <div className="card metric"><div className="metric-label">Applications active</div><div className="metric-value">12</div><div className="metric-foot" style={{color:"#6c7482"}}>4 require attention</div></div>
            <div className="card metric"><div className="metric-label">Skill gap coverage</div><div className="metric-value">71%</div><div className="metric-foot" style={{color:"#b87918"}}>3 priority gaps</div><div className="progress"><span style={{width:"71%"}} /></div></div>
          </div>

          <div className="grid two" style={{marginTop:14}}>
            <div className="card section-card">
              <div className="section-head"><div><div className="section-title">Top opportunities</div><div style={{fontSize:10,color:"#7a818e",marginTop:3}}>Ranked by CareerOS intelligence</div></div><span className="section-link">View all</span></div>
              {jobs.map((job) => <div className="job" key={job.title}><div className="job-row"><div><div className="job-company">{job.company}</div><div className="job-title">{job.title}</div><div className="job-meta">{job.meta.map((x) => <span className="tag" key={x}>{x}</span>)}</div></div><div className="score">{job.score}%</div></div><div style={{fontSize:10,color:"#69717f",marginTop:9}}>{job.note}</div></div>)}
            </div>

            <div className="card section-card">
              <div className="section-head"><div><div className="section-title">Today&apos;s intelligence</div><div style={{fontSize:10,color:"#7a818e",marginTop:3}}>Signals across your career</div></div></div>
              <div className="mini-list">
                <div className="mini-row"><div><div className="mini-main">3 priority skill gaps</div><div className="mini-sub">Cloud security appears in 8 target roles</div></div><span className="status warn">REVIEW</span></div>
                <div className="mini-row"><div><div className="mini-main">5 new matching jobs</div><div className="mini-sub">2 exceed your 80% fit threshold</div></div><span className="status">NEW</span></div>
                <div className="mini-row"><div><div className="mini-main">Interview tomorrow</div><div className="mini-sub">Security Architecture · 10:30 AM</div></div><span className="status warn">PREP</span></div>
                <div className="mini-row"><div><div className="mini-main">Remote eligibility updated</div><div className="mini-sub">Singapore role can sponsor your profile</div></div><span className="status">MATCH</span></div>
              </div>
            </div>
          </div>

          <div className="grid two" style={{marginTop:14}}>
            <div className="card section-card"><div className="section-head"><div><div className="section-title">Application pipeline</div><div style={{fontSize:10,color:"#7a818e",marginTop:3}}>Keep your search moving</div></div><span className="section-link">Open pipeline</span></div><div className="mini-list"><div className="mini-row"><div><div className="mini-main">Deloitte · Security Architect</div><div className="mini-sub">Technical interview · Thursday</div></div><span className="status">INTERVIEW</span></div><div className="mini-row"><div><div className="mini-main">Microsoft · Cloud Security Lead</div><div className="mini-sub">Resume submitted · 4 days ago</div></div><span className="status">ACTIVE</span></div><div className="mini-row"><div><div className="mini-main">ServiceNow · Principal Strategist</div><div className="mini-sub">Truth Check needs review</div></div><span className="status warn">ACTION</span></div></div></div>
            <div className="card section-card"><div className="section-head"><div><div className="section-title">Global readiness</div><div style={{fontSize:10,color:"#7a818e",marginTop:3}}>Where your profile can compete</div></div><span className="section-link">Explore mobility</span></div><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:9}}><div style={{padding:12,border:"1px solid #e7e9ed",borderRadius:8}}><div style={{fontSize:10,color:"#777f8b"}}>Remote</div><div style={{fontWeight:750,fontSize:18,marginTop:4}}>91%</div></div><div style={{padding:12,border:"1px solid #e7e9ed",borderRadius:8}}><div style={{fontSize:10,color:"#777f8b"}}>Timezone</div><div style={{fontWeight:750,fontSize:18,marginTop:4}}>84%</div></div><div style={{padding:12,border:"1px solid #e7e9ed",borderRadius:8}}><div style={{fontSize:10,color:"#777f8b"}}>Mobility</div><div style={{fontWeight:750,fontSize:18,marginTop:4}}>76%</div></div></div></div>
          </div>
        </section>
      </main>

      {searchOpen && <div onClick={() => setSearchOpen(false)} style={{position:"fixed",inset:0,zIndex:50,background:"rgba(10,12,18,.28)",backdropFilter:"blur(2px)"}}><div onClick={(e)=>e.stopPropagation()} style={{width:"min(650px,calc(100vw - 30px))",margin:"90px auto",background:"#fff",border:"1px solid #dddfe5",borderRadius:14,boxShadow:"0 20px 60px rgba(0,0,0,.18)",overflow:"hidden"}}><div style={{padding:16,borderBottom:"1px solid #eee",display:"flex",gap:10,alignItems:"center"}}><Search size={18} color="#777"/><input autoFocus placeholder="Ask CareerOS to find roles, companies, skills..." style={{border:0,outline:0,flex:1,fontSize:14}}/><button onClick={()=>setSearchOpen(false)} className="icon-btn"><X size={17}/></button></div><div style={{padding:18,color:"#6c7482",fontSize:12}}>Try natural language: <b style={{color:"#343944"}}>“Find remote security leadership roles in Singapore above $150K.”</b></div></div></div>}
    </div>
  );
}

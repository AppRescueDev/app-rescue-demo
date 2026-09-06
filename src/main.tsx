import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  CloudUpload,
  Database,
  GitBranch,
  ShieldCheck,
  TerminalSquare,
  Wrench,
  XCircle,
} from 'lucide-react';
import './styles.css';

type Severity = 'critical' | 'warning' | 'fixed';

type Finding = {
  title: string;
  before: string;
  fix: string;
  severity: Severity;
};

type ChecklistItem = {
  label: string;
  status: 'pass' | 'review';
};

const findings: Finding[] = [
  {
    title: 'Build failed on deploy',
    before: 'App imported a missing helper and used browser-only code during server rendering.',
    fix: 'Replaced the missing helper, guarded browser APIs, and restored a clean production build.',
    severity: 'critical',
  },
  {
    title: 'Login loop after refresh',
    before: 'Session state was stored only in memory, so protected pages lost auth after reload.',
    fix: 'Moved auth bootstrap into a single provider and restored sessions from storage on startup.',
    severity: 'critical',
  },
  {
    title: 'Database writes failed silently',
    before: 'Form payloads did not match the expected table shape and errors were swallowed.',
    fix: 'Normalized payload fields, surfaced API errors, and added user-facing save states.',
    severity: 'warning',
  },
  {
    title: 'Mobile layout overflow',
    before: 'Generated cards used fixed widths, causing buttons and long labels to clip on phones.',
    fix: 'Rebuilt responsive grid rules and constrained text, controls, and panel widths.',
    severity: 'fixed',
  },
];

const checklist: ChecklistItem[] = [
  { label: 'Production build passes', status: 'pass' },
  { label: 'Environment variables documented', status: 'pass' },
  { label: 'Auth flow reviewed', status: 'pass' },
  { label: 'Database schema mapped', status: 'pass' },
  { label: 'Payment code requires live-client review', status: 'review' },
];

const timeline = [
  'Reproduced client issue from logs and screenshots',
  'Grouped symptoms into build, auth, database, and UI faults',
  'Fixed root causes before adding new features',
  'Prepared deployment notes and handover checklist',
];

const iconForSeverity = {
  critical: XCircle,
  warning: AlertTriangle,
  fixed: CheckCircle2,
};

function App() {
  const fixedCount = findings.length;
  const passCount = checklist.filter((item) => item.status === 'pass').length;

  return (
    <main className="app-shell">
      <section className="hero-band">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio case study</p>
          <h1>AI App Rescue Demo</h1>
          <p>
            A focused example of taking a fragile AI-generated web app from broken deploys,
            login loops, and hidden API failures to a clean, reviewable handover.
          </p>
        </div>
        <div className="status-console" aria-label="Rescue status summary">
          <div className="console-header">
            <TerminalSquare size={18} />
            <span>rescue-check</span>
          </div>
          <pre>{`build: passed
auth: stable
database: mapped
deploy: ready
risk: scoped`}</pre>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Project rescue metrics">
        <Metric icon={Wrench} label="Issues fixed" value={String(fixedCount)} />
        <Metric icon={ClipboardCheck} label="Checks passed" value={`${passCount}/${checklist.length}`} />
        <Metric icon={CloudUpload} label="Deploy state" value="Ready" />
        <Metric icon={GitBranch} label="Handover" value="Documented" />
      </section>

      <section className="content-grid">
        <div className="panel">
          <div className="section-title">
            <Wrench size={20} />
            <h2>What Was Rescued</h2>
          </div>
          <div className="finding-list">
            {findings.map((finding) => {
              const Icon = iconForSeverity[finding.severity];
              return (
                <article className={`finding finding-${finding.severity}`} key={finding.title}>
                  <div className="finding-heading">
                    <Icon size={18} />
                    <h3>{finding.title}</h3>
                  </div>
                  <p><strong>Before:</strong> {finding.before}</p>
                  <p><strong>Fix:</strong> {finding.fix}</p>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="panel compact-panel">
          <div className="section-title">
            <ShieldCheck size={20} />
            <h2>Readiness</h2>
          </div>
          <ul className="checklist">
            {checklist.map((item) => (
              <li key={item.label}>
                {item.status === 'pass' ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="handover-box">
            <Database size={20} />
            <div>
              <h3>Client Handover</h3>
              <p>Scope, fixes, remaining risks, and deployment notes are written before delivery.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="timeline-band">
        <div className="section-title">
          <ClipboardCheck size={20} />
          <h2>Rescue Process</h2>
        </div>
        <ol className="timeline">
          {timeline.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof Wrench; label: string; value: string }) {
  return (
    <div className="metric">
      <Icon size={22} />
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

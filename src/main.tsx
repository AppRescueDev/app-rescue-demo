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
  status: 'pass';
};

const findings: Finding[] = [
  {
    title: 'Build failed on deploy',
    before: 'The app looked fine in preview but failed when a production build was attempted.',
    fix: 'The production build path was stabilized and verified without changing the client-facing scope.',
    severity: 'critical',
  },
  {
    title: 'Login loop after refresh',
    before: 'Users could sign in once, then lose access or get sent back through the same flow after refresh.',
    fix: 'The session flow was reviewed end to end and returned to a predictable, testable state.',
    severity: 'critical',
  },
  {
    title: 'Database writes failed silently',
    before: 'Save actions appeared successful, but no reliable records were created for the client.',
    fix: 'The data path was traced, failure states were exposed, and the handover now lists the required setup.',
    severity: 'warning',
  },
  {
    title: 'Mobile layout overflow',
    before: 'Generated cards used fixed widths, causing buttons and long labels to clip on phones.',
    fix: 'The interface was cleaned up so the same workflow remains usable on desktop and mobile.',
    severity: 'fixed',
  },
];

const checklist: ChecklistItem[] = [
  { label: 'Production build passes', status: 'pass' },
  { label: 'Broken states documented', status: 'pass' },
  { label: 'Client risks separated', status: 'pass' },
  { label: 'Mobile view reviewed', status: 'pass' },
  { label: 'Handover notes ready', status: 'pass' },
];

const timeline = [
  'Reproduced client issue from logs and screenshots',
  'Separated symptoms from likely root causes',
  'Stabilized the app without expanding scope',
  'Prepared clear handover notes for review',
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
                <CheckCircle2 size={18} />
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

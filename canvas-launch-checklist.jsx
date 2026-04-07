import { useState } from "react";

const PHASES = [
  {
    id: 1,
    name: "Pre-Build Planning",
    icon: "📐",
    genai: "assist",
    workshop: false,
    cddStep: null,
    items: [
      "Define course modality & semester dates",
      "Backward Design: objectives → assessments → activities",
      "Complete Course Design Document (CDD)",
      "Prepare CRISP context & prompt library",
    ],
    note: "The CDD is your prerequisite. AI can help draft objectives, but the design decisions are yours.",
  },
  {
    id: 2,
    name: "Course Shell Setup",
    icon: "⚙️",
    genai: "manual",
    workshop: false,
    cddStep: null,
    items: [
      "Create/import course shell; set dates & time zone",
      "Upload course banner (1200×675px)",
      "Enable only needed navigation tabs",
      "Set Home Page type & late policy",
      "Add & test LTI integrations (Turnitin, Zoom, etc.)",
    ],
    note: "All manual Canvas configuration. No GenAI shortcut here — but it takes 15 minutes.",
  },
  {
    id: 3,
    name: "Content Architecture",
    icon: "🏗️",
    genai: "assist",
    workshop: false,
    cddStep: null,
    items: [
      "Create all modules with consistent naming",
      "Set module sequence, prerequisites, lock dates",
      "Build Start Here / Orientation module (Module 0)",
      "Include syllabus, tech requirements, ADA statement, AI policy",
    ],
    note: "Module structure comes from your CDD Stage 3. GenAI can generate the orientation pages.",
  },
  {
    id: 4,
    name: "Content Development",
    icon: "✍️",
    genai: "primary",
    workshop: true,
    cddStep: "Steps 1–5",
    items: [
      "Step 1 → Welcome Page",
      "Step 2 → Course Home Page",
      "Step 3 → Module Overview pages",
      "Step 4 → Instructional content pages",
      "Step 5 → Resource & support pages",
      "Human-review every output before paste",
      "No placeholder text — no \"TBD\" or \"Coming Soon\"",
    ],
    note: "Attach CDD → copy prompt → paste output into Canvas RCE → review → publish. This is the core workflow.",
  },
  {
    id: 5,
    name: "Assignments & Assessments",
    icon: "📝",
    genai: "primary",
    workshop: true,
    cddStep: "Steps 6–8",
    items: [
      "Step 6 → Assignment 1 page + rubric",
      "Step 7 → Assignment 2 page + rubric",
      "Step 8 → Assignment 3 page + rubric",
      "Configure submission types, due dates, point values",
      "Set up discussions (prompts, threading, grading)",
      "Build quizzes: time limits, attempts, access codes",
      "Test-drive every quiz as Test Student",
    ],
    note: "GenAI drafts descriptions and rubrics from your CDD Stage 2. You set Canvas mechanics manually.",
  },
  {
    id: 6,
    name: "Rubric QA",
    icon: "📊",
    genai: "assist",
    workshop: true,
    cddStep: "In Steps 6–8",
    items: [
      "Rubric point totals match assignment values",
      "Descriptors distinguish performance levels clearly",
      "Criteria are observable and measurable",
      "Test rubric renders in SpeedGrader",
    ],
    note: "GenAI-drafted rubrics need the closest human review. Vague descriptors are the #1 failure mode.",
  },
  {
    id: 7,
    name: "Grading Configuration",
    icon: "⚖️",
    genai: "manual",
    workshop: false,
    cddStep: null,
    items: [
      "Create assignment groups matching syllabus categories",
      "Set group weights (must total 100%)",
      "Assign every item to correct group",
      "Set grading scheme & posting policy",
      "Enter sample scores — verify final grade calculation",
    ],
    note: "Pure Canvas mechanics. Get the weights wrong and students see incorrect grades all semester.",
  },
  {
    id: 8,
    name: "Communications",
    icon: "📣",
    genai: "assist",
    workshop: false,
    cddStep: null,
    items: [
      "Draft welcome announcement (Day 1)",
      "Draft Week 1 logistics announcement",
      "Plan announcement cadence (weekly? per-module?)",
      "Verify all due dates appear on Canvas calendar",
      "Check for date collisions",
    ],
    note: "GenAI excels at drafting announcements and student emails. Use the Student Communication prompt.",
  },
  {
    id: 9,
    name: "Accessibility & Compliance",
    icon: "♿",
    genai: "manual",
    workshop: false,
    cddStep: null,
    items: [
      "All images have meaningful alt text",
      "All videos have reviewed captions",
      "Heading hierarchy: H2 → H3 → H4 (no skips)",
      "Links use descriptive text (never \"click here\")",
      "Documents pass accessibility checks before upload",
      "Required institutional statements in syllabus",
      "AI use policy statement included",
    ],
    note: "Non-negotiable. Run UDOIT or Ally. Fix everything flagged Critical.",
  },
  {
    id: 10,
    name: "Quality Assurance",
    icon: "🔍",
    genai: "manual",
    workshop: false,
    cddStep: null,
    items: [
      "Run Canvas Link Validator — fix all broken links",
      "Run accessibility checker — resolve critical issues",
      "Student View: navigate entire course start-to-finish",
      "Submit test assignment — confirm SpeedGrader",
      "Take test quiz — confirm scoring & feedback",
      "Check mobile experience (Canvas Student app)",
      "Peer review: colleague walks course as student",
    ],
    note: "Student View is your dress rehearsal. If you skip this phase, students will find the bugs for you.",
  },
  {
    id: 11,
    name: "Pre-Launch Audit",
    icon: "🚦",
    genai: "manual",
    workshop: false,
    cddStep: null,
    items: [
      "All modules published (or scheduled)",
      "All pages and assignments published",
      "Every due date matches syllabus",
      "No due dates on holidays or closure days",
      "Canvas Syllabus page matches uploaded PDF",
      "Gradebook weights match syllabus exactly",
    ],
    note: "The date audit catches more errors than any other single check. Export your assignment list and compare.",
  },
  {
    id: 12,
    name: "Launch Day",
    icon: "🚀",
    genai: "manual",
    workshop: false,
    cddStep: null,
    items: [
      "Publish course",
      "Post welcome announcement",
      "Send introductory Canvas message",
      "Monitor first student access",
      "Verify enrollment: correct students, correct sections",
    ],
    note: "Watch for permission errors in the first 24 hours. If one student can't access, others can't either.",
  },
  {
    id: 13,
    name: "Post-Launch",
    icon: "🔄",
    genai: "assist",
    workshop: false,
    cddStep: null,
    items: [
      "Weekly: publish next modules on schedule",
      "Weekly: monitor Gradebook for errors",
      "Mid-term: re-run accessibility check after new content",
      "End of term: archive, export Gradebook, document revisions",
      "End of term: update prompt library with lessons learned",
    ],
    note: "The prompt library improves every semester. Document what worked and what needed manual correction.",
  },
];

const GENAI_LABELS = {
  primary: { label: "GenAI Primary", color: "#00543C", bg: "#E8F2EE" },
  assist: { label: "GenAI Assists", color: "#7A5200", bg: "#FFF8E7" },
  manual: { label: "Manual", color: "#555", bg: "#F3F3F3" },
};

export default function CanvasChecklist() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <div
      style={{
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        maxWidth: 720,
        margin: "0 auto",
        padding: "1.5rem 1rem",
        background: "#FAFAF8",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #00543C 0%, #003D2B 100%)",
          borderRadius: 12,
          padding: "1.75rem 1.5rem",
          marginBottom: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 200,
            height: 200,
            background:
              "radial-gradient(circle at top right, rgba(253,187,48,0.15), transparent 70%)",
          }}
        />
        <div
          style={{
            width: 48,
            height: 3,
            background: "#FDBB30",
            borderRadius: 2,
            marginBottom: "0.75rem",
          }}
        />
        <h1
          style={{
            color: "#FDBB30",
            fontSize: "1.35rem",
            fontWeight: 700,
            margin: "0 0 0.35rem",
            letterSpacing: "-0.02em",
          }}
        >
          Canvas Course Launch Checklist
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "0.82rem",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          13 phases · CDD to course site · GenAI integration mapped
        </p>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          marginBottom: "1.25rem",
          padding: "0.75rem",
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #E8E8E6",
        }}
      >
        {Object.entries(GENAI_LABELS).map(([key, val]) => (
          <span
            key={key}
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: val.color,
              background: val.bg,
              padding: "0.2rem 0.6rem",
              borderRadius: 100,
              whiteSpace: "nowrap",
            }}
          >
            {val.label}
          </span>
        ))}
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "#00543C",
            background: "transparent",
            padding: "0.2rem 0.6rem",
            borderRadius: 100,
            border: "2px solid #FDBB30",
            whiteSpace: "nowrap",
          }}
        >
          ★ Workshop Scope
        </span>
      </div>

      {/* Phase Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {PHASES.map((phase) => {
          const isExpanded = expanded === phase.id;
          const genaiStyle = GENAI_LABELS[phase.genai];
          const isWorkshop = phase.workshop;

          return (
            <div
              key={phase.id}
              style={{
                background: "#fff",
                borderRadius: 10,
                border: isWorkshop
                  ? "2px solid #FDBB30"
                  : "1px solid #E8E8E6",
                overflow: "hidden",
                boxShadow: isWorkshop
                  ? "0 2px 12px rgba(253,187,48,0.15)"
                  : "0 1px 3px rgba(0,0,0,0.04)",
                transition: "all 0.15s ease",
              }}
            >
              {/* Header Row */}
              <button
                onClick={() => toggle(phase.id)}
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto auto",
                  alignItems: "center",
                  gap: "0.65rem",
                  padding: "0.7rem 0.85rem",
                  background: isWorkshop ? "#FFFDF5" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{phase.icon}</span>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "#919194",
                        fontFamily: "monospace",
                      }}
                    >
                      {phase.id}
                    </span>
                    <span
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "#1A1A1A",
                      }}
                    >
                      {phase.name}
                    </span>
                    {isWorkshop && (
                      <span
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          color: "#00543C",
                          background: "#FDBB30",
                          padding: "0.1rem 0.4rem",
                          borderRadius: 100,
                        }}
                      >
                        YOU ARE HERE
                      </span>
                    )}
                  </div>
                  {phase.cddStep && (
                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: "#00543C",
                        fontFamily: "monospace",
                      }}
                    >
                      CDD Build Sequence: {phase.cddStep}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    color: genaiStyle.color,
                    background: genaiStyle.bg,
                    padding: "0.15rem 0.5rem",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                  }}
                >
                  {genaiStyle.label}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#919194",
                    transition: "transform 0.15s",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div
                  style={{
                    padding: "0 0.85rem 0.85rem",
                    borderTop: "1px solid #F0F0EE",
                  }}
                >
                  <ul
                    style={{
                      margin: "0.6rem 0 0",
                      padding: "0 0 0 1.2rem",
                      listStyle: "none",
                    }}
                  >
                    {phase.items.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.8rem",
                          color: "#333",
                          lineHeight: 1.6,
                          padding: "0.15rem 0",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "-1.2rem",
                            color: "#919194",
                            fontSize: "0.75rem",
                          }}
                        >
                          ☐
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: "0.6rem",
                      padding: "0.5rem 0.7rem",
                      background: "#F8F8F6",
                      borderRadius: 6,
                      borderLeft: `3px solid ${isWorkshop ? "#FDBB30" : "#E0E0DE"}`,
                      fontSize: "0.75rem",
                      color: "#555",
                      lineHeight: 1.55,
                      fontStyle: "italic",
                    }}
                  >
                    {phase.note}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0.5rem",
          marginTop: "1.25rem",
        }}
      >
        {[
          { n: "3", label: "GenAI Primary", color: "#00543C", bg: "#E8F2EE" },
          { n: "5", label: "GenAI Assists", color: "#7A5200", bg: "#FFF8E7" },
          { n: "5", label: "Manual Only", color: "#555", bg: "#F3F3F3" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: s.bg,
              borderRadius: 8,
              padding: "0.65rem",
              textAlign: "center",
            }}
          >
            <div
              style={{ fontSize: "1.4rem", fontWeight: 700, color: s.color }}
            >
              {s.n}
            </div>
            <div style={{ fontSize: "0.65rem", color: s.color, fontWeight: 600 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "1.25rem",
          padding: "0.85rem",
          background: "linear-gradient(135deg, #00543C, #003D2B)",
          borderRadius: 8,
          color: "rgba(255,255,255,0.8)",
          fontSize: "0.75rem",
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        <span style={{ color: "#FDBB30", fontWeight: 700 }}>
          GenAI accelerates — it does not replace judgment.
        </span>
        <br />
        Every AI output passes through human review before it reaches students.
      </div>
    </div>
  );
}

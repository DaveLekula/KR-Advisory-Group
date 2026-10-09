/**
 * The seven service blocks (01–07) — verbatim from CONTENT_INVENTORY.md
 * (Services page). Each has an anchor id used for single-hash deep links
 * (e.g. /services#accounting). Promise lines and "What this includes"
 * items are reproduced exactly; do NOT paraphrase.
 */

export interface Service {
  id: string;
  number: string;
  title: string;
  promise: string;
  includes: string[];
}

export const services: Service[] = [
  {
    id: 'accounting',
    number: '01',
    title: 'Accounting & Financial Reporting',
    promise: 'Reliable financial information for better decisions',
    includes: [
      'Bookkeeping',
      'Annual financial statements',
      'Monthly management accounts',
      'Financial reporting',
      'Consolidation support',
      'Accounting reviews',
      'Financial statement preparation',
      'General accounting support',
      'Month-end accounting support',
      'Financial information preparation',
    ],
  },
  {
    id: 'tax',
    number: '02',
    title: 'Tax Services',
    promise: 'Stay compliant. Make informed tax decisions.',
    includes: [
      'Income tax',
      'VAT',
      'Provisional tax',
      'Tax compliance',
      'Tax advisory',
      'SARS-related support',
      'Tax planning and review',
      'Tax-return support',
      'Tax compliance reviews',
    ],
  },
  {
    id: 'internal-audit',
    number: '03',
    title: 'Internal Audit & Risk Advisory',
    promise: 'Stronger controls. Better risk management.',
    includes: [
      'Internal audit reviews',
      'Internal control assessments',
      'Risk assessments',
      'Business process reviews',
      'Control testing',
      'Governance reviews',
      'Risk and control identification',
      'Control weakness assessments',
      'Internal audit reporting',
      'Recommendations and remediation support',
      'Process improvement',
      'Control design and improvement',
    ],
  },
  {
    id: 'audit-readiness',
    number: '04',
    title: 'Audit Readiness',
    promise: 'Be ready before the auditors arrive',
    includes: [
      'Audit-readiness assessments',
      'Preparation of audit-ready financial statements',
      'Remediation of prior-year audit findings',
      'Internal control remediation',
      'Working-paper preparation and review',
      'Coordination with external auditors',
      'Pre-audit quality reviews',
      'Management letter responses',
    ],
  },
  {
    id: 'business-advisory',
    number: '05',
    title: 'Business Advisory',
    promise: 'Advice grounded in your numbers',
    includes: [
      'Financial modelling',
      'Business plans',
      'Cash-flow management',
      'Budgeting and forecasting',
      'Business performance reviews',
      'Management reporting',
      'Financial process improvement',
      'Business structuring guidance',
    ],
  },
  {
    id: 'funding-support',
    number: '06',
    title: 'Funding Support',
    promise: 'Funding-ready, on paper and in practice',
    includes: [
      'Funding-readiness assessments',
      'Business plans and financial models',
      'Funding applications and documentation',
      'Bank and investor engagement support',
      'Financial viability assessments',
      'Grant and public-funding support',
    ],
  },
  {
    id: 'public-sector',
    number: '07',
    title: 'Public Sector Advisory',
    promise: 'Governance and audit readiness for public institutions',
    includes: [
      'Governance reviews',
      'Audit-readiness support',
      'Internal control and risk assessments',
      'Financial reporting support',
      'Compliance and process reviews',
    ],
  },
];

/**
 * Three audience cards shared by Home and About — verbatim from
 * CONTENT_INVENTORY.md ("Who We Help").
 */
export const audiences = [
  {
    title: 'Growing SMEs',
    body:
      'Reliable financial reporting, compliance and month-end support that keeps pace with growth.',
  },
  {
    title: 'Businesses preparing for an external audit',
    body:
      'Audit-readiness support that turns audit season from a scramble into a formality.',
  },
  {
    title: 'Public institutions',
    body:
      'Strengthened governance, internal controls and audit readiness under public accountability.',
  },
] as const;

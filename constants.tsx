import { GraduationCap, Briefcase, Plane, Users, Building2, Globe, FileText, Clock, CreditCard } from 'lucide-react';
import { Service, ProcessStep, Country, NavItem, BlogPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Firm', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Process', path: '/process' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'student-visa',
    title: 'Student Visas',
    shortDescription: 'Guidance for university admissions and student visa applications.',
    fullDescription: 'Our student visa service is comprehensive, covering university selection, application assistance, and visa processing. We help you navigate the complex requirements of educational institutions and immigration authorities to ensure a smooth transition to your studies abroad.',
    eligibility: ['Confirmed enrollment', 'Proof of funds', 'Language proficiency', 'Clean health/criminal record'],
    documents: ['Passport', 'Acceptance Letter (CAS/I-20)', 'Bank Statements', 'Academic Transcripts'],
    icon: GraduationCap,
  },
  {
    id: 'work-permit',
    title: 'Skilled Worker',
    shortDescription: 'Employment-based visa solutions for professionals.',
    fullDescription: 'We assist skilled professionals in securing work permits and employment visas. Whether you have a job offer or are applying through a points-based system, we ensure your qualifications and experience are presented perfectly.',
    eligibility: ['Valid Job Offer (if applicable)', 'Relevant Work Experience', 'Educational Qualifications', 'Language Proficiency'],
    documents: ['Employment Contract', 'CV/Resume', 'Educational Certificates', 'Employer Sponsorship Details'],
    icon: Briefcase,
  },
  {
    id: 'tourist-visa',
    title: 'Visitor Visas',
    shortDescription: 'Short-term travel visas for tourism and family visits.',
    fullDescription: 'Secure your visitor visa with ease. We review your travel itinerary, financial standing, and ties to your home country to build a strong case for temporary entry for tourism, business meetings, or family visits.',
    eligibility: ['Intention to return', 'Sufficient funds for trip', 'Travel itinerary', 'Ties to home country'],
    documents: ['Travel Itinerary', 'Bank Statements', 'Employment Letter', 'Invitation Letter (if applicable)'],
    icon: Plane,
  },
  {
    id: 'family-sponsorship',
    title: 'Family Sponsorship',
    shortDescription: 'Reunite with your loved ones through spousal and family visas.',
    fullDescription: 'Family reunification is a sensitive and priority area. We help citizens and permanent residents sponsor their spouses, children, or parents, ensuring all relationship proofs and financial requirements are meticulously documented.',
    eligibility: ['Sponsor status (Citizen/PR)', 'Proven relationship', 'Financial minimum income', 'Medical clearance'],
    documents: ['Marriage/Birth Certificates', 'Sponsor Financial Proofs', 'Relationship Evidence', 'Identity Documents'],
    icon: Users,
  },
  {
    id: 'business-investor',
    title: 'Business & Investor',
    shortDescription: 'Pathways for entrepreneurs and high-net-worth individuals.',
    fullDescription: 'For investors and entrepreneurs looking to establish or purchase a business abroad. We navigate the complex financial audits and business plan requirements typical of these high-value visa categories.',
    eligibility: ['Minimum investment capital', 'Business plan', 'Net worth verification', 'Management experience'],
    documents: ['Source of Funds', 'Business Plan', 'Net Worth Audit', 'Company Registration'],
    icon: Building2,
  },
  {
    id: 'permanent-residency',
    title: 'Permanent Residency',
    shortDescription: 'Long-term settlement strategies for individuals and families.',
    fullDescription: 'Transition from temporary status to permanent residency. We analyze your profile against points-based systems (like Express Entry) or residency-by-investment programs to find your best route to settlement.',
    eligibility: ['Residency obligation met', 'Clean background', 'Economic contribution', 'Language skills'],
    documents: ['Police Certificates', 'Tax Returns', 'Residency Logs', 'Integration Proofs'],
    icon: Globe,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Assessment',
    description: 'We evaluate your profile against current immigration laws to determine feasibility. This prevents wasted time on ineligible applications.'
  },
  {
    number: '02',
    title: 'Strategy & Retainer',
    description: 'Once eligibility is confirmed, we define the legal strategy and formalize our representation through a clear engagement letter.'
  },
  {
    number: '03',
    title: 'Documentation',
    description: 'Our team collects, audits, and enhances your documents. We ensure every piece of evidence meets the strict standards of the visa office.'
  },
  {
    number: '04',
    title: 'Submission & Monitoring',
    description: 'We submit your application to the relevant authority and handle all correspondence on your behalf.'
  }
];

export const COUNTRIES: Country[] = [
  {
    name: 'United Kingdom',
    code: 'gb',
    heroImage: '/images/uk.webp',
    description: 'The UK offers a points-based immigration system designed to attract skilled talent and students. From the prestigious Tier 4 Student route to the Skilled Worker visa, the UK remains a top global destination.',
    visaCategories: [
      { title: 'Skilled Worker Visa', description: 'For individuals with a job offer from a UK-licensed sponsor.' },
      { title: 'Student Visa', description: 'For students aged 16+ who have been offered a place on a course by a licensed student sponsor.' },
      { title: 'Graduate Route', description: 'Allows international students to stay in the UK for at least 2 years after completing a course.' },
      { title: 'Visitor Visa', description: 'For short stays (up to 6 months) for tourism, business, or study.' }
    ],
    documents: ['Valid Passport', 'CAS Letter (for Students)', 'Certificate of Sponsorship (for Workers)', 'Proof of Funds (Bank Statements)', 'TB Test Results (if applicable)'],
    process: ['Complete online application via GOV.UK', 'Pay Immigration Health Surcharge (IHS)', 'Book Biometrics appointment', 'Attend interview (if required)'],
    fees: '£363 - £1,400+ depending on visa type',
    processingTime: '3 - 8 Weeks'
  },
  {
    name: 'Canada',
    code: 'ca',
    heroImage: '/images/canada.webp',
    description: 'Canada is known for its welcoming immigration policies and high quality of life. The Express Entry system and Provincial Nominee Programs (PNP) offer clear pathways to Permanent Residency.',
    visaCategories: [
      { title: 'Express Entry (PR)', description: 'Fast-track system for skilled workers to settle in Canada permanently.' },
      { title: 'Study Permit', description: 'Allows foreign nationals to study at designated learning institutions (DLI).' },
      { title: 'Work Permit', description: 'Employer-specific or Open work permits for temporary employment.' },
      { title: 'Start-up Visa', description: 'For entrepreneurs with the skills and potential to build businesses in Canada.' }
    ],
    documents: ['Passport', 'Letter of Acceptance (Study)', 'LMIA or Job Offer (Work)', 'Language Test Results (IELTS/CELPIP)', 'Police Certificates'],
    process: ['Create IRCC Secure Account', 'Upload required forms & documents', 'Pay biometric & processing fees', 'Submit passport upon approval'],
    fees: 'CAD $150 - $1,365+',
    processingTime: '4 - 12 Weeks (Varies by stream)'
  },
  {
    name: 'United States',
    code: 'us',
    heroImage: '/images/usa.webp',
    description: 'The US immigration system is complex but rewarding. Whether for higher education (F1), specialty occupations (H1-B), or business expansion (L1/E2), proper legal guidance is essential.',
    visaCategories: [
      { title: 'F-1 Student Visa', description: 'For academic students enrolled in colleges, universities, or language programs.' },
      { title: 'B1/B2 Visitor Visa', description: 'For business (B1) or tourism/medical treatment (B2).' },
      { title: 'H-1B Specialty Occupation', description: 'For professionals in specialty occupations requiring a bachelor\'s degree.' },
      { title: 'L-1 Intracompany Transferee', description: 'For transferring employees from a foreign office to a US office.' }
    ],
    documents: ['Form DS-160 Confirmation', 'Form I-20 (Students)', 'Valid Passport', 'SEVIS Fee Receipt', 'Proof of ties to home country'],
    process: ['Complete DS-160 form', 'Pay visa application fee', 'Schedule embassy appointment', 'Attend consular interview'],
    fees: 'USD $185 (Non-petition based)',
    processingTime: 'Varies significantly by Embassy'
  },
  {
    name: 'Australia',
    code: 'au',
    heroImage: '/images/australia.webp',
    description: 'Australia offers a lifestyle-focused migration program. The General Skilled Migration (GSM) program uses a points test to select immigrants who will contribute to the economy.',
    visaCategories: [
      { title: 'Subclass 500 (Student)', description: 'Allows you to stay in Australia to study full-time.' },
      { title: 'Subclass 189/190 (Skilled)', description: 'Points-tested permanent visas for skilled workers.' },
      { title: 'Subclass 600 (Visitor)', description: 'For tourists, business visitors or to visit family.' },
      { title: 'Working Holiday (417/462)', description: 'For young adults to holiday and work in Australia.' }
    ],
    documents: ['Passport', 'Confirmation of Enrolment (CoE)', 'Genuine Temporary Entrant (GTE) statement', 'Overseas Student Health Cover (OSHC)', 'English Test Results'],
    process: ['Gather documents', 'Create ImmiAccount', 'Submit application & pay fee', 'Biometrics & Health Exam'],
    fees: 'AUD $190 - $4,640',
    processingTime: '4 Weeks - 8 Months'
  },
  {
    name: 'Germany',
    code: 'de',
    heroImage: '/images/germany-home.webp',
    description: 'As Europe\'s economic engine, Germany attracts skilled professionals and students. The new Opportunity Card and streamlined Blue Card rules make it easier for qualified talent to enter.',
    visaCategories: [
      { title: 'Student Visa', description: 'For university studies or preparatory measures (Studienkolleg).' },
      { title: 'EU Blue Card', description: 'For highly qualified academics with a job offer in Germany.' },
      { title: 'Job Seeker Visa', description: 'Allows qualified professionals to come to Germany for 6 months to find work.' },
      { title: 'Schengen Visa', description: 'Short-stay visa allowing travel within the Schengen Area.' }
    ],
    documents: ['Passport', 'Biometric Photo', 'Proof of Health Insurance', 'Blocked Account (Finanzierungsnachweis)', 'University Admission / Job Offer'],
    process: ['Prepare application form (Videx)', 'Book appointment at German Mission', 'Submit documents in person', 'Passport collection'],
    fees: '€75 - €110',
    processingTime: '2 - 12 Weeks'
  },
  {
    name: 'New Zealand',
    code: 'nz',
    heroImage: '/images/new-zeland.webp',
    description: 'New Zealand offers a high quality of life and a welcoming environment. The immigration system favors skilled workers, investors, and those looking to study in world-class institutions.',
    visaCategories: [
      { title: 'Skilled Migrant Category', description: 'Points-based visa for people with skills required in New Zealand.' },
      { title: 'Fee Paying Student Visa', description: 'For studying full-time at a New Zealand education provider.' },
      { title: 'Work to Residence', description: 'For those working for an accredited employer in a Tier 1 Green List role.' },
      { title: 'Visitor Visa', description: 'For holidaying or visiting friends and family.' }
    ],
    documents: ['Passport', 'Medical Certificate', 'Police Certificate', 'Offer of Employment (if applicable)', 'Evidence of Funds'],
    process: ['Submit Expression of Interest (EOI)', 'Receive Invitation to Apply', 'Submit Residence Application', 'Assessment and Decision'],
    fees: 'NZD $211 - $4,890+',
    processingTime: '4 Weeks - 9 Months'
  },
  {
    name: 'France',
    code: 'fr',
    heroImage: '/images/france.webp',
    description: 'France remains one of the most popular destinations for students and professionals. The "Passeport Talent" and student visas offer clear routes for non-EU nationals.',
    visaCategories: [
      { title: 'Long Stay Visitor', description: 'For stays over 90 days without engaging in professional activity.' },
      { title: 'Talent Passport', description: 'Multi-year residence permit for highly skilled workers and investors.' },
      { title: 'Student Visa (VLS-TS)', description: 'Serves as a residence permit for students.' },
      { title: 'Schengen Visa', description: 'For short stays up to 90 days.' }
    ],
    documents: ['Passport', 'Proof of accommodation', 'Proof of financial means', 'Medical insurance', 'Campus France authorization (Students)'],
    process: ['Submit application online (France-Visas)', 'Book appointment with VFS Global', 'Biometrics & Interview', 'Passport collection'],
    fees: '€80 - €99',
    processingTime: '2 - 4 Weeks'
  },
  {
    name: 'Italy',
    code: 'it',
    heroImage: '/images/italy.webp',
    description: 'Italy offers various pathways for residency, including the popular Elective Residence Visa for those with passive income, and student visas for its historic universities.',
    visaCategories: [
      { title: 'Elective Residence', description: 'For individuals with high passive income wishing to reside in Italy.' },
      { title: 'Student Visa', description: 'For attending university or language courses.' },
      { title: 'Self-employment Visa', description: 'For freelancers and entrepreneurs (Quota based).' },
      { title: 'Investor Visa', description: 'For those investing significantly in Italian companies or bonds.' }
    ],
    documents: ['Passport', 'Proof of Accommodation', 'Documented Passive Income (Elective)', 'Health Insurance', 'Nulla Osta (if applicable)'],
    process: ['Obtain Nulla Osta (if required)', 'Apply at Italian Consulate', 'Entry into Italy', 'Apply for Permesso di Soggiorno (Residence Permit)'],
    fees: '€116 (Long Stay)',
    processingTime: '1 - 3 Months'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'uk-skilled-worker-updates-2024',
    title: 'UK Skilled Worker Visa: 2024 Salary Threshold Changes',
    excerpt: 'An in-depth analysis of the new salary requirements for skilled workers and how they impact sponsorship eligibility.',
    content: `
      <h2>The New Financial Reality</h2>
      <p>The UK Home Office has recently announced significant changes to the Skilled Worker visa route. Key changes include the raising of the general salary threshold to <strong>£38,700</strong> per year. This move is designed to reduce net migration and encourage businesses to invest in the local workforce.</p>
      
      <h2>Impact on Sponsorship</h2>
      <p>For employers, this means the cost of sponsoring overseas talent has increased. The "going rate" for many occupation codes has also been updated based on the latest ASHE data. It is crucial to check if your job offer meets these new requirements before applying.</p>

      <h2>Exceptions and New Entrants</h2>
      <p>There are still provisions for "New Entrants" to the labor market, such as recent graduates and those under 26, who can be paid 70% of the going rate. Additionally, roles on the new <strong>Immigration Salary List</strong> (which replaces the Shortage Occupation List) may benefit from a lower salary threshold.</p>

      <h2>Actionable Advice</h2>
      <ul>
        <li>Review your current salary package against the new occupation codes.</li>
        <li>Ensure your Certificate of Sponsorship (CoS) accurately reflects your hours and role.</li>
        <li>Consult with an immigration expert if your salary falls in the borderline zone.</li>
      </ul>
    `,
    author: 'Victoria Sterling',
    role: 'Senior UK Consultant',
    date: 'March 15, 2024',
    category: 'United Kingdom',
    imageUrl: '/images/uk2.webp',
    readTime: '6 min read',
    tags: ['UK Immigration', 'Work Visa', 'Policy Update']
  },
  {
    id: 'canada-express-entry-trends',
    title: 'Canada Express Entry: Category-Based Selection Explained',
    excerpt: 'Understanding the shift towards category-based draws for French speakers and STEM professionals.',
    content: `
      <h2>The Shift to Category-Based Selection</h2>
      <p>Canada's Express Entry system has evolved. The IRCC now prioritizes candidates with specific attributes that support Canada's economic goals. This is a departure from the purely points-based (CRS) selection of the past.</p>
      
      <h2>Who is Being Prioritized?</h2>
      <p>The current categories receiving targeted invitations include:</p>
      <ul>
        <li><strong>French-language proficiency:</strong> Consistently lower CRS cut-offs.</li>
        <li><strong>Healthcare occupations:</strong> Nurses, doctors, and support staff.</li>
        <li><strong>STEM professions:</strong> Software developers, data scientists, and engineers.</li>
        <li><strong>Trade occupations:</strong> Carpenters, plumbers, and electricians.</li>
        <li><strong>Transport and Agri-food:</strong> Critical supply chain roles.</li>
      </ul>

      <h2>What This Means for You</h2>
      <p>If you fall into one of these categories, your chances of receiving an Invitation to Apply (ITA) are significantly higher, even with a lower CRS score. It is highly recommended to maximize your language scores and ensure your work experience is correctly categorized under the new NOC 2021 system.</p>
    `,
    author: 'Ahmed Al-Sayed',
    role: 'Regulated Canadian Immigration Consultant',
    date: 'March 10, 2024',
    category: 'Canada',
    imageUrl: '/images/canada.webp',
    readTime: '5 min read',
    tags: ['Express Entry', 'Canada PR', 'STEM']
  },
  {
    id: 'usa-h1b-modernization',
    title: 'US H-1B Visa Modernization Rule: A New Era',
    excerpt: 'The Department of Homeland Security has proposed rules to modernize the H-1B specialty occupation worker program.',
    content: `
      <h2>Beneficiary-Centric Selection</h2>
      <p>The most significant change in the H-1B modernization rule is the shift to a "beneficiary-centric" selection process. Previously, the more registrations submitted for an individual, the higher their chance of selection. Now, each individual is counted once, regardless of how many job offers they have. This levels the playing field and combats fraud.</p>
      
      <h2>Redefining "Specialty Occupation"</h2>
      <p>USCIS is clarifying the criteria for specialty occupations. There must be a direct relationship between the required degree field and the duties of the position. A general degree (like Business Administration) without further specialization may no longer suffice.</p>

      <h2>Expanded Cap-Gap Protections</h2>
      <p>The rule proposes extending "Cap-Gap" protections for F-1 students, ensuring they don't lose work authorization between the end of their student status and the start of their H-1B employment.</p>
    `,
    author: 'Robert H. Miller',
    role: 'US Immigration Attorney',
    date: 'February 28, 2024',
    category: 'United States',
    imageUrl: '/images/usa2.webp',
    readTime: '7 min read',
    tags: ['H-1B', 'US Visa', 'Work Permit']
  },
  {
    id: 'australia-migration-strategy',
    title: 'Australia\'s Migration Strategy: The End of the BIIP?',
    excerpt: 'Australia is overhauling its Business Innovation and Investment Program. Here is what investors need to consider.',
    content: `
      <h2>A Shift Away from Investment Visas</h2>
      <p>The Australian government released its Migration Strategy, signaling a shift away from the "Golden Ticket" investor visas (BIIP). Reviews found these visas contributed less to the economy than skilled migration. Consequently, allocations for this stream have been slashed.</p>
      
      <h2>Focus on Skilled Innovation</h2>
      <p>The future lies in the <strong>Global Talent Visa</strong> and the upcoming "National Innovation Visa". These routes target high-performing entrepreneurs and researchers who can commercialize ideas in Australia, rather than passive investors.</p>

      <h2>The New "Skills in Demand" Visa</h2>
      <p>This new temporary skilled visa will replace the Temporary Skill Shortage (TSS) visa. It features three tiers, including a "Specialist Skills" pathway for high earners, offering a fast 7-day processing time. This is excellent news for top-tier professionals.</p>
    `,
    author: 'Liam Crest',
    role: 'MARA Registered Agent',
    date: 'February 15, 2024',
    category: 'Australia',
    imageUrl: '/images/australia2.webp',
    readTime: '4 min read',
    tags: ['Australia', 'Investment Visa', 'Migration Strategy']
  },
  {
    id: 'germany-opportunity-card',
    title: 'Germany\'s Opportunity Card (Chancenkarte) Launched',
    excerpt: 'A points-based system for job seekers to enter Germany. Check your eligibility based on language and qualifications.',
    content: `
      <h2>Entering Germany Without a Job Offer</h2>
      <p>Germany has officially entered the race for global talent with the <strong>Chancenkarte</strong>. This visa allows non-EU citizens to enter Germany to look for work for up to a year, provided they meet specific criteria.</p>
      
      <h2>The Points System</h2>
      <p>To qualify, you need a recognized degree or vocational training and must score 6 points based on:</p>
      <ul>
        <li>Language skills (German or English).</li>
        <li>Professional experience.</li>
        <li>Age (younger applicants score higher).</li>
        <li>Connection to Germany (previous residence).</li>
      </ul>

      <h2>Work Rights</h2>
      <p>Holders can work part-time (up to 20 hours) while looking for a permanent role. This reduces the financial burden of the job search significantly compared to previous visa types.</p>
    `,
    author: 'Friedrich Müller',
    role: 'EU Mobility Expert',
    date: 'March 01, 2024',
    category: 'Germany',
    imageUrl: '/images/germany.webp',
    readTime: '5 min read',
    tags: ['Germany', 'Job Seeker', 'EU Visa']
  },
  {
    id: 'france-talent-passport',
    title: 'France "Passeport Talent": The Tech Visa Route',
    excerpt: 'How French Tech accreditation allows startups to hire non-EU talent with simplified procedures.',
    content: `
      <h2>The French Tech Visa</h2>
      <p>The "Passeport Talent" is one of the most streamlined options in Europe. Specifically, the <strong>French Tech</strong> stream allows recognized startups to hire non-EU engineers and executives without a labor market test.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>4-Year Validity:</strong> Renewable residence permit.</li>
        <li><strong>Family Inclusion:</strong> Spouse receives full work rights automatically.</li>
        <li><strong>No Sponsorship Fee:</strong> Unlike the UK, costs for employers are minimal.</li>
      </ul>

      <h2>Eligibility</h2>
      <p>You need a Master's degree (or 5 years experience) and a contract with an eligible company paying at least twice the minimum wage. It is a fast-track route designed to make France a global tech hub.</p>
    `,
    author: 'Camille Dubois',
    role: 'French Immigration Specialist',
    date: 'February 20, 2024',
    category: 'France',
    imageUrl: '/images/france.webp',
    readTime: '4 min read',
    tags: ['French Tech', 'Talent Passport', 'Expat']
  },
  {
    id: 'italy-digital-nomad',
    title: 'Italy Approves Digital Nomad Visa: Requirements & Process',
    excerpt: 'Remote workers can now legally reside in Italy. We break down the income and insurance requirements.',
    content: `
      <h2>Living La Dolce Vita</h2>
      <p>After much anticipation, the implementing decree for Italy's Digital Nomad visa has been signed. This allows highly skilled non-EU freelancers and remote employees to live in Italy while working for foreign clients.</p>
      
      <h2>Strict Income Requirements</h2>
      <p>Applicants must prove an annual income of roughly <strong>€28,000</strong>. You must also have comprehensive health insurance valid for Italy and proof of accommodation.</p>

      <h2>Tax Implications</h2>
      <p>Becoming a tax resident in Italy is a serious consideration. However, the "Regime Impatriati" (though recently reformed) may still offer tax breaks for new residents who shift their tax domicile to Italy. Consulting a tax advisor is mandatory before applying.</p>
    `,
    author: 'Marco Bianchi',
    role: 'Legal Consultant - Italy',
    date: 'March 18, 2024',
    category: 'Italy',
    imageUrl: '/images/italy2.webp',
    readTime: '5 min read',
    tags: ['Digital Nomad', 'Italy', 'Remote Work']
  },
  {
    id: 'nz-green-list',
    title: 'New Zealand Green List: Tier 1 vs Tier 2 Roles',
    excerpt: 'Understanding the difference between "Straight to Residence" and "Work to Residence" pathways.',
    content: `
      <h2>The Green List Pathways</h2>
      <p>Immigration New Zealand uses the Green List to fast-track roles in high demand. It is divided into two tiers:</p>
      
      <h2>Tier 1: Straight to Residence</h2>
      <p>Roles like doctors, engineers, and IT specialists can apply for residency <strong>immediately</strong> upon arrival. This provides certainty and security for families moving across the world.</p>

      <h2>Tier 2: Work to Residence</h2>
      <p>Roles like teachers and tradespeople must work in New Zealand for <strong>24 months</strong> before applying for residence. While longer, it is a guaranteed pathway if you stay with an accredited employer.</p>

      <h2>Accredited Employer Work Visa (AEWV)</h2>
      <p>Almost all work visas now require the employer to be accredited. Ensure your potential employer has this status before accepting a job offer.</p>
    `,
    author: 'Aroha Nikau',
    role: 'LIA (Licensed Immigration Adviser)',
    date: 'January 25, 2024',
    category: 'New Zealand',
    imageUrl: '/images/new-zeland.webp',
    readTime: '6 min read',
    tags: ['Green List', 'New Zealand', 'Residency']
  }
];
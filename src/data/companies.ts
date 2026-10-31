// Content for the unlisted company pages rendered by src/components/CompanyPage.tsx.
// No job description was available for these companies, so each page is based on public
// information about the business and says so. The "ask" lines are ideas, not stated needs.
// Style rules: no em dashes, never the phone number, claims only what the resume supports.

export type Level = "strong" | "solid" | "growing";

export type Company = {
  company: string;
  short: string;
  location: string;
  subtitle: string;
  intro: string;
  mailSubject: string;
  planet: { from: string; to: string; ring: string };
  stats: { value: string; label: string }[];
  requirements: { need: string; level: Level; proof: string }[];
  pipeline: { step: string; title: string; ask: string; evidence: string; tags: string[] }[];
  plan: { title: string; body: string }[];
  fit: { title: string; body: string }[];
  why: string[];
};

const opener = "M.Tech Student (AI/ML research) at IIT Hyderabad, graduating in 2027, with 2+ years of research experience in computer vision, vision-language models and LLM systems.";

const years = { value: "2+", label: "years of AI/ML research across three IIT Hyderabad labs" };
const papers = { value: "2", label: "IEEE papers on detection in difficult imaging conditions" };
const r2 = { value: "0.996", label: "cross-validated R² modelling a physical reactor from only 24 experiments" };
const relevance = { value: "+18%", label: "answer relevance from my hybrid retrieval and LLM pipeline" };
const vlms = { value: "3", label: "vision-language models evaluated and fine-tuned" };

const japanese = {
  need: "Studying Japanese",
  level: "solid" as const,
  proof: "Studying Japanese fast as a quick learner; already know English, Hindi and Marathi",
};
const python = { need: "Python, PyTorch, TensorFlow", level: "strong" as const, proof: "Daily tools across every project" };

export const fcc: Company = {
  company: "F.C.C. Co., Ltd.",
  short: "F.C.C.",
  location: "Hamamatsu, Japan",
  subtitle: "Applying Computer Vision, Small-Data Machine Learning, and AI Research to Clutches and Electrified Mobility.",
  intro: `${opener} I have built vision and data pipelines for hard real-world conditions, and modelled a physical process from very few experiments. I would like to apply both to manufacturing and new product development at F.C.C.`,
  mailSubject: "AI / ML engineering at F.C.C.",
  planet: { from: "#ffc48a", to: "#8a3a12", ring: "#c9d4ea" },
  stats: [years, papers, r2, vlms],
  requirements: [
    { need: "Computer vision for detection and inspection", level: "strong", proof: "Detection research, 2 IEEE papers; RGB and depth dataset pipelines" },
    { need: "Modelling physical processes from limited data", level: "strong", proof: "M.Tech thesis: Gaussian Process R² up to 0.996 from 24 experiments" },
    python,
    { need: "Dataset creation, annotation and quality control", level: "strong", proof: "Built sonar, near-infrared, RGB and depth datasets" },
    { need: "Model benchmarking and evaluation", level: "strong", proof: "Precision, recall, IoU and Leave-One-Out cross-validation" },
    { need: "LLM and RAG systems for internal knowledge", level: "strong", proof: "Hybrid retrieval pipeline with LLM intent classification, +18% relevance" },
    { need: "Clutch and manufacturing domain knowledge", level: "growing", proof: "New domain for me; M.Tech in Energy Science and a B.E. in Electrical Engineering to build on" },
    japanese,
  ],
  pipeline: [
    {
      step: "01",
      title: "See defects clearly",
      ask: "Visual inspection of precision clutch and motor-core parts.",
      evidence: "Built sensor-specific preprocessing, annotation and model-training pipelines for robust object detection in noisy, low-contrast sonar and near-infrared imagery (TIHAN, WINET).",
      tags: ["Object detection", "Preprocessing", "YOLO"],
    },
    {
      step: "02",
      title: "Learn from few experiments",
      ask: "Predicting performance when physical tests are slow and costly.",
      evidence: "My thesis compared Linear Regression, Random Forest, XGBoost and Gaussian Process Regression to predict reactor outputs from operating conditions, and identified Bayesian Optimization for experiment-guided tuning.",
      tags: ["Gaussian Processes", "XGBoost", "Bayesian Optimization"],
    },
    {
      step: "03",
      title: "Measure honestly",
      ask: "Knowing whether a model is reliable enough for production.",
      evidence: "Benchmarked models with precision, recall and IoU in Python pipelines, and used Leave-One-Out cross-validation to get honest results from a small dataset.",
      tags: ["Precision / Recall", "IoU", "LOOCV"],
    },
    {
      step: "04",
      title: "Make knowledge searchable",
      ask: "Finding engineering knowledge across documents and teams.",
      evidence: "Built a hybrid semantic and keyword retrieval pipeline with LLM-based intent classification on a multi-tenant platform, with multilingual support.",
      tags: ["RAG", "LLMs", "Multilingual"],
    },
  ],
  plan: [
    { title: "Learn the process first", body: "Spend time on the factory floor and with engineers to find where defects, rework or long test cycles cost the most." },
    { title: "Start with one clear problem", body: "Choose a single inspection or prediction task with a measurable target, instead of a broad AI programme." },
    { title: "Build the dataset properly", body: "Collect and annotate real production images or test data, with quality checks agreed with the people who know the parts." },
    { title: "Compare simple and deep models", body: "Benchmark a simple baseline against deep models, and keep the simplest one that meets the target." },
    { title: "Trial it alongside people", body: "Run the model beside current inspectors or engineers first, and compare results before relying on it." },
    { title: "Share it across sites", body: "Document what worked so that it can be adapted for other plants, with local data for each site." },
  ],
  fit: [
    { title: "Small data, real physics", body: "New clutch and electrified products may have few test results at first. My thesis was about getting reliable predictions from exactly that kind of data." },
    { title: "Vision for precision parts", body: "My detection work deals with difficult images. The same disciplined approach to data and evaluation applies to inspecting precision parts." },
    { title: "A bridge to India", body: "F.C.C. has a major business in India through FCC Clutch India. I am from Maharashtra and speak Marathi, Hindi and English, so I can help teams there and in Japan work together." },
  ],
  why: [
    "F.C.C. is a Hamamatsu company with a long history in clutches, now also working toward electrification. I would like to help apply AI during that change.",
    "I prefer problems where a model's result can be checked against a real physical part or test.",
    "Its strong presence in India means my background could be useful beyond the technical work.",
    "I want to build a long-term career in Japan, and Hamamatsu's links with IIT Hyderabad make it a natural place to start.",
  ],
};

export const gse: Company = {
  company: "GSE Cooperative Association",
  short: "GSE",
  location: "Hamamatsu, Japan",
  subtitle: "Applying AI and Multilingual Systems to Connect Hamamatsu Manufacturing with Global Talent.",
  intro: `${opener} I have built a multilingual conversational AI platform and worked with document-reading models. I also come from India and speak Marathi, Hindi and English, so I would like to help GSE support Hamamatsu's manufacturers and the foreign workers who join them.`,
  mailSubject: "AI and India support at GSE",
  planet: { from: "#9df0c8", to: "#0f5a48", ring: "#ffd28a" },
  stats: [years, relevance, vlms, { value: "4", label: "languages: English, Hindi, Marathi and basic Japanese" }],
  requirements: [
    { need: "Multilingual chat and voice systems", level: "strong", proof: "Multi-tenant platform unifying voice, chat and email with STT / TTS" },
    { need: "Answering questions from reference documents", level: "strong", proof: "Hybrid retrieval and LLM pipeline, +18% answer relevance" },
    { need: "Text-image understanding for documents", level: "strong", proof: "Evaluated and fine-tuned vision-language models" },
    { need: "India knowledge and languages", level: "strong", proof: "From Maharashtra; speak Marathi, Hindi and English" },
    python,
    { need: "Foreign worker programmes and immigration rules", level: "growing", proof: "New area for me; I would rely on GSE's experts for all regulatory decisions" },
    japanese,
  ],
  pipeline: [
    {
      step: "01",
      title: "Answer in many languages",
      ask: "Helping workers and companies get answers in the language they are comfortable with.",
      evidence: "Built a multi-tenant conversational AI platform unifying voice, chat and email, with real-time speech-to-text, text-to-speech and multilingual support.",
      tags: ["STT / TTS", "Multilingual", "LLMs"],
    },
    {
      step: "02",
      title: "Find the right information",
      ask: "Keeping guidance on programmes and procedures easy to find.",
      evidence: "Developed a hybrid retrieval pipeline, combining semantic and keyword search with LLM-based intent classification, that improved answer relevance by 18%.",
      tags: ["RAG", "Hybrid retrieval", "Intent classification"],
    },
    {
      step: "03",
      title: "Read documents",
      ask: "Reducing manual effort in reading and checking paperwork.",
      evidence: "Evaluated and fine-tuned Florence-2, Llama 3.2 Vision and Qwen2-VL for multimodal text-image understanding (LFOVIA Lab).",
      tags: ["VLMs", "Florence-2", "Fine-tuning"],
    },
    {
      step: "04",
      title: "Support member factories",
      ask: "Helping Hamamatsu's manufacturing companies grow sustainably.",
      evidence: "Built computer vision datasets and benchmarking pipelines for object detection, which could be applied to practical inspection problems in manufacturing.",
      tags: ["Computer vision", "Object detection", "Benchmarking"],
    },
  ],
  plan: [
    { title: "Listen first", body: "Learn from GSE's staff, member companies and workers which questions and paperwork take up the most time." },
    { title: "Start with an internal assistant", body: "Build a search assistant over GSE's own approved documents, for staff to use before anything reaches the public." },
    { title: "Add languages carefully", body: "Add translated answers one language at a time, and have fluent speakers check their quality." },
    { title: "Assist with paperwork", body: "Use document-reading models to prepare drafts, with a staff member always checking and approving them." },
    { title: "Keep people in charge", body: "Personal data stays protected, and legal or immigration decisions always stay with qualified staff." },
    { title: "Support the India work", body: "Help with language, local context and connections as GSE continues to study India." },
  ],
  fit: [
    { title: "Technology that speaks to people", body: "GSE's work depends on clear communication across languages. Multilingual conversational AI is something I have already built." },
    { title: "A bridge to India", body: "GSE has held an India field survey report seminar. I am from India, speak Marathi, Hindi and English, and am going through the path to working in Japan myself." },
    { title: "Support for member companies", body: "GSE's aim is sustainable growth in Hamamatsu's manufacturing. My computer vision background could help member companies explore practical AI." },
  ],
  why: [
    "GSE works directly on connecting people from other countries with Japanese companies, and I am about to make that journey myself.",
    "I would like to use AI in a way that makes life easier for workers and the staff who support them.",
    "GSE's interest in India is a place where my background can add something immediately.",
    "I want to build a long-term career in Japan and contribute to Hamamatsu's manufacturing community.",
  ],
};

export const hwSymphony: Company = {
  company: "Hamamatsu Water Symphony K.K.",
  short: "Hamamatsu Water Symphony",
  location: "Hamamatsu, Japan",
  subtitle: "Applying Machine Learning, Computer Vision, and Energy Science to Sustainable Water Infrastructure.",
  intro: `${opener} My M.Tech is in Energy Science and Technology, where I modelled a physical reactor from its operating conditions, and my research includes sonar-based underwater detection. I would like to apply this to the efficient, reliable operation of Hamamatsu's sewage treatment infrastructure.`,
  mailSubject: "AI / ML engineering at Hamamatsu Water Symphony",
  planet: { from: "#9fdcff", to: "#0a4a7a", ring: "#9df0c8" },
  stats: [years, r2, { value: "2", label: "IEEE papers, including sonar-based underwater object detection" }, relevance],
  requirements: [
    { need: "Modelling a process from operating data", level: "strong", proof: "M.Tech thesis: predicted six reactor outputs from operating conditions" },
    { need: "Working with limited, costly experimental data", level: "strong", proof: "24 experiments, Leave-One-Out cross-validation, R² up to 0.996" },
    { need: "Underwater and low-visibility sensing", level: "strong", proof: "Sonar and near-infrared detection research, 2 IEEE papers" },
    { need: "Computer vision for monitoring", level: "strong", proof: "Detection, segmentation and tracking evaluation; dataset pipelines" },
    { need: "Searching manuals and reports with AI", level: "strong", proof: "Hybrid retrieval and LLM pipeline, +18% answer relevance" },
    python,
    { need: "Sewage treatment operations", level: "growing", proof: "New domain for me; Energy Science background and keen to learn from your operators" },
    japanese,
  ],
  pipeline: [
    {
      step: "01",
      title: "Model the process",
      ask: "Understanding how operating choices affect treatment and costs.",
      evidence: "My thesis predicts a plasma reactor's performance from its operating conditions, comparing Random Forest, XGBoost and Gaussian Process Regression, with feature-importance analysis to explain the results.",
      tags: ["Gaussian Processes", "XGBoost", "Feature importance"],
    },
    {
      step: "02",
      title: "Optimise with few trials",
      ask: "Improving operation when experiments on a live plant must be limited.",
      evidence: "Identified Bayesian Optimization as a way to guide experiments, and studied the limits of a model when extrapolating beyond its data, which matters for a plant that must keep running safely.",
      tags: ["Bayesian Optimization", "LOOCV", "Model limits"],
    },
    {
      step: "03",
      title: "See where cameras struggle",
      ask: "Inspecting tanks, pipes and equipment that are hard to see.",
      evidence: "Built sonar and near-infrared datasets and detection pipelines for murky, low-visibility underwater and surface environments, published in two IEEE papers (TIHAN, WINET).",
      tags: ["Sonar", "Near-infrared", "Object detection"],
    },
    {
      step: "04",
      title: "Keep knowledge accessible",
      ask: "Finding information across manuals, plans and operations reports.",
      evidence: "Built a hybrid semantic and keyword retrieval pipeline with LLM-based intent classification, which improved answer relevance by 18%.",
      tags: ["RAG", "LLMs", "Hybrid retrieval"],
    },
  ],
  plan: [
    { title: "Learn the plant", body: "Start with your operators and engineers at the plant, and understand which decisions affect cost, quality and safety most." },
    { title: "Review the data", body: "Check what sensor, maintenance and reporting data already exists, and how reliable it is." },
    { title: "Forecast before optimising", body: "Build a simple forecast for one measure, such as energy use, and check it against history before anything changes on the plant." },
    { title: "Recommend, don't control", body: "Give operators recommendations with clear reasons and confidence levels. People stay in charge of the plant." },
    { title: "Add inspection where useful", body: "Test computer vision or sonar on equipment that is costly or difficult to inspect, and compare the results with current methods." },
    { title: "Report clearly", body: "Measure results in terms the business and the city care about: quality, cost and reliability." },
  ],
  fit: [
    { title: "Energy science meets water", body: "My M.Tech is in Energy Science and Technology, so process efficiency is familiar ground, and I can connect it with machine learning." },
    { title: "Operational excellence with data", body: "You aim to lower renovation and maintenance costs while keeping service quality high. Careful, well-evaluated models can support that goal over a long concession." },
    { title: "Beyond the plant", body: "Your eel farming pilot shows interest in new uses for your site. Computer vision and small-data modelling could help track and learn from pilots like this." },
  ],
  why: [
    "Japan's first sewerage concession is a rare chance to see how public infrastructure can be run sustainably over the long term.",
    "Clean water affects everyone. I would like my work to have that kind of direct public value.",
    "Your focus on working closely with Hamamatsu's community matters to me, as I hope to make the city my home.",
    "I want to build a long-term career in Japan, and I would be glad to learn from experienced operators here.",
  ],
};

export const yamatoIndustrial: Company = {
  company: "Yamato Industrial Co., Ltd.",
  short: "Yamato Industrial",
  location: "Hamamatsu, Japan",
  subtitle: "Applying Computer Vision and Machine Learning to Automotive Parts and Manufacturing Know-How.",
  intro: `${opener} I have built vision and data pipelines for difficult real-world conditions, and modelled a physical process from very few experiments. I would like to apply this to Yamato Industrial's automotive parts manufacturing and its growth plans.`,
  mailSubject: "AI / ML engineering at Yamato Industrial",
  planet: { from: "#ffe08a", to: "#8a5a10", ring: "#8fc5ff" },
  stats: [years, r2, papers, vlms],
  requirements: [
    { need: "Computer vision for detection and inspection", level: "strong", proof: "Detection research, 2 IEEE papers; RGB and depth dataset pipelines" },
    { need: "Modelling physical processes from limited data", level: "strong", proof: "M.Tech thesis: Gaussian Process R² up to 0.996 from 24 experiments" },
    { need: "Dataset creation, annotation and quality control", level: "strong", proof: "Built sonar, near-infrared, RGB and depth datasets" },
    { need: "Model benchmarking and evaluation", level: "strong", proof: "Precision, recall, IoU and Leave-One-Out cross-validation" },
    python,
    { need: "Keeping factory know-how searchable", level: "strong", proof: "Hybrid retrieval and LLM pipeline, +18% answer relevance" },
    { need: "Pipe bending, cables and moulding knowledge", level: "growing", proof: "New domain for me; B.E. Electrical Engineering and keen to learn on the factory floor" },
    japanese,
  ],
  pipeline: [
    {
      step: "01",
      title: "Inspect small details",
      ask: "Checking bent pipes, cables and moulded parts consistently.",
      evidence: "Built preprocessing, annotation and training pipelines for robust object detection on noisy sonar and near-infrared images, and curated RGB and depth datasets with quality validation.",
      tags: ["Object detection", "RGB-D", "Data quality"],
    },
    {
      step: "02",
      title: "Learn from few trials",
      ask: "Finding good process settings without many costly trials, for example when forming thinner pipe walls.",
      evidence: "My thesis predicts a reactor's performance from operating conditions using only 24 experiments, and identifies Bayesian Optimization for experiment-guided tuning.",
      tags: ["Gaussian Processes", "Bayesian Optimization", "XGBoost"],
    },
    {
      step: "03",
      title: "Evaluate honestly",
      ask: "Knowing when a model can be trusted on the production line.",
      evidence: "Benchmarked models with precision, recall and IoU, and studied the limits of a model when extrapolating beyond its training data.",
      tags: ["Precision / Recall", "IoU", "LOOCV"],
    },
    {
      step: "04",
      title: "Capture know-how",
      ask: "Keeping skilled workers' experience available as the company grows.",
      evidence: "Built a hybrid retrieval and LLM pipeline on a multi-tenant, multilingual platform, which could help staff find past knowledge in the language they use.",
      tags: ["RAG", "LLMs", "Multilingual"],
    },
  ],
  plan: [
    { title: "Learn on the floor", body: "Understand how pipes, cables and moulded parts are made, and where defects or rework cost the most." },
    { title: "Pick one measurable task", body: "Start with a single inspection or process question, with a target agreed with the production team." },
    { title: "Collect real data", body: "Capture images and process settings from the actual line, with experienced workers labelling what counts as good or bad." },
    { title: "Start simple", body: "Compare a simple method with deep learning, and keep the simplest one that meets the target." },
    { title: "Run alongside inspectors", body: "Test the system in parallel with current checks before it influences any production decision." },
    { title: "Share across factories", body: "Document the method so that it can be adapted for other factories, using local data for each." },
  ],
  fit: [
    { title: "Precision meets data", body: "Your ultra-tight bending of thin-walled pipe shows how much depends on process skill. Small-data modelling can help record and extend that skill." },
    { title: "Support for your growth", body: "Your declared aim to become a 10 billion yen company will need processes that scale. Careful automation of inspection and knowledge can help." },
    { title: "Curious beyond cars", body: "You also work in areas such as illumination and new products. I enjoy learning new domains, as my move from marine perception to reactor modelling shows." },
  ],
  why: [
    "Yamato Industrial makes real, precise parts, and I would like to see my models tested against physical results.",
    "A growing Hamamatsu manufacturer offers the chance to have a visible impact early in my career.",
    "Your range of work, from automotive parts to new products, suits my curiosity and willingness to learn.",
    "I want to build a long-term career in Japan, and I would be glad to start in Hamamatsu.",
  ],
};

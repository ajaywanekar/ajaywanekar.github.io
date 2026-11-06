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
  /** Optional: a resume tailored to this company (defaults to the general one). */
  resume?: string;
  /** Optional: show the "Learning Japan" photos (default true; off for non-Japanese companies). */
  japan?: boolean;
  /** Optional: a proof-of-work section shown first. */
  proof?: {
    title: string;
    intro: string;
    stats: { value: string; label: string }[];
    points: string[];
    href?: string;
    linkLabel?: string;
  };
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

// pi-labs (Pune): deepfake detection, media forensics and investigation AI. No open role was posted,
// so this page maps Ajay's work to their products as described on pi-labs.ai.
export const piLabs: Company = {
  company: "pi-labs",
  short: "pi-labs",
  location: "Pune, India",
  subtitle: "Applying Computer Vision, Multimodal AI, and Rigorous Evaluation to Deepfake Detection and Forensic Intelligence.",
  intro: `${opener} My work covers face analysis, detection and tracking in video, vision-language models and LLM retrieval, and I care about one question above all: does the model still work on data it has never seen? In deepfake detection every new generator is new data. I am from Maharashtra and would like to help build sovereign AI for India's investigators.`,
  mailSubject: "AI Engineer at pi-labs",
  planet: { from: "#8fd3ff", to: "#1b2f8a", ring: "#c9d4ea" },
  resume: "/ajay-wanekar-resume-pi-labs.pdf",
  japan: false,
  stats: [
    years,
    papers,
    vlms,
    relevance,
  ],
  proof: {
    title: "Vision-Language Models vs Specialist Face Models",
    intro:
      "At LFOVIA Lab, IIT Hyderabad, I fine-tuned and evaluated general vision-language models against task-specific models across face and scene tasks: the same question pi-labs faces when choosing between a large general model and a specialist detector for faces, video and evidence.",
    stats: [
      { value: "3", label: "VLMs fine-tuned and evaluated" },
      { value: "3", label: "specialist baselines: RetinaFace, DeepFace, Siamese" },
      { value: "5+", label: "vision tasks benchmarked" },
    ],
    points: [
      "Fine-tuned and evaluated Florence-2 (Base and Large), Llama 3.2 Vision and Qwen2-VL with PyTorch and Hugging Face on object detection, segmentation, crowd analysis, action recognition and text recognition.",
      "Benchmarked them against RetinaFace (face detection), DeepFace (face analysis) and Siamese networks (visual tracking and re-identification), measuring precision, recall and IoU in Python pipelines.",
      "For pi-labs this maps to face search and tracking in pi-sense, face pipelines behind deepfake detection in pi-authentify, and knowing when a general VLM is good enough and when a specialist model is needed.",
    ],
  },
  requirements: [
    { need: "Deep learning for image and video analysis", level: "strong", proof: "VLM fine-tuning; YOLO + DeepSORT detection and tracking; 2 IEEE papers" },
    { need: "Face analysis, verification and re-identification", level: "strong", proof: "Benchmarked RetinaFace, DeepFace and Siamese re-identification models (LFOVIA Lab)" },
    { need: "Robustness to hard, noisy inputs", level: "strong", proof: "Sensor-specific near-infrared and sonar pipelines (2 IEEE papers); RRSI noise-aware evaluation" },
    { need: "Python, PyTorch, Hugging Face, CUDA", level: "strong", proof: "Daily tools; GPU training and evaluation pipelines on Linux" },
    { need: "LLMs, RAG and natural-language search", level: "strong", proof: "Hybrid semantic + keyword retrieval with LLM intent classification, +18% relevance" },
    { need: "Evaluation rigour (AUC, EER, precision / recall)", level: "strong", proof: "Precision, recall, IoU, LOOCV; RRSI to check gains exceed experimental noise" },
    { need: "Speech and voice models", level: "solid", proof: "Trained and tested various voice models (speech-to-text, text-to-speech) for a conversational AI platform (IIT Hyderabad Build Program)" },
    { need: "Indian languages", level: "solid", proof: "Marathi, Hindi and English; multilingual voice, chat and email AI platform" },
    { need: "Face and audio models for deepfake detection", level: "strong", proof: "Face analysis with RetinaFace, DeepFace and Siamese networks; VLM fine-tuning; voice models trained and tested for a conversational AI platform" },
  ],
  pipeline: [
    {
      step: "01",
      title: "Expose the fake",
      ask: "pi-authentify: deepfake detection for video, images and VideoKYC calls.",
      evidence:
        "Fine-tuned and evaluated Florence-2, Llama 3.2 Vision and Qwen2-VL for multimodal understanding, and benchmarked them against RetinaFace, DeepFace and Siamese networks for face analysis and re-identification (LFOVIA Lab).",
      tags: ["Face analysis", "VLMs", "Hugging Face"],
    },
    {
      step: "02",
      title: "Hours of footage in minutes",
      ask: "pi-sense: face, object and activity detection, plate OCR and face search in CCTV and bodycam video.",
      evidence:
        "Built real-time detection, multi-object tracking and position estimation of vehicles and pedestrians with YOLO and DeepSORT, tested in CARLA simulation (TIHAN), and evaluated VLMs for text recognition and crowd analysis.",
      tags: ["YOLO", "DeepSORT", "OCR"],
    },
    {
      step: "03",
      title: "Hear and ask the evidence",
      ask: "pi-vox and pi-phonix speech, and pi-scout's Scout-GPT: transcripts, voices and natural-language search over case data.",
      evidence:
        "In the IIT Hyderabad Build Program I built a multi-tenant conversational AI platform across voice, chat and email. For the voice channel I trained and tested various voice models (speech-to-text and text-to-speech), and a hybrid semantic + keyword retrieval pipeline with LLM intent classification improved answer relevance by 18%.",
      tags: ["Voice models", "STT / TTS", "RAG"],
    },
    {
      step: "04",
      title: "Hard sensors, clean data",
      ask: "Forensic-grade data pipelines for noisy, low-quality inputs.",
      evidence:
        "Curated near-infrared and sonar datasets with sensor-specific preprocessing, annotation and data-quality checks for robust detection in difficult conditions, published as two IEEE papers (TIHAN, WINET).",
      tags: ["Data quality", "Annotation", "IEEE"],
    },
  ],
  plan: [
    {
      title: "Start from the casework",
      body: "Learn what investigators actually receive (compressed WhatsApp video, CCTV, phone calls, VideoKYC) and which mistakes cost most in court, before touching a model.",
    },
    {
      title: "Test on the next generator",
      body: "Hold out whole generators, datasets and devices when testing, so scores reflect deepfakes the model has never seen, not memorised artefacts.",
    },
    {
      title: "Combine independent signals",
      body: "Face and texture cues, frequency artefacts, audio-visual sync and metadata, fused into calibrated scores with explanations an analyst can put in a report.",
    },
    {
      title: "Calibrate for each deployment",
      body: "Recalibrate thresholds for each new camera source, channel or language using local data, then confirm with a small labelled check before go-live.",
    },
    {
      title: "Prove gains are real",
      body: "Repeat runs and noise-aware comparisons (the RRSI idea I use in my thesis) before claiming an improvement on a benchmark.",
    },
    {
      title: "Close the loop with analysts",
      body: "Low-confidence cases go to forensic analysts; their decisions become training and test data for the next release.",
    },
  ],
  fit: [
    {
      title: "IIT Hyderabad rigour",
      body: "Three IIT Hyderabad research labs, two IEEE papers, and a habit of testing on truly new data. Your research team publishes; I want to keep publishing too.",
    },
    {
      title: "Made for Indian data",
      body: "I speak Marathi, Hindi and English and have trained and tested voice models for a multilingual conversational AI platform, useful for pi-vox's Indian-language work and for testing on Indian faces and accents.",
    },
    {
      title: "Close to Pune",
      body: "From Chhatrapati Sambhajinagar, Maharashtra. Ready to work on-site in Aundh with your team, and with Maharashtra agencies such as MARVEL.",
    },
  ],
  why: [
    "Deepfakes are already hurting real people in India, in fraud, KYC and disinformation. Building tools that investigators can rely on in court is work that matters.",
    "Sovereign, on-premise AI for security agencies is a hard engineering problem: models must be accurate, explainable and run inside the country's own infrastructure.",
    "pi-labs combines products with research: patents, and papers at ICDF2C and IEEE venues. I want to grow as an engineer who ships and publishes.",
    "A team of about 40 means an AI engineer owns problems end to end, from data to deployment, and that is how I like to work.",
  ],
};

// Digital Dolphins: the document and drawing management SaaS from the IT division of
// 枚岡合金工具 (Hiraoka Hyper Tools, Osaka). Role: AI for manufacturing (OCR, CV, semantic search).
export const digitalDolphins: Company = {
  company: "Digital Dolphins (Hiraoka Hyper Tools)",
  short: "Digital Dolphins",
  location: "Osaka, Japan",
  subtitle: "Applying OCR, Computer Vision, and Semantic Search to Turn Factory Documents and Drawings into Searchable Knowledge.",
  intro: `${opener} Digital Dolphins already lets manufacturers find a document in 10 seconds. I would like to help build the next layer: AI that reads scanned forms and CAD drawings, extracts the right fields into structured data, and answers questions about them in plain language.`,
  mailSubject: "AI Engineer, Digital Dolphins",
  planet: { from: "#7fe0f0", to: "#0b4f7a", ring: "#c9d4ea" },
  resume: "/ajay-wanekar-resume-dd.pdf",
  stats: [
    { value: "3", label: "vision-language models fine-tuned and evaluated, including text recognition" },
    relevance,
    years,
    papers,
  ],
  proof: {
    title: "OCR and Semantic Search, Already Built in Parts",
    intro:
      "Your first projects are OCR on documents and drawings, and AI search over them. I have built both halves separately: reading text from images with vision-language models, and searching noisy text with a hybrid semantic and keyword pipeline. Joining them is the Digital Dolphins problem.",
    stats: [
      { value: "3", label: "VLMs evaluated for text recognition" },
      { value: "+18%", label: "relevance from hybrid semantic + keyword search" },
      { value: "5+", label: "vision tasks benchmarked" },
    ],
    points: [
      "Reading (LFOVIA Lab, IIT Hyderabad): fine-tuned and evaluated Florence-2, Qwen2-VL and Llama 3.2 Vision for text recognition, object detection and segmentation, benchmarked against task-specific models with precision, recall and IoU.",
      "Searching (IIT Hyderabad Build Program): built a multi-tenant generative-AI platform with a hybrid retrieval pipeline (semantic + keyword) and LLM-based intent classification that improved answer relevance by 18%.",
      "Together: OCR extracts part numbers, materials and dates from a drawing or form, the fields are stored as structured data, and search finds a past drawing by its number, its text or a question in plain Japanese or English.",
    ],
  },
  requirements: [
    { need: "Python programming", level: "strong", proof: "Daily tool across every project; PyTorch, OpenCV, Pandas, SQL" },
    { need: "Machine learning and data preparation", level: "strong", proof: "Built and cleaned sonar, near-infrared, RGB and depth datasets; ML thesis with LR, RF, XGBoost, GPR" },
    { need: "OCR and document text extraction", level: "strong", proof: "Fine-tuned and evaluated VLMs for text recognition (LFOVIA Lab)" },
    { need: "Computer vision for drawings and images", level: "strong", proof: "Detection and segmentation research; 2 IEEE papers on detection in difficult images" },
    { need: "Semantic search", level: "strong", proof: "Hybrid semantic + keyword retrieval with LLM intent classification, +18% relevance" },
    { need: "Software development for a SaaS product", level: "solid", proof: "Built a multi-tenant generative-AI platform (voice, chat, email); Linux, SQL" },
    { need: "Analytical and problem-solving skills", level: "strong", proof: "Leave-One-Out cross-validation, RRSI checks that gains exceed noise; Top 10 All India, Meta x Pragati AI Hackathon" },
    { need: "Willingness to learn precision mold manufacturing", level: "strong", proof: "Moved from marine perception to reactor modelling; eager to learn molds on the shop floor in Osaka" },
    japanese,
  ],
  pipeline: [
    {
      step: "01",
      title: "Read every document",
      ask: "OCR that captures scanned forms, records and drawings into Digital Dolphins without manual entry.",
      evidence:
        "Evaluated and fine-tuned vision-language models for text recognition and multimodal text-image understanding, with preprocessing and quality-validation pipelines that make hard images readable (LFOVIA, TIHAN, WINET).",
      tags: ["OCR", "VLMs", "Preprocessing"],
    },
    {
      step: "02",
      title: "Find a drawing by what it shows",
      ask: "AI search for CAD drawings using computer vision and OCR: title blocks, part numbers, tables and shapes.",
      evidence:
        "Built detection and segmentation pipelines and benchmarked general vision-language models against task-specific models, the same choice as between a VLM and a dedicated drawing parser.",
      tags: ["Computer vision", "Detection", "Benchmarking"],
    },
    {
      step: "03",
      title: "Ask in plain language",
      ask: "Semantic search so staff can find documents with a question, not an exact file name.",
      evidence:
        "Built a hybrid semantic + keyword retrieval pipeline with LLM-based intent classification on a multi-tenant platform, improving answer relevance by 18%.",
      tags: ["Semantic search", "RAG", "LLMs"],
    },
    {
      step: "04",
      title: "Structure expert knowledge",
      ask: "Turning factory data and experienced workers' knowledge into structured, searchable records.",
      evidence:
        "Curated and annotated datasets with standardised preprocessing, labelling and quality checks, and modelled a physical process from only 24 experiments in my M.Tech thesis.",
      tags: ["Data structuring", "Annotation", "Small data"],
    },
  ],
  plan: [
    {
      title: "Learn the shop floor first",
      body: "Spend time with mold engineers and Digital Dolphins customers to see which documents and drawings people search for, and why it takes time today.",
    },
    {
      title: "Pick one search task",
      body: "Start with a clear target, such as finding a past drawing by part number, material or customer in under 10 seconds, and measure it.",
    },
    {
      title: "OCR the parts that matter",
      body: "Detect title blocks and tables first, then read them with OCR tuned for Japanese and English, full-width and half-width characters, and store the fields.",
    },
    {
      title: "Search in layers",
      body: "Exact match, then keyword, then semantic and image similarity, with each result showing why it matched, so users trust it.",
    },
    {
      title: "Keep the SaaS simple",
      body: "Separate each customer's data, keep processing costs predictable, and ship small improvements that work inside the existing Digital Dolphins workflow.",
    },
    {
      title: "Then predict and inspect",
      body: "Use machine data from 現場の妖精 for predictive maintenance, then defect detection and AI agents once the document and search base is solid.",
    },
  ],
  fit: [
    {
      title: "Information, not paper",
      body: "Your founding idea, that what matters is the information on a drawing rather than the paper, is the core of my work: turning messy images and text into usable information.",
    },
    {
      title: "Ready for a team of four",
      body: "I have built a multi-tenant AI platform end to end and am used to owning a problem from data to working system, which a small product team needs.",
    },
    {
      title: "A bridge to Indian talent",
      body: "An IIT Hyderabad engineer who speaks English, Hindi and Marathi and is learning Japanese, ready to work in Osaka and help as you hire more engineers from India.",
    },
  ],
  why: [
    "Digital Dolphins was born on a real shop floor and is used by manufacturers every day. Adding AI to a product with real users is the work I want to do.",
    "Your spirit that everyone builds their own tools, from HyperCard in 1988 to Digital Dolphins today, is how I like to work.",
    "OCR, computer vision and semantic search are exactly where my research sits, and manufacturing gives them a clear, measurable purpose.",
    "I want to build a long-term career in Japan, and a small team in Osaka is a place where I can learn fast and have a visible impact.",
  ],
};

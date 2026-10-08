// All site content lives here. Edit this file to update the website —
// the components only render what is defined below.

export type AreaId = "cv" | "vlm" | "llm" | "autonomy" | "science";

export const site = {
  name: "Ajay Wanekar",
  firstName: "Ajay",
  fullName: "Ajay Devidas Wanekar",
  description:
    "Ajay Wanekar — AI/ML engineer and M.Tech student at IIT Hyderabad working on computer vision, vision-language models, LLMs and agentic AI.",
  badge: "AI / ML Engineer · IIT Hyderabad",
  since: "/Building since 2023",
  location: "Hyderabad, India",
  email: "gs25mtech14301@iith.ac.in",
  resume: "/ajay-wanekar-resume.pdf",
  photo: "/ajay-wanekar.jpg",
  // TODO: add your profile URLs — empty links are hidden on the site.
  github: "",
  linkedin: "https://www.linkedin.com/in/ajaywanekar/",
};

export const hello = {
  short: "I'm Ajay, an AI/ML engineer and M.Tech student at IIT Hyderabad.",
  paragraphs: [
    "I build perception and multimodal AI — from sonar and near-infrared object detection for autonomous vessels, to vision-language models, to LLM systems that retrieve, reason and respond.",
    "Over 2+ years across three IIT Hyderabad labs, I've built datasets from scratch, fine-tuned VLMs and published my research at IEEE.",
  ],
  facts: [
    { label: "Now", value: "M.Tech, Energy Science & Technology — IIT Hyderabad (2027)" },
    { label: "Before", value: "B.E. Electrical Engineering — SPPU (2022)" },
    { label: "Labs", value: "LFOVIA · TIHAN · WINET" },
    { label: "Based in", value: "Hyderabad, India" },
  ],
};

export const statement =
  "From raw sensor signals to systems that see, understand and act — built on careful data, rigorous evaluation, and models that hold up in the real world.";

export const areas: { id: AreaId; label: string; color: string; tags: string[] }[] = [
  { id: "cv", label: "Computer Vision", color: "#5ab0ff", tags: ["Detection", "Tracking", "Re-identification"] },
  { id: "vlm", label: "Vision-Language Models", color: "#8b7cff", tags: ["Florence-2", "Qwen2-VL", "Llama 3.2 Vision"] },
  { id: "llm", label: "LLMs & RAG", color: "#d07cff", tags: ["Hybrid retrieval", "Intent classification", "STT / TTS"] },
  { id: "autonomy", label: "Autonomous Systems", color: "#ffb547", tags: ["Sonar", "Near-infrared", "AUVs & ASVs"] },
  { id: "science", label: "ML for Science", color: "#4fd1a5", tags: ["Gaussian Processes", "XGBoost", "LOOCV"] },
];

export type Experience = {
  id: string;
  role: string;
  org: string;
  period: string;
  summary: string;
  tags: string[];
  areas: AreaId[];
};

export const experience: Experience[] = [
  {
    id: "exp-lfovia",
    role: "Project Associate",
    org: "LFOVIA Lab, IIT Hyderabad",
    period: "Sep 2024 – Jul 2025",
    summary:
      "Evaluated and fine-tuned vision-language models — Florence-2 Base/Large, Llama 3.2 Vision and Qwen2-VL — for multimodal text-image understanding, and benchmarked task-specific models including RetinaFace, DeepFace and Siamese architectures for targeted detection, face analysis and visual tracking / re-identification.",
    tags: ["VLMs", "Fine-tuning", "Face analysis", "Re-identification"],
    areas: ["vlm", "cv"],
  },
  {
    id: "exp-tihan",
    role: "Junior Research Assistant",
    org: "TIHAN, IIT Hyderabad",
    period: "Nov 2023 – Jul 2024",
    summary:
      "Worked on multimodal maritime perception: developed and curated near-infrared and sonar datasets, and built sensor-specific preprocessing, annotation, data-quality and model-training pipelines for robust object detection in complex maritime environments — resulting in an IEEE conference publication.",
    tags: ["Maritime perception", "Near-infrared", "Sonar", "Object detection"],
    areas: ["cv", "autonomy"],
  },
  {
    id: "exp-winet",
    role: "Research Intern",
    org: "WINET Lab, IIT Hyderabad",
    period: "Jul 2023 – Nov 2023",
    summary:
      "Built foundational sonar-based underwater object-detection datasets with annotation, Python preprocessing, data augmentation and markup pipelines to improve data quality and model robustness — published at IEEE i-COSTE 2023.",
    tags: ["Sonar", "Dataset curation", "Data augmentation"],
    areas: ["cv", "autonomy"],
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  context?: string;
  metric: { value: string; label: string };
  problem: string;
  approach: string[];
  result: string;
  tech: string[];
  areas: AreaId[];
  // Look of the planet drawn on the project's cover.
  planet: { from: string; to: string; ring?: string };
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "conversational-ai",
    title: "Multi-Channel Conversational AI Platform",
    subtitle: "LLMs · Hybrid RAG · Voice",
    metric: { value: "+18%", label: "answer relevance" },
    problem:
      "Customer-care conversations are split across voice, chat and email, and each channel needs fast, accurate, multilingual answers grounded in customer data.",
    approach: [
      "Multi-tenant platform unifying voice, chat and email",
      "Real-time speech-to-text / text-to-speech with multilingual support",
      "Hybrid RAG (semantic + keyword retrieval) with LLM-based intent classification",
    ],
    result:
      "Low-latency customer-care interactions across channels, with an 18% improvement in answer relevance on customer data.",
    tech: ["LLMs", "Hybrid RAG", "STT / TTS", "Intent classification", "Python"],
    areas: ["llm"],
    planet: { from: "#e3a8ff", to: "#5b2a9e", ring: "#d07cff" },
  },
  {
    id: "vlm-evaluation",
    title: "Vision-Language Models vs Task-Specific Detectors",
    subtitle: "VLMs · Computer Vision · Benchmarking",
    metric: { value: "5", label: "vision tasks benchmarked" },
    problem:
      "Can general-purpose vision-language models replace the separate, task-specific detectors usually built for each computer vision problem?",
    approach: [
      "Evaluated VLMs on object detection, segmentation, age & gender classification, crowd analysis and action recognition",
      "Curated and annotated RGB and depth datasets with structured preprocessing, labeling and quality validation",
      "Benchmarked and fine-tuned models in Python pipelines using precision / recall and IoU",
    ],
    result:
      "A standardized evaluation pipeline comparing VLMs with conventional detectors, with more consistent training data and more scalable, efficient data processing.",
    tech: ["Florence-2", "Qwen2-VL", "Llama 3.2 Vision", "PyTorch", "RGB-D"],
    areas: ["vlm", "cv"],
    planet: { from: "#b9c6ff", to: "#2b2f9e" },
  },
  {
    id: "maritime-perception",
    title: "Maritime Perception with Sonar & Near-Infrared",
    subtitle: "Autonomous vessels · Object detection",
    context: "WINET Lab & TIHAN, IIT Hyderabad · 2023–24",
    metric: { value: "2", label: "IEEE papers" },
    problem:
      "Autonomous underwater and surface vehicles must detect objects where cameras struggle — murky water, low light and glare — and labeled sonar and near-infrared data is scarce.",
    approach: [
      "Built sonar and near-infrared datasets from the ground up",
      "Sensor-specific preprocessing, annotation and augmentation pipelines",
      "Trained and evaluated object-detection models for complex maritime scenes",
    ],
    result:
      "Two papers at IEEE i-COSTE 2023 — on sonar-based detection for AUVs and near-infrared detection for ASVs.",
    tech: ["Sonar", "Near-infrared", "Object detection", "Python", "Data augmentation"],
    areas: ["cv", "autonomy"],
    planet: { from: "#8fd3ff", to: "#0b3d7a", ring: "#5ab0ff" },
  },
  {
    id: "reactor-ml-thesis",
    title: "Hybrid ML for a Methane-Coupling Plasma Reactor",
    subtitle: "M.Tech thesis · ML for Science",
    context: "M.Tech thesis · IIT Hyderabad",
    metric: { value: "0.996", label: "cross-validated R²" },
    problem:
      "Predicting the performance of a non-oxidative methane coupling DBD reactor normally takes costly experimental trials — and only 24 experiments were available.",
    approach: [
      "Benchmarked Linear Regression, Random Forest, XGBoost and Gaussian Process Regression",
      "One-hot feature engineering and leave-one-out cross-validation for small-data generalization",
      "Feature-importance analysis and a study of extrapolation and confounding limits",
    ],
    result:
      "Gaussian Process Regression reached cross-validated R² up to 0.996 across six outputs (CH₄ conversion, H₂ and C₂–C₄ selectivities), pointing to Bayesian Optimization for experiment-guided tuning.",
    tech: ["Gaussian Processes", "XGBoost", "Random Forest", "scikit-learn", "LOOCV"],
    areas: ["science"],
    planet: { from: "#ffd59a", to: "#a1461f" },
  },
];

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  areas: AreaId[];
  url?: string;
};

export const publications: Publication[] = [
  {
    id: "pub-sonar-auv",
    title:
      "Novel Approach to Underwater Object Detection Using Sonar Sensors for Autonomous Underwater Vehicles (AUVs)",
    authors: ["Wanekar A. D.", "Mannam N. P. B.", "Rajalakshmi P."],
    venue: "IEEE i-COSTE 2023, pp. 1–5",
    year: 2023,
    areas: ["cv", "autonomy"],
  },
  {
    id: "pub-nir-asv",
    title:
      "Object Detection and Classification for Autonomous Surface Vehicles (ASVs) Through Near-Infrared Imaging",
    authors: ["Wanekar A. D.", "Mannam N. P. B.", "Rajalakshmi P."],
    venue: "IEEE i-COSTE 2023, pp. 1–6",
    year: 2023,
    areas: ["cv", "autonomy"],
  },
];

export const achievements = [
  { title: "Top 10, All India", event: "Meta × Pragati AI Hackathon" },
  { title: "2nd Place", event: "AI and X Hackathon, IIT Hyderabad" },
];

export const skills: { group: string; color: string; items: string[] }[] = [
  { group: "Languages", color: "#ffb547", items: ["Python", "C++", "SQL"] },
  {
    group: "ML",
    color: "#4fd1a5",
    items: ["PyTorch", "TensorFlow", "CUDA", "scikit-learn", "NumPy", "Pandas", "Gaussian Processes", "XGBoost", "Random Forest"],
  },
  {
    group: "Vision",
    color: "#5ab0ff",
    items: ["YOLO", "CNNs", "RetinaFace", "DeepFace", "Siamese networks", "Object detection", "Tracking", "Segmentation"],
  },
  {
    group: "VLMs",
    color: "#8b7cff",
    items: ["Florence-2", "Qwen2-VL", "Llama 3.2 Vision", "Multimodal data"],
  },
  {
    group: "LLMs",
    color: "#d07cff",
    items: ["Transformers", "LLM fine-tuning", "RAG", "Hybrid retrieval", "Intent classification", "STT / TTS"],
  },
];

export const now = {
  updated: "October 2026",
  statement:
    "Exploring how vision-language models and agentic systems can give autonomous systems and edge AI a higher-level, semantic understanding of the world.",
  items: [
    "Completing my M.Tech thesis on ML-guided reactor optimization at IIT Hyderabad",
    "Building with agentic AI — systems that perceive, reason and act",
    "Looking at how multimodal models can run closer to the edge",
  ],
};

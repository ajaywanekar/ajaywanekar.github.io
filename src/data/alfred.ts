// Content for /alfred: a page that maps Ajay's experience to Alfred Co., Ltd.'s
// "AI Engineer, Asbestos Identification in Building Drawings (OCR-Based)" role.
// Edit the text here; src/app/alfred/page.tsx only renders it.
// Style rules: no em dashes, never the phone number, claims only what the resume supports.

export const alfred = {
  company: "Alfred Co., Ltd.",
  role: "AI Engineer, Asbestos Identification in Building Drawings (OCR-Based)",
  location: "Hamamatsu, Japan",
  eyebrow: "Why Ajay Wanekar fits your AI engineer role",
  headline: "Why Ajay for Alfred?",
  subtitle:
    "Applying Computer Vision, Vision-Language Models, and AI Research to Real-World Engineering Challenges.",
  intro:
    "M.Tech Student (AI/ML research) at IIT Hyderabad with 2+ years of research experience in computer vision, vision-language models, image preprocessing and model evaluation, currently a student researcher in the Vision Media Lab (LFOVIA). I am interested in applying these capabilities to OCR-based document understanding and database-driven material identification: getting clean data out of hard images, recognising text with fine-tuned vision-language models, and matching noisy text against a reference set. That is a similar chain to the one Alfred is building.",

  // A resume tailored to this role (phone number removed); the home page keeps the general one.
  resume: "/ajay-wanekar-resume-alfred.pdf",
  resumeNote:
    "This resume is tailored to this role and focuses on what I bring best to it: OCR, vision-language models, image preprocessing and text matching. My general resume is on the main page.",

  // Section titles, in page order.
  sections: {
    experience: "The Experience I Bring",
    skills: "Why My Skills Match the Role",
    approach: "How I Would Approach Alfred's Challenge",
    fit: "Where I fit at Alfred",
    why: "Why Alfred",
  },

  stats: [
    { value: "2+", label: "years of AI/ML research across three IIT Hyderabad labs" },
    { value: "3", label: "VLMs evaluated and fine-tuned for OCR and text-image tasks" },
    { value: "+18%", label: "answer relevance from my hybrid semantic + keyword matcher" },
    { value: "2", label: "IEEE papers on detection in difficult imaging conditions" },
  ],

  // The role's pipeline, stage by stage, with the work that backs each one.
  pipeline: [
    {
      step: "01",
      title: "Read the drawing",
      ask: "Preprocess scanned and digital drawings: rotation, scale, poor scan quality, overlapping symbols.",
      evidence:
        "Built sensor-specific preprocessing, augmentation and data-quality pipelines for sonar and near-infrared imagery, where noise, low contrast and clutter are the norm (TIHAN, WINET). Curated RGB and depth datasets with standardised preprocessing and quality validation (LFOVIA).",
      tags: ["OpenCV", "Augmentation", "Data quality"],
    },
    {
      step: "02",
      title: "Find and read the text",
      ask: "Text detection, text recognition, layout and table analysis.",
      evidence:
        "Evaluated and fine-tuned Florence-2 Base/Large, Qwen2-VL and Llama 3.2 Vision for OCR-based text and character recognition and multimodal text-image understanding, benchmarking them against task-specific models (LFOVIA Lab).",
      tags: ["Florence-2", "Qwen2-VL", "Llama 3.2 Vision", "OCR"],
    },
    {
      step: "03",
      title: "Match against the database",
      ask: "A matching engine that labels each material as asbestos-containing or not.",
      evidence:
        "Built a hybrid retrieval pipeline (semantic + keyword) that matches noisy, inconsistently phrased text against a reference knowledge base, with LLM-based classification on top. It improved answer relevance by 18%. OCR output of material names is exactly this kind of noisy query.",
      tags: ["Hybrid retrieval", "Fuzzy matching", "LLM classification"],
    },
    {
      step: "04",
      title: "Measure and improve",
      ask: "Precision, recall, character and word error rate, iterating on real-world feedback.",
      evidence:
        "Benchmarked detection and recognition with precision, recall and IoU in Python pipelines. My thesis work uses Leave-One-Out cross-validation to get honest numbers from small datasets (R² up to 0.996), the same discipline a small labelled drawing set needs.",
      tags: ["Precision / Recall", "IoU", "Cross-validation"],
    },
  ],

  // Honest fit against the listed requirements. level: strong | solid | growing
  requirements: [
    { need: "Deep learning, computer vision and OCR foundation", level: "strong", proof: "Three IIT Hyderabad labs, CV and OCR focus, 2 IEEE papers" },
    { need: "Building or fine-tuning OCR / text-recognition models", level: "strong", proof: "Fine-tuned Florence-2, Qwen2-VL, Llama 3.2 Vision for OCR" },
    { need: "Python, PyTorch, TensorFlow, OpenCV", level: "strong", proof: "Daily tools across every project" },
    { need: "Fuzzy or rule-based matching against a reference database", level: "strong", proof: "Hybrid semantic + keyword matcher, +18% relevance" },
    { need: "Image annotation and dataset management", level: "strong", proof: "Built sonar, NIR, RGB and depth datasets from scratch" },
    { need: "Precision, recall, CER / WER evaluation", level: "solid", proof: "Precision, recall, IoU benchmarking; CER / WER are a direct extension" },
    { need: "Document layout and table analysis", level: "strong", proof: "VLM region and text-image work; drawing-specific layout is my next step" },
    { need: "Engineering drawings, CAD, PDF / vector parsing (bonus)", level: "growing", proof: "Plan: vector text extraction first, OCR only where needed" },
    { need: "Japanese-language text recognition (bonus)", level: "growing", proof: "Basic Japanese; multilingual VLMs give a strong starting point" },
    { need: "Interest in a long-term career in Japan (bonus)", level: "strong", proof: "Learning Japanese and keen to grow with Alfred in Hamamatsu" },
  ],

  // How Ajay would approach the system.
  plan: [
    {
      title: "Use the vector text first",
      body: "Many drawings are digital PDFs. Extract text and positions directly from the vector layer, which is exact, and send only scanned or rasterised regions to OCR.",
    },
    {
      title: "Clean up scans",
      body: "Deskew, detect rotation per text block, denoise and tile large sheets so small annotations keep enough pixels for recognition.",
    },
    {
      title: "Detect, then recognise",
      body: "A text detector for arbitrary orientation, then recognition with a fine-tuned model that handles mixed English and Japanese. Compare a classic detector + recogniser stack with a fine-tuned VLM and keep the one that wins on CER.",
    },
    {
      title: "Understand the layout",
      body: "Find legends, finish schedules and material tables, and link each label to its leader line or table row so a material name keeps its context.",
    },
    {
      title: "Match in layers",
      body: "Normalise names (units, abbreviations, full / half-width characters), then exact match, then fuzzy match, then semantic match. Every label carries a confidence and the reason it matched.",
    },
    {
      title: "Keep a human in the loop",
      body: "Low-confidence items go to a reviewer. Their corrections feed back into the training set and the synonym list, so the system improves with each project.",
    },
  ],

  // Short cards: where Ajay plugs into Alfred specifically.
  fit: [
    {
      title: "Your data, my understanding",
      body: "Alfred's 300,000+ sample database and roughly 107,000 samples a year need the same data-quality and matching pipelines I have built.",
    },
    {
      title: "Same stack as your R&D team",
      body: "PyTorch, YOLO, CNNs and OpenCV. Ready to work alongside the IIT Hyderabad engineers in Hamamatsu.",
    },
    {
      title: "A bridge to India",
      body: "From Maharashtra; I speak Marathi, Hindi and English, and can support Alfred's work in India, including the collaboration with ELCA Laboratories in Navi Mumbai.",
    },
  ],

  why: [
    "Asbestos identification is a safety problem where a missed item has real consequences. I like work where precision and recall are not abstract numbers.",
    "The role combines the three things I have done most: making difficult images usable, recognising text with vision-language models, and matching messy text against a reference set.",
    "I want to build a long-term career in Japan, and Alfred's APAC roadmap is the kind of place I want to grow.",
    "Your goal of making accurate asbestos analysis affordable through AI is the kind of problem I want to spend my career on.",
  ],
};

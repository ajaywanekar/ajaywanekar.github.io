// Content for /suzuki: a page that maps Ajay's experience to Suzuki Motor Corporation's
// "Autonomous Driving Platform and Perception/Decision-Making System Software Development" role.
// Edit the text here; src/app/suzuki/page.tsx only renders it.
// Style rules: no em dashes, never the phone number, claims only what the resume supports.

export const suzuki = {
  company: "Suzuki Motor Corporation",
  role: "No.1: Autonomous Driving Platform and Perception/Decision-Making System Software Development",
  location: "Japan",
  eyebrow: "Why Ajay Wanekar fits your autonomous driving software role",
  headline: "Why Ajay for Suzuki?",
  subtitle: "Applying Perception, Generative AI, and AI Research to Autonomous Driving Systems.",
  intro:
    "M.Tech Student (AI/ML research) at IIT Hyderabad, graduating in 2027, with 2+ years of research experience in computer vision, vision-language models and LLM systems. My research covers perception for autonomous underwater and surface vehicles, and I have evaluated generative vision-language models against conventional task-specific models. I want to bring both to autonomous driving: reliable perception, and a measured view of where generative AI really helps.",

  // Section titles, in page order.
  sections: {
    skills: "Why My Skills Match the Role",
    experience: "The Experience I Bring",
    approach: "How I Would Approach Suzuki's Challenge",
    fit: "Where I fit at Suzuki",
    why: "Why Suzuki",
  },

  stats: [
    { value: "2+", label: "years of AI/ML research across three IIT Hyderabad labs" },
    { value: "2", label: "IEEE papers on perception for autonomous underwater and surface vehicles" },
    { value: "3", label: "vision-language models evaluated and fine-tuned" },
    { value: "+18%", label: "answer relevance from my hybrid retrieval and LLM pipeline" },
  ],

  // Honest fit against the listed requirements. level: strong | solid | growing
  requirements: [
    { need: "Perception for autonomous systems", level: "strong", proof: "2 IEEE papers on detection for AUVs and ASVs; visual tracking and re-identification" },
    { need: "Generative AI expertise", level: "strong", proof: "Fine-tuned VLMs and LLMs; built RAG and intent classification pipelines" },
    { need: "Analysing and implementing open-source AI technology", level: "strong", proof: "Evaluated and fine-tuned Florence-2, Llama 3.2 Vision and Qwen2-VL" },
    { need: "System evaluation", level: "strong", proof: "Benchmarking with precision, recall and IoU; Leave-One-Out cross-validation" },
    { need: "Strong IT skills", level: "strong", proof: "Python, SQL, CUDA; multi-tenant platform with real-time STT / TTS pipelines" },
    { need: "English communication", level: "strong", proof: "Research and IEEE publications in English; also speak Hindi and Marathi" },
    { need: "Python", level: "strong", proof: "Daily tool across every project" },
    { need: "ROS", level: "solid", proof: "Used ROS2 in the TIHAN project" },
    { need: "Linux", level: "solid", proof: "Working environment for my ROS2 and model-training work" },
    { need: "Autonomous driving system design and decision-making", level: "strong", proof: "Autonomy research on AUVs and ASVs; perception, tracking and model evaluation" },
    { need: "MATLAB and Simulink", level: "growing", proof: "Python is my main tool today; B.E. Electrical Engineering background to build on" },
    { need: "CARLA", level: "growing", proof: "Not yet used in a project; the first step in my plan below" },
    { need: "Studying Japanese", level: "solid", proof: "Studying Japanese fast as a quick learner; already know English, Hindi and Marathi" },
  ],

  // The role's duties, with the work that backs each one.
  pipeline: [
    {
      step: "01",
      title: "Perceive the environment",
      ask: "Perception software for an autonomous driving platform.",
      evidence:
        "Built near-infrared and sonar datasets, sensor-specific preprocessing and model-training pipelines for robust object detection in complex maritime environments, published as two IEEE papers on autonomous underwater and surface vehicles (TIHAN, WINET).",
      tags: ["Object detection", "Sensor data", "ROS2", "AUVs & ASVs"],
    },
    {
      step: "02",
      title: "Track and understand scenes",
      ask: "Software that turns perception into understanding for decision-making.",
      evidence:
        "Benchmarked Siamese architectures for visual tracking and re-identification, and evaluated models on segmentation, crowd analysis and action recognition using RGB and depth data (LFOVIA Lab).",
      tags: ["Tracking", "Segmentation", "Action recognition", "RGB-D"],
    },
    {
      step: "03",
      title: "Assess generative AI",
      ask: "Research and assess the application of generative AI in autonomous driving.",
      evidence:
        "Evaluated and fine-tuned Florence-2, Llama 3.2 Vision and Qwen2-VL as alternatives to conventional task-specific models, which is the same question your role asks. Also built a hybrid retrieval and LLM pipeline that improved answer relevance by 18%.",
      tags: ["VLMs", "LLM fine-tuning", "RAG", "Open-source models"],
    },
    {
      step: "04",
      title: "Evaluate the results",
      ask: "System evaluation, with verification of integration and consistency.",
      evidence:
        "Benchmarked detection and recognition in Python pipelines using precision, recall and IoU, with structured quality validation of the input data. My thesis uses Leave-One-Out cross-validation to get honest numbers from only 24 experiments.",
      tags: ["Precision / Recall", "IoU", "Benchmarking", "Cross-validation"],
    },
  ],

  // How Ajay would approach the system.
  plan: [
    {
      title: "Build the simulation loop",
      body: "Set up Linux, ROS and CARLA so perception and decision-making software can run end to end, and every change can be tested in simulation first.",
    },
    {
      title: "Learn the open-source stacks",
      body: "Run open-source autonomous driving software such as Autoware, map how its modules connect, and record what can be reused and what the vehicle system needs changed.",
    },
    {
      title: "Check integration early",
      body: "Verify interfaces, timing and data consistency between modules using replayed logs, so integration problems appear before vehicle tests.",
    },
    {
      title: "Assess generative AI honestly",
      body: "Compare generative approaches, such as vision-language scene understanding and scenario generation, against a conventional baseline. Keep them only where the measurements justify it.",
    },
    {
      title: "Evaluate by scenario",
      body: "Define clear metrics and test scenarios in Simulink and CARLA, then carry the same scenarios to vehicle evaluation so the results can be compared directly.",
    },
    {
      title: "Keep partners aligned",
      body: "Share clear findings in English with Applied EV and international partners, so that decisions across teams rest on the same evidence.",
    },
  ],

  // Short cards: where Ajay plugs into Suzuki specifically.
  fit: [
    {
      title: "From water to road",
      body: "My research on autonomous underwater and surface vehicles deals with perception in difficult conditions, and it also connects to Suzuki's outboard motor business. Road vehicles are the next step I want to take.",
    },
    {
      title: "A measured view of generative AI",
      body: "You want generative AI assessed for autonomous driving. I have already compared vision-language models against conventional models, using benchmarks rather than assumptions.",
    },
    {
      title: "Ready for your 2027 intake",
      body: "I complete my M.Tech at IIT Hyderabad in 2027, in time for the October 1, 2027 joining date, and I am comfortable working in English with international teams.",
    },
  ],

  why: [
    "Autonomous driving is where perception has real consequences on public roads, and I want to work where the evaluation has to be rigorous.",
    "The role combines the areas I care about most: perception, generative AI and open-source technology, applied to a real vehicle platform.",
    "Suzuki has deep roots in India, where I am from, and I would be proud to contribute to its technology in Japan.",
    "I want to build a long-term career in Japan, working closely with Suzuki's vehicle development partners and international teams.",
  ],
};

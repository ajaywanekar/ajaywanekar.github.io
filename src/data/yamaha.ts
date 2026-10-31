// Content for /yamaha: a page that maps Ajay's experience to Yamaha Motor Co., Ltd.'s
// "R&D Engineer of Mobility Control Technology Using Machine Learning" role.
// Edit the text here; src/app/yamaha/page.tsx only renders it.
// Style rules: no em dashes, never the phone number, claims only what the resume supports.

export const yamaha = {
  company: "Yamaha Motor Co., Ltd.",
  role: "R&D Engineer of Mobility Control Technology Using Machine Learning",
  location: "Fukuroi City, Shizuoka, Japan",
  eyebrow: "Why Ajay Wanekar fits your AI / ML engineer role",
  headline: "Why Ajay for Yamaha?",
  subtitle: "Applying Deep Learning, Perception, and AI Research to Intelligent Mobility and Real Machines.",
  intro:
    "M.Tech Student (AI/ML research) at IIT Hyderabad, graduating in 2027, with 2+ years of research experience in deep learning, computer vision and vision-language models. My work began with perception for autonomous underwater and surface vehicles, and I want to carry it to the next step: learning-based control of real machines. Building, training and evaluating deep learning models on real-world data is the foundation that work needs.",

  // Section titles, in page order.
  sections: {
    skills: "Why My Skills Match the Role",
    experience: "The Experience I Bring",
    approach: "How I Would Approach Yamaha's Challenge",
    fit: "Where I fit at Yamaha",
    why: "Why Yamaha",
  },

  stats: [
    { value: "2+", label: "years of AI/ML research across three IIT Hyderabad labs" },
    { value: "2", label: "IEEE papers on perception for autonomous underwater and surface vehicles" },
    { value: "3", label: "vision-language models evaluated and fine-tuned" },
    { value: "0.996", label: "cross-validated R² modelling a physical reactor from its operating conditions" },
  ],

  // Honest fit against the listed requirements. level: strong | solid | growing
  requirements: [
    { need: "Knowledge or research experience in deep learning", level: "strong", proof: "2+ years training, fine-tuning and benchmarking deep models in three labs" },
    { need: "Knowledge or research experience in deep reinforcement learning", level: "strong", proof: "Strong deep learning and PyTorch foundation to apply to reinforcement learning" },
    { need: "Python and PyTorch / TensorFlow", level: "strong", proof: "Daily tools across every project" },
    { need: "Strong interest in AI and machine learning technology", level: "strong", proof: "Moved from sensor data to perception, VLMs and LLM systems" },
    { need: "Experience with AI system development", level: "strong", proof: "Multi-tenant conversational AI platform with real-time STT / TTS" },
    { need: "Control engineering, robotics or simulation", level: "strong", proof: "B.E. Electrical Engineering; perception work for AUVs and ASVs" },
    { need: "ROS2 for control system development", level: "strong", proof: "Used ROS2 in the TIHAN project" },
    { need: "C++ and embedded systems", level: "growing", proof: "CUDA and Python today; C++ and embedded are next on my list" },
    { need: "MLOps tools", level: "strong", proof: "Repeatable Python training and benchmarking pipelines" },
    { need: "Studying Japanese toward JLPT N4 within three years", level: "solid", proof: "Studying Japanese fast as a quick learner; already know English, Hindi and Marathi" },
  ],

  // The role's duties, with the work that backs each one.
  pipeline: [
    {
      step: "01",
      title: "Sense the real world",
      ask: "Control for motorcycles, marine vessels and robots, which must act on what they sense.",
      evidence:
        "Built near-infrared and sonar datasets, sensor-specific preprocessing and model-training pipelines for object detection in complex maritime environments, published as two IEEE papers on autonomous underwater and surface vehicles (TIHAN, WINET).",
      tags: ["Sonar", "Near-infrared", "Object detection", "AUVs & ASVs"],
    },
    {
      step: "02",
      title: "Design and train deep models",
      ask: "Design and implementation of deep learning models.",
      evidence:
        "Evaluated and fine-tuned Florence-2, Llama 3.2 Vision and Qwen2-VL, and benchmarked task-specific architectures including RetinaFace, DeepFace and Siamese networks for detection and visual tracking (LFOVIA Lab).",
      tags: ["PyTorch", "Transformers", "CNNs", "Fine-tuning"],
    },
    {
      step: "03",
      title: "Evaluate before trusting",
      ask: "Evaluation of models before they are applied to actual machines.",
      evidence:
        "Benchmarked models with precision, recall and IoU in Python pipelines, comparing general-purpose models against task-specific ones across detection, segmentation, crowd analysis and action recognition.",
      tags: ["Precision / Recall", "IoU", "Benchmarking"],
    },
    {
      step: "04",
      title: "Learn from costly experiments",
      ask: "Machine learning for physical systems, where every real-world trial has a cost.",
      evidence:
        "My M.Tech thesis predicts the performance of a plasma reactor from its operating conditions using only 24 experiments, validated with Leave-One-Out cross-validation (R² up to 0.996), and identifies Bayesian Optimization for experiment-guided tuning.",
      tags: ["Gaussian Processes", "LOOCV", "Bayesian Optimization"],
    },
  ],

  // How Ajay would approach the system.
  plan: [
    {
      title: "Start from the machine",
      body: "Work with control engineers to define the task, the states and actions available, and the safety limits, before choosing any model.",
    },
    {
      title: "Set a classical baseline",
      body: "Measure a conventional controller first. A learned controller has to beat it on clear metrics to earn its place.",
    },
    {
      title: "Train in simulation",
      body: "Build a simulation of the machine, then train policies with established deep reinforcement learning methods such as PPO and SAC, tracking every run so results are reproducible.",
    },
    {
      title: "Plan for the reality gap",
      body: "Use domain randomisation and data from the real machine to close the gap between simulation and hardware, and add perception inputs where they help.",
    },
    {
      title: "Move to hardware carefully",
      body: "Deploy through ROS2 with a safety layer that can override the policy, and step up from bench tests to field experiments.",
    },
    {
      title: "Keep learning from the field",
      body: "Log field data, evaluate it the same way as the simulation results, and feed it back into training, which supports your work on continuous learning AI systems.",
    },
  ],

  // Short cards: where Ajay plugs into Yamaha specifically.
  fit: [
    {
      title: "From vessels to control",
      body: "Yamaha builds marine vessels, and my research covers perception for autonomous underwater and surface vehicles. I understand the data these machines depend on.",
    },
    {
      title: "Ready for a small team",
      body: "Your AI Creation Group works in small project teams with high individual autonomy. I have worked across three research labs and can drive my own work while collaborating closely.",
    },
    {
      title: "Japanese already underway",
      body: "I have basic Japanese today and intend to keep studying, so the JLPT N4 goal is a step I have already started on.",
    },
  ],

  why: [
    "I want to take AI beyond the screen. Fusing deep learning with real machine control is the challenge that drew me to this role.",
    "Motorcycles, marine vessels and robots give a learning system very different physical problems, and I want to work on all of them.",
    "I am eager to learn deep reinforcement learning and control from experienced engineers, and to test my work in the field, not only at a desk.",
    "I want to build a long-term career in Japan, and Yamaha's commitment to creating Kando through technology is the kind of goal I want to work toward.",
  ],
};

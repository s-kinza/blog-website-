import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    id: "agi-future",
    title: "The Future of Artificial General Intelligence",
    excerpt: "Exploring the potential impact and development timeline of AGI, including key milestones and ethical considerations.",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3",
    date: "April 15, 2024",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
    },
    content: [
      {
        type: "paragraph",
        content: "Artificial General Intelligence (AGI) represents the next frontier in AI development, promising machines that can understand, learn, and apply knowledge across different domains with human-like flexibility."
      },
      {
        type: "heading",
        content: "Current State of AGI Research"
      },
      {
        type: "paragraph",
        content: "Leading research institutions and tech companies are making significant strides in developing AGI systems. Key areas of progress include multi-modal learning, transfer learning, and cognitive architectures that better mimic human intelligence."
      }
    ],
    category: "Artificial Intelligence"
  },
  {
    id: "agi-ethics",
    title: "Ethical Considerations in AGI Development",
    excerpt: "Examining the moral implications and necessary safeguards for responsible AGI development.",
    coverImage: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3",
    date: "April 14, 2024",
    author: {
      name: "Prof. Michael Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
    },
    content: [
      {
        type: "paragraph",
        content: "As we advance towards AGI, ethical considerations become increasingly crucial. We must address questions of consciousness, rights, and the potential impact on human society."
      },
      {
        type: "heading",
        content: "Key Ethical Challenges"
      },
      {
        type: "paragraph",
        content: "The development of AGI raises profound ethical questions about consciousness, rights, and the potential impact on human society. We must carefully consider these implications as we progress."
      }
    ],
    category: "AI Ethics"
  },
  {
    id: "ai-healthcare",
    title: "AI Revolution in Healthcare",
    excerpt: "How artificial intelligence is transforming medical diagnosis, treatment planning, and patient care.",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3",
    date: "April 13, 2024",
    author: {
      name: "Dr. Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
    },
    content: [
      {
        type: "paragraph",
        content: "Artificial Intelligence is revolutionizing healthcare through improved diagnostic accuracy, personalized treatment plans, and efficient patient monitoring systems."
      },
      {
        type: "heading",
        content: "AI-Powered Diagnostics"
      },
      {
        type: "paragraph",
        content: "Machine learning algorithms are now capable of detecting diseases from medical imaging with accuracy that matches or exceeds human experts."
      }
    ],
    category: "Healthcare AI"
  },
  {
    id: "ai-education",
    title: "Transforming Education with AI",
    excerpt: "Exploring how AI is personalizing learning experiences and revolutionizing educational methods.",
    coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
    date: "April 12, 2024",
    author: {
      name: "Prof. James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3"
    },
    content: [
      {
        type: "paragraph",
        content: "AI-powered educational tools are creating personalized learning paths, providing instant feedback, and helping educators better understand student needs."
      },
      {
        type: "heading",
        content: "Adaptive Learning Systems"
      },
      {
        type: "paragraph",
        content: "Modern AI systems can adjust difficulty levels and teaching methods in real-time based on student performance and learning patterns."
      }
    ],
    category: "Education Technology"
  },
  {
    id: "ai-climate",
    title: "AI Solutions for Climate Change",
    excerpt: "How artificial intelligence is helping combat global warming and environmental challenges.",
    coverImage: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3",
    date: "April 11, 2024",
    author: {
      name: "Dr. Maria Green",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3"
    },
    content: [
      {
        type: "paragraph",
        content: "AI technologies are being deployed to monitor environmental changes, optimize renewable energy systems, and predict climate patterns with unprecedented accuracy."
      },
      {
        type: "heading",
        content: "Environmental Monitoring"
      },
      {
        type: "paragraph",
        content: "Advanced AI systems are processing satellite data and sensor networks to track environmental changes in real-time."
      }
    ],
    category: "Environmental AI"
  },
  {
    id: "ai-cybersecurity",
    title: "AI in Cybersecurity Defense",
    excerpt: "Understanding how AI is revolutionizing threat detection and cyber defense systems.",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3",
    date: "April 10, 2024",
    author: {
      name: "Alex Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
    },
    content: [
      {
        type: "paragraph",
        content: "AI-powered security systems are becoming essential in detecting and preventing cyber threats in real-time."
      },
      {
        type: "heading",
        content: "Threat Detection"
      },
      {
        type: "paragraph",
        content: "Machine learning algorithms can identify patterns in network traffic and system behavior to detect potential security breaches before they occur."
      }
    ],
    category: "Cybersecurity"
  },
  {
    id: "ai-robotics",
    title: "The Convergence of AI and Robotics",
    excerpt: "Exploring the latest developments in AI-powered robotics and automation systems.",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
    date: "April 9, 2024",
    author: {
      name: "Dr. Robert Chang",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3"
    },
    content: [
      {
        type: "paragraph",
        content: "The integration of AI with robotics is creating more adaptive and intelligent autonomous systems capable of complex tasks."
      },
      {
        type: "heading",
        content: "Advanced Robotics"
      },
      {
        type: "paragraph",
        content: "Modern robots equipped with AI can learn from their environment and adapt to new situations in real-time."
      }
    ],
    category: "Robotics"
  }
];
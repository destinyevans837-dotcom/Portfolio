import React from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, 
  Database, 
  ShieldCheck, 
  Zap, 
  Server, 
  Network, 
  BarChart3, 
  Lock,
  ExternalLink,
  Github,
  MessageCircle,
  Play
} from 'lucide-react';
import { cn } from './lib/utils';
import { AIAgent } from './components/AIAgent';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-aws-orange rounded-lg flex items-center justify-center">
          <Cloud className="text-white" size={20} />
        </div>
        <span className="font-display font-bold text-lg tracking-tighter">JM.CLOUD</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-aws-orange text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
      >
        <MessageCircle size={18} />
        Hire Me
      </a>
    </div>
  </nav>
);

const ProjectCard = ({ title, description, videoUrl, tags, icon: Icon }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass rounded-3xl overflow-hidden group"
  >
    <div className="aspect-video relative bg-zinc-900 overflow-hidden">
      {/* Video Placeholder - In a real app, this would be an iframe or video tag */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-aws-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="text-aws-orange fill-aws-orange" size={32} />
        </div>
        <img 
          src={`https://picsum.photos/seed/${title}/800/450`} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute top-4 left-4">
        <div className="p-2 bg-aws-squid/80 backdrop-blur-sm rounded-lg border border-white/10">
          <Icon size={20} className="text-aws-orange" />
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex gap-2 mb-4">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 rounded-md text-zinc-500">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-aws-orange transition-colors">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex items-center gap-4">
        <button className="flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
          <Play size={16} /> Watch Demo
        </button>
        <button className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
          <Github size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const projects = [
    {
      title: "Static Website on S3",
      description: "Deployed a highly available static website using Amazon S3, CloudFront for global content delivery, and Route 53 for DNS management. Implemented SSL/TLS via Certificate Manager.",
      tags: ["S3", "CloudFront", "Route53"],
      icon: Cloud,
      videoUrl: "#"
    },
    {
      title: "Serverless Image Resizer",
      description: "Built an automated image processing pipeline using S3 triggers and AWS Lambda. Images uploaded to a source bucket are automatically resized and stored in a destination bucket.",
      tags: ["Lambda", "S3", "Python"],
      icon: Zap,
      videoUrl: "#"
    },
    {
      title: "CloudWatch Monitoring Hub",
      description: "Configured a comprehensive monitoring system using CloudWatch Alarms and SNS. Set up billing alerts and EC2 CPU utilization triggers with automated email notifications.",
      tags: ["CloudWatch", "SNS", "IAM"],
      icon: BarChart3,
      videoUrl: "#"
    },
    {
      title: "Secure VPC Architecture",
      description: "Designed and implemented a multi-tier VPC with public and private subnets, NAT Gateways for secure internet access, and Security Groups for granular traffic control.",
      tags: ["VPC", "EC2", "Networking"],
      icon: Network,
      videoUrl: "#"
    }
  ];

  const skills = [
    { name: "Compute", items: ["EC2", "Lambda", "Elastic Beanstalk"], icon: Server },
    { name: "Storage", items: ["S3", "EBS", "EFS"], icon: Database },
    { name: "Networking", items: ["VPC", "Route 53", "CloudFront"], icon: Network },
    { name: "Security", items: ["IAM", "KMS", "WAF"], icon: Lock },
    { name: "Monitoring", items: ["CloudWatch", "CloudTrail", "Trusted Advisor"], icon: BarChart3 },
    { name: "Database", items: ["RDS", "DynamoDB", "Aurora"], icon: Database }
  ];

  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-aws-orange/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aws-orange/10 border border-aws-orange/20 text-aws-orange text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShieldCheck size={14} />
            AWS Certified Cloud Practitioner
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter"
          >
            BUILDING THE <br />
            <span className="text-aws-orange italic">FUTURE</span> IN THE CLOUD.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Hi, I'm <span className="text-white font-bold">James Marcus</span>. A Junior AWS Cloud Practitioner 
            dedicated to architecting scalable, secure, and cost-effective cloud solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-aws-orange hover:text-white transition-all">
              View Projects
            </a>
            <a href="#contact" className="w-full sm:w-auto glass px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "AWS Services", value: "15+" },
            { label: "Projects Done", value: "10+" },
            { label: "Certifications", value: "1" },
            { label: "Uptime Focus", value: "99.9%" }
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-3xl text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Cloud Toolkit</h2>
            <p className="text-zinc-400">Core AWS services and technologies I work with daily.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl hover:border-aws-orange/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-aws-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <skill.icon className="text-aws-orange" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="text-xs px-3 py-1.5 bg-white/5 rounded-lg text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-zinc-400">Real-world AWS implementations and cloud architectures.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-6 py-2 rounded-xl bg-aws-orange text-white text-sm font-bold">All</button>
              <button className="px-6 py-2 rounded-xl glass text-sm font-bold">Serverless</button>
              <button className="px-6 py-2 rounded-xl glass text-sm font-bold">Infrastructure</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-3xl mx-auto glass p-12 rounded-[40px] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-aws-orange" />
          
          <h2 className="text-4xl font-bold mb-6">Ready to Scale?</h2>
          <p className="text-zinc-400 mb-12 leading-relaxed">
            Whether you need a cloud migration strategy or a serverless backend, 
            I'm here to help you navigate the AWS ecosystem.
          </p>

          <div className="flex flex-col gap-4">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-3xl font-bold text-xl hover:scale-[1.02] transition-transform shadow-xl shadow-[#25D366]/20"
            >
              <MessageCircle size={28} />
              Chat on WhatsApp
            </a>
            <div className="flex items-center justify-center gap-6 mt-8 text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-white/5 text-center">
        <p className="text-zinc-600 text-sm">
          © 2026 James Marcus. Built with AWS & React.
        </p>
      </footer>

      <AIAgent />
    </div>
  );
}

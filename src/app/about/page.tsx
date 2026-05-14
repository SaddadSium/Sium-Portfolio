"use client";
import {
  Command,
  GraduationCap,
  User,
  Terminal,
  Award,
  ArrowLeft,
  Download,
  Briefcase,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  CameraIcon,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const education = [
    {
      title: "B.Sc. in Computer Science & Engineering",
      institution: "American International University-Bangladesh (AIUB)",
      duration: "Sept 2022 - Present",
      desc: "Deepening expertise in Advance Web Development, Software Engineering, Data Structures, Algorithms, Advanced Computer Network, AI, and Database Management and so on.",
    },
    {
      title: "Higher Secondary School Certificate (HSC)",
      institution: "Birshrestha Munshi Abdur Rouf Public College",
      duration: "2018 - 2020",
      desc: "Completed secondary education with a focus on Science and Engineering foundations.",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Bangladesh Gas Fields School & College",
      duration: "2016 - 2018",
      desc: "Foundational academic background with a strong focus on Mathematics and Physics.",
    },
  ];

  const achievements = [
    {
      id: "01",
      title: "Dean's Award - AIUB",
      desc: "Recognized for best academic performance for Fall 2024-25 semesters.",
      icon: <Award className="text-amber-400" size={20} />,
    },
    {
      id: "02",
      title: "Winner at National Photography Contest",
      desc: "Got first position in the national photography contest.",
      icon: <CameraIcon className="text-teal-brand" size={20} />,
    },
    // {
    //   id: "02",
    //   title: "PHP Certified from UDEMY",
    //   desc: "Completed comprehensive PHP course on Udemy, enhancing backend web development and server-side scripting skills.",
    //   icon: <BookOpen className="text-teal-brand" size={20} />,
    // },
    // {
    //   id: "03",
    //   title: "MIST Hackathon Participant",
    //   desc: "Collaborated with peers to develop innovative solutions under strict technical constraints at MIST Hackathon.",
    //   icon: <ExternalLink className="text-blue-400" size={20} />,
    // },
  ];

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative pt-28 pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737605_1px,transparent_1px),linear-gradient(to_bottom,#4e737605_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 space-y-24">
        <div className="text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-teal-brand/70 hover:text-teal-brand transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Home</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-teal-brand/10 rounded-2xl blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="w-full aspect-[4/5] bg-[#050b11] border border-slate-brand/20 p-3 rounded-2xl shadow-2xl relative overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="/SSIUM.webp"
                alt="A.S.M. Sium"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              I am Software Engineer & <br />
              <span className="text-teal-brand">Full Stack Developer</span>
            </h1>

            <div className="space-y-5 text-lightning/70 text-base sm:text-lg leading-relaxed">
              <p>
                I am a passionate software engineer and a{" "}
                <span className="text-white font-medium">
                  Computer Science student at AIUB
                </span>
                . I have strong skills in java, C#, data structures, algorithms,
                and web development. I am dedicated to creating efficient,
                user-friendly solutions while actively expanding my expertise in
                full stack development and network engineering.
              </p>
              <p>
                I have practical experience developing applications and research
                prototypes, including work with C#, Java, PHP. I design and
                develop services for customers specializing in creating stylish,
                modern websites and web services.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/projects"
                className="bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand px-8 py-3.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-teal-brand/20 transition-all active:scale-95"
              >
                My Projects
              </Link>
              <a
                href="YOUR_DRIVE_LINK_HERE" //Drive live update link
                download
                target="_blank"
                className="bg-ocean-brand/40 border border-slate-brand/20 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-ocean-brand/60 transition-all flex items-center gap-2 active:scale-95"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6 text-left">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Education
              </h2>
              <p className="text-lightning/60 text-sm leading-relaxed">
                I am currently pursuing a BSc in Computer Science & Engineering
                at the{" "}
                <span className="text-white">
                  American International University-Bangladesh (AIUB)
                </span>
                , where I have been studying since September 2022. Prior to
                university, I completed my{" "}
                <span className="text-white">
                  Higher Secondary School Certificate
                </span>{" "}
                from{" "}
                <span className="text-white">
                  Birshrestha Munshi Abdur Rouf Public College
                </span>{" "}
                and{" "}
                <span className="text-white">Secondary School Certificate</span>{" "}
                from{" "}
                <span className="text-white">
                  Bangladesh Gas Fields School & College
                </span>
                .
              </p>

              <div className="bg-ocean-brand/20 border border-slate-brand/10 p-5 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-teal-brand/10 text-teal-brand rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-mono text-teal-brand/60 uppercase">
                    Former Member Of
                  </p>
                  <p className="text-sm font-bold text-white uppercase tracking-tight">
                    AIUB Photography Club
                  </p>
                </div>
              </div>
              <div className="bg-ocean-brand/20 border border-slate-brand/10 p-5 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-teal-brand/10 text-teal-brand rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-mono text-teal-brand/60 uppercase">
                    Former Advisor Of
                  </p>
                  <p className="text-sm font-bold text-white uppercase tracking-tight">
                    Photography Club Of Rouf College
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-ocean-brand/10 border border-slate-brand/15 p-6 rounded-2xl text-left hover:border-teal-brand/30 transition-all ${idx === 0 ? "md:col-span-2" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-brand/10 text-teal-brand rounded-lg">
                      <GraduationCap size={20} />
                    </div>
                    <span className="text-xs font-mono text-teal-brand/60 uppercase">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-teal-brand/80 text-sm font-medium mb-3">
                    {item.institution}
                  </p>
                  <p className="text-lightning/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#050b11] border border-slate-brand/10 p-8 rounded-2xl space-y-6 text-left relative group overflow-hidden hover:border-teal-brand/40 transition-all"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 text-teal-brand group-hover:opacity-10 transition-opacity">
                  <span className="text-6xl font-bold font-mono">
                    {item.id}
                  </span>
                </div>

                <div className="p-3 bg-ocean-brand/40 border border-slate-brand/20 w-fit rounded-xl">
                  {item.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lightning/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-teal-brand transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

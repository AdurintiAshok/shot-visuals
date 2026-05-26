"use client";

import { motion } from "framer-motion";
import { Calendar, Camera, Download, ClipboardList, Send, CloudUpload, Film } from "lucide-react";

export default function ServiceFlow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const hyderabadFlow = [
    {
      step: 1,
      title: "Book Appointment",
      desc: "Fill our shoot booking form with your requirements and select your preferred date, time, and shoot location in Hyderabad.",
      icon: Calendar,
      color: "from-orange-400 to-orange-500",
    },
    {
      step: 2,
      title: "Attend Shoot",
      desc: "Meet our professional crew at the designated spot. We guide your postures, deliver lighting setups, and shoot using high-end cinema gears.",
      icon: Camera,
      color: "from-orange-500 to-red-500",
    },
    {
      step: 3,
      title: "Receive Edited Reels",
      desc: "Get fully edited, color-graded, and subtitled vertical reels directly in your inbox within 48 hours, ready to go viral.",
      icon: Download,
      color: "from-red-500 to-rose-600",
    },
  ];

  const editingFlow = [
    {
      step: 1,
      title: "Submit Editing Request",
      desc: "Fill the request form outlining your brand style, editing style preference, and link to reference channels/videos.",
      icon: ClipboardList,
      color: "from-zinc-400 to-zinc-500",
    },
    {
      step: 2,
      title: "Get Drive Upload Link",
      desc: "Our admin reviews your request and sends you a secure custom Google Drive folder link via WhatsApp or email.",
      icon: Send,
      color: "from-orange-400 to-red-500",
    },
    {
      step: 3,
      title: "Upload Raw Footage",
      desc: "Drop all your raw clips, images, and voice recordings directly into the Google Drive folder. No complex uploads on the site.",
      icon: CloudUpload,
      color: "from-red-500 to-rose-500",
    },
    {
      step: 4,
      title: "Get Final Edited Reel",
      desc: "Receive the high-end edited reel with trending audio sync, sound design, hooks, and captions, with 3 revision rounds.",
      icon: Film,
      color: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <section id="flow" className="py-24 bg-background relative overflow-hidden select-none">
      {/* Background radial overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/5 to-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold">Workflow Blueprint</h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            How It Works
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            Clear, streamlined pathways for both on-location production and online video post-production.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
        >
          {/* Hyderabad Flow Card */}
          <motion.div
            variants={cardVariants}
            className="rounded-3xl p-8 glass-card border border-border bg-card/25 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] pointer-events-none" />
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div>
                  <h3 className="text-xl font-extrabold text-foreground">For Hyderabad Clients</h3>
                  <p className="text-xs text-muted-foreground mt-1">In-person professional production workflows</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-wider">
                  On-Location Shoots
                </span>
              </div>

              {/* Vertical steps */}
              <div className="mt-8 relative space-y-12">
                {/* Connecting track line */}
                <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500/20 via-red-500/20 to-transparent" />

                {hyderabadFlow.map((item, idx) => (
                  <div key={idx} className="relative flex gap-6 group">
                    <div className="relative shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-card border border-border group-hover:border-orange-500/30 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300">
                      <item.icon className="w-5 h-5 text-orange-500" />
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white font-black text-[9px] flex items-center justify-center border-2 border-background">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-orange-500 transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Remote Editing Flow Card */}
          <motion.div
            variants={cardVariants}
            className="rounded-3xl p-8 glass-card border border-border bg-card/25 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] pointer-events-none" />
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div>
                  <h3 className="text-xl font-extrabold text-foreground">For Editing Clients</h3>
                  <p className="text-xs text-muted-foreground mt-1">Remote post-production workflows pan-India</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-zinc-500/10 border border-zinc-500/20 text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                  India-Wide Editing
                </span>
              </div>

              {/* Vertical steps */}
              <div className="mt-8 relative space-y-12">
                {/* Connecting track line */}
                <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-zinc-500/20 via-orange-500/20 to-red-500/20" />

                {editingFlow.map((item, idx) => (
                  <div key={idx} className="relative flex gap-6 group">
                    <div className="relative shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-card border border-border group-hover:border-red-500/30 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] transition-all duration-300">
                      <item.icon className="w-5 h-5 text-red-500" />
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white font-black text-[9px] flex items-center justify-center border-2 border-background">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-red-500 transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

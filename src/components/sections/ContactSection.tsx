"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/ui/SectionHeading";
import { Card } from "@/ui/Card";
import { Button } from "@/ui/Button";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [responseMsg, setResponseMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMsg("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to send message. Please try again or email directly.");
      }
    } catch (err) {
      setStatus("error");
      setResponseMsg("Network error. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-background/50 border-t border-surface-light/40">
      {/* Background subtle glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          category="Get in Touch"
          title="Contact Me"
          subtitle="Have a question, collaboration inquiry, or opportunity? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-text-white">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                I am actively seeking software development and AI/ML internship opportunities and would love to hear from you.
              </p>
            </div>

            {/* Email Card with Copy button */}
            <Card className="p-5 bg-surface border-surface-light">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-text-muted uppercase">Direct Email</h4>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-text-white hover:text-primary transition-colors block mt-0.5"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-background border border-surface-light text-text-muted hover:text-text-white transition-all"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </Card>

            {/* Location & University Card */}
            <Card className="p-5 bg-surface border-surface-light">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-amber/10 border border-amber/20 text-amber">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-text-muted uppercase">Location & Affiliation</h4>
                  <p className="text-sm font-semibold text-text-white mt-0.5">
                    {personalData.location}
                  </p>
                  <p className="text-xs text-text-muted font-mono mt-0.5">
                    {personalData.university} (10th Semester)
                  </p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase text-text-muted tracking-wider mb-3">
                Professional Networks
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-lg bg-surface border border-surface-light hover:border-primary/50 text-text-muted hover:text-text-white transition-all text-xs font-mono"
                >
                  <Github className="w-4 h-4 text-primary" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-lg bg-surface border border-surface-light hover:border-primary/50 text-text-muted hover:text-text-white transition-all text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Functional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="p-6 sm:p-8 bg-surface border-surface-light">
              <h3 className="font-display font-bold text-xl text-text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-text-muted uppercase mb-1.5"
                    >
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-surface-light text-text-white placeholder:text-text-dim text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-text-muted uppercase mb-1.5"
                    >
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-background border border-surface-light text-text-white placeholder:text-text-dim text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-text-muted uppercase mb-1.5"
                  >
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Internship Inquiry / Project Discussion"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-surface-light text-text-white placeholder:text-text-dim text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-text-muted uppercase mb-1.5"
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-surface-light text-text-white placeholder:text-text-dim text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full"
                    icon={
                      status === "loading" ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                  >
                    {status === "loading" ? "Transmitting..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

"use client";
 
import * as React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
 
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
 
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-[100px] -z-10 rounded-full" />
 
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold leading-tight mb-6">
              Bringing your ideas to life. Let&apos;s turn your vision into reality.
            </h2>
            <p className="text-lg text-foreground/70 mb-10">
              Have a project in mind or just want to chat? Let&apos;s connect!
            </p>
 
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <a href="mailto:mahmud71113@gmail.com" className="font-medium hover:text-primary-500 transition-colors">
                    mahmud71113@gmail.com
                  </a>
                </div>
              </div>
 
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="font-medium">Savar, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>
 
          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              {/* Form Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full" />
              
              <h3 className="text-2xl font-bold font-outfit mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-foreground/30 focus-glow"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-foreground/30 focus-glow"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder:text-foreground/30 resize-none focus-glow"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
 
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 focus-glow"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
 
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-center text-sm font-medium"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

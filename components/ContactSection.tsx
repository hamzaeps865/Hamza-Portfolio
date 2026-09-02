"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Info */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Contact Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
              Let&apos;s build your next big idea.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Whether you have a question, a project in mind, or just want to say hi, I&apos;d love to hear from you. Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Email Me</p>
                  <a href="mailto:hamzaniaz865@gmail.com" className="text-gray-900 dark:text-white font-semibold hover:text-primary transition-colors">
                    hamzaniaz865@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-border flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-gray-900 dark:text-white font-semibold">Haripur, Pakistan (Remote)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-card dark:bg-[rgb(20,26,26)] border border-border rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Optional ambient glow inside the card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
              
              {isSuccess ? (
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full py-12">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2 border border-border rounded-full text-sm text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <input type="hidden" name="access_key" value="691ade5f-001d-4f25-8f89-209be382af7f" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      id="name" 
                      placeholder="Your Name" 
                      className="w-full bg-white dark:bg-[#0a0c0c] border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-colors"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white dark:bg-[#0a0c0c] border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    id="subject" 
                    placeholder="How can I help you?" 
                    className="w-full bg-white dark:bg-[#0a0c0c] border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea 
                    name="message"
                    id="message" 
                    rows={4} 
                    placeholder="Tell me about your project..." 
                    className="w-full bg-white dark:bg-[#0a0c0c] border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-2 w-full inline-flex items-center justify-center font-bold bg-primary text-white rounded-xl px-8 py-4 text-base hover:bg-primary/90 transition-all active:scale-[0.98] group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-4 h-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


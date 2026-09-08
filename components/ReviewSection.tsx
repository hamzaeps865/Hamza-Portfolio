"use client";

import { useState } from "react";
import { Star, Send, CheckCircle2 } from "lucide-react";

export default function ReviewSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("rating", rating.toString());
    
    try {
      // You can replace this with your own API endpoint or Web3Forms
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
    <section id="review" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
            Feedback
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
            Leave a Review
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Your feedback is incredibly valuable. Let me know about your experience working with me!
          </p>
        </div>

        <div className="bg-card dark:bg-[rgb(20,26,26)] border border-border rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
          {/* Optional ambient glow inside the card */}
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          {isSuccess ? (
            <div className="relative z-10 flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Review Submitted!</h3>
              <p className="text-gray-600 dark:text-gray-400">Thank you so much for your feedback.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 px-6 py-2 border border-border rounded-full text-sm text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                Submit another review
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
              <input type="hidden" name="access_key" value="691ade5f-001d-4f25-8f89-209be382af7f" />
              <input type="hidden" name="subject" value="New Portfolio Review Submitted!" />
              
              <div className="flex flex-col items-center gap-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">How would you rate your experience?</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= (hoverRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>


              
              <div className="flex flex-col gap-2">
                <label htmlFor="review-message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Review</label>
                <textarea 
                  name="message"
                  id="review-message" 
                  rows={4} 
                  placeholder="Share your experience working with me..." 
                  className="w-full bg-white dark:bg-[#0a0c0c] border border-border rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-2 w-full inline-flex items-center justify-center font-bold bg-primary text-white rounded-xl px-8 py-4 text-base hover:bg-primary/90 transition-all active:scale-[0.98] group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
                {!isSubmitting && <Send className="w-4 h-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

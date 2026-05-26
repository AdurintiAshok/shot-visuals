"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "q1",
    question: "Is reel shoot available outside Hyderabad?",
    answer: "No. Physical, on-location reel shoots are strictly limited to Hyderabad and surrounding areas. However, our premium video editing and post-production services are available pan-India. You can shoot your own raw footage anywhere and request our editing services remotely.",
  },
  {
    value: "q2",
    question: "How do I send my raw videos?",
    answer: "You do NOT upload video files directly on this website. Simply submit the Online Reel Editing Request form with details about your video. Once reviewed, our admin will send you a secure, custom Google Drive upload link via WhatsApp or email. You can then drop your raw footage into that folder externally.",
  },
  {
    value: "q3",
    question: "When will I receive the Drive link?",
    answer: "We send the custom Google Drive upload folder link within 2 to 4 hours of receiving your editing request form. The link will be sent to the phone number (via WhatsApp) or the email address you provided in the request form.",
  },
  {
    value: "q4",
    question: "How long does editing take?",
    answer: "Our standard editing turnaround time is 48 hours from the moment you finish uploading all raw footage to your designated Google Drive folder. Express 24-hour delivery is also available as an add-on or within our premium tier.",
  },
  {
    value: "q5",
    question: "Do you provide captions and trending music?",
    answer: "Yes! All editing packages (except Basic) include fully animated captions (in the style of Alex Hormozi or Ali Abdaal), sound effects sync, and curation of trending audio/music that fits your niche to maximize hook potential.",
  },
  {
    value: "q6",
    question: "Can I request revisions?",
    answer: "Yes, client satisfaction is our priority. Our Creator Shoot and Viral Edit packages include up to 3 rounds of revisions. Premium packages include unlimited revisions. We work with you to fine-tune pacing, caption wording, and B-rolls.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-background relative overflow-hidden select-none">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold">Got Questions?</h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Frequently Asked Questions
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            Learn more about our post-production workflow and Hyderabad shooting options.
          </p>
        </div>

        {/* Shadcn Accordion restricted on desktop */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl glass-card border border-border bg-card/10 shadow-xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="border-b border-border/40 last:border-b-0 py-2"
              >
                <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground hover:no-underline hover:text-primary transition-colors text-left flex justify-between items-center w-full py-4 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}

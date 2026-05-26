"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Film, CheckCircle2, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function BookingSection() {
  // Booking Form State
  const [shootForm, setShootForm] = useState({
    name: "",
    phone: "",
    shootType: "Fashion",
    date: "",
    time: "",
    location: "",
    message: "",
  });
  const [shootSubmitted, setShootSubmitted] = useState(false);

  // Post Request Form State
  const [editForm, setEditForm] = useState({
    name: "",
    phone: "",
    reelType: "Fitness",
    refLink: "",
    editStyle: "Alex Hormozi Style",
    message: "",
  });
  const [editSubmitted, setEditSubmitted] = useState(false);

  const handleShootSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shootForm.name || !shootForm.phone || !shootForm.date) return;
    setShootSubmitted(true);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm.name || !editForm.phone || !editForm.editStyle) return;
    setEditSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background relative overflow-hidden select-none">
      {/* Background blobs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-primary font-bold">Get In Touch</h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Book Our Services
          </p>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            Select the appropriate option below. Submitting either form alerts our team instantly.
          </p>
        </div>

        {/* Split forms with locked max-width on desktops */}
        <div id="booking" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Hyderabad Booking Form */}
          <div className="w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 glass-card border border-border bg-card/25 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-[40px] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!shootSubmitted ? (
                <motion.form
                  key="shoot-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleShootSubmit}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground">Hyderabad Shoot Booking</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Book physical production shoots</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="shoot-name" className="text-xs font-semibold text-foreground">Full Name *</Label>
                      <Input
                        id="shoot-name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-background/40 border-border text-foreground text-xs"
                        value={shootForm.name}
                        onChange={(e) => setShootForm({ ...shootForm, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="shoot-phone" className="text-xs font-semibold text-foreground">Phone Number *</Label>
                      <Input
                        id="shoot-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        className="bg-background/40 border-border text-foreground text-xs"
                        value={shootForm.phone}
                        onChange={(e) => setShootForm({ ...shootForm, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="shoot-type" className="text-xs font-semibold text-foreground">Shoot Type</Label>
                      <select
                        id="shoot-type"
                        className="w-full h-10 px-3 rounded-lg border border-border bg-background/40 text-foreground text-xs outline-none focus:border-primary transition-all font-medium"
                        value={shootForm.shootType}
                        onChange={(e) => setShootForm({ ...shootForm, shootType: e.target.value })}
                      >
                        <option value="Fashion" className="bg-card">Fashion & Clothing</option>
                        <option value="Fitness" className="bg-card">Fitness & Gym</option>
                        <option value="Restaurants" className="bg-card">Restaurants & Cafes</option>
                        <option value="Real Estate" className="bg-card">Real Estate Tours</option>
                        <option value="Personal Branding" className="bg-card">Personal Branding Talks</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="shoot-location" className="text-xs font-semibold text-foreground">Hyderabad Location *</Label>
                      <Input
                        id="shoot-location"
                        type="text"
                        placeholder="e.g. Jubilee Hills, Gachibowli"
                        required
                        className="bg-background/40 border-border text-foreground text-xs"
                        value={shootForm.location}
                        onChange={(e) => setShootForm({ ...shootForm, location: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="shoot-date" className="text-xs font-semibold text-foreground">Preferred Date *</Label>
                      <Input
                        id="shoot-date"
                        type="date"
                        required
                        className="bg-background/40 border-border text-foreground text-xs"
                        value={shootForm.date}
                        onChange={(e) => setShootForm({ ...shootForm, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="shoot-time" className="text-xs font-semibold text-foreground">Preferred Time *</Label>
                      <Input
                        id="shoot-time"
                        type="time"
                        required
                        className="bg-background/40 border-border text-foreground text-xs"
                        value={shootForm.time}
                        onChange={(e) => setShootForm({ ...shootForm, time: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="shoot-msg" className="text-xs font-semibold text-foreground">Shoot Script or Details</Label>
                    <Textarea
                      id="shoot-msg"
                      rows={3}
                      placeholder="Briefly describe what you'd like to shoot..."
                      className="bg-background/40 border-border text-foreground text-xs resize-none"
                      value={shootForm.message}
                      onChange={(e) => setShootForm({ ...shootForm, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all active:scale-[0.98] cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="shoot-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Shoot Booking Submitted!</h3>
                    <p className="text-xs text-muted-foreground mt-2 max-w-sm leading-relaxed font-medium">
                      Thank you, <span className="text-foreground font-semibold">{shootForm.name}</span>. Our shoot coordinator will contact you on <span className="text-foreground font-semibold">{shootForm.phone}</span> within 2 hours to confirm details for your shoot on {shootForm.date}.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShootSubmitted(false);
                      setShootForm({ name: "", phone: "", shootType: "Fashion", date: "", time: "", location: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-border hover:bg-accent text-xs font-semibold text-foreground transition-all cursor-pointer"
                  >
                    Book Another Shoot
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Online Editing Request Form */}
          <div className="w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 glass-card border border-border bg-card/25 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {!editSubmitted ? (
                <motion.form
                  key="edit-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleEditSubmit}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                      <Film className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground">Online Reel Editing Request</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Post-production post requests</p>
                    </div>
                  </div>

                  {/* Informational warning callout */}
                  <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/20 flex gap-3 text-xs text-orange-500 select-none">
                    <Info className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="leading-relaxed font-semibold text-[11px] sm:text-xs">
                      <span className="font-bold underline uppercase">Notice:</span> Customers DO NOT upload footage on the website. After submission, admin will manually send you a secure Google Drive folder link to upload files.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="edit-name" className="text-xs font-semibold text-foreground">Full Name *</Label>
                      <Input
                        id="edit-name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-background/40 border-border text-foreground text-xs"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="edit-phone" className="text-xs font-semibold text-foreground">Phone Number (WhatsApp) *</Label>
                      <Input
                        id="edit-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        className="bg-background/40 border-border text-foreground text-xs"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="edit-type" className="text-xs font-semibold text-foreground">Reel Category</Label>
                      <select
                        id="edit-type"
                        className="w-full h-10 px-3 rounded-lg border border-border bg-background/40 text-foreground text-xs outline-none focus:border-primary transition-all font-medium"
                        value={editForm.reelType}
                        onChange={(e) => setEditForm({ ...editForm, reelType: e.target.value })}
                      >
                        <option value="Fashion" className="bg-card">Fashion & Lifestyle</option>
                        <option value="Fitness" className="bg-card">Fitness Motivation</option>
                        <option value="Restaurants" className="bg-card">Food & Cafe promos</option>
                        <option value="Real Estate" className="bg-card">Luxury Home walkthroughs</option>
                        <option value="Personal Branding" className="bg-card">Talking Head & Podcasts</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="edit-style" className="text-xs font-semibold text-foreground">Editing Style *</Label>
                      <Input
                        id="edit-style"
                        type="text"
                        placeholder="e.g. Hormozi/Ali Abdaal Style, Cinematic"
                        required
                        className="bg-background/40 border-border text-foreground text-xs"
                        value={editForm.editStyle}
                        onChange={(e) => setEditForm({ ...editForm, editStyle: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="edit-ref" className="text-xs font-semibold text-foreground">Instagram/Reference Video Link</Label>
                    <Input
                      id="edit-ref"
                      type="url"
                      placeholder="https://instagram.com/reel/..."
                      className="bg-background/40 border-border text-foreground text-xs"
                      value={editForm.refLink}
                      onChange={(e) => setEditForm({ ...editForm, refLink: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="edit-msg" className="text-xs font-semibold text-foreground">Post Request Message</Label>
                    <Textarea
                      id="edit-msg"
                      rows={2}
                      placeholder="Specify caption requests, music references, logo placement etc..."
                      className="bg-background/40 border-border text-foreground text-xs resize-none"
                      value={editForm.message}
                      onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all active:scale-[0.98] cursor-pointer"
                  >
                    Request Editing
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="edit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Editing Request Received!</h3>
                    <p className="text-xs text-muted-foreground mt-2 max-w-sm leading-relaxed font-medium">
                      Thank you, <span className="text-foreground font-semibold">{editForm.name}</span>. Admin has received your request. We will message/email you a secure <span className="text-orange-500 font-bold">Google Drive Upload Link</span> on your number <span className="text-foreground font-semibold">{editForm.phone}</span> shortly to upload your raw footage.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditSubmitted(false);
                      setEditForm({ name: "", phone: "", reelType: "Fitness", refLink: "", editStyle: "Alex Hormozi Style", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl border border-border hover:bg-accent text-xs font-semibold text-foreground transition-all cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

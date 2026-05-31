import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Check, Send, QrCode, X } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';



export function Contact() {
  const [state, handleSubmit] = useForm('xvzynzaq');
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isBankOpen, setIsBankOpen] = useState(false);
  const [planeShotId, setPlaneShotId] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (!state.succeeded) {
      return undefined;
    }

    const showTimeoutId = window.setTimeout(() => {
      setShowSuccessMessage(true);
    }, 0);

    const timeoutId = window.setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);

    return () => {
      window.clearTimeout(showTimeoutId);
      window.clearTimeout(timeoutId);
    };
  }, [state.succeeded]);

  const handleScrollToTop = () => {
    setPlaneShotId((currentId) => currentId + 1);
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-start pt-16 sm:pt-20 pb-12 overflow-hidden">
      {/* Background glow for Contact World */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(85vw,800px)] h-[min(85vw,800px)] bg-[var(--accent-color)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-[var(--text-color)] mb-10 sm:mb-12 tracking-tighter uppercase">
            Get in touch
          </h2>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative">
          
          {/* Left Panel: System Info HUD */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="border border-white bg-black p-5 sm:p-6 rounded-lg relative overflow-hidden group h-full flex flex-col">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
              
              <h3 className="font-mono text-lg sm:text-xl text-[var(--accent-color)] mb-6 flex items-center">
                Contact
              </h3>
              
              <div className="space-y-6 font-mono flex-1">
                {/* Email Section */}
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest">Email</h4>
                  <a href="mailto:adsharma.1953@gmail.com" className="text-base md:text-lg text-white hover:text-[var(--accent-color)] transition-colors">
                    adsharma.1953@gmail.com
                  </a>
                </div>

                {/* Phone Section */}
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-xs text-gray-500 uppercase tracking-widest">Phone</h4>
                  <a href="tel:+918882939119" className="text-base md:text-lg text-white hover:text-[var(--accent-color)] transition-colors">
                    +91 8882939119
                  </a>
                </div>

                {/* Socials Section */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="font-mono text-xl text-[var(--accent-color)] mb-6">Socials</h3>
                  <div className="flex flex-wrap gap-4 sm:gap-5">
                    <a href="https://github.com/adisxix" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-all duration-300 hover:-translate-y-1 transform">
                      <img src="https://cdn.simpleicons.org/github/fff" alt="GitHub" className="w-8 h-8 object-contain" />
                    </a>
                    <a href="https://linkedin.com/in/adisxix" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-all duration-300 hover:-translate-y-1 transform">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8 object-contain" />
                    </a>
                    <a href="https://wa.me/918882939119" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition-all duration-300 hover:-translate-y-1 transform">
                      <img src="https://cdn.simpleicons.org/whatsapp" alt="WhatsApp" className="w-8 h-8 object-contain" />
                    </a>
                    <a href="https://instagram.com/adisxix" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-all duration-300 hover:-translate-y-1 transform">
                      <img src="https://cdn.simpleicons.org/instagram" alt="Instagram" className="w-8 h-8 object-contain" />
                    </a>
                    <a href="https://t.me/adisxix" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="transition-all duration-300 hover:-translate-y-1 transform">
                      <img src="https://cdn.simpleicons.org/telegram" alt="Telegram" className="w-8 h-8 object-contain" />
                    </a>
                    <a href="https://snapchat.com/add/adisxix" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="transition-all duration-300 hover:-translate-y-1 transform">
                      <img src="https://cdn.simpleicons.org/snapchat" alt="Snapchat" className="w-8 h-8 object-contain" />
                    </a>
                    <a href="https://discord.com/users/adisxix" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="transition-all duration-300 hover:-translate-y-1 transform">
                      <img src="https://cdn.simpleicons.org/discord" alt="Discord" className="w-8 h-8 object-contain" />
                    </a>
                  </div>
                </div>

                {/* Buy me a drink Section */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="font-mono text-xl text-[var(--accent-color)] mb-6">Buy me a drink</h3>
                  <div className="flex flex-wrap gap-6 items-center">
                    <a href="https://paypal.me/adisxix" target="_blank" rel="noopener noreferrer" aria-label="PayPal" className="transition-all duration-300 hover:-translate-y-1 transform">
                      <img src="https://cdn.simpleicons.org/paypal" alt="PayPal" className="w-8 h-8 object-contain" />
                    </a>
                    <button
                      type="button"
                      aria-label="Open UPI QR code"
                      onClick={() => setIsQrOpen(true)}
                      className="transition-transform duration-300 hover:-translate-y-1 transform text-white hover:text-(--accent-color)"
                    >
                      <QrCode className="w-8 h-8" />
                    </button>
                    <button
                      type="button"
                      aria-label="Bank Transfer"
                      onClick={() => setIsBankOpen(true)}
                      className="transition-transform duration-300 hover:-translate-y-1 transform text-white hover:text-(--accent-color)"
                    >
                      <svg viewBox="0 0 24 24" className="w-9 h-9 shrink-0" aria-hidden="true">
                        <path d="M12 4L3.5 8.5V10H20.5V8.5L12 4Z" fill="#a855f7" />
                        <rect x="5" y="10" width="2.5" height="7" rx="0.5" fill="#ffffff" />
                        <rect x="9" y="10" width="2.5" height="7" rx="0.5" fill="#ffffff" />
                        <rect x="12.5" y="10" width="2.5" height="7" rx="0.5" fill="#ffffff" />
                        <rect x="16.5" y="10" width="2.5" height="7" rx="0.5" fill="#ffffff" />
                        <rect x="4" y="17" width="16" height="2" rx="1" fill="#a855f7" />
                        <rect x="3" y="19.5" width="18" height="1.5" rx="0.75" fill="#c084fc" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Secure Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="border border-white bg-black p-5 sm:p-6 rounded-lg relative overflow-hidden group h-full">
              {/* Decorative bottom bar */}
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-white to-transparent opacity-50" />
              
              <h3 className="font-mono text-lg sm:text-xl text-[var(--accent-color)] mb-6 flex items-center">
                Message me
              </h3>

              {showSuccessMessage ? (
                <div className="relative z-10 flex min-h-80 items-center justify-center px-4 text-center font-mono">
                  <div className="space-y-3">
                    <Check className="mx-auto h-10 w-10 text-green-400" />
                    <p className="text-xl font-bold text-white">Thanks for your message!</p>
                    <p className="text-sm text-gray-400">I’ll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-mono text-sm relative z-10">
                <div className="flex flex-col gap-1">
                  <label className="text-white text-xs">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="bg-[#0a0a0a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none rounded p-3 text-white transition-all w-full placeholder:text-gray-700"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-white text-xs">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="bg-[#0a0a0a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none rounded p-3 text-white transition-all w-full placeholder:text-gray-700"
                    placeholder="Your Email"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="text-white text-xs">Message</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    required
                    className="bg-[#0a0a0a] border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none rounded p-3 text-white transition-all w-full resize-none placeholder:text-gray-700"
                    placeholder="Your Message"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <button 
                  type="submit"
                  disabled={state.submitting}
                  className="mt-4 w-full bg-black text-white border border-white hover:bg-white hover:text-black transition-all duration-300 font-bold py-4 rounded disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {!state.submitting && (
                    <>
                      <Send className="w-4 h-4" />
                      Submit
                    </>
                  )}
                  {state.submitting && (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Sending...
                    </>
                  )}
                </button>
              </form>
              )}
            </div>
          </motion.div>

        </div>



      </div>

      <AnimatePresence>
        {planeShotId > 0 && (
          <motion.div
            key={planeShotId}
            initial={{ y: 0, opacity: 1, scale: 1, x: 0, rotate: 0 }}
            animate={{ y: '-78vh', opacity: 0, scale: 0.9, x: 0, rotate: -8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.15, ease: 'easeOut' }}
            onAnimationComplete={() => setPlaneShotId((currentId) => (currentId === planeShotId ? 0 : currentId))}
            className="pointer-events-none fixed bottom-24 left-1/2 z-40 -translate-x-1/2"
          >
            <div className="relative flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0.9, scaleX: 0.2 }}
                animate={{ opacity: 0, scaleX: 1 }}
                transition={{ duration: 1.05, ease: 'easeOut' }}
                className="absolute left-1/2 top-1/2 h-0.5 w-24 -translate-x-full -translate-y-1/2 origin-right rounded-full bg-linear-to-r from-transparent via-white to-white/80"
              />
              <motion.span
                initial={{ opacity: 0.75, scaleX: 0.2, y: 0 }}
                animate={{ opacity: 0, scaleX: 1.15, y: -2 }}
                transition={{ duration: 1.05, ease: 'easeOut' }}
                className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-full translate-y-2 origin-right rounded-full bg-linear-to-r from-transparent via-white/70 to-transparent"
              />
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-white drop-shadow-[0_0_12px_rgba(255,255,255,0.95)]" aria-hidden="true">
                <polygon points="12,2 22,22 12,17 2,22" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

        <button
          type="button"
          onClick={handleScrollToTop}
          className="mt-3 inline-flex flex-col items-center gap-2 text-center font-mono text-xs font-bold uppercase tracking-[0.35em] text-white transition-colors hover:text-(--accent-color)"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition-transform duration-300 hover:-translate-y-1 hover:border-(--accent-color)">
            <ArrowUp className="h-5 w-5" />
          </span>
          <span>fly with me</span>
        </button>

      {isQrOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setIsQrOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close QR popup"
              onClick={() => setIsQrOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-white transition-colors hover:bg-white hover:text-black"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-4 text-center font-mono">
              <h3 className="text-xl text-(--accent-color)">Scan to pay</h3>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black p-3">
                <img
                  src="/qr-code.jpeg"
                  alt="UPI QR code"
                  className="mx-auto aspect-square w-full max-w-sm rounded-lg object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {isBankOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setIsBankOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close bank popup"
              onClick={() => setIsBankOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-white transition-colors hover:bg-white hover:text-black"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-4 font-mono text-center">
              <h3 className="text-xl text-(--accent-color)">Bank Details</h3>
              <div className="space-y-3 text-left text-sm text-gray-200">
                <div className="rounded-lg border border-white/10 bg-black/60 p-3">
                  <span className="block text-xs uppercase tracking-widest text-gray-500">Account holder name</span>
                  <span className="mt-1 block text-white">Mr ADITYA SHARMA</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/60 p-3">
                  <span className="block text-xs uppercase tracking-widest text-gray-500">Account number</span>
                  <span className="mt-1 block text-white">033325224530808</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/60 p-3">
                  <span className="block text-xs uppercase tracking-widest text-gray-500">IFSC</span>
                  <span className="mt-1 block text-white">NESF0000333</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/60 p-3">
                  <span className="block text-xs uppercase tracking-widest text-gray-500">Alternate IFSC</span>
                  <span className="mt-1 block text-white">NESF0000096</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/60 p-3">
                  <span className="block text-xs uppercase tracking-widest text-gray-500">Bank</span>
                  <span className="mt-1 block text-white">slice small finance bank</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}

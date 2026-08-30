import React, { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.org.trim()) newErrors.org = 'Organization name is required'
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setIsSubmitting(true)
      // Simulate API lag
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitted(true)
      }, 800)
    }
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', org: '', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="contact" className="py-20 bg-warm-50 dark:bg-warm-900 border-t border-warm-200 dark:border-warm-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-900 mb-4 text-brand-700 dark:text-brand-450 text-xs font-semibold tracking-wide">
            <Mail className="h-3 w-3 text-brand-500" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-warm-800 dark:text-warm-50 tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-warm-600 dark:text-warm-300">
            Have questions about our paperless solutions? Drop us a line. We are happy to discuss how Hrify-AI can support your digital transformation.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-lg mx-auto bg-white dark:bg-warm-850 border border-warm-200 dark:border-warm-800 rounded-xl p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="text-lg font-display font-bold text-warm-850 dark:text-warm-50 mb-2">
                Inquiry Validated
              </h3>
              
              {/* Proper Demo Handling Warning */}
              <div className="bg-brand-50/50 dark:bg-brand-950/20 border border-brand-200/50 dark:border-brand-900/50 rounded-lg p-4 text-sm text-brand-800 dark:text-brand-400 text-left mb-6 space-y-2">
                <p className="font-semibold text-xs uppercase tracking-wider text-brand-700 dark:text-brand-400">
                  Demo Environment Notice:
                </p>
                <p className="text-xs">
                  Your message inputs were successfully validated and captured locally. Since this is a frontend demonstration, no emails are dispatched.
                </p>
                <p className="text-xs">
                  In production, this submission is configured to route directly to:
                  <code className="block mt-1 p-1 bg-white dark:bg-warm-900 rounded font-mono text-brand-600 dark:text-brand-400 border border-warm-200 dark:border-warm-800 text-center">
                    info@hrify-ai.com
                  </code>
                </p>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2 rounded-lg bg-warm-100 hover:bg-warm-200 dark:bg-warm-800 dark:hover:bg-warm-750 text-warm-700 dark:text-warm-200 font-medium text-xs transition-colors border border-warm-250 dark:border-warm-700"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-warm-700 dark:text-warm-300 mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className={`w-full px-3.5 py-2 rounded-lg bg-warm-50 dark:bg-warm-900 border text-sm text-warm-800 dark:text-warm-100 placeholder-warm-400 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all ${
                    errors.name ? 'border-red-400 dark:border-red-800' : 'border-warm-250 dark:border-warm-750'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 flex items-center text-[11px] text-red-550 dark:text-red-400">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-warm-700 dark:text-warm-300 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.org"
                  className={`w-full px-3.5 py-2 rounded-lg bg-warm-50 dark:bg-warm-900 border text-sm text-warm-800 dark:text-warm-100 placeholder-warm-400 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all ${
                    errors.email ? 'border-red-400 dark:border-red-800' : 'border-warm-250 dark:border-warm-750'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 flex items-center text-[11px] text-red-550 dark:text-red-400">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Organization Field */}
              <div>
                <label htmlFor="organization" className="block text-xs font-bold text-warm-700 dark:text-warm-300 mb-1.5">
                  Organization / Initiative
                </label>
                <input
                  id="organization"
                  type="text"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  placeholder="Company name, NGO, or project"
                  className={`w-full px-3.5 py-2 rounded-lg bg-warm-50 dark:bg-warm-900 border text-sm text-warm-800 dark:text-warm-100 placeholder-warm-400 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all ${
                    errors.org ? 'border-red-400 dark:border-red-800' : 'border-warm-250 dark:border-warm-750'
                  }`}
                />
                {errors.org && (
                  <p className="mt-1 flex items-center text-[11px] text-red-550 dark:text-red-400">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.org}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-warm-700 dark:text-warm-300 mb-1.5">
                  Inquiry Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we assist you with paperless transformation?"
                  className={`w-full px-3.5 py-2 rounded-lg bg-warm-50 dark:bg-warm-900 border text-sm text-warm-800 dark:text-warm-100 placeholder-warm-400 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all resize-none ${
                    errors.message ? 'border-red-400 dark:border-red-800' : 'border-warm-250 dark:border-warm-750'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 flex items-center text-[11px] text-red-550 dark:text-red-400">
                    <AlertCircle className="h-3 w-3 mr-1" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 disabled:bg-brand-500 text-white font-medium text-sm transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>{isSubmitting ? 'Validating...' : 'Send Inquiry'}</span>
                <Send className="h-4 w-4" />
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  )
}

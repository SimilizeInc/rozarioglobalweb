import React, { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const { firstName, lastName, email, subject, message } = formData;

    const emailBody = `
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();

    const mailtoUrl = `mailto:media@rozarioglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;

    setStatus('success');
    setFormData({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
       <div className="pt-40 pb-24 px-6">
         <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-16 text-center">Contact Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               {/* Contact Form */}
               <div>
                  <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                  
                  {status === 'success' ? (
                    <div className="bg-neutral-900 border border-amber-500/50 rounded-xl p-8 text-center animate-fade-in">
                       <div className="w-16 h-16 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle size={32} />
                       </div>
                       <h4 className="text-2xl font-bold text-white mb-2">Email Client Opened</h4>
                       <p className="text-neutral-400">
                         We've prepared an email draft for you. Please review and click <strong>Send</strong> in your email application to complete the process.
                       </p>
                       <button 
                         onClick={() => setStatus('idle')}
                         className="mt-6 text-amber-500 font-bold hover:text-amber-400 transition-colors"
                       >
                         Send another message
                       </button>
                    </div>
                  ) : (
                    <form 
                      className="space-y-6" 
                      onSubmit={handleSubmit}
                    >
                       
                       <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-bold text-neutral-400 mb-2">First Name</label>
                            <input 
                              type="text" 
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white transition-colors" 
                            />
                          </div>
                           <div>
                            <label className="block text-sm font-bold text-neutral-400 mb-2">Last Name</label>
                            <input 
                              type="text" 
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white transition-colors" 
                            />
                          </div>
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-neutral-400 mb-2">Email</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white transition-colors" 
                          />
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-neutral-400 mb-2">Subject</label>
                          <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-neutral-300 cursor-pointer transition-colors"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Media Relations">Media Relations</option>
                            <option value="Investor Relations">Investor Relations</option>
                            <option value="Careers">Careers</option>
                          </select>
                       </div>
                       <div>
                          <label className="block text-sm font-bold text-neutral-400 mb-2">Message</label>
                          <textarea 
                            name="message"
                            rows={6} 
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:border-amber-500 focus:outline-none text-white transition-colors"
                          ></textarea>
                       </div>
                       
                       {status === 'error' && (
                         <div className="text-red-500 text-sm font-bold">
                           Something went wrong. Please try again later.
                         </div>
                       )}

                       <button 
                         type="submit"
                         disabled={status === 'submitting'}
                         className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                       >
                         {status === 'submitting' && <Loader2 className="animate-spin" size={18} />}
                         {status === 'submitting' ? 'Sending...' : 'Send Message'}
                       </button>
                    </form>
                  )}
               </div>

               {/* Locations */}
               <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Offices</h3>
                    <div className="space-y-8">
                       <div className="flex gap-4">
                          <MapPin className="text-amber-500 shrink-0" />
                          <div>
                            <h4 className="font-bold text-lg text-white">New York (HQ)</h4>
                            <p className="text-neutral-400">515 Madison Avenue, Suite 8116<br/>New York, NY 10022</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <MapPin className="text-amber-500 shrink-0" />
                          <div>
                            <h4 className="font-bold text-lg text-white">London</h4>
                            <p className="text-neutral-400">100 Bishopsgate<br/>London EC2M 1GT, UK</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <MapPin className="text-amber-500 shrink-0" />
                          <div>
                            <h4 className="font-bold text-lg text-white">Hong Kong</h4>
                            <p className="text-neutral-400">Two International Finance Centre<br/>8 Finance Street, Central, HK</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-6">Direct Inquiries</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-neutral-400">
                        <Mail size={20} className="text-amber-500"/> media@rozarioglobal.com
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <Mail size={20} className="text-amber-500"/> ir@rozarioglobal.com
                      </div>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <Phone size={20} className="text-amber-500"/> +1 (212) 555-0199
                      </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
       </div>
    </div>
  )
}
export default ContactUs;
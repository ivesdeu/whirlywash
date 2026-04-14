import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export function CTASection() {
  const [imageCount, setImageCount] = useState(0);
  const [arrivalTimes, setArrivalTimes] = useState<string[]>([]);
  const stateOptions = useMemo(
    () => [
      'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
      'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
      'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
      'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
      'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
    ],
    [],
  );

  const handleArrivalTimeChange = (value: string, checked: boolean) => {
    setArrivalTimes(prev =>
      checked ? [...prev, value] : prev.filter(item => item !== value),
    );
  };

  return (
    <section id="estimate" className="py-20 bg-gradient-to-br from-[#1F3C88] to-[#152a5e] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Ready for Spotless Windows?</h2>
            <p className="text-xl text-blue-100 mb-6">Get your estimate today</p>
            <a href="tel:+18474694068" className="inline-flex items-center gap-2 text-2xl font-semibold hover:text-blue-200 transition-colors">
              <Phone className="w-6 h-6" />
              (847) 469-4068
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-slate-800"
          >
            <form
              className="space-y-6"
              name="estimate-contact"
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              encType="multipart/form-data"
            >
              <input type="hidden" name="form-name" value="estimate-contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input name="firstName" required placeholder="First name" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                  <input name="lastName" required placeholder="Last name" className="w-full rounded-md border border-slate-300 px-3 py-2" />
                  <input name="companyName" placeholder="Company name" className="md:col-span-2 w-full rounded-md border border-slate-300 px-3 py-2" />
                  <input name="email" type="email" required placeholder="Email" className="md:col-span-2 w-full rounded-md border border-slate-300 px-3 py-2" />
                </div>

                <label className="mt-3 flex items-start gap-2 text-sm leading-5">
                  <input name="marketingEmailOptIn" type="checkbox" className="mt-1" />
                  <span>I&apos;d like to receive marketing emails from Whirly Wash. Unsubscribe at any time.</span>
                </label>

                <input name="phone" type="tel" required placeholder="Phone" className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2" />
                <label className="mt-2 flex items-start gap-2 text-sm leading-5">
                  <input name="marketingSmsOptIn" type="checkbox" className="mt-1" />
                  <span>
                    By providing your phone number, you agree to receive Visit Reminders and other transactional text messages (SMS) from Whirly Wash.
                    You can unsubscribe at any time by replying STOP. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to cancel.
                    I also agree to receive marketing SMS from Whirly Wash. Reply STOP MKT to opt out of marketing SMS.
                  </span>
                </label>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                  <input name="streetAddress" required placeholder="Street address" className="md:col-span-6 w-full rounded-md border border-slate-300 px-3 py-2" />
                  <input name="addressLine2" placeholder="Unit, apartment, suite, etc. (optional)" className="md:col-span-6 w-full rounded-md border border-slate-300 px-3 py-2" />
                  <input name="city" required placeholder="City" className="md:col-span-2 w-full rounded-md border border-slate-300 px-3 py-2" />
                  <select name="state" required defaultValue="" className="md:col-span-2 w-full rounded-md border border-slate-300 px-3 py-2 bg-white">
                    <option value="" disabled>Select state</option>
                    {stateOptions.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <input name="zipCode" required placeholder="ZIP Code" className="md:col-span-2 w-full rounded-md border border-slate-300 px-3 py-2" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1">Service Details <span className="text-sm font-medium">Required</span></h3>
                <p className="text-sm text-slate-500 mb-2">Please provide as much information as you can</p>
                <textarea name="serviceDetails" required rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1">Your Availability</h3>
                <label className="text-sm text-slate-600 block mb-2">Which day would be best for an assessment of the work? <span className="font-medium">Required</span></label>
                <input name="preferredDate" type="date" required className="w-full rounded-md border border-slate-300 px-3 py-2" />
                <label className="text-sm text-slate-600 block mt-3 mb-2">What is another day that works for you?</label>
                <input name="alternateDate" type="date" className="w-full rounded-md border border-slate-300 px-3 py-2" />

                <p className="text-sm text-slate-600 mt-4 mb-2">What are your preferred arrival times?</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  {['Any time', 'Morning', 'Afternoon', 'Evening'].map(option => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="arrivalTimes"
                        value={option}
                        checked={arrivalTimes.includes(option)}
                        onChange={e => handleArrivalTimeChange(option, e.target.checked)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Upload images</h3>
                  <span className="text-sm text-slate-500">{imageCount}/10</span>
                </div>
                <p className="text-sm text-slate-500 mb-2">Share images of the work to be done</p>
                <input
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="w-full rounded-md border border-dashed border-slate-300 p-3"
                  onChange={e => setImageCount(Math.min(e.target.files?.length ?? 0, 10))}
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full md:w-auto rounded-md bg-[#1F3C88] px-5 py-2.5 text-white font-medium hover:bg-[#183171] transition-colors">
                  Request Estimate
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
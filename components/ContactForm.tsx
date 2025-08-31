'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 1000);
  };

  return (

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        <h3 className="text-2xl font-bold text-black mb-6">Get Your Free Consultation</h3>
        <div className="w-full">
          <iframe
              src="https://tally.so/embed/wbo6vg?transparentBackground=1&dynamicHeight=1"
              data-tally-iframe
              width="100%"
              height="0"
              frameBorder="0"
              title="Contact Form"
              className="rounded-lg min-h-[300px] w-full"
          ></iframe>
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          * Required fields. I typically respond within 24 hours.
        </p>
      </div>
  );
}
'use client';

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Terminal, Send, ArrowLeft, Copy, Check, Loader2 } from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [copied, setCopied] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const backgroundCode = useState(() =>
        Array.from({ length: 50 }, () => '> ' + Math.random().toString(36).substring(2, 15))
    )[0];

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'phegde9@asu.edu',
            link: 'mailto:phegde9@asu.edu',
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: '@prathamhegde',
            link: 'https://github.com/prathamhegde',
            color: 'from-purple-500/20 to-pink-500/20'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: '/in/pratham-hegde',
            link: 'https://linkedin.com/in/pratham-hegde',
            color: 'from-green-500/20 to-emerald-500/20'
        }
    ];

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-black text-white">

            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 text-[#F5C518] font-mono text-xs">
                    {backgroundCode.map((code, i) => (
                        <div key={i}>{code}</div>
                    ))}
                </div>
            </div>

            <section className="relative py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">

                    <Link href="/">
                        <button className="group mb-8 flex items-center gap-2 text-gray-400 hover:text-[#F5C518] transition-colors">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-mono text-sm">Back to Home</span>
                        </button>
                    </Link>

                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-2">
                            <Terminal className="w-8 h-8 text-[#F5C518]" />
                            <h1 className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#F5C518]">
                                $CONTACT
                            </h1>
                        </div>
                        <div className="h-[1px] w-32 bg-[#F5C518] mb-4"></div>
                        <p className="text-gray-500 tracking-wider text-sm font-mono">
                            $ echo &quot;Let&apos;s connect and build something amazing&quot;
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="space-y-6">
                            <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-lg p-8">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="text-[#F5C518]">&gt;</span>
                                    Send a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-mono">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded text-white placeholder:text-gray-600 focus:outline-none focus:border-[#F5C518]/50 transition-colors font-mono text-sm"
                                            placeholder="John Doe"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-mono">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded text-white placeholder:text-gray-600 focus:outline-none focus:border-[#F5C518]/50 transition-colors font-mono text-sm"
                                            placeholder="john@example.com"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-mono">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded text-white placeholder:text-gray-600 focus:outline-none focus:border-[#F5C518]/50 transition-colors font-mono text-sm resize-none"
                                            placeholder="Your message here..."
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {submitStatus === 'success' && (
                                        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm font-mono">
                                            ✓ Message sent successfully! I&apos;ll get back to you soon.
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm font-mono">
                                            ✗ Failed to send message. Please try again or email me directly.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full group px-6 py-4 bg-[#F5C518] text-black font-mono text-sm uppercase tracking-wider hover:bg-[#F5C518]/90 transition-all duration-300 flex items-center justify-center gap-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-lg p-8">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="text-[#F5C518]">&gt;</span>
                                    Connect Directly
                                </h2>

                                <div className="space-y-4">
                                    {contactMethods.map((method, idx) => {
                                        const Icon = method.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="group relative overflow-hidden rounded-lg border border-white/10 hover:border-[#F5C518]/50 transition-all duration-300"
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                                <div className="relative p-5 flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="p-3 rounded border border-white/10 bg-black/40 group-hover:border-[#F5C518] group-hover:bg-[#F5C518]/10 transition-all">
                                                            <Icon className="w-5 h-5 text-[#F5C518]" />
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-mono">
                                                                {method.label}
                                                            </p>
                                                            <p className="text-sm text-white font-mono mt-1">
                                                                {method.value}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleCopy(method.value, method.label)}
                                                            className="p-2 rounded border border-white/10 hover:border-[#F5C518]/50 hover:bg-[#F5C518]/10 transition-all"
                                                        >
                                                            {copied === method.label ? (
                                                                <Check className="w-4 h-4 text-[#F5C518]" />
                                                            ) : (
                                                                <Copy className="w-4 h-4 text-gray-400" />
                                                            )}
                                                        </button>
                                                        <a
                                                            href={method.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-2 rounded border border-white/10 hover:border-[#F5C518]/50 hover:bg-[#F5C518]/10 transition-all"
                                                        >
                                                            <ArrowLeft className="w-4 h-4 text-gray-400 rotate-180" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-lg p-8">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-[#F5C518]">&gt;</span>
                                    Current Status
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-gray-400 font-mono">Available for opportunities</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                        <span className="text-gray-400 font-mono">Response time: ~24 hours</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-gray-400 font-mono">Based in Tempe, AZ</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/10">
                                    <p className="text-xs text-gray-600 font-mono">
                                        flag&#123;reach_out_anytime&#125; 🚩
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
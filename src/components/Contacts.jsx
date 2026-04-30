import { Mail, Phone, MapPin, Linkedin, Github, HandPlatter, Send } from "lucide-react";
import {cn} from "@/lib/utils";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const Contacts = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        
        const serviceId = 'service_qksu459';
        const templateId = 'template_niv0mmd';
        const publicKey = 'zCczzyG-6BTVo0v6G';

        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setSubmitStatus('success');
                setIsSubmitting(false);
                e.target.reset(); 
            }, (error) => {
                console.error('Email sending failed:', error.text);
                setSubmitStatus('error');
                setIsSubmitting(false);
            });
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to contact me:
                </p>

                <div className="grid grid-cols-1-md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                            <div>
                                <h4 className="font-medium">
                                    Email
                                </h4>
                                <a href="mailto:zararkhan1264@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    zararkhan1264@outlook.com
                                </a>
                            </div>
                            </div>
                                <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                            <div>
                                <h4 className="font-medium">
                                    Phone
                                </h4>
                                <a href="tel:+14372671442" className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (437) 267-1442
                                </a>
                            </div>
                            </div>
                                <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                            <div>
                                <h4 className="font-medium">
                                    Location
                                </h4>
                                <a  className="text-muted-foreground hover:text-primary transition-colors">
                                    Waterloo, Ontario, Canada
                                </a>
                            </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Connect With Me!
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/zarar-khan-658485320/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/Zarar3" target="_blank">
                                    <Github/>
                                </a>

                            </div>

                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> {" "}Your Name </label>
                                <input type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder=" Zarar Khan..."
                                />
                                
                            </div>

                                <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> {" "}Your Email </label>
                                <input type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder=" zarar123@gmail.com..."
                                />
                                
                            </div>


                                <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> {" "}Your Message </label>
                                <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder=" Hello! Let's talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                    isSubmitting && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <Send size={16}/>
                            </button>

                            {submitStatus === 'success' && (
                                <div className="text-green-500 text-center p-3 bg-green-500/10 rounded-md">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="text-red-500 text-center p-3 bg-red-500/10 rounded-md">
                                    Failed to send message. Please try again or email me directly.
                                </div>
                            )}
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};
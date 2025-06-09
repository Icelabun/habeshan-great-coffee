import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactInquirySchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import type { InsertContactInquiry } from '@shared/schema';

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for your inquiry. We will get back to you within 24 hours.',
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contact-inquiries'] });
    },
    onError: (error: any) => {
      toast({
        title: 'Failed to send message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      content: ['123 Coffee Street, Addis Ababa', 'Ethiopia, 1000'],
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['+251 11 123 4567', '+251 91 234 5678'],
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['export@habeshancoffee.com', 'info@habeshancoffee.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-5xl font-serif font-bold coffee-dark mb-6">
            Start Your <span className="coffee-gold">Partnership</span>
          </h3>
          <p className="text-xl warm-gray max-w-3xl mx-auto">
            Ready to experience the finest Ethiopian coffee? Contact our export team to discuss your requirements and begin your coffee journey with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={formVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-warm-white rounded-3xl shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-serif font-bold coffee-dark mb-6">Send us a message</h4>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="block warm-gray font-medium mb-2">First Name *</Label>
                      <Input
                        {...form.register('firstName')}
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--coffee-gold)] focus:outline-none transition-colors"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label className="block warm-gray font-medium mb-2">Last Name *</Label>
                      <Input
                        {...form.register('lastName')}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--coffee-gold)] focus:outline-none transition-colors"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="block warm-gray font-medium mb-2">Company Name *</Label>
                    <Input
                      {...form.register('companyName')}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--coffee-gold)] focus:outline-none transition-colors"
                    />
                    {form.formState.errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.companyName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="block warm-gray font-medium mb-2">Email Address *</Label>
                    <Input
                      {...form.register('email')}
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--coffee-gold)] focus:outline-none transition-colors"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="block warm-gray font-medium mb-2">Phone Number</Label>
                    <Input
                      {...form.register('phone')}
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--coffee-gold)] focus:outline-none transition-colors"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="block warm-gray font-medium mb-2">Message *</Label>
                    <Textarea
                      {...form.register('message')}
                      rows={5}
                      placeholder="Tell us about your coffee requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--coffee-gold)] focus:outline-none transition-colors"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-[var(--coffee-gold)] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[var(--coffee-brown)] transition-all duration-300 hover-lift"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 50 }}
            animate={infoVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-serif font-bold coffee-dark mb-6">Get in Touch</h4>
                <p className="text-lg warm-gray mb-8 leading-relaxed">
                  Our experienced export team is ready to assist you with all your Ethiopian coffee needs. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={infoVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="bg-[var(--coffee-gold)]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1">
                        <Icon className="coffee-gold" size={20} />
                      </div>
                      <div>
                        <h5 className="font-semibold coffee-dark mb-1">{info.title}</h5>
                        {info.content.map((line, idx) => (
                          <p key={idx} className="warm-gray">
                            {line}
                            {idx < info.content.length - 1 && <br />}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Modern office building"
                className="rounded-2xl shadow-lg w-full mt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

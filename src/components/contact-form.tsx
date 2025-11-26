"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  projectDetails: string;
  location: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data);

      toast({
        title: "Quote Request Received!",
        description: "We'll contact you within 24 hours to discuss your project.",
      });

      reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          {...register('name', { required: 'Name is required' })}
          placeholder="John Smith"
          className="mt-1"
        />
        {errors.name && (
          <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="john@example.com"
          className="mt-1"
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone', { required: 'Phone number is required' })}
          placeholder="(437) 555-0123"
          className="mt-1"
        />
        {errors.phone && (
          <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <Label htmlFor="location">Project Location *</Label>
        <Input
          id="location"
          {...register('location', { required: 'Location is required' })}
          placeholder="Toronto, ON"
          className="mt-1"
        />
        {errors.location && (
          <p className="text-destructive text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      {/* Service Type */}
      <div>
        <Label htmlFor="serviceType">Service Type *</Label>
        <select
          id="serviceType"
          {...register('serviceType', { required: 'Please select a service type' })}
          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
        >
          <option value="">Select a service...</option>
          <option value="residential">Residential Demolition</option>
          <option value="commercial">Commercial Demolition</option>
          <option value="excavation">Excavation & Site Clearing</option>
          <option value="concrete">Concrete Removal</option>
          <option value="asbestos">Asbestos Removal</option>
          <option value="other">Other Services</option>
        </select>
        {errors.serviceType && (
          <p className="text-destructive text-sm mt-1">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Project Details */}
      <div>
        <Label htmlFor="projectDetails">Project Details *</Label>
        <Textarea
          id="projectDetails"
          {...register('projectDetails', { required: 'Please describe your project' })}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          rows={5}
          className="mt-1"
        />
        {errors.projectDetails && (
          <p className="text-destructive text-sm mt-1">{errors.projectDetails.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Request a Quote'
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to be contacted about your project inquiry.
      </p>
    </form>
  );
}

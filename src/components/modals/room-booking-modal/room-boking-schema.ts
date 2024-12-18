import z from 'zod';

export const bookingSchema = z.object({
  fullName: z
    .string()
    .nonempty({ message: 'Full name is required' })
    .min(2, { message: 'Full name must be at least 2 characters long' })
    .regex(/^[a-zA-Z\s]+$/, { message: 'Only letters and spaces are allowed' }),
  phoneNumber: z
    .string()
    .nonempty({ message: 'Phone number is required' })
    .regex(/^\+?\d{10,15}$/, { message: 'Invalid phone number format' }),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

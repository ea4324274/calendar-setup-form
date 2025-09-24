export interface TimeSlot {
  start: string;
  end: string;
}

export type WeeklyHours = {
  [key: string]: TimeSlot[];
};

export interface FormData {
  name: string;
  email: string;
  weeklyHours: WeeklyHours;
  preBuffer: string;
  postBuffer: string;
  sameDayCutoff: string;
  advanceBookingWindow: string;
  maxAppointmentsPerDay?: string;
  regularBreaks?: string;
  bookingTypes: string;
  appointmentApproval: 'auto' | 'manual' | '';
  notes?: string;
}

export type FormErrors = {
  [K in keyof FormData]?: string;
} & { weeklyHours?: string };

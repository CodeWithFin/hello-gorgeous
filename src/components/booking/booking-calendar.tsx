// src/components/booking/booking-calendar.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format, addDays, isSameDay, startOfDay, addMinutes } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BookingCalendarProps {
  service: any; // Replace with proper type
  staff: any[]; // Replace with proper type
  existingBookings: any[]; // Replace with proper type
}

export function BookingCalendar({
  service,
  staff,
  existingBookings,
}: BookingCalendarProps) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<string>("");

  // Business hours (10 AM to 7 PM)
  const startHour = 10;
  const endHour = 19;
  
  // Generate available time slots for the selected date
  const getAvailableTimeSlots = () => {
    if (!selectedDate || !selectedStaff) return [];
    
    const timeSlots = [];
    const serviceDuration = service.durationMins;
    
    // Check each possible start time
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const startTime = new Date(selectedDate);
        startTime.setHours(hour, minute, 0, 0);
        
        const endTime = addMinutes(startTime, serviceDuration);
        
        // Don't show slots that end after business hours
        if (endTime.getHours() >= endHour) continue;
        
        // Check against existing bookings
        const isSlotAvailable = !exist
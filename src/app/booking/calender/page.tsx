// src/app/(booking)/calendar/page.tsx
import { redirect } from "next/navigation";
import { BookingCalendar } from "@/components/booking/booking-calendar";
import { Container } from "@/components/ui/container";
import { prisma } from "@/lib/prisma";

export default async function CalendarPage({
  searchParams,
}: {
  searchParams: { serviceId?: string };
}) {
  const { serviceId } = searchParams;

  if (!serviceId) {
    redirect("/booking/services");
  }

  const service = await prisma.service.findUnique({
    where: { id: serviceId },
  });

  if (!service) {
    redirect("/booking/services");
  }

  // Get all staff that can provide this service
  const staff = await prisma.staff.findMany({
    where: { isActive: true },
  });

  // Get existing bookings for availability check
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 14); // 2 weeks booking window

  const existingBookings = await prisma.booking.findMany({
    where: {
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
    select: {
      staffId: true,
      date: true,
      endTime: true,
    },
  });

  return (
    <Container className="py-10">
      <h1 className="text-3xl font-bold mb-6">Book Your Appointment</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-2">Service Details</h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-700">
          <div>
            <strong>Service:</strong> {service.name}
          </div>
          <div>
            <strong>Duration:</strong> {service.durationMins} minutes
          </div>
          <div>
            <strong>Price:</strong> ${service.price.toString()}
          </div>
        </div>
      </div>
      
      <BookingCalendar
        service={service}
        staff={staff}
        existingBookings={existingBookings}
      />
    </Container>
  );
}
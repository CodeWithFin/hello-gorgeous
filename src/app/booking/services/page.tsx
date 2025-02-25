// src/app/(booking)/services/page.tsx
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/booking/service-card";
import { prisma } from "@/lib/prisma";

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    where: { isActive: true },
    include: { categories: true },
  });

  return (
    <Container className="py-10">
      <h1 className="text-3xl font-bold mb-6">Our Beauty Services</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Book professional makeup services with our experienced team. Choose from our range of beauty services and transform your look.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Container>
  );
}

// src/components/booking/service-card.tsx
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ServiceCardProps {
  service: any; // Replace with proper type
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-shadow hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={service.image || "/images/service-placeholder.jpg"}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="pt-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <div className="mb-2 flex items-center gap-2">
          <span className="text-pink-600 font-bold">
            {formatCurrency(service.price)}
          </span>
          <span className="text-gray-500 text-sm">
            ({service.durationMins} mins)
          </span>
        </div>
        <p className="text-gray-600 line-clamp-3">{service.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full bg-pink-600 hover:bg-pink-700">
          <Link href={`/booking/calendar?serviceId=${service.id}`}>
            Book Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, CalendarDays } from "lucide-react";

type Activity = {
  id: number;
  title: string;
  date: string;
  location: string;
  shortDescription: string;
};

const activities: Activity[] = [
  {
    id: 2,
    title: "Novo Espaço da Oxygeni HUB",
    date: "01 Dez 2025 • 10h",
    location: "Renascença • São Luís - MA",
    shortDescription:
      "Venha conhecer o novo espaço da Oxygeni HUB e participar da inauguração oficial.",
  },
  {
    id: 1,
    title: "Mentoria de Engenharia de Prompt",
    date: "25 Nov 2025 • 19h",
    location: "Online • Google Meet",
    shortDescription:
      "Sessão prática para dominar engenharia de prompts e construir raciocínios com IA.",
  },
];

export function ActivitiesGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
      {activities.map((activity) => (
        <Card
          key={activity.id}
          className="
            group relative overflow-hidden border border-[#E7E2F9]
            bg-linear-to-br from-[#ffffff] via-[#fbf9ff] to-[#f0ebff]
            shadow-sm transition-all duration-200
            hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(81,39,255,0.18)]
            cursor-pointer
          "
        >
          <span
            className="
              pointer-events-none absolute inset-x-0 -top-10 h-24
              bg-linear-to-b from-[#5127FF33] to-transparent
              opacity-0 blur-2xl transition-opacity duration-200
              group-hover:opacity-100
            "
          />

          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <Badge
                variant="outline"
                className="
                  flex items-center gap-1 border-[#C2B3FF] bg-[#f4f0ff]
                  text-xs font-medium text-[#5127FF]
                "
              >
                <CalendarDays className="h-3 w-3" />
                <span>{activity.date}</span>
              </Badge>

              <span className="rounded-full bg-[#5127FF0F] px-3 py-1 text-xs font-medium text-[#5127FF]">
                Evento
              </span>
            </div>

            <CardTitle className="text-lg font-semibold text-[#1A151E] leading-snug">
              {activity.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p className="text-sm text-[#4B4452]">
              {activity.shortDescription}
            </p>

            <div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#5F4B8B]">
              <MapPin className="h-4 w-4" />
              <span>{activity.location}</span>
            </div>
          </CardContent>

          <CardFooter className="mt-2 flex justify-between items-center">
            <Button
              size="sm"
              className="
                rounded-full bg-[#5127FF] text-xs font-semibold text-white
                px-4 py-1.5 shadow-sm
                hover:bg-[#4120cc] hover:shadow-md
                transition-all duration-150
              "
            >
              Ver detalhes
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

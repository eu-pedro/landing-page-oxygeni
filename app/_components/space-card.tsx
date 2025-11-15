import { LucideIcon } from "lucide-react";

interface SpaceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SpaceCard({ icon: Icon, title, description }: SpaceCardProps) {
  return (
    <a
      className="
        group flex flex-col gap-4 p-6 rounded-2xl 
        border border-neutral-200/70 bg-white/80 
        backdrop-blur-sm shadow-sm 
        hover:shadow-xl hover:border-purple-300/60 
        transition-all duration-300 
        dark:bg-neutral-900/70 dark:border-neutral-700
        relative hover:cursor-pointer
      "
      href="#spaces"
    >
      <div
        className="
          absolute inset-0 rounded-2xl 
          opacity-0 group-hover:opacity-100 
          bg-linear-to-br from-purple-500/10 to-transparent 
          transition-all duration-500 pointer-events-none
        "
      />

      <div className="flex items-center gap-4 relative">
        <div
          className="
            flex items-center justify-center 
            h-12 w-12 rounded-xl
            bg-purple-100 text-purple-700 
            dark:bg-purple-900/40 dark:text-purple-300
            group-hover:bg-purple-200 group-hover:text-purple-800
            transition-all duration-300
            group-hover:scale-105 group-hover:rotate-1
          "
        >
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>
    </a>
  );
}

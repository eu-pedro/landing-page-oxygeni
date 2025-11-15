import { LucideIcon } from "lucide-react";


interface SpaceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SpaceCard({ icon: Icon, title, description }: SpaceCardProps) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow dark:bg-neutral-900 dark:border-neutral-800">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}

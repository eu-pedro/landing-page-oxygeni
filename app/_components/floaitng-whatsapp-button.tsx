"use client";

export function FloatingWhatsAppButton() {
  const phone = "5598988075118";
  const message =
    "Olá! Gostaria de saber mais sobre os espaços e projetos da Oxygeni.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Oxygeni no WhatsApp"
      className="
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-9999
        flex items-center gap-2
        rounded-full 
        bg-[#25D366]
        text-white
        px-3 py-2 sm:px-4 sm:py-2.5
        shadow-lg shadow-black/30
        hover:shadow-xl hover:shadow-black/40
        hover:scale-110
        active:scale-95
        transition-all duration-300
      "
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M16.04 3C9.95 3 5 7.95 5 14.03c0 2.46.81 4.73 2.19 6.57L5.5 27l6.6-1.73a10.5 10.5 0 0 0 3.94.76h.01C22.13 26.03 27 21.08 27 15 27 8.92 22.13 3 16.04 3Zm5.98 14.75c-.25.7-1.23 1.3-1.7 1.34-.43.04-.97.06-1.57-.1-.36-.1-.83-.27-1.43-.53-2.52-1.09-4.16-3.63-4.29-3.8-.13-.18-1.02-1.35-1.02-2.58 0-1.24.65-1.84.88-2.08.23-.24.51-.3.68-.3h.49c.16 0 .37-.06.58.44.22.53.74 1.83.8 1.97.06.13.09.29.02.47-.07.18-.11.29-.22.45-.11.16-.23.35-.33.47-.11.12-.22.26-.09.5.13.24.57.94 1.22 1.52.84.75 1.55.99 1.79 1.1.24.12.39.1.53-.06.14-.16.61-.71.77-.96.16-.24.33-.2.55-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.7-.19 1.4Z" />
        </svg>
      </span>
    </a>
  );
}

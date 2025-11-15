"use client";

import Image from "next/image";
import { Instagram, Mail, MapPin, Phone, Globe2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[rgb(14,11,16)] text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-18 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">
          <div className="max-w-md">
            <div className="flex gap-3">
              <div className="relative h-10 w-40 sm:h-12 sm:w-48">
                <Image
                  src="/oxygeni-logo-white.png"
                  alt="Oxygeni"
                  className="object-contain left-0"
                  width={50}
                  height={50}
                />
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-[15px] text-neutral-400 leading-relaxed">
              A Oxygeni conecta educação, tecnologia e inovação para criar
              experiências que transformam realidades. Laboratórios, HUBs,
              projetos e pessoas trabalhando juntas para impulsionar o futuro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full lg:w-auto">
            <div>
              <h4 className="text-sm font-semibold text-neutral-100 tracking-wide mb-3">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <a
                    href="#oxygeni-hub"
                    className="hover:text-white transition-colors"
                  >
                    Oxygeni HUB
                  </a>
                </li>
                <li>
                  <a
                    href="#spaces"
                    className="hover:text-white transition-colors"
                  >
                    Espaços & Laboratórios
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="hover:text-white transition-colors"
                  >
                    Programas & Trilhas
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Fale com a gente
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-neutral-100 tracking-wide mb-3">
                Contato
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-neutral-500" />
                  <a
                    href="mailto:contato@oxygeni.com.br"
                    className="hover:text-white transition-colors"
                  >
                    contato@oxygeni.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-neutral-500" />
                  <span>(xx) xxxx-xxxx</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-neutral-500" />
                  <span>
                    Universidade CEUMA <br />
                    São Luís - MA
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-neutral-100 tracking-wide mb-3">
                Redes & Plataformas
              </h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <a
                    href="https://instagram.com/oxygenihub"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>@oxygenihub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://oxygeni.com.br"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Globe2 className="h-4 w-4" />
                    <span>oxygeni.com.br</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/incode.techschool"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Incode Tech School</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-4 flex items-center justify-center sm:justify-between text-xs text-neutral-500">
          <p className="hidden sm:block text-neutral-600">
            © {new Date().getFullYear()} Oxygeni.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
      text-neutral-400 hover:text-white 
      font-medium text-sm 
      flex items-center gap-1 
      transition-colors duration-300 
      bg-transparent
    "
          >
            Voltar ao topo
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

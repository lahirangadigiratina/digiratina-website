"use client";

import Image from "next/image";
import { useState } from "react";
import type { apartContent } from "@/content/apart";

type ApartElement = (typeof apartContent.elements)[number];

function ApartCard({
  element,
  index,
  isActive,
  isCollapsed,
}: {
  element: ApartElement;
  index: number;
  isActive: boolean;
  isCollapsed: boolean;
}) {
  return (
    <div
      className={`relative h-[15.5rem] overflow-hidden rounded-[1.75rem] border-2 transition-[border-color,box-shadow,background-color] duration-500 ease-out sm:h-full ${
        isActive
          ? "border-brand-steel/50 bg-white shadow-[0_8px_24px_rgb(40_44_104/0.08)]"
          : isCollapsed
            ? "border-brand-steel/35 bg-white"
            : "border-transparent bg-white"
      }`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={element.coverImage}
          alt={element.title}
          fill
          sizes="(max-width: 640px) 100vw, 620px"
          className="object-cover object-center"
          style={
            "coverPosition" in element
              ? { objectPosition: element.coverPosition }
              : undefined
          }
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3
            className={`max-w-[12ch] text-left font-semibold leading-[1.12] tracking-[-0.02em] text-white ${
              isCollapsed
                ? "text-base leading-[1.15] sm:text-lg"
                : "text-xl sm:text-2xl"
            }`}
          >
            {element.title}
          </h3>
        </div>
      </div>

      <div
        className={`absolute inset-0 flex flex-col justify-start bg-white px-5 pb-5 pt-2 transition-opacity duration-500 ease-out motion-reduce:transition-none sm:px-6 sm:pb-6 sm:pt-3 lg:px-7 lg:pb-6 lg:pt-3 ${
          isActive ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`relative h-[5.25rem] w-[44%] max-w-[160px] shrink-0 sm:h-[5.75rem] lg:h-[6rem] ${
            isActive ? "apart-hover-rise" : ""
          }`}
        >
          <Image
            src={element.illustration}
            alt=""
            fill
            sizes="200px"
            className="object-contain object-left-top"
            aria-hidden
          />
        </div>
        <div className="mt-2 sm:mt-2.5">
          <h3
            className={`max-w-[18ch] text-left text-xl font-semibold leading-[1.12] tracking-[-0.02em] text-brand-navy sm:text-2xl ${
              isActive ? "apart-hover-rise apart-hover-rise-delay-1" : ""
            }`}
          >
            {element.title}
          </h3>
          <p
            className={`mt-2 text-left text-sm leading-relaxed text-brand-ink/80 sm:text-[0.9375rem] sm:leading-7 ${
              isActive ? "apart-hover-rise apart-hover-rise-delay-2" : ""
            }`}
          >
            {element.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ApartRow({
  elements,
  startIndex,
}: {
  elements: readonly [ApartElement, ApartElement];
  startIndex: number;
}) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul
      className="flex flex-col gap-3 sm:h-[17.5rem] sm:flex-row sm:gap-2.5 lg:h-[18.75rem]"
      onMouseLeave={() => setActive(null)}
    >
      {elements.map((element, index) => {
        const isActive = active === index;
        const isCollapsed = active !== null && active !== index;

        return (
          <li
            key={element.title}
            tabIndex={0}
            className={`min-w-0 transition-[flex] duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange motion-reduce:transition-none ${
              active === null
                ? "flex-[1_1_0%]"
                : isActive
                  ? "flex-[2.25_1_0%]"
                  : "min-w-[8.5rem] flex-[1.2_1_0%]"
            }`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onBlur={(event) => {
              if (
                !event.currentTarget.parentElement?.contains(
                  event.relatedTarget as Node | null,
                )
              ) {
                setActive(null);
              }
            }}
            onClick={() => setActive(isActive ? null : index)}
          >
            <ApartCard
              element={element}
              index={startIndex + index}
              isActive={isActive}
              isCollapsed={isCollapsed}
            />
          </li>
        );
      })}
    </ul>
  );
}

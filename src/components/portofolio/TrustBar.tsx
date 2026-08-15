import { CalendarDays, ShieldCheck, Layers3, Users } from "lucide-react";
import { TRUST_POINTS } from "./data";

// Trust bar: 4 poin kepercayaan, sama di semua tab (TUGAS 7 — 3 dari 4
// poin diperbarui: "5 Ekosistem Bisnis Terintegrasi", "200+ Klien EFM",
// "Sembilan tahun beroperasi").
const ICONS = [ShieldCheck, Layers3, Users, CalendarDays];

export default function TrustBar() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl bg-[#F5F5F5] p-6 shadow-[0_8px_24px_rgba(3,66,142,0.10)] sm:p-8 lg:grid-cols-4">
      {TRUST_POINTS.map((point, i) => {
        const Icon = ICONS[i];
        return (
          <div
            key={point.title}
            className="flex flex-col items-center gap-2.5 text-center"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#03428E] text-[#03428E]">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="m-0 text-[13px] font-bold text-neutral-900">
                {point.title}
              </p>
              <p className="mt-[3px] text-xs text-[#666666]">
                {point.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

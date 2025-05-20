import { cn, formatCurrency } from "@/lib/utils";
import CardPlusIcon from "@/assets/icons/credit-card-plus.svg?react";
import CardEditIcon from "@/assets/icons/credit-card-edit.svg?react";
import HourGlass from "@/assets/icons/hour-glass.svg?react";
import BankNote from "@/assets/icons/bank-note.svg?react";

const analytics = [
  {
    id: 1,
    title: "Total Active Cards",
    icon: <CardPlusIcon className="text-success-foreground" />,
    value: "26,478",
    trendDirection: "up",
    trendValue: "+9%",
    trendLabel: "this month",
  },
  {
    id: 2,
    title: "Total Personalized Cards",
    icon: <CardEditIcon className="text-[#8020E7]" />,
    value: `${(26478).toLocaleString()}`,
    trendDirection: "up",
    trendValue: "8.5%",
    trendLabel: "this month",
  },
  {
    id: 3,
    title: "Today's Revenue",
    icon: <BankNote className="text-info-foreground" />,
    value: formatCurrency(9300000, {
      locale: "en-NG",
      currency: "NGN",
      shorten: true,
      showSymbol: true,
    }),
    trendDirection: "up",
    trendValue: "+6%",
    trendLabel: "vs yesterday",
  },
  {
    id: 4,
    title: "Pending Requests",
    icon: <HourGlass className="text-warning-foreground" />,
    value: (30).toLocaleString(),
    trendDirection: "attention",
    trendValue: "Requires Attention",
  },
];

export function Analytics({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="mb-2.5 flex items-center gap-2">
        <h2 className="text-foreground text-lg font-bold">Analytics</h2>
        <div className="bg-input h-[0.5px] flex-1" />
      </div>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))]">
        {analytics.map((a) => (
          <AnalyticCard
            key={a.id}
            {...a}
            trendDirection={
              a.trendDirection as AnalyticCardProps["trendDirection"]
            }
            className="flex-1"
          />
        ))}
      </div>
    </section>
  );
}

interface AnalyticCardProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
  trendDirection: "up" | "down" | "attention";
  trendValue: string;
  trendLabel?: string;
  className?: string;
}
export function AnalyticCard({
  icon,
  title,
  value,
  trendDirection,
  trendValue,
  trendLabel,
  className,
}: AnalyticCardProps) {
  return (
    <div
      className={cn(
        "bg-card w-full rounded-lg border px-3 pt-3 pb-4",
        className,
      )}
    >
      <div className="mb-3 flex flex-col gap-1">
        {icon && <span>{icon}</span>}
        <h3 className="text-secondary-foreground text-sm font-medium">
          {title}
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-card-foreground text-2xl font-bold">{value}</span>

        <div className="flex items-center gap-1 text-xs">
          <span
            className={cn("flex items-center gap-1 rounded-sm px-2 py-1", {
              "text-success-foreground bg-success": trendDirection === "up",
              "text-destructive bg-destructive/15": trendDirection === "down",
              "text-warning-foreground": trendDirection === "attention",
            })}
          >
            {
              {
                up: (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9L9 3M9 3H5M9 3V7"
                      stroke="#29A174"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ),
                down: (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9L9 3M9 3H5M9 3V7"
                      stroke="#FF4457"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ),
                attention: (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_112_7112)">
                      <path
                        d="M6 4V6M6 8H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                        stroke="#E78020"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_112_7112">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ),
              }[trendDirection || "up"]
            }

            {trendValue}
          </span>
          {trendLabel && <span className="text-label">{trendLabel}</span>}
        </div>
      </div>
    </div>
  );
}

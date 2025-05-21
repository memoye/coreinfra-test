import { Label, Pie, PieChart } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DashboardDataContainer } from "./dashboard-data-container";
import dummyData from "../../../dummy.json";
import { useMemo } from "react";

const chartData = dummyData.cardStatusDistribution;

const chartConfig = {
  active: {
    label: "Active",
    color: "#01A4AF",
  },
  expired: {
    label: "Expired",
    color: "#FFBA24",
  },
  inactive: {
    label: "Inactive",
    color: "#014DAF",
  },
  blocked: {
    label: "Blocked",
    color: "#8020E7",
  },
  lost: {
    label: "Lost",
    color: "#FF4457",
  },
} satisfies ChartConfig;

export function CardStatusDistributionChart({
  className,
}: {
  className?: string;
}) {
  const totalCards = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.cards, 0);
  }, []);

  return (
    <div className={className}>
      <DashboardDataContainer
        className="h-full"
        title="Card Status Distribution"
        content={
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[300px]"
          >
            <PieChart width={210} height={210}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="cards"
                nameKey="status"
                innerRadius={80}
                outerRadius={90}
                paddingAngle={1}
                cornerRadius={4}
                stroke="none"
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 18}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalCards.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 12}
                            className="fill-label"
                          >
                            Total Cards
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>

              <ChartLegend
                content={<ChartLegendContent className="mt-5 p-4" />}
              />
            </PieChart>
          </ChartContainer>
        }
        hideDialog
      />
    </div>
  );
}

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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

const chartData = dummyData.monthlyIssuance;

const chartConfig = {
  personalized: {
    label: "Personalized",
    color: "#014DAF",
  },
  instant: {
    label: "Instant",
    color: "#CCE2FF",
  },
} satisfies ChartConfig;

export function MonthlyIssuanceChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <DashboardDataContainer
        content={
          <ChartContainer className="" config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              innerRadius={100}
              outerRadius={100}
            >
              <CartesianGrid vertical={false} />
              <YAxis
                dataKey="instant"
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                ticks={[0, 20, 40, 60, 80, 100]}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />

              <ChartTooltip content={<ChartTooltipContent hideLabel />} />

              <ChartLegend
                content={
                  <ChartLegendContent className="mt-5 border-t-[0.7px]! p-4" />
                }
              />

              <Bar
                dataKey="personalized"
                stackId="a"
                fill="var(--color-personalized)"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="instant"
                stackId="a"
                fill="var(--color-instant)"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        }
        title="Monthly Issuance"
      />
    </div>
  );
}

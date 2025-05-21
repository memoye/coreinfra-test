import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Customized,
} from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DashboardDataContainer } from "./dashboard-data-container";
import dummyData from "../../../dummy.json";

const chartData = dummyData.weeklyIncome;

const chartConfig = {
  income: {
    label: "Income",
    color: "#4DAF01",
  },
} satisfies ChartConfig;

export function WeeklyIncomeChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <DashboardDataContainer
        title="Weekly Income"
        className="pb-10"
        content={
          <ChartContainer
            config={chartConfig}
            className="h-64 w-[calc(100%-2rem)]"
          >
            <LineChart
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <Customized
                component={() => (
                  <defs>
                    <filter
                      id="shadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="2"
                        stdDeviation="3"
                        // floodOpacity="0.3"
                        floodColor="#01A4AF78"
                      />
                    </filter>
                  </defs>
                )}
              />

              <CartesianGrid vertical={false} />

              <YAxis
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                ticks={[0, 20, 40, 60, 80, 100]}
              />

              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />

              <Line
                dataKey="income"
                type="natural"
                stroke="var(--color-income)"
                strokeWidth={2}
                dot={false}
                strokeLinecap="round"
                filter="url(#shadow)"
              />
            </LineChart>
          </ChartContainer>
        }
      />
    </div>
  );
}

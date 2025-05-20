import { Analytics } from "./analytics";
import { CardRequestTable } from "./card-requests-table";
import { CardStatusDistributionChart } from "./card-status-distribution-chart";
import { DateRangeSelect } from "./date-range-select";
import { MonthlyIssuanceChart } from "./monthly-issuance-chart";
import { QuickAccessLinks } from "./quick-access-links";
import { WeeklyIncomeChart } from "./weekly-income-chart";
import Welcome from "./welcome";

export function Dashboard() {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4">
        <Welcome />
        <DateRangeSelect className="ml-auto" />
      </div>
      <QuickAccessLinks className="mb-3" />
      <Analytics className="mb-3" />

      <div className="flex flex-col flex-wrap items-stretch gap-2 md:flex-row">
        <div className="flex flex-1 flex-col gap-2 md:min-w-[300px]">
          <MonthlyIssuanceChart />
          <WeeklyIncomeChart className="flex-1" />
        </div>

        <div className="flex flex-1 flex-col-reverse gap-2 md:min-w-[300px] md:flex-col">
          <CardRequestTable className="flex-1" />
          <CardStatusDistributionChart />
        </div>
      </div>
    </div>
  );
}

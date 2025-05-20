import { DateRangeSelect } from "./date-range-select";
import { QuickAccessLinks } from "./quick-access-links";
import Welcome from "./welcome";

export function Dashboard() {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-4">
        <Welcome />
        <DateRangeSelect className="ml-auto" />
      </div>
      <QuickAccessLinks />
    </div>
  );
}

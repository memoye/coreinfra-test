import { useState, useEffect } from "react";
import {
  format,
  // isToday, isYesterday, formatDistanceToNow
} from "date-fns";
import { cn } from "@/lib/utils";

interface WelcomeProps {
  name?: string;
  className?: string;
}

export default function Welcome({ name = "there", className }: WelcomeProps) {
  const lastLogin: Date | undefined = undefined;
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  // Set the default last refresh time on component mount
  useEffect(() => {
    // Use the provided lastLogin prop if available, otherwise use current time
    setLastRefresh(new Date());
  }, []);

  // Format the date in a human-readable format using date-fns
  const formatDate = (date: Date | null) => {
    if (!date) return "";

    // // Check if the date is today or yesterday
    // if (isToday(date)) {
    //   return `Today at ${format(date, "h:mm a")}`;
    // }

    // if (isYesterday(date)) {
    //   return `Yesterday at ${format(date, "h:mm a")}`;
    // }

    // // For recent dates (within a week)
    // if (Date.now() - date.getTime() < 7 * 24 * 60 * 60 * 1000) {
    //   return `${formatDistanceToNow(date, { addSuffix: true })} at ${format(date, "h:mm a")}`;
    // }

    // If it's older than a week, show the full date
    return format(date, "dd/MM/yyyy HH:mm:ss");
  };

  // Determine which date to display
  const displayDate = lastLogin || lastRefresh;

  return (
    <section className={cn("text-foreground mb-3.5", className)}>
      <h1 className="mb-1.5 text-lg font-bold">
        Hi {name}, what would you like to do today?
      </h1>
      <p className="text-xs">
        <span className="font-medium">Last login:</span>
        <span>&nbsp;{formatDate(displayDate)}</span>
      </p>
    </section>
  );
}

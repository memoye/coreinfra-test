import BellIcon from "@/assets/icons/bell.svg?react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

interface NotificationsDropdownProps {
  notifications?: Notification[];
}

export function NotificationsDropdown({
  notifications = [
    {
      id: "1",
      title: "New message received",
      description: "You have a new message from Sarah",
      time: "Just now",
      read: false,
    },
    {
      id: "2",
      title: "Project update",
      description: "Changes were made to Project X",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "3",
      title: "Meeting reminder",
      description: "Team meeting starts in 30 minutes",
      time: "3 hours ago",
      read: true,
    },
  ],
}: NotificationsDropdownProps) {
  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <BellIcon className="size-5!" />
          {unreadCount > 0 && (
            <span className="bg-primary text-primary-foreground absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-medium">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <Card className="border-0 pt-0 shadow-none">
          <CardHeader className="h-fit border-b px-4 pt-4! pb-2!">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="max-h-[300px] overflow-y-auto p-0">
            {notifications.length > 0 ? (
              <div className="flex flex-col">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-3 border-b p-4 last:border-0 ${
                      !notification.read ? "bg-muted/50" : ""
                    }`}
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">
                          {notification.title}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {notification.time}
                        </p>
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {notification.description}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="bg-secondary mt-1 h-2 w-2 rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-32 items-center justify-center">
                <p className="text-muted-foreground text-sm">
                  No notifications
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}

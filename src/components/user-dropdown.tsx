import {
  LogOut,
  User,
  Settings,
  CreditCard,
  HelpCircle,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dummyData from "../../dummy.json";

interface UserDropdownProps {
  user?: {
    name: string;
    email: string;
    imageUrl?: string | null;
  };
  onLogout?: () => void;
}

export function UserDropdown({
  user = dummyData.user,
  onLogout = () => console.log("Logout clicked"),
}: UserDropdownProps) {
  // Get initials from name for avatar fallback
  // const initials = user.name
  //   .split(" ")
  //   .map((n) => n[0])
  //   .join("")
  //   .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="ring-offset-background focus-visible:ring-ring flex size-8 items-center justify-center rounded-full bg-[#f2f4f7] text-[#475467] outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          <Avatar className="size-8">
            <AvatarImage
              src={user.imageUrl || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback className="bg-[#F2F4F7]">
              <UserIcon className="text-muted-foreground size-5" />
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="text-xs font-normal">
          <div className="flex flex-col space-y-1">
            <p className="leading-none font-medium">{user.name}</p>
            <p className="text-muted-foreground leading-none">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-xs">
            <User className="mr-2 size-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs">
            <CreditCard className="mr-2 size-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs">
            <Settings className="mr-2 size-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs">
            <HelpCircle className="mr-2 size-4" />
            <span>Help</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout} className="text-xs">
          <LogOut className="mr-2 size-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

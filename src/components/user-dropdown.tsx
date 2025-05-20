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
          className="ring-offset-background focus-visible:ring-ring flex size-8 items-center justify-center rounded-full bg-[#F2F4F7] text-[#475467] outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none font-medium">{user.name}</p>
            <p className="text-muted-foreground text-xs leading-none">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

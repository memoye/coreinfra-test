import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Mobile Search Icon */}
      <div className="md:hidden">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center rounded-full p-2"
          aria-label="Open search"
        >
          <Search className="" size={20} />
        </Button>
      </div>

      {/* Desktop Search Bar */}
      <div className="w-[214px] max-md:hidden">
        <label className="border-input focus-within:border-ring flex items-center gap-2 rounded-full border px-3.5 py-1">
          <Search size={20} />
          <input
            type="search"
            placeholder="Search"
            className="placeholder:text-muted-foreground text-foreground w-full text-xs outline-none"
          />
        </label>
      </div>

      {/* Mobile Search Overlay */}
      {isOpen && (
        <div
          className={cn(
            "bg-background animate-in fade-in-0 fixed inset-0 z-50 flex flex-col transition-transform duration-300 ease-in-out",
            "md:hidden",
          )}
        >
          <div className="flex items-center justify-between border-b p-4">
            <div className="text-muted-foreground flex flex-1 items-center gap-2 rounded-full px-4 py-2 text-xs">
              <Search className="" size={20} />
              <input
                type="search"
                placeholder="Search"
                className="w-full text-xs outline-none"
                autoFocus={isOpen}
              />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="ml-2 p-2"
              aria-label="Close search"
            >
              <X className="" size={20} />
            </button>
          </div>

          <div className="flex-1 p-4">
            {/* Search results here */}
            <p className="pt-8 text-center">No recent searches</p>
          </div>
        </div>
      )}

      {/* Backdrop for mobile search */}
      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          aria-label="Close search overlay"
        />
      )}
    </div>
  );
}

import { Button } from "@/components/ui/button";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Settings as SettingsIcon, Check } from "lucide-react";
import SettingsContent from "./SettingsContent";

export function Settings() {
  return (
    <Dialog>
      <form className="m-5">
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-grey-400 hover:bg-theme-accent hover:text-blue-950/80 focus-visible:ring-1 focus-visible:ring-theme-accent cursor-pointer"
          >
            <SettingsIcon className="size-5" />
          </Button>
        </DialogTrigger>

        <SettingsContent />
      </form>
    </Dialog>
  );
}

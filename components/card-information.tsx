import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className="text-white font-medium text-[16px] p-1"
        >
          Fill Step
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Fill step</h4>
            <p className="text-sm">
              Es una empresa que surge con el fin de ayudar por medio del
              software.
            </p>
            <div className="text-muted-foreground text-xs">
              En proceso de construcción...
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { joinPromoList } from "@/lib/promo-list";

const PROMO_CODE = "WELCOME40";

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <p className="text-sm font-semibold tracking-widest text-terra uppercase">Happy Bowl Pets Co.</p>
        {joined ? (
          <>
            <DialogTitle className="mt-2 font-display text-3xl font-medium tracking-tight">
              Welcome to the pack! Your code: {PROMO_CODE}
            </DialogTitle>
            <DialogDescription className="mt-2 text-base text-ink/80">
              Enter {PROMO_CODE} at checkout for 40% off your first order.
            </DialogDescription>
            <p className="mt-5 rounded-lg bg-cream px-4 py-3 text-center font-display text-2xl font-medium tracking-wide text-ink">
              {PROMO_CODE}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              First order only. One per customer.
            </p>
          </>
        ) : (
          <>
            <DialogTitle className="mt-2 font-display text-3xl font-medium tracking-tight">
              Unlock 40% OFF 🐾
            </DialogTitle>
            <DialogDescription className="mt-2 text-base text-ink/80">
              Join the Happy Bowl Pets Co. pack and get 40% off your first order.
            </DialogDescription>
            <form
              className="mt-5 flex flex-col gap-3"
              onSubmit={async (event) => {
                event.preventDefault();
                if (sending) return;
                setSending(true);
                try {
                  const result = await joinPromoList({ data: { email } });
                  if (!result.ok) {
                    toast("We couldn’t save that email", {
                      description: "Check the address and try again.",
                    });
                    return;
                  }
                  setJoined(true);
                } catch {
                  toast("We couldn’t save that email", {
                    description: "Try again in a moment.",
                  });
                } finally {
                  setSending(false);
                }
              }}
            >
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="promo-email">Email</Label>
                <Input
                  id="promo-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <Button type="submit" className="mt-1" disabled={sending}>
                {sending ? "Saving…" : "Get My 40% Off"}
              </Button>
              <p className="text-xs leading-relaxed text-muted">
                First order only. One per customer.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

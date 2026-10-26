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

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <p className="text-sm font-semibold tracking-widest text-terra uppercase">Happy Bowl Pets Co.</p>
        <DialogTitle className="mt-2 font-display text-3xl font-medium tracking-tight">
          Discount codes, straight to you
        </DialogTitle>
        <DialogDescription className="mt-2 text-base text-ink/80">
          Leave your email and we’ll send promotion and discount codes when the shop has one.
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
              setOpen(false);
              toast("You’re on the list", {
                description: "Watch your inbox for discount codes.",
              });
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
            {sending ? "Saving…" : "Send me the codes"}
          </Button>
          <p className="text-xs leading-relaxed text-muted">
            Shop notes and discount codes only. Close this if you’d rather not.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

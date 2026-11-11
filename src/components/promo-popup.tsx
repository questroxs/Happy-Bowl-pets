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
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        {code ? (
          <>
            <p className="text-sm font-semibold tracking-widest text-terra uppercase">Happy Bowl Pets Co.</p>
            <DialogTitle className="mt-2 font-display text-3xl font-medium tracking-tight">
              Your 25% code
            </DialogTitle>
            <DialogDescription className="mt-2 text-base text-ink/80">
              Save this. It’s 25% off your first order.
            </DialogDescription>
            <p className="mt-5 rounded-lg bg-cream px-4 py-3 text-center font-display text-3xl font-medium tracking-wide text-ink">
              {code}
            </p>
            <Button type="button" className="mt-4" onClick={() => setOpen(false)}>
              Done
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold tracking-widest text-terra uppercase">Happy Bowl Pets Co.</p>
            <DialogTitle className="mt-2 font-display text-3xl font-medium tracking-tight">
              Unlock 25% OFF 🐾
            </DialogTitle>
            <DialogDescription className="mt-2 text-base text-ink/80">
              Join the Happy Bowl Pets Co. pack and get 25% off your first order. Treats, toys and cozy
              gear your crew will go wild for.
            </DialogDescription>
            <form
              className="mt-5 flex flex-col gap-3"
              onSubmit={async (event) => {
                event.preventDefault();
                if (sending) return;
                setSending(true);
                try {
                  const result = await joinPromoList({ data: { email } });
                  if (!result.ok || !("code" in result) || !result.code) {
                    toast("We couldn’t save that email", {
                      description: "Check the address and try again.",
                    });
                    return;
                  }
                  setCode(result.code);
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
                {sending ? "Saving…" : "Get My 25% Off"}
              </Button>
              <p className="text-xs leading-relaxed text-muted">
                One code for your first order. Close this if you’d rather not.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

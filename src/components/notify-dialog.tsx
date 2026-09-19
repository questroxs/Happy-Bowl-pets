import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getProduct } from "@/lib/catalog";
import { useShopStore } from "@/lib/store";

export function NotifyDialog() {
  const notifySlug = useShopStore((s) => s.notifySlug);
  const closeNotify = useShopStore((s) => s.closeNotify);
  const submitNotify = useShopStore((s) => s.submitNotify);
  const savedEmail = useShopStore((s) => s.email);
  const savedName = useShopStore((s) => s.name);
  const product = notifySlug ? getProduct(notifySlug) : undefined;
  const [email, setEmail] = useState(savedEmail);
  const [name, setName] = useState(savedName);

  return (
    <Dialog
      open={Boolean(notifySlug)}
      onOpenChange={(open) => {
        if (!open) closeNotify();
        if (open) {
          setEmail(savedEmail);
          setName(savedName);
        }
      }}
    >
      <DialogContent>
        <DialogTitle>We’ll tell you when this lands</DialogTitle>
        <DialogDescription>
          {product
            ? `${product.name} isn’t for sale yet. Leave a note and we’ll email you when checkout opens.`
            : "Leave a note and we’ll email you when checkout opens."}
        </DialogDescription>
        <form
          className="mt-5 flex flex-col gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            if (!notifySlug) return;
            submitNotify(email.trim(), name.trim(), notifySlug);
            toast("You’re on the list", {
              description: product
                ? `We’ll write when ${product.name} is in stock.`
                : "We’ll write when this is in stock.",
            });
          }}
        >
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="notify-name">Name</Label>
            <Input
              id="notify-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="notify-email">Email</Label>
            <Input
              id="notify-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />
          </div>
          <Button type="submit" className="mt-2">
            Notify me
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

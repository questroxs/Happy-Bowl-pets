import { useState } from "react";
import { revealVisits } from "@/lib/visits";

export function VisitorGate() {
  const [code, setCode] = useState("");
  const [total, setTotal] = useState<number | null>(null);
  const [miss, setMiss] = useState(false);

  const punch = (value: string) => {
    const next = value.replace(/\D/g, "").slice(0, 4);
    setCode(next);
    setMiss(false);
    if (next.length < 4) return;
    void revealVisits({ data: next })
      .then((result) => {
        if (result.ok) {
          setTotal(result.total);
          return;
        }
        setCode("");
        setMiss(true);
      })
      .catch(() => {
        setCode("");
        setMiss(true);
      });
  };

  if (total != null) {
    return (
      <p className="text-sm text-muted">
        Visitors <span className="font-medium text-ink">{total.toLocaleString()}</span>
      </p>
    );
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        punch(code);
      }}
    >
      <label className="sr-only" htmlFor="staff-code">
        Staff code
      </label>
      <input
        id="staff-code"
        inputMode="numeric"
        autoComplete="off"
        maxLength={4}
        value={code}
        onChange={(event) => punch(event.target.value)}
        className="h-8 w-16 rounded-md border border-line bg-paper px-2 text-center text-sm tracking-[0.2em] text-ink outline-none focus:border-sage"
        aria-invalid={miss}
      />
      {miss ? <span className="text-xs text-muted">No</span> : null}
    </form>
  );
}

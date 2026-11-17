"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { Button } from "@/components/ui/button";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * TEMPORARY — proves the two feedback primitives before they are wired into
 * real flows in Blocks 8 and 9. Deleted together with the style-guide page
 * in Block 6 (C16).
 */
export function FeedbackDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-2 rounded-2xl border bg-card p-5">
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          toast.success("Studio published", {
            description: "Aperture No. 4 is now visible in Explore.",
          })
        }
      >
        Success toast
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          toast.error("Could not save changes", {
            description: "The selected hours overlap an existing booking.",
          })
        }
      >
        Error toast
      </Button>

      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          toast.info("Draft restored", {
            description: "We kept your unsaved listing from 12 minutes ago.",
          })
        }
      >
        Info toast
      </Button>

      <Button size="sm" variant="destructive" onClick={() => setOpen(true)}>
        <Trash2 className="size-4" aria-hidden="true" />
        Delete studio
      </Button>

      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        tone="destructive"
        title="Delete “Aperture No. 4”?"
        description="This permanently removes the listing, its photos and its reviews. Existing bookings are kept for your records."
        confirmLabel="Delete studio"
        onConfirm={async () => {
          await wait(900);
          setOpen(false);
          toast.success("Studio deleted", {
            description: "Aperture No. 4 has been removed from your listings.",
          });
        }}
      />
    </div>
  );
}

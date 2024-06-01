"use client";

import { DashboardPageHeaderNav } from "@/components/dashboard/page";
import { Button } from "@/components/ui/button";
import { TodoUpsertSheet } from "./todo-upsert-sheet";

export function TodoPageHeaderNav() {
  return (
    <DashboardPageHeaderNav>
      <TodoUpsertSheet>
        <Button>Add Todo</Button>
      </TodoUpsertSheet>
    </DashboardPageHeaderNav>
  );
}

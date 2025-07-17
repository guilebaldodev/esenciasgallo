import { Suspense } from "react";
import ClientCatalog from "@/app/ui/CatalogComponent";

export default function CatalogPage() {
  return (
    <Suspense fallback={<div>Cargando catálogo…</div>}>
      <ClientCatalog />
    </Suspense>
  );
}
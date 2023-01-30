import Link from "next/link";
import Layout from "@/components/layout";

export default function Pagina404() {
  return (
    <Layout title="Página No Encontrada">
      <p className="error"> Pagina No Encontrada</p>
      <Link href={`/`} className="error-enlace">
        Ir a Inicio
      </Link>
    </Layout>
  );
}

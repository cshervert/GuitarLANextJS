import Image from "next/image";
import Link from "next/link";
import { formatearFechas } from "@/utils/helpers";
import styles from "@/styles/blog.module.css";

function Post({ post }) {
  const { titulo, contenido, url, publishedAt, imagen } = post;
  return (
    <article  className={styles.contenido}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen Blog ${titulo}`}
        width={600}
        height={400}
      />
      <div>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFechas(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}

export default Post;

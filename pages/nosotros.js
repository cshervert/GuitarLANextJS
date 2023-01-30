import Image from "next/image";
import Layout from "@/components/layout";
import styles from "@/styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" alt="logo" width={1000} height={800} />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vulputate mauris quis tortor feugiat, sed dapibus nunc varius.
              Aliquam erat volutpat. Pellentesque viverra, odio at efficitur
              viverra, magna mauris condimentum sapien, et imperdiet lectus ante
              eget leo. Donec feugiat gravida tellus dictum ultricies. 
            </p>
            <p>
              Sed mattis, nisl ullamcorper iaculis porta, dolor libero lobortis
              ante, vitae rhoncus mauris diam vitae odio. Sed felis dolor,
              interdum ac pulvinar a, maximus quis nisi. Donec feugiat, dui sit
              amet tincidunt vehicula, est eros scelerisque dolor, nec tempor
              dui mi ac ligula. Morbi eget orci elit. Etiam venenatis ornare
              nisi in faucibus. Aenean orci arcu, gravida vitae purus a,
              volutpat vulputate lectus.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

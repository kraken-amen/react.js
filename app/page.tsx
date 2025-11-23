import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import List from "@/components/List";
import Abbout from "./about/page";
import Link from "next/link";

function Home() {
  let p=true;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>amen start react </p>
        <Header tx={"amegn"}
        t="fffff"/>
        {p &&< List g="je suis un list"/>}
        <Link href="/about">do about</Link>
      </main>
    </div>
  );
}
export default Home;

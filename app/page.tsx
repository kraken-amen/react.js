import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import List from "@/components/List";

function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>amen start react </p>
        <Header tx={"amegn"}
        t="fffff"/>
        <List g="je suis un list"/>
      </main>
    </div>
  );
}
export default Home;

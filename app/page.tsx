'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import List from "@/components/List";
import Abbout from "./about/page";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

function Home() {
  let [count, setcount] = useState(1);
  let [b, setb] = useState(false);
  let inputRef = useRef<HTMLInputElement>(null);
  let n = "stop"
  let income =useMemo(()=>count*1000,[b])



  const t = () => {
    setcount(count + 1);
    if (count === 20) {
      setb(true);
    }
  }
  const hand = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    console.log(inputRef.current?.value);
  }
  useEffect(() => { console.log("20") }, [b]
  )
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home</h1>
        <div>cont: {count} <br />
        <div>{income}</div>
          <input ref={inputRef} onChange={hand} />
          <button onClick={t}>click</button>
          <div>{b && n}</div>
        </div>
      </main>
    </div>
  );
}
export default Home;

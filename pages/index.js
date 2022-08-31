import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Page, Text } from "@geist-ui/core";
import Router from "next/router";

export default function Home() {
  return (
    <Page className={styles.page}>
      <div className={styles.title}>
        <Text h1>A community</Text>
        <Text h1>of <span>builders</span> at</Text>
        <Text h1>the University of Virginia</Text>
      </div>
      <Button onClick={() => Router.push("http://join.vesatuva.org")}>I'm interested</Button>
    </Page>
  );
}

import React from "react";
import styles from "./Search.module.scss";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import RentObjects from "../../components/rentObjects/rentObjects";
import Map from "./components/Map/Map";

const Index = () => {
  const router = useRouter();
  const { bbox1, bbox2, bbox3, bbox4 } = router.query;
  const bbox = [
    [+bbox1, +bbox3],
    [+bbox2, +bbox4],
  ];
  console.log(bbox);
  return (
    <MainLayout>
      <section className={styles.main}>
        <RentObjects bbox={bbox} className={styles.main__objects} />
        <Map bbox={bbox}></Map>
      </section>
    </MainLayout>
  );
};

export default Index;

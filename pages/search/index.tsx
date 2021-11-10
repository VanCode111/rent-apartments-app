import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import RentObjects from "../../components/rentObjects/rentObjects";

const Index = () => {
  const router = useRouter();
  const [apartments, setApartments] = useState([]);
  const [bbox, setBbox] = useState(null);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  console.log(fullScreen);
  useEffect(() => {
    const { bbox1, bbox2, bbox3, bbox4 } = router.query;
    const bbox = [
      [+bbox1, +bbox3],
      [+bbox2, +bbox4],
    ];
    setBbox(bbox);
  }, [router]);

  return (
    <MainLayout>
      <section className={styles.main}>
        <RentObjects
          loadObjects={(objects) => setApartments(objects)}
          bbox={bbox}
          className={styles.main__objects}
        />
      </section>
    </MainLayout>
  );
};

export default Index;

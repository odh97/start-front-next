"use client";
import React, { useEffect, useState } from "react";
import useBearStore from "@/store/userStore";
import Image from "next/image";
import { getPicsumImages } from "@/service/imageService";

export default function BoardStore() {
  const { bears, increase } = useBearStore();

  const [images, setImages] = useState<string | null>(null);

  useEffect(() => {
    getPicsumImages().then((res) => {
      setImages(res);
    });
  }, []);

  return (
    <>
      <div>{`bears - ${bears}`}</div>
      <button
        className={"rounded border border-blue-800 px-4"}
        onClick={() => {
          increase(1);
        }}
      >
        increase ++
      </button>
      {images && <Image src={images} alt={"images"} width={200} height={300} />}
    </>
  );
}

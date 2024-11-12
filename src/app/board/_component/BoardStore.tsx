"use client";
import React, { useEffect, useState } from "react";
import useBearStore from "@/store/userStore";
import Image from "next/image";
import { getPicsumImages } from "@/service/imageService";
import { useQuery, QueryClient } from "@tanstack/react-query";

export default function BoardStore() {
  const { bears, increase } = useBearStore();

  const queryClient = new QueryClient();
  const { data: imageData, refetch } = useQuery({
    queryKey: ["picsumImages"],
    queryFn: () => getPicsumImages(),
  });

  function handleTestClick() {
    increase(1);
    queryClient.invalidateQueries({
      queryKey: ["picsumImages"],
    });
  }

  return (
    <>
      <div>{`bears - ${bears}`}</div>
      <button
        className={"rounded border border-blue-800 px-4"}
        onClick={() => handleTestClick()}
      >
        increase ++
      </button>
      {imageData && (
        <Image src={imageData} alt={"images"} width={200} height={300} />
      )}
    </>
  );
}

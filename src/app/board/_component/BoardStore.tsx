"use client";
import React from "react";
import useBearStore from "@/store/userStore";

export default function BoardStore() {
  const { bears, increase } = useBearStore();

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
    </>
  );
}

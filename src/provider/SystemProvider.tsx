"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function SystemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    // 기본적으로 모든 쿼리에 적용
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true, // 윈도우 포커스시 새로고침
      },
      // mutation 설정
      mutations: {
        retry: (failureCount: number, error: any) => {
          return failureCount <= 2 && error?.cause?.status === 401; // 최대 2번까지 재시도하며, 인증에러일경우에만 재시도
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

"use client";

import { useSyncExternalStore } from "react";

let cachedHasWebGL: boolean | null = null;

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return true;
  if (cachedHasWebGL !== null) return cachedHasWebGL;

  try {
    const canvas = document.createElement("canvas");
    cachedHasWebGL = Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    cachedHasWebGL = false;
  }
  return cachedHasWebGL;
}

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return checkWebGLSupport();
}

function getServerSnapshot() {
  return true;
}

export function useWebGL() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { LogOut, Settings, X } from "lucide-react";

import {
  clearAuthCookies,
  getAccessToken,
  getStoredUsername,
} from "@/lib/auth-cookies";

function usernameInitial(username: string): string {
  const trimmed = username.trim();
  if (!trimmed) return "?";
  const first = Array.from(trimmed)[0];
  return first ? first.toLocaleUpperCase() : "?";
}

export function NavbarAuth() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [username, setUsername] = useState<string | undefined>(() =>
    getStoredUsername()
  );

  const access = getAccessToken();
  const loggedIn = Boolean(access);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const logout = () => {
    clearAuthCookies();
    setUsername(undefined);
    closeDialog();
    router.push("/");
    router.refresh();
  };

  if (!loggedIn) {
    return (
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href="/login"
          className="rounded-xl border border-black bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all duration-300 hover:bg-zinc-900 hover:shadow-black/40 sm:px-5"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-inner ring-1 ring-zinc-200 transition-all duration-300 hover:bg-zinc-50 sm:px-5 dark:bg-zinc-950 dark:text-white dark:ring-zinc-800 dark:hover:bg-zinc-900"
        >
          Signup
        </Link>
      </div>
    );
  }

  const initial = usernameInitial(username ?? "");

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-red-600 bg-red-600 text-sm font-bold text-white shadow-md shadow-red-600/30 transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        aria-haspopup="dialog"
        aria-label="Account menu"
      >
        {initial}
      </button>

      <dialog
        ref={dialogRef}
        className="fixed left-1/2 top-1/2 z-[200] w-[min(calc(100vw-2rem),18rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-zinc-200 bg-white p-0 text-zinc-900 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 dark:text-white [&::backdrop]:bg-black/50"
      >
        <div className="flex items-start justify-between gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Signed in as
            </p>
            <p className="truncate font-semibold text-zinc-900 dark:text-zinc-100">
              {username ?? "Account"}
            </p>
          </div>
          <button
            type="button"
            onClick={closeDialog}
            className="rounded-lg p-1.5 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-white"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex flex-col py-1">
          <Link
            href="/settings"
            onClick={closeDialog}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            <Settings className="size-4 shrink-0" aria-hidden />
            Settings
          </Link>
          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40"
          >
            <LogOut className="size-4 shrink-0" aria-hidden />
            Log out
          </button>
        </div>
      </dialog>
    </>
  );
}

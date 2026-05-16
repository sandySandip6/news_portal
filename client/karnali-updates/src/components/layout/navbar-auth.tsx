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
          className="rounded-xl border border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primary/90 sm:px-5"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-card-foreground shadow-inner transition-all duration-300 hover:bg-muted sm:px-5"
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
        className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary text-sm font-bold text-primary-foreground shadow-md shadow-primary/30 transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-haspopup="dialog"
        aria-label="Account menu"
      >
        {initial}
      </button>

      <dialog
        ref={dialogRef}
        className="fixed left-1/2 top-1/2 z-[200] w-[min(calc(100vw-2rem),18rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-0 text-card-foreground shadow-2xl [&::backdrop]:bg-background/80"
      >
        <div className="flex items-start justify-between gap-2 border-b border-border px-4 py-3">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Signed in as
            </p>
            <p className="truncate font-semibold text-foreground">
              {username ?? "Account"}
            </p>
          </div>
          <button
            type="button"
            onClick={closeDialog}
            className="rounded-lg p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex flex-col py-1">
          <Link
            href="/settings"
            onClick={closeDialog}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            <Settings className="size-4 shrink-0" aria-hidden />
            Settings
          </Link>
          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-medium text-primary transition hover:bg-primary/10"
          >
            <LogOut className="size-4 shrink-0" aria-hidden />
            Log out
          </button>
        </div>
      </dialog>
    </>
  );
}

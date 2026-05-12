"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { Newspaper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/auth";

const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, "Username is required")
    .max(150, "Username is too long"),
  password: z
    .string()
    .min(7, "Password must be at least 7 characters")
    .max(128, "Password is too long"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

function getLoginErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    const data = err.response?.data as
      | Record<string, string | string[]>
      | string
      | undefined;
    if (typeof data === "string") return data;
    const detail =
      data && typeof data === "object" && "detail" in data ? data.detail : undefined;
    if (typeof detail === "string") return detail;
    if (Array.isArray(detail)) return detail.join(" ");
    const nonField =
      data && typeof data === "object" && "non_field_errors" in data
        ? data.non_field_errors
        : undefined;
    if (Array.isArray(nonField)) return nonField.join(" ");
    if (err.response?.status === 401) return "Incorrect username or password.";
    return "Could not sign in. Please try again.";
  }
  if (err instanceof Error) return err.message;
  return "Something went wrong. Please try again.";
}

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setError("");
    setIsLoading(true);
    try {
      const data = await loginUser({
        username: values.username,
        password: values.password,
      });
      Cookies.set("access", data.access, { sameSite: "lax", path: "/" });
      Cookies.set("refresh", data.refresh, { sameSite: "lax", path: "/", expires: 7 });
      console.log("data", data); 
      router.push("/");
      router.refresh();
    } catch (err) {
      setError(getLoginErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-svh flex-1 flex-col bg-muted/30">
      <div className="flex flex-1 flex-col justify-center px-4 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-[400px]">
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Newspaper className="size-5 text-primary" aria-hidden />
            <span>Karnali Updates</span>
          </Link>

          <div className="rounded-xl border border-border bg-card px-6 py-8 shadow-sm">
            <div className="mb-6 space-y-1">
              <h1 className="text-xl font-semibold tracking-tight text-card-foreground">
                Sign in
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to manage news and content.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              {error ? (
                <div
                  role="alert"
                  className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive dark:bg-destructive/20 dark:text-destructive"
                >
                  {error}
                </div>
              ) : null}

              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-foreground">
                  Username
                </label>
                <Input
                  id="username"
                  autoComplete="username"
                  aria-invalid={!!errors.username}
                  disabled={isLoading}
                  {...register("username")}
                />
                {errors.username ? (
                  <p className="text-xs text-destructive">{errors.username.message}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  aria-invalid={!!errors.password}
                  disabled={isLoading}
                  {...register("password")}
                />
                {errors.password ? (
                  <p className="text-xs text-destructive">{errors.password.message}</p>
                ) : null}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading} size="lg">
                {isLoading ? "Signing in…" : "Sign in"}
              </Button>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            <Link href="/" className="underline-offset-4 hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

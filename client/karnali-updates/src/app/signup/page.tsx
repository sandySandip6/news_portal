"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { Newspaper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setAuthSession } from "@/lib/auth-cookies";
import { signupUser } from "@/services/auth";

const signupSchema = z
  .object({
    username: z.string().trim().min(1, "Username is required").max(150, "Username is too long"),
    email: z.string().trim().max(254, "Email is too long"),
    password: z.string().min(7, "Password must be at least 7 characters").max(128, "Password is too long"),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .superRefine((d, ctx) => {
    if (d.email === "") return;
    const ok = z.string().email().safeParse(d.email).success;
    if (!ok) {
      ctx.addIssue({ code: "custom", message: "Enter a valid email", path: ["email"] });
    }
  });

type SignupFormValues = z.infer<typeof signupSchema>;

function getSignupErrorMessage(err: unknown): string {
  if (axios.isAxiosError(err)) {
    const data = err.response?.data as Record<string, unknown> | string | undefined;
    if (typeof data === "string") return data;
    if (data && typeof data === "object") {
      const parts: string[] = [];
      for (const [key, val] of Object.entries(data)) {
        if (key === "detail" && typeof val === "string") parts.push(val);
        else if (Array.isArray(val) && val.every((v) => typeof v === "string")) {
          parts.push(`${key}: ${val.join(" ")}`);
        } else if (typeof val === "string") parts.push(val);
      }
      if (parts.length) return parts.join(" ");
    }
    return "Could not create account. Please try again.";
  }
  if (err instanceof Error) return err.message;
  return "Something went wrong. Please try again.";
}

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { username: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (values: SignupFormValues) => {
    setError("");
    setIsLoading(true);
    try {
      const emailTrim = values.email.trim();
      const data = await signupUser({
        username: values.username.trim(),
        password: values.password,
        password2: values.confirmPassword,
        ...(emailTrim ? { email: emailTrim } : {}),
      });

      if (data.access && data.refresh) {
        const name =
          values.username.trim() ||
          (typeof data.user?.username === "string" ? data.user.username : "") ||
          (typeof data.username === "string" ? data.username : "");
        setAuthSession({
          access: data.access,
          refresh: data.refresh,
          username: name || "User",
        });
        router.push("/");
        router.refresh();
        return;
      }

      router.push("/login?registered=1");
      router.refresh();
    } catch (err) {
      setError(getSignupErrorMessage(err));
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
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Sign up to save preferences and follow stories.
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
                <label htmlFor="su-username" className="text-sm font-medium text-foreground">
                  Username
                </label>
                <Input
                  id="su-username"
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
                <label htmlFor="su-email" className="text-sm font-medium text-foreground">
                  Email <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <Input
                  id="su-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  disabled={isLoading}
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="su-password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <Input
                  id="su-password"
                  type="password"
                  autoComplete="new-password"
                  aria-invalid={!!errors.password}
                  disabled={isLoading}
                  {...register("password")}
                />
                {errors.password ? (
                  <p className="text-xs text-destructive">{errors.password.message}</p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="su-confirm" className="text-sm font-medium text-foreground">
                  Confirm password
                </label>
                <Input
                  id="su-confirm"
                  type="password"
                  autoComplete="new-password"
                  aria-invalid={!!errors.confirmPassword}
                  disabled={isLoading}
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword ? (
                  <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>
                ) : null}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading} size="lg">
                {isLoading ? "Creating account…" : "Sign up"}
              </Button>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-foreground underline-offset-4 hover:underline">
              Sign in
            </Link>
            {" · "}
            <Link href="/" className="underline-offset-4 hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

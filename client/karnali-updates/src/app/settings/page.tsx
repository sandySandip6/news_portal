import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-4 py-12">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Settings</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Account and notification preferences will appear here.
        </p>
      </div>
      <Link href="/" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
        ← Back to home
      </Link>
    </main>
  );
}

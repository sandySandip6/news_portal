/** Runs before paint so the correct theme class is on `<html>` (avoids flash + hydration fights). */
export function ThemeScript() {
  const script = `
(function () {
  try {
    var key = "karnali-updates-theme";
    var theme = localStorage.getItem(key) || "dark";
    var root = document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "dark") root.classList.add("dark");
    else if (theme === "light") root.classList.add("light");
    else root.classList.add("dark");
  } catch (e) {}
})();
`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}

// // src/app/components/ThemeSwitcher.tsx
// "use client";

// import { useTheme } from "next-themes";
// import { Sun, Moon } from "lucide-react";
// import { useEffect, useState } from "react";

// export function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   // Setelah mounting di client, kita set state menjadi true
//   useEffect(() => setMounted(true), []);

//   // Jika belum di-mount, jangan render apa-apa untuk menghindari hydration mismatch
//   if (!mounted) {
//     return null;
//   }

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
//       aria-label="Toggle theme"
//     >
//       {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }
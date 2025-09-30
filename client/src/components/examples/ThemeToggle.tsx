import { ThemeProvider } from "../ThemeProvider";
import { ThemeToggle } from "../ThemeToggle";

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-4 flex items-center gap-4">
        <span>Toggle theme:</span>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

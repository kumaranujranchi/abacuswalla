import { ThemeProvider } from "@/components/ThemeProvider";
import ContactPage from "../ContactPage";

export default function ContactPageExample() {
  return (
    <ThemeProvider>
      <ContactPage />
    </ThemeProvider>
  );
}

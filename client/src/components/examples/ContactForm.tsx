import { ThemeProvider } from "../ThemeProvider";
import { ContactForm } from "../ContactForm";

export default function ContactFormExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-2xl">
        <ContactForm />
      </div>
    </ThemeProvider>
  );
}

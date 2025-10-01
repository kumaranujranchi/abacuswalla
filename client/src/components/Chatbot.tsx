import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertInquiry, Program } from "@shared/schema";
import { MessageSquare, X } from "lucide-react";

type Message = { role: "bot" | "user"; text: string };
type ContactStep =
  | "none"
  | "parentName"
  | "email"
  | "phone"
  | "childName"
  | "childAge"
  | "program"
  | "confirm";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text:
        "Hi! I’m here to help. Ask about programs, olympiads, worksheets, or type ‘book demo’ to leave your contact.",
    },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<ContactStep>("none");
  const [contact, setContact] = useState<Partial<InsertInquiry>>({});
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { data: programs = [] } = useQuery<Program[]>({
    queryKey: ["/api/programs"],
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  // Auto-open chat on first visit per session and greet the visitor
  useEffect(() => {
    const shown = sessionStorage.getItem("chatbot_auto_opened");
    if (!shown) {
      setOpen(true);
      setMessages((m) => [...m, { role: "bot", text: "Can I help you?" }]);
      sessionStorage.setItem("chatbot_auto_opened", "1");
    }
  }, []);

  const programTitles = useMemo(() =>
    programs.map((p) => ({ id: p.id, title: p.title.toLowerCase() })),
  [programs]);

  const submitInquiry = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await apiRequest("POST", "/api/inquiries", data);
      return res.json();
    },
    onSuccess: () => {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Thanks! Your demo request has been received." },
      ]);
      setStep("none");
      setContact({});
    },
    onError: (err: any) => {
      setMessages((m) => [
        ...m,
        { role: "bot", text: `Sorry, that failed: ${err?.message || "error"}` },
      ]);
    },
  });

  function pushBot(text: string) {
    setMessages((m) => [...m, { role: "bot", text }]);
  }

  function handleIntent(text: string) {
    const t = text.toLowerCase();

    if (/book|demo|trial|contact|enquir/.test(t)) {
      setStep("parentName");
      pushBot("Great! Let’s book a free demo. What’s your name?");
      return;
    }

    if (/programs|courses|offerings|classes/.test(t)) {
      if (programs.length) {
        const list = programs.map((p) => `• ${p.title}`).join("\n");
        pushBot(`We offer:\n${list}\nYou can ask about any program by name.`);
      } else {
        pushBot("I’m fetching programs, please try again in a moment.");
      }
      return;
    }

    const matched = programTitles.find((p) => t.includes(p.title));
    if (matched) {
      pushBot(
        `Here’s more about ${matched.title}: visit /programs for details. Type 'book demo' to schedule a class.`,
      );
      return;
    }

    if (/fees|price|cost/.test(t)) {
      pushBot(
        "Pricing varies by program and level. Type ‘book demo’ and I’ll collect your details so our team can share exact pricing.",
      );
      return;
    }

    if (/olympiad/.test(t)) {
      pushBot(
        "We host Abacus and Talent Olympiads. Check the Olympiad pages, or leave your email via ‘book demo’ for details.",
      );
      return;
    }

    pushBot(
      "I can help with programs, demos, worksheets, and olympiads. Try ‘book demo’ or ask about a specific program name.",
    );
  }

  function handleContactFlow(userText: string) {
    const t = userText.trim();
    switch (step) {
      case "parentName":
        setContact((c) => ({ ...c, parentName: t }));
        setStep("email");
        pushBot("Thanks! What’s your email?");
        break;
      case "email":
        setContact((c) => ({ ...c, email: t }));
        setStep("phone");
        pushBot("Got it. What’s your phone number?");
        break;
      case "phone":
        setContact((c) => ({ ...c, phone: t }));
        setStep("childName");
        pushBot("What’s your child’s name?");
        break;
      case "childName":
        setContact((c) => ({ ...c, childName: t }));
        setStep("childAge");
        pushBot("Child’s age?");
        break;
      case "childAge":
        setContact((c) => ({ ...c, childAge: t }));
        setStep("program");
        if (programs.length) {
          const list = programs.map((p) => p.title).join(", ");
          pushBot(`Which program are you interested in? (${list})`);
        } else {
          pushBot("Which program are you interested in? (e.g., Abacus)");
        }
        break;
      case "program": {
        const match = programTitles.find((p) => t.toLowerCase().includes(p.title));
        const programId = match?.id;
        const payload: InsertInquiry = {
          parentName: contact.parentName || "",
          email: (contact.email || "").toLowerCase().trim(),
          phone: contact.phone || "",
          childName: contact.childName || "",
          childAge: contact.childAge || "",
          programId,
          message: "Chatbot demo request",
        };
        setStep("confirm");
        pushBot("Thanks! Submitting your demo request now…");
        submitInquiry.mutate(payload);
        break;
      }
      default:
        handleIntent(userText);
        break;
    }
  }

  function onSend() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    if (step === "none") {
      handleIntent(text);
    } else {
      handleContactFlow(text);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <Button
          onClick={() => setOpen(true)}
          className="rounded-full shadow-lg"
          size="lg"
          aria-label="Open Chatbot"
        >
          <MessageSquare className="mr-2 h-5 w-5" /> Chat
        </Button>
      ) : (
        <Card className="w-[88vw] max-w-[320px] sm:w-[380px] shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between py-2">
            <CardTitle className="text-lg">Assistant</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="pt-0">
            <div
              ref={scrollRef}
              className="h-52 sm:h-64 overflow-y-auto space-y-3 border rounded-md p-3 bg-muted/20"
            >
              {messages.map((m, i) => (
                <div key={i} className={m.role === "bot" ? "text-sm" : "text-sm text-right"}>
                  <span
                    className={
                      m.role === "bot"
                        ? "inline-block px-3 py-2 rounded-lg bg-background border"
                        : "inline-block px-3 py-2 rounded-lg bg-accent text-accent-foreground"
                    }
                  >
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") onSend();
                }}
                placeholder="Type a message…"
                aria-label="Chat input"
              />
              <Button onClick={onSend}>Send</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
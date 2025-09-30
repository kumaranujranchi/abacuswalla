import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FileText, Download } from "lucide-react";

export default function ResourcesPage() {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedWorksheet, setSelectedWorksheet] = useState("");

  //todo: remove mock functionality
  const worksheets = [
    {
      title: "Basic Addition Practice",
      grade: "Grade 1-2",
      topic: "Addition",
      description: "10 practice problems for single-digit addition"
    },
    {
      title: "Subtraction Mastery",
      grade: "Grade 2-3",
      topic: "Subtraction",
      description: "15 problems progressing from simple to complex"
    },
    {
      title: "Multiplication Tables",
      grade: "Grade 3-4",
      topic: "Multiplication",
      description: "Complete 1-10 times tables with practice exercises"
    },
    {
      title: "Mental Math Drills",
      grade: "Grade 4-5",
      topic: "Mental Math",
      description: "Speed calculation exercises for mental arithmetic"
    },
    {
      title: "Division Fundamentals",
      grade: "Grade 3-4",
      topic: "Division",
      description: "Introduction to division with visual aids"
    },
    {
      title: "Mixed Operations Challenge",
      grade: "Grade 5-6",
      topic: "Mixed",
      description: "Advanced problems combining all operations"
    },
  ];

  const handleDownload = (title: string) => {
    setSelectedWorksheet(title);
    setEmailDialogOpen(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Download worksheet:", selectedWorksheet, "Email:", email);
    setEmailDialogOpen(false);
    setEmail("");
  };

  return (
    <div>
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Free Learning Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Download free worksheets and practice materials to support your child's learning journey.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worksheets.map((worksheet, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-worksheet-${index}`}>
              <CardHeader className="gap-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <CardTitle className="font-heading text-xl">{worksheet.title}</CardTitle>
                  <Badge variant="outline" data-testid={`badge-grade-${index}`}>{worksheet.grade}</Badge>
                </div>
                <Badge className="w-fit" data-testid={`badge-topic-${index}`}>{worksheet.topic}</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    {worksheet.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full rounded-full font-accent"
                  onClick={() => handleDownload(worksheet.title)}
                  data-testid={`button-download-${index}`}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Want More Resources?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive new worksheets, learning tips, and exclusive content for parents.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => {
              e.preventDefault();
              console.log("Newsletter signup:", email);
            }}>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" className="rounded-full font-accent" data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Dialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
        <DialogContent data-testid="dialog-email-capture">
          <DialogHeader>
            <DialogTitle className="font-heading">Download Worksheet</DialogTitle>
            <DialogDescription>
              Enter your email to receive the worksheet and future learning resources.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="download-email">Email Address</Label>
              <Input
                id="download-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                data-testid="input-dialog-email"
              />
            </div>
            <Button type="submit" className="w-full rounded-full font-accent" data-testid="button-dialog-download">
              Download Worksheet
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

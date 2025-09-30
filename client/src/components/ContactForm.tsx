import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Card data-testid="card-contact-form">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Book a Free Demo Class</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parentName">Parent's Name *</Label>
              <Input
                id="parentName"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="Enter your name"
                required
                data-testid="input-parent-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
                data-testid="input-email"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 123-4567"
                required
                data-testid="input-phone"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="childName">Child's Name *</Label>
              <Input
                id="childName"
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                placeholder="Enter child's name"
                required
                data-testid="input-child-name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="childAge">Child's Age *</Label>
              <Select
                value={formData.childAge}
                onValueChange={(value) => setFormData({ ...formData, childAge: value })}
              >
                <SelectTrigger id="childAge" data-testid="select-child-age">
                  <SelectValue placeholder="Select age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 years</SelectItem>
                  <SelectItem value="6">6 years</SelectItem>
                  <SelectItem value="7">7 years</SelectItem>
                  <SelectItem value="8">8 years</SelectItem>
                  <SelectItem value="9">9 years</SelectItem>
                  <SelectItem value="10">10 years</SelectItem>
                  <SelectItem value="11">11 years</SelectItem>
                  <SelectItem value="12">12 years</SelectItem>
                  <SelectItem value="13">13 years</SelectItem>
                  <SelectItem value="14">14 years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="program">Interested Program</Label>
              <Select
                value={formData.program}
                onValueChange={(value) => setFormData({ ...formData, program: value })}
              >
                <SelectTrigger id="program" data-testid="select-program">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Junior Module</SelectItem>
                  <SelectItem value="foundation">Foundation Module</SelectItem>
                  <SelectItem value="advanced">Advanced Module</SelectItem>
                  <SelectItem value="grandmaster">Grand Master Module</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any specific questions or requirements?"
              rows={4}
              data-testid="textarea-message"
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-full font-accent"
            data-testid="button-submit-contact"
          >
            Book Demo Class
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

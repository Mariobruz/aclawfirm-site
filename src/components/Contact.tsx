import { useState } from "react";
import { motion } from "motion/react";

import { toast } from "sonner";
import ContactDetails from "@/components/ContactDetails";
import { Send, LoaderCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { contactForm } from "@/data/contacts";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export default function Contact({ maps = true }: { maps?: boolean }) {
  const { lang, t, u, href } = useLanguage();
  const f = t.contact.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const [pending, setPending] = useState(false);
  const [botcheck, setBotcheck] = useState("");
  const direct = Boolean(contactForm.web3formsKey);

  const reset = () => {
    setName(""); setEmail(""); setPhone(""); setCompany(""); setArea(""); setMessage(""); setConsent(false);
  };

  const send = async () => {
    if (!direct) {
      const [lName, lEmail, lPhone, lCompany, lArea] = u.mailLabels;
      // Fallback without a form service: open a draft in the visitor's mail app.
      const body = `${lName}: ${name}\n${lEmail}: ${email}\n${lPhone}: ${phone}\n${lCompany}: ${company}\n${lArea}: ${area}\n\n${message}`;
      window.location.href = `mailto:${contactForm.fallbackEmail}?subject=${encodeURIComponent(u.mailSubject)}&body=${encodeURIComponent(body)}`;
      toast.info(u.draftReady, { description: u.draftText });
      return;
    }
    setPending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contactForm.web3formsKey,
          subject: `Richiesta dal sito — ${name} (${lang.toUpperCase()})`,
          from_name: "Sito AC Law Firm",
          replyto: email,
          botcheck,
          Nome: name,
          Email: email,
          Telefono: phone || "—",
          "Società": company || "—",
          Area: area,
          Messaggio: message,
          Lingua: lang.toUpperCase(),
          Pagina: window.location.href,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) throw new Error(data?.message || String(res.status));
      toast.success(f.successTitle, { description: f.successBody });
      reset();
    } catch {
      toast.error(f.errorTitle, { description: `${f.errorBody} ${contactForm.fallbackEmail}` });
    } finally {
      setPending(false);
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !area || message.trim().length < 10 || !consent) {
      toast.error(f.validation);
      return;
    }
    void send();
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative bg-[#0E1117] py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
            {t.contact.overline}
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight tracking-tight text-[#FAF8F5] sm:text-4xl lg:text-[42px]">
            {t.contact.title}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-[#B5AFA6] sm:text-base">
            {t.contact.subtitle}
          </p>

          <ContactDetails maps={maps} />
        </motion.div>

        <motion.form
          data-testid="contact-form"
          onSubmit={submit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-sm border border-[#222730] bg-[#12161E] p-7 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-name" className="text-xs uppercase tracking-[0.15em] text-[#A8A29E]">
                {f.name} *
              </Label>
              <Input
                id="contact-name"
                data-testid="contact-input-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={f.namePlaceholder}
                className="border-[#282F3D] bg-[#0B0D11] text-[#FAF8F5] placeholder:text-[#7A756D] focus-visible:border-[#C5A059]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email" className="text-xs uppercase tracking-[0.15em] text-[#A8A29E]">
                {f.email} *
              </Label>
              <Input
                id="contact-email"
                type="email"
                data-testid="contact-input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={f.emailPlaceholder}
                className="border-[#282F3D] bg-[#0B0D11] text-[#FAF8F5] placeholder:text-[#7A756D] focus-visible:border-[#C5A059]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone" className="text-xs uppercase tracking-[0.15em] text-[#A8A29E]">
                {f.phone}
              </Label>
              <Input
                id="contact-phone"
                data-testid="contact-input-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={f.phonePlaceholder}
                className="border-[#282F3D] bg-[#0B0D11] text-[#FAF8F5] placeholder:text-[#7A756D] focus-visible:border-[#C5A059]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-company" className="text-xs uppercase tracking-[0.15em] text-[#A8A29E]">
                {f.company}
              </Label>
              <Input
                id="contact-company"
                data-testid="contact-input-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={f.companyPlaceholder}
                className="border-[#282F3D] bg-[#0B0D11] text-[#FAF8F5] placeholder:text-[#7A756D] focus-visible:border-[#C5A059]"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label className="text-xs uppercase tracking-[0.15em] text-[#A8A29E]">{f.area} *</Label>
              <Select value={area} onValueChange={(value: string) => setArea(value)}>
                <SelectTrigger
                  data-testid="contact-select-practice"
                  className="w-full border-[#282F3D] bg-[#0B0D11] text-[#FAF8F5]"
                >
                  <SelectValue>{(v) => (v ? v : f.areaPlaceholder)}</SelectValue>
                </SelectTrigger>
                <SelectContent className="border-[#282F3D] bg-[#12161E]">
                  {f.areas.map((a) => (
                    <SelectItem key={a} value={a} className="text-[#FAF8F5]">
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="contact-message" className="text-xs uppercase tracking-[0.15em] text-[#A8A29E]">
                {f.message} *
              </Label>
              <Textarea
                id="contact-message"
                data-testid="contact-input-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={f.messagePlaceholder}
                rows={5}
                className="resize-none border-[#282F3D] bg-[#0B0D11] text-[#FAF8F5] placeholder:text-[#7A756D] focus-visible:border-[#C5A059]"
              />
            </div>
          </div>

          <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={botcheck}
            onChange={(e) => setBotcheck(e.target.value)}
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />
          <label className="mt-6 flex cursor-pointer items-start gap-3">
            <Checkbox
              data-testid="contact-checkbox-gdpr"
              checked={consent}
              onCheckedChange={(checked: boolean) => setConsent(checked)}
              className="mt-0.5 border-[#282F3D] data-[checked]:border-[#C5A059] data-[checked]:bg-[#C5A059] data-[checked]:text-[#0B0D11]"
            />
            <span className="text-xs leading-relaxed text-[#A8A29E]">{f.consent} <a href={href("/privacy-policy/")} className="text-[#C5A059] underline underline-offset-2" onClick={(e) => e.stopPropagation()}>{t.footer.privacy}</a></span>
          </label>

          <p className="mt-6 text-sm leading-relaxed text-[#B5AFA6]">{u.sendNote}</p>
          <p className="mt-3 text-sm text-[#C5A059]"><a href={href("/contatti/")}>{u.allContacts}</a></p>
          <Button
            type="submit"
            data-testid="contact-submit-btn"
            disabled={pending}
            className="mt-8 w-full cursor-pointer rounded-full bg-[#C5A059] py-6 text-sm font-semibold text-[#0B0D11] transition-colors duration-300 hover:bg-[#E2C36E] disabled:opacity-60"
          >
            {pending ? (
              <span className="inline-flex items-center gap-2">
                <LoaderCircle size={16} className="animate-spin" />
                {f.sending}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Send size={16} />
                {f.submit}
              </span>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

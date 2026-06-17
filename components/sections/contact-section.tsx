"use client";

import { useState } from "react";
import Image from "next/image";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, Send } from "lucide-react";
import { useForm, useWatch, type FieldErrors, type Resolver } from "react-hook-form";
import { portfolio } from "@/data/portfolio";
import { contactSchema, projectTypes, type ContactFormValues } from "@/lib/validation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const contactResolver: Resolver<ContactFormValues> = async (values) => {
  const parsed = contactSchema.safeParse(values);
  if (parsed.success) {
    return { values: parsed.data, errors: {} };
  }

  const errors: FieldErrors<ContactFormValues> = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && field in values) {
      errors[field as keyof ContactFormValues] = {
        type: issue.code,
        message: issue.message
      } as FieldErrors<ContactFormValues>[keyof ContactFormValues];
    }
  }

  return { values: {}, errors };
};

export function ContactSection() {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: contactResolver,
    defaultValues: { projectType: "Minecraft Plugin", company: "" }
  });
  const projectType = useWatch({ control, name: "projectType" });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus(null);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = (await response.json()) as { message?: string };
    if (!response.ok) {
      setStatus({ type: "error", message: data.message ?? "The message could not be sent. Please try again." });
      return;
    }
    setStatus({ type: "success", message: data.message ?? "Message received. Farid will reply soon." });
  };

  return (
    <section id="contact" className="py-24">
      <Container className="purple-panel grid items-center gap-12 rounded-lg p-6 sm:p-8 lg:grid-cols-[1fr_0.75fr] lg:p-10">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Get in touch!</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-muted">{portfolio.contact.description}</p>
          <form className="mt-8 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
            <input className="hidden" tabIndex={-1} autoComplete="off" {...register("company")} aria-hidden />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} className="form-input" autoComplete="name" placeholder="Name" />
              </Field>
              <Field label="Email Address" error={errors.email?.message}>
                <input {...register("email")} type="email" className="form-input" autoComplete="email" placeholder="john@mail.com" />
              </Field>
            </div>
            <Field label="Subject" error={errors.subject?.message}>
              <input {...register("subject")} className="form-input" maxLength={120} placeholder="e.g. Plugin proposal" />
            </Field>
            <Field label="Project type" error={errors.projectType?.message}>
              <Select.Root value={projectType} onValueChange={(value) => setValue("projectType", value as ContactFormValues["projectType"], { shouldValidate: true })}>
                <Select.Trigger className="form-input flex items-center justify-between" aria-label="Project type">
                  <Select.Value />
                  <Select.Icon><ChevronDown className="h-4 w-4" aria-hidden /></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="z-50 overflow-hidden rounded-lg border border-white/10 bg-[#120d1f] shadow-2xl">
                    <Select.Viewport className="p-1">
                      {projectTypes.map((type) => (
                        <Select.Item key={type} value={type} className="relative cursor-pointer rounded-md py-2 pl-9 pr-4 text-sm text-muted outline-none hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white">
                          <Select.ItemIndicator className="absolute left-3 top-2.5"><Check className="h-4 w-4" aria-hidden /></Select.ItemIndicator>
                          <Select.ItemText>{type}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea {...register("message")} className="form-input min-h-32 resize-y" maxLength={2000} placeholder="Tell me what you want to build" />
            </Field>
            <div aria-live="polite">
              {status ? (
                <p className={`rounded-md border px-4 py-3 text-sm ${status.type === "success" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100" : "border-rose-400/30 bg-rose-400/10 text-rose-100"}`}>
                  {status.message}
                </p>
              ) : null}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full rounded-md bg-primary hover:bg-primary-bright">
              <Send className="h-4 w-4" aria-hidden />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        <div className="relative hidden min-h-[30rem] place-items-end lg:grid">
          <div className="absolute inset-x-10 bottom-10 h-56 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <Image src={portfolio.hero.profileImage} alt="Profile picture of Farid Rahman" width={520} height={520} className="relative w-full max-w-md rounded-full border-4 border-white object-cover" />
        </div>
      </Container>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-white">
      {label}
      {children}
      {error ? <span className="text-sm font-medium text-rose-200">{error}</span> : null}
    </label>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, Send, User, Mail, Sparkles, MessageSquare } from "lucide-react";
import { useForm, useWatch, type FieldErrors, type Resolver } from "react-hook-form";
import { portfolio } from "@/data/portfolio";
import { contactSchema, projectTypes, type ContactFormValues } from "@/lib/validation";
import { Container } from "@/components/ui/container";

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
    <section id="contact" className="relative py-24 bg-[#0a0a0f] text-[#e2e2f0] overflow-hidden">
      {/* Contact Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_120%,rgba(124,58,237,0.18)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <h2 className="text-center font-poppins text-4xl font-extrabold tracking-tight text-white md:text-5xl flex items-center justify-center gap-3">
          <MessageSquare className="h-10 w-10 text-[#7c3aed]" aria-hidden />
          Get in <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="mt-16 mx-auto max-w-5xl bg-[#14141f] rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#ffffff12]">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* Form */}
            <div>
              <p className="font-poppins text-lg font-bold text-[#06b6d4]">
                {portfolio.contact.heading}
              </p>
              <p className="mt-2 text-sm text-[#8882a4] font-nunito leading-6">
                {portfolio.contact.description}
              </p>

              <form className="mt-8 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="hidden" tabIndex={-1} autoComplete="off" {...register("company")} aria-hidden />
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      {...register("name")}
                      className="w-full h-12 outline-none pl-12 pr-4 text-base font-nunito rounded-lg border border-[#ffffff12] bg-[#0a0a0f] focus:border-[#7c3aed] focus:bg-[#14141f] transition-all text-[#e2e2f0] placeholder:text-[#55516a]"
                      autoComplete="name"
                      placeholder="Name"
                    />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8882a4]" />
                    {errors.name?.message && (
                      <span className="mt-1 block text-xs font-bold text-rose-400 font-poppins">{errors.name.message}</span>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full h-12 outline-none pl-12 pr-4 text-base font-nunito rounded-lg border border-[#ffffff12] bg-[#0a0a0f] focus:border-[#7c3aed] focus:bg-[#14141f] transition-all text-[#e2e2f0] placeholder:text-[#55516a]"
                      autoComplete="email"
                      placeholder="Email"
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8882a4]" />
                    {errors.email?.message && (
                      <span className="mt-1 block text-xs font-bold text-rose-400 font-poppins">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <input
                    {...register("subject")}
                    className="w-full h-12 outline-none pl-12 pr-4 text-base font-nunito rounded-lg border border-[#ffffff12] bg-[#0a0a0f] focus:border-[#7c3aed] focus:bg-[#14141f] transition-all text-[#e2e2f0] placeholder:text-[#55516a]"
                    maxLength={120}
                    placeholder="Subject"
                  />
                  <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8882a4]" />
                  {errors.subject?.message && (
                    <span className="mt-1 block text-xs font-bold text-rose-400 font-poppins">{errors.subject.message}</span>
                  )}
                </div>

                <div className="relative">
                  <Select.Root
                    value={projectType}
                    onValueChange={(value) => setValue("projectType", value as ContactFormValues["projectType"], { shouldValidate: true })}
                  >
                    <Select.Trigger
                      className="w-full h-12 outline-none px-4 text-base text-[#8882a4] font-nunito rounded-lg border border-[#ffffff12] bg-[#0a0a0f] focus:border-[#7c3aed] focus:bg-[#14141f] transition-all flex items-center justify-between"
                      aria-label="Project type"
                    >
                      <Select.Value />
                      <Select.Icon>
                        <ChevronDown className="h-4 w-4 text-[#8882a4]" aria-hidden />
                      </Select.Icon>
                    </Select.Trigger>
                    
                    <Select.Portal>
                      <Select.Content className="z-50 overflow-hidden rounded-lg border border-[#ffffff12] bg-[#14141f] shadow-2xl text-[#e2e2f0]">
                        <Select.Viewport className="p-1">
                          {projectTypes.map((type) => (
                            <Select.Item
                              key={type}
                              value={type}
                              className="relative cursor-pointer rounded-md py-2 pl-9 pr-4 text-sm font-medium outline-none hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white"
                            >
                              <Select.ItemIndicator className="absolute left-3 top-2.5">
                                <Check className="h-4 w-4 text-[#7c3aed]" aria-hidden />
                              </Select.ItemIndicator>
                              <Select.ItemText>{type}</Select.ItemText>
                            </Select.Item>
                          ))}
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                  {errors.projectType?.message && (
                    <span className="mt-1 block text-xs font-bold text-rose-400 font-poppins">{errors.projectType.message}</span>
                  )}
                </div>

                <div className="relative">
                  <textarea
                    {...register("message")}
                    className="w-full min-h-32 resize-y outline-none pl-12 pr-4 py-3 text-base font-nunito rounded-lg border border-[#ffffff12] bg-[#0a0a0f] focus:border-[#7c3aed] focus:bg-[#14141f] transition-all text-[#e2e2f0] placeholder:text-[#55516a]"
                    maxLength={2000}
                    placeholder="Message"
                  />
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-[#8882a4]" />
                  {errors.message?.message && (
                    <span className="mt-1 block text-xs font-bold text-rose-400 font-poppins">{errors.message.message}</span>
                  )}
                </div>

                <div aria-live="polite">
                  {status ? (
                    <p className={`rounded-lg border px-4 py-3 text-sm font-poppins font-medium ${
                      status.type === "success"
                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                        : "border-rose-500/20 bg-rose-500/10 text-rose-300"
                    }`}>
                      {status.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] px-8 py-3 text-base font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition hover:shadow-[0_0_32px_rgba(124,58,237,0.55)] hover:-translate-y-0.5 duration-300 font-poppins disabled:opacity-50"
                  >
                    Submit
                    <Send className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </form>
            </div>

            {/* Illustration/Image */}
            <div className="relative hidden lg:block h-[420px] w-full bg-gradient-to-tr from-[#14141f] to-[#1c1c2e] border border-[#ffffff12] rounded-xl overflow-hidden p-8 shadow-inner">
              <div className="absolute inset-0 bg-black/10 z-10" />
              <div className="relative z-20 flex flex-col justify-between h-full text-[#e2e2f0] font-poppins">
                <div>
                  <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#06b6d4] bg-clip-text text-transparent">Let's create something together.</h3>
                  <p className="mt-3 text-sm text-[#8882a4] font-nunito leading-6">
                    Have an idea for a plugin, dashboard, or database structure? Send a message and let's get it built.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative h-44 w-44 rounded-full border-4 border-white/5 overflow-hidden shadow-2xl">
                    <Image
                      src={portfolio.hero.profileImage}
                      alt="Farid Rahman"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-28">
      <Container className="grid min-h-[70vh] place-items-center text-center">
        <div>
          <Image src="/branding/not-found.svg" alt="" width={220} height={220} className="mx-auto mb-8" aria-hidden />
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary-bright">404</p>
          <h1 className="mt-4 text-4xl font-black text-white">Page not found</h1>
          <p className="mx-auto mt-4 max-w-md text-muted">This route does not exist in Farid&apos;s portfolio.</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-bright">
            Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}

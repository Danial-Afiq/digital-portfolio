import { ArrowRight } from "lucide-react";
import { Container } from "../layout/PageShell";
import { ButtonLink } from "../ui/Button";

export function ContactCTA() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="card relative overflow-hidden px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-violet/8" />
          <div className="relative">
            <p className="eyebrow mb-3">Get in touch</p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Open to internships and good problems.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-ink-soft">
              If you're hiring or want to talk about software, security, or a project — I'd be
              glad to hear from you.
            </p>
            <div className="mt-7 flex justify-center">
              <ButtonLink to="/contact">
                Contact me <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

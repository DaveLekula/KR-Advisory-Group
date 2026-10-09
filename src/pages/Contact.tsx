import { useState, type FormEvent } from 'react';
import { Head } from '@/components/seo/Head';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbs } from '@/lib/jsonld';
import { Container } from '@/components/primitives/Container';
import { Section } from '@/components/primitives/Section';
import { Card } from '@/components/primitives/Card';
import { Button } from '@/components/primitives/Button';
import { FormField } from '@/components/primitives/FormField';
import { WhatsAppCTA } from '@/components/layout/WhatsAppCTA';
import { contact } from '@/content/pages';
import { services } from '@/content/services';
import { business } from '@/content/business';
import { meta } from '@/routes';

/*
 * [NOT VERIFIED] Contact form submission.
 * The live form is JS-rendered: the exact field names, required-field rules
 * and the submission ENDPOINT could not be confirmed from server HTML and
 * must be supplied by the client. No endpoint is invented here. The fields
 * below (name, email, service, message) are a minimal accessible set; replace
 * them and wire `handleSubmit` to the real endpoint once the client confirms.
 */
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  // Only ever set to true after a successful submit — never on failure.
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) next.message = 'Please describe your enquiry.';
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    // No success state on failure: bail out if there is any validation error.
    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // [NOT VERIFIED] PLACEHOLDER SUBMIT — no real endpoint is configured.
    // Do NOT invent a destination. Once the client supplies the endpoint and
    // confirmed field set, send `values` here (e.g. fetch(ENDPOINT, …)) and
    // only set `submitted` to true on a successful response.
    setSubmitted(true);
  }

  return (
    <>
      <Head {...meta['/contact']} />
      <JsonLd data={breadcrumbs('Contact', '/contact')} />

      {/* Intro */}
      <Section aria-labelledby="contact-title">
        <Container className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wide text-brass-deep">
            {contact.headingSub}
          </p>
          <h1 id="contact-title" className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            {contact.heading}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{contact.intro}</p>
        </Container>
      </Section>

      <Section className="bg-muted" aria-labelledby="contact-prepare-title">
        <Container className="grid gap-10 lg:grid-cols-2">
          {/* "Prepare your enquiry" helper */}
          <div>
            <h2 id="contact-prepare-title" className="font-display text-3xl text-ink">
              {contact.prepare.heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{contact.prepare.lead}</p>
            <p className="mt-6 rounded-lg border border-border bg-background p-4 text-sm text-muted-foreground">
              {contact.prepare.notice}
            </p>
          </div>

          {/* Accessible contact form */}
          <Card as="div">
            <h2 className="font-display text-2xl text-ink">{contact.form.heading}</h2>

            {submitted ? (
              <p role="status" className="mt-4 text-muted-foreground">
                Thank you — your enquiry is ready to send. (Submission is not yet
                wired to a destination; see the [NOT VERIFIED] note in the source.)
              </p>
            ) : (
              <form className="mt-6 flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
                <FormField id="contact-name" label="Name" error={errors.name}>
                  {(aria) => (
                    <input
                      {...aria}
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="rounded border border-border bg-background px-3 py-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-deep"
                    />
                  )}
                </FormField>

                <FormField id="contact-email" label="Email" error={errors.email}>
                  {(aria) => (
                    <input
                      {...aria}
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="rounded border border-border bg-background px-3 py-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-deep"
                    />
                  )}
                </FormField>

                <FormField id="contact-service" label={contact.prepare.serviceSelectorLabel}>
                  {(aria) => (
                    <select
                      {...aria}
                      name="service"
                      value={values.service}
                      onChange={(e) => update('service', e.target.value)}
                      className="rounded border border-border bg-background px-3 py-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-deep"
                    >
                      <option value="">No specific service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  )}
                </FormField>

                <FormField id="contact-message" label="How can we help?" error={errors.message}>
                  {(aria) => (
                    <textarea
                      {...aria}
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="rounded border border-border bg-background px-3 py-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-deep"
                    />
                  )}
                </FormField>

                <div>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </Container>
      </Section>

      {/* Other contact channels — verified WhatsApp + emails. */}
      <Section aria-labelledby="contact-channels-title">
        <Container className="max-w-3xl">
          <h2 id="contact-channels-title" className="font-display text-3xl text-ink">
            Other ways to reach us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Prefer to talk directly? Message us on WhatsApp ({business.phoneDisplay}) or email us.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppCTA kind="consultation" variant="primary" />
            <WhatsAppCTA kind="question" variant="secondary" />
          </div>
          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li>
              <a className="text-ink underline hover:text-brass-deep" href={`mailto:${business.emails.general}`}>
                {business.emails.general}
              </a>
            </li>
            <li>
              <a className="text-ink underline hover:text-brass-deep" href={`mailto:${business.emails.ralephenya}`}>
                {business.emails.ralephenya}
              </a>
            </li>
          </ul>
        </Container>
      </Section>
    </>
  );
}

export default Contact;

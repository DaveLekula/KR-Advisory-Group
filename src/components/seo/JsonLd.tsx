import { Head } from 'vite-react-ssg';

interface JsonLdProps {
  /** A JSON-LD object (or array) to serialise into a <script> tag. */
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Emits a <script type="application/ld+json"> in the document head.
 * Later features (Organization/LocalBusiness/Service schema) pass data here.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}

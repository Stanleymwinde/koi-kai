// app/Services/[slug]/page.tsx

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const services = [
  "medical-insurance",
  "motor-vehicle-insurance",
  "wiba-employers-liability",
  "business-asset-insurance",
  "life-insurance",
  "pension-covers",
  "contractors-all-risks",
];

export function generateStaticParams() {
  return services.map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  return (
    <div style={{ padding: 40 }}>
      <h1>{slug.replace(/-/g, " ")}</h1>
    </div>
  );
}

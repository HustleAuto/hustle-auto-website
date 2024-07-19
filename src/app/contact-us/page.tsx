import ContactUsForm from '@/components/ContactUsForm';

export default function Page() {
  return (
    <main className="container mx-auto my-20">
      <h1 className="typography-h1 text-center">Contact Us</h1>
      <section>
        <ContactUsForm />
      </section>
    </main>
  );
}

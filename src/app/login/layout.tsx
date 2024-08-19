import LoginSlides from '@/pages/login/slides';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container grid grid-cols-1 mb-12 gap-5 md:grid-cols-2 px-8 md:py-0 min-h-[calc(100vh-80px)]">
      <div className="hidden md:flex items-center justify-center">
        <LoginSlides />
      </div>
      <div className="h-full w-full flex justify-center items-center flex-col">
        {children}
      </div>
    </section>
  );
}

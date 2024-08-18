import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slides = [
    {
      src: '/assets/images/retro-slide.jpg',
      phrase:
        'Cada noticia marca o tempo, como um lembrete de que o presente logo se tornará possível.',
    },
    {
      src: '/assets/images/retro-slide2.jpg',
      phrase:
        'Notícias são retratos do momento, mas o tempo as transforma em histórias, lembranças e lições.',
    },
    {
      src: '/assets/images/retro-slide3.jpg',
      phrase:
        'O tempo passa, mas as notícias permanecem como ecos do que fomos e do que estamos nos tornando.',
    },
  ];

  return (
    <section className="container grid grid-cols-1 mb-12 gap-5 md:grid-cols-2 px-8 md:py-0 min-h-[calc(100vh-80px)]">
      <div className="hidden md:flex items-center justify-center">
        <Carousel className="w-full h-full z-10">
          <div className="h-[[calc(100vh-80px)]] max-h-[580px] overflow-hidden rounded-2xl">
            <CarouselContent className="h-full">
              {slides.map((slide, index) => (
                <CarouselItem className="h-full relative" key={index}>
                  <Image
                    src={slide.src}
                    width={580}
                    height={580}
                    alt="slidea"
                    className="object-cover h-full w-full rounded-2xl z-10"
                  />{' '}
                  <h1
                    className={` hidden xl:block backdrop-contrast-50 hover:backdrop-contrast-100 duration-300 bg-black-/40 
                      rounded-2xl p-3 h-max z-30 absolute text-slate-50 text-4xl font-bold 
                      ${
                        index === slides.length - 1
                          ? 'bottom-[40%]'
                          : 'bottom-[50%]'
                      } 
                      left-[25%] max-w-[328px]`}
                  >
                    {slide.phrase}
                  </h1>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="h-full w-full flex justify-center items-center flex-col">
        {children}
      </div>
    </section>
  );
}

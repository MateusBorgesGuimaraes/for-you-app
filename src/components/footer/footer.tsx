import Image from 'next/image';
import ButtonLinkLight from '../buttonLinkLigth/button-link-ligth';

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="container pt-12 pb-8 flex flex-col gap-12 ">
        <div>
          <Image
            src={'/assets/icons/ligth-logo-icon.svg'}
            width={161}
            height={42}
            alt="logo do site"
          />
        </div>

        <div className="flex justify-between lg:flex-nowrap flex-wrap sm:gap-0 gap-4">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 flex-wrap">
              <ButtonLinkLight href="/">REGISTRAR</ButtonLinkLight>
              <ButtonLinkLight href="/" borderStyle>
                LOGIN
              </ButtonLinkLight>
            </div>

            <div className="flex gap-3">
              <div className="bg-slate-100 p-2 rounded-md">
                <Image
                  src={'/assets/icons/instagram-dark-icon.svg'}
                  height={24}
                  width={24}
                  alt="logo do instagram"
                />
              </div>

              <div className="bg-slate-100 p-2 rounded-md">
                <Image
                  src={'/assets/icons/x-dark-icon.svg'}
                  height={24}
                  width={24}
                  alt="logo do twitter"
                />
              </div>

              <div className="bg-slate-100 p-2 rounded-md">
                <Image
                  src={'/assets/icons/facebook-dark-icon.svg'}
                  height={24}
                  width={24}
                  alt="logo do facebook"
                />
              </div>

              <div className="bg-slate-100 p-2 rounded-md">
                <Image
                  src={'/assets/icons/youtube-dark-icon.svg'}
                  height={24}
                  width={24}
                  alt="logo do youtube"
                />
              </div>
            </div>
          </div>

          <div className="text-slate-200 flex flex-col gap-3">
            <h4 className="text-slate-50 font-bold text-xl">SOBRE NÓS</h4>
            <p>foryouwebmagazine@gmail.com</p>
            <p>(54) 45 99 9999-9999</p>
            <p className="underline">parceiros</p>
            <p className="underline">equipe</p>
          </div>

          <div className="text-slate-200 flex flex-col gap-3">
            <h4 className="text-slate-50 font-bold text-xl">POLITICAS</h4>
            <p className="underline">termos de serviço</p>
            <p className="underline">politicas de privacidade</p>
            <p className="underline">politicas de cookies</p>
          </div>
        </div>

        <div className="border-t border-slate-400 ">
          <p className="mt-8 text-slate-50 font-bold text-base">
            © 2024 for you Inc. Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

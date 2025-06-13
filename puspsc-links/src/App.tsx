import LogoImg from "./Imagens/Logo.png";
import ABCDLogo from "./Imagens/ABCDlogo.png";
import WhatsAppImg from "./Imagens/WhatsAppLogo.png";
import InstagramImg from "./Imagens/InstagramLogo.png";
import FacebookImg from "./Imagens/FacebookLogo.png";
import XLogoImg from "./Imagens/Xlogo.png";
import YouTubeImg from "./Imagens/YouTubeLogo.png";

const App = () => {
  const links = [
    {
      id: 1,
      title: "Site Oficial Biblioteca",
      description: "Acesse o site da Biblioteca PUSP-SC",
      url: "http://biblioteca.puspsc.usp.br/",
      iconSrc: LogoImg,
      iconAlt: "Logo Biblioteca",
    },
    {
      id: 2,
      title: "Site Oficial ABCD",
      description: "Acesse o site oficial do ABCD",
      url: "https://www.abcd.usp.br/abcd-informa/",
      iconSrc: ABCDLogo,
      iconAlt: "Logo ABCD",
    },
    {
      id: 3,
      title: "WhatsApp",
      description: "Fale conosco pelo WhatsApp",
      url: "https://wa.me/5516997975308",
      iconSrc: WhatsAppImg,
      iconAlt: "Logo WhatsApp",
    },
    {
      id: 4,
      title: "Instagram",
      description: "Siga a Biblioteca no Instagram",
      url: "https://www.instagram.com/biblioteca_puspsc",
      iconSrc: InstagramImg,
      iconAlt: "Logo Instagram",
    },
    {
      id: 5,
      title: "Facebook",
      description: "Curta nossa página no Facebook",
      url: "https://www.facebook.com/biblioteca.puspsc",
      iconSrc: FacebookImg,
      iconAlt: "Logo Facebook",
    },
    {
      id: 6,
      title: "X (Twitter)",
      description: "Acompanhe no X (Twitter)",
      url: "https://x.com/BibliotecaPUSP",
      iconSrc: XLogoImg,
      iconAlt: "Logo X Twitter",
    },
    {
      id: 7,
      title: "YouTube",
      description: "Assista nossos vídeos no YouTube",
      url: "https://www.youtube.com/@BibliotecaPUSP-SC",
      iconSrc: YouTubeImg,
      iconAlt: "Logo YouTube",
    },
  ];

  const handleLinkClick = (url: string) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const siteBackground = "linear-gradient(to bottom right, #BBC4CA, white)";

  return (
    <div
      className="min-h-screen"
      style={{
        background: siteBackground,
      }}
    >
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <div
              className="mx-auto rounded-full flex items-center justify-center mb-4 shadow-lg"
              style={{ background: siteBackground, width: "128px", height: "128px" }}
            >
              <img
                src={LogoImg}
                alt="Logo Biblioteca PUSP-SC"
                className="w-20 h-20"
              />
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: "#234983" }}
            >
              Biblioteca PUSP-SC
            </h1>
            <div
              className="w-20 h-1 mx-auto mb-4 rounded-full"
              style={{ backgroundColor: "#FCB421" }}
            ></div>
            <p
              className="text-lg font-medium"
              style={{ color: "#7F8A91" }}
            >
              Universidade de São Paulo - Campus São Carlos
            </p>
            <p
              className="mt-2"
              style={{ color: "#7F8A91" }}
            >
              Acesse rapidamente nossos principais serviços e recursos
            </p>
          </div>
        </header>

        {/* Links Grid */}
        <main className="space-y-4">
          {links.map((link, index) => (
            <div
              key={link.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => handleLinkClick(link.url)}
                className="w-full group relative overflow-hidden rounded-xl p-6 transition-all duration-300 focus:outline-none focus:ring-4"
                style={{
                  backgroundColor: "white",
                  border: "2px solid #BBC4CA",
                  boxShadow: "0 0 10px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FCB421";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(252, 180, 33, 0.5)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#BBC4CA";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.05)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div className="relative flex items-center space-x-4">
                  {/* Icon com fundo branco e logo maior */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center shadow-md bg-white"
                    style={{ transition: "background-color 0.3s" }}
                  >
                    <img
                      src={link.iconSrc}
                      alt={link.iconAlt}
                      className="w-8 h-8"
                      style={{ filter: "brightness(100%)" }}
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 text-left">
                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{ color: "#234983" }}
                    >
                      {link.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "#7F8A91" }}
                    >
                      {link.description}
                    </p>
                  </div>

                  {/* Seta */}
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#7F8A91"
                      strokeWidth={2}
                      style={{ transition: "color 0.3s, transform 0.3s" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </main>

        {/* Footer */}
        <footer
          className="text-center mt-12 pt-8 border-t"
          style={{ borderColor: "#BBC4CA" }}
        >
          <p
            className="text-sm"
            style={{ color: "#7F8A91" }}
          >
            © 2024 Biblioteca PUSP-SC - Universidade de São Paulo
          </p>
          <p
            className="text-xs mt-2"
            style={{ color: "#7F8A91" }}
          >
            Campus São Carlos - Todos os direitos reservados
          </p>
          <p
            className="text-xs mt-2"
            style={{ color: "#7F8A91" }}
          >
            Desenvolvido por @AdhemarMolon
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;

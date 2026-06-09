import Image from "next/image";

export const dynamic = "force-dynamic";

const paises: Record<string, { nombre: string; code: string }> = {
  Mexico: { nombre: "México", code: "mx" },
  "South Africa": { nombre: "Sudáfrica", code: "za" },
  "South Korea": { nombre: "Corea del Sur", code: "kr" },
  "Czech Republic": { nombre: "Chequia", code: "cz" },
  Canada: { nombre: "Canadá", code: "ca" },
  "Bosnia and Herzegovina": { nombre: "Bosnia y Herzegovina", code: "ba" },
  USA: { nombre: "Estados Unidos", code: "us" },
  Paraguay: { nombre: "Paraguay", code: "py" },
  Qatar: { nombre: "Qatar", code: "qa" },
  Switzerland: { nombre: "Suiza", code: "ch" },
  Argentina: { nombre: "Argentina", code: "ar" },
  Brazil: { nombre: "Brasil", code: "br" },
  Morocco: { nombre: "Marruecos", code: "ma" },
  Haiti: { nombre: "Haití", code: "ht" },
  Australia: { nombre: "Australia", code: "au" },
  Turkey: { nombre: "Turquía", code: "tr" },
  Germany: { nombre: "Alemania", code: "de" },
  Netherlands: { nombre: "Países Bajos", code: "nl" },
  Japan: { nombre: "Japón", code: "jp" },
  Ecuador: { nombre: "Ecuador", code: "ec" },
  Sweden: { nombre: "Suecia", code: "se" },
  Tunisia: { nombre: "Túnez", code: "tn" },
  Spain: { nombre: "España", code: "es" },
  Belgium: { nombre: "Bélgica", code: "be" },
  Egypt: { nombre: "Egipto", code: "eg" },
  Uruguay: { nombre: "Uruguay", code: "uy" },
  Iran: { nombre: "Irán", code: "ir" },
  France: { nombre: "Francia", code: "fr" },
  Senegal: { nombre: "Senegal", code: "sn" },
  Iraq: { nombre: "Irak", code: "iq" },
  Norway: { nombre: "Noruega", code: "no" },
  Algeria: { nombre: "Argelia", code: "dz" },
  Austria: { nombre: "Austria", code: "at" },
  Jordan: { nombre: "Jordania", code: "jo" },
  Portugal: { nombre: "Portugal", code: "pt" },
  Croatia: { nombre: "Croacia", code: "hr" },
  Ghana: { nombre: "Ghana", code: "gh" },
  Panama: { nombre: "Panamá", code: "pa" },
  Uzbekistan: { nombre: "Uzbekistán", code: "uz" },
  Colombia: { nombre: "Colombia", code: "co" },
  "Democratic Rep Congo": { nombre: "RD Congo", code: "cd" },
  England: { nombre: "Inglaterra", code: "gb-eng" },
  "New Zealand": { nombre: "Nueva Zelanda", code: "nz" },
  "Cape Verde": { nombre: "Cabo Verde", code: "cv" },
  "Saudi Arabia": { nombre: "Arabia Saudita", code: "sa" },
  Curacao: { nombre: "Curazao", code: "cw" },
  "Ivory Coast": { nombre: "Costa de Marfil", code: "ci" },
  Scotland: { nombre: "Escocia", code: "gb-sct" },
};

async function getFixture() {
  try {
    const response = await fetch(
      "https://fixture-soldimet.netlify.app/api/fixture",
      {
        next: {
          revalidate: 300,
        },
      },
    );

    const data = await response.json();

    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data.data)) {
      return data.data;
    }

    return [];
  } catch (error) {
    console.error("Error cargando fixture:", error);
    return [];
  }
}

export default async function FixturePage() {
  const partidos = await getFixture();
  const proximoArgentina = partidos.find(
    (p: any) =>
      p.status === 0 &&
      (p.homeName === "Argentina" || p.awayName === "Argentina"),
  );
  return (
    <main id="top" className="min-h-screen bg-[#050505] text-white pb-28">
      <header className="sticky top-0 z-40 bg-black border-b border-white/10">
        <div className="max-w-md mx-auto px-4 py-5 flex items-center justify-between">
          <Image
            src="/logo-soldimet.jpg"
            alt="Soldimet"
            width={120}
            height={60}
            className="rounded-xl h-auto"
          />

          <div className="text-center">
            <p className="text-green-400 text-xs font-bold">
              50 años acompañando
            </p>
            <h1 className="text-2xl font-black tracking-widest">
              MUNDIAL 2026
            </h1>
            <p className="text-gray-400 text-xs">USA • CANADÁ • MÉXICO</p>
          </div>

          <Image
            src="/copa-mundial.jpg"
            alt="Copa"
            width={70}
            height={70}
            className="rounded-2xl"
          />
        </div>

        <div className="bg-blue-700 px-4 py-4">
          <div className="max-w-md mx-auto grid grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-black">02</p>
              <p className="text-xs tracking-widest text-gray-300">DÍAS</p>
            </div>
            <div>
              <p className="text-3xl font-black">20</p>
              <p className="text-xs tracking-widest text-gray-300">HORAS</p>
            </div>
            <div>
              <p className="text-3xl font-black">11</p>
              <p className="text-xs tracking-widest text-gray-300">MINS</p>
            </div>
            <div>
              <p className="text-3xl font-black">54</p>
              <p className="text-xs tracking-widest text-gray-300">SEGS</p>
            </div>
          </div>
        </div>

        <nav className="max-w-md mx-auto flex gap-6 overflow-x-auto px-4 py-4 text-sm font-black tracking-widest">
          <span className="text-white border-b-2 border-green-500 pb-3">
            FECHAS
          </span>
        </nav>
      </header>

      <section className="max-w-md mx-auto px-4 pt-4">
        <div className="flex gap-3 mb-4">
          <a
            href="/"
            className="flex-1 bg-white/10 border border-white/10 rounded-full py-3 text-center font-black"
          >
            ← Inicio
          </a>

          <a
            href="https://wa.me/?text=Mirá%20el%20fixture%20del%20Mundial%202026%20de%20Soldimet"
            className="flex-1 bg-blue-600 rounded-full py-3 text-center font-black"
          >
            Compartir
          </a>
        </div>
        <p className="text-gray-500 text-sm mb-4">
          ● Fixture conectado · resultados automáticos
        </p>
        <div className="mb-4 bg-white text-blue-950 rounded-3xl p-4 shadow-xl border-2 border-sky-300">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-soldimet.jpg"
              alt="Soldimet"
              width={90}
              height={45}
              className="rounded-lg h-auto"
            />

            <div>
              <p className="text-xs font-black tracking-widest text-sky-700">
                PUBLICIDAD
              </p>

              <p className="font-black leading-tight">
                Rectificación completa de motores
              </p>

              <p className="text-sm font-semibold">
                Livianos • Pesados • Tapas • Soldaduras
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-[#111] rounded-2xl p-4 text-center border border-white/10">
            <p className="text-2xl font-black text-white">48</p>
            <p className="text-xs text-gray-400">SELECCIONES</p>
          </div>

          <div className="bg-[#111] rounded-2xl p-4 text-center border border-white/10">
            <p className="text-2xl font-black text-white">104</p>
            <p className="text-xs text-gray-400">PARTIDOS</p>
          </div>

          <div className="bg-[#111] rounded-2xl p-4 text-center border border-white/10">
            <p className="text-2xl font-black text-white">16</p>
            <p className="text-xs text-gray-400">SEDES</p>
          </div>
        </div>
        {proximoArgentina && (
          <div className="bg-gradient-to-r from-sky-500 to-blue-900 rounded-3xl p-5 mb-4 shadow-xl">
            <p className="text-xs tracking-widest text-yellow-400 font-black">
              PRÓXIMO PARTIDO DE ARGENTINA
            </p>

            <div className="grid grid-cols-3 items-center text-center mt-4">
              <div>
                <img
                  src={`https://flagcdn.com/w80/${paises[proximoArgentina.homeName]?.code}.png`}
                  alt={proximoArgentina.homeName}
                  className="mx-auto h-10 w-14 rounded object-cover"
                />
                <p className="font-black mt-2">
                  {paises[proximoArgentina.homeName]?.nombre ||
                    proximoArgentina.homeName}
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-yellow-300">VS</p>
                <p className="text-xs">
                  {new Date(
                    proximoArgentina.matchTime * 1000,
                  ).toLocaleDateString("es-AR", {
                    day: "2-digit",
                    month: "short",
                    timeZone: "America/Argentina/Mendoza",
                  })}
                </p>
                <p className="text-xs">
                  {new Date(
                    proximoArgentina.matchTime * 1000,
                  ).toLocaleTimeString("es-AR", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "America/Argentina/Mendoza",
                  })}{" "}
                  ARG
                </p>
              </div>

              <div>
                <img
                  src={`https://flagcdn.com/w80/${paises[proximoArgentina.awayName]?.code}.png`}
                  alt={proximoArgentina.awayName}
                  className="mx-auto h-10 w-14 rounded object-cover"
                />
                <p className="font-black mt-2">
                  {paises[proximoArgentina.awayName]?.nombre ||
                    proximoArgentina.awayName}
                </p>
              </div>
            </div>
          </div>
        )}
        <a
          href="#argentina"
          className="block mb-4 bg-sky-500 text-yellow-400 text-center rounded-full py-4 font-black shadow-xl"
        >
          🇦🇷 Ir a partidos de Argentina
        </a>

        <div className="flex gap-3 mt-4 overflow-x-auto">
          {["Todos", "🇲🇽", "🇿🇦", "🇰🇷", "🇨🇿", "🇨🇦", "🇨🇭"].map((filtro) => (
            <button
              key={filtro}
              className="bg-[#151515] border border-white/10 px-5 py-3 rounded-full font-bold"
            >
              {filtro}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-5">
          {partidos.map((p: any, index: number) => {
            const fecha = new Date(p.matchTime * 1000);

            const dia = fecha.toLocaleDateString("es-AR", {
              weekday: "short",
              day: "2-digit",
              month: "short",
              timeZone: "America/Argentina/Mendoza",
            });

            const hora = fecha.toLocaleTimeString("es-AR", {
              hour: "2-digit",
              minute: "2-digit",
              timeZone: "America/Argentina/Mendoza",
            });

            const estado =
              p.status === 0
                ? "PROGRAMADO"
                : p.status === -1
                  ? "FINALIZADO"
                  : p.status > 0
                    ? "EN VIVO"
                    : "SUSPENDIDO";

            const resultado =
              p.status === 0 ? hora : `${p.homeScore} - ${p.awayScore}`;
            const local = paises[p.homeName] || {
              nombre: p.homeName,
              code: "",
            };

            const visitante = paises[p.awayName] || {
              nombre: p.awayName,
              code: "",
            };

            const diaAnterior =
              index > 0
                ? new Date(
                    partidos[index - 1].matchTime * 1000,
                  ).toLocaleDateString("es-AR", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    timeZone: "America/Argentina/Mendoza",
                  })
                : null;
            const publicidad = index % 24;
            return (
              <div key={p.matchId}>
                {(index === 0 || diaAnterior !== dia) && (
                  <h2 className="text-gray-400 text-xl font-black mb-3 uppercase">
                    {dia}
                  </h2>
                )}

                <article
                  id={
                    p.homeName === "Argentina" || p.awayName === "Argentina"
                      ? "argentina"
                      : undefined
                  }
                  style={{
                    scrollMarginTop: "230px",
                  }}
                  className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-xl"
                >
                  <div className="flex justify-between px-5 pt-4 text-xs text-gray-400 font-bold">
                    <span className="bg-white/5 px-3 py-1 rounded-full tracking-[3px]">
                      {estado}
                    </span>
                    <span>{p.leagueShortName}</span>
                  </div>

                  <div className="grid grid-cols-3 items-center text-center px-5 py-8">
                    <div>
                      {local.code ? (
                        <img
                          src={`https://flagcdn.com/w80/${local.code}.png`}
                          alt={local.nombre}
                          className="mx-auto h-10 w-14 rounded object-cover"
                        />
                      ) : (
                        <div className="mx-auto h-10 w-14 rounded bg-white/10" />
                      )}
                      <p className="font-black mt-2">{local.nombre}</p>
                    </div>

                    <div>
                      <p className="text-3xl font-black text-yellow-400">
                        {resultado}
                      </p>
                    </div>

                    <div>
                      {visitante.code ? (
                        <img
                          src={`https://flagcdn.com/w80/${visitante.code}.png`}
                          alt={visitante.nombre}
                          className="mx-auto h-10 w-14 rounded object-cover"
                        />
                      ) : (
                        <div className="mx-auto h-10 w-14 rounded bg-white/10" />
                      )}

                      <p className="font-black mt-2">{visitante.nombre}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 text-center py-3 text-sm text-gray-400">
                    🕒 {hora} ARG
                  </div>
                </article>

                {publicidad === 8 && (
                  <div className="mt-5 bg-gradient-to-br from-blue-700 to-blue-950 rounded-3xl overflow-hidden border border-blue-500/30">
                    <div className="p-6 flex items-center gap-4">
                      <Image
                        src="/logo-soldimet.jpg"
                        alt="Soldimet"
                        width={130}
                        height={70}
                        className="rounded-xl h-auto"
                      />

                      <div>
                        <h3 className="text-xl font-black">
                          SOLDIMET RECTIFICACIONES
                        </h3>

                        <p className="text-sm text-gray-300 mt-2">
                          Más de 50 años reparando motores livianos y pesados.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {publicidad === 16 && (
                  <div className="mt-5 bg-gradient-to-br from-green-700 to-green-950 rounded-3xl p-6 border border-green-500/30">
                    <h3 className="text-2xl font-black">
                      ⚙️ ¿Problemas con tu motor?
                    </h3>

                    <p className="mt-3 text-gray-300">
                      Rectificación completa de motores. Soldaduras de block.
                      Tapas de cilindro. Pruebas hidráulicas.
                    </p>

                    <a
                      href="https://wa.me/542634664445"
                      className="block mt-5 bg-white text-green-900 text-center py-3 rounded-full font-black"
                    >
                      CONSULTAR POR WHATSAPP
                    </a>
                  </div>
                )}

                {publicidad === 0 && index > 0 && (
                  <div className="mt-5 bg-gradient-to-br from-sky-500 to-blue-900 rounded-3xl p-6 border border-sky-300/30">
                    <div className="text-center">
                      <p className="text-5xl">🔧</p>

                      <h3 className="text-2xl font-black mt-3">
                        GARANTÍA ESCRITA
                      </h3>

                      <p className="mt-3 text-lg">
                        Todos nuestros trabajos se entregan con garantía de 6
                        meses.
                      </p>

                      <p className="mt-4 font-black text-yellow-400-200">
                        Soldimet Rectificaciones
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <a
        href="https://wa.me/5492634664445"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.8)] hover:scale-110 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-11 h-11 fill-white"
        >
          <path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.29.598 4.53 1.734 6.51L3 29l6.68-1.704a12.95 12.95 0 0 0 6.324 1.62C23.18 28.916 29 23.096 29 15.912 29 8.82 23.18 3 16.004 3zm0 23.59c-1.92 0-3.796-.512-5.436-1.48l-.39-.23-3.964 1.01 1.058-3.866-.254-.4a10.56 10.56 0 0 1-1.626-5.62c0-5.85 4.762-10.612 10.612-10.612 5.85 0 10.612 4.762 10.612 10.612S21.854 26.59 16.004 26.59zm5.816-7.944c-.318-.16-1.882-.928-2.174-1.034-.292-.106-.504-.16-.716.16-.212.318-.822 1.034-1.008 1.246-.186.212-.372.24-.69.08-.318-.16-1.344-.496-2.56-1.58-.946-.844-1.586-1.886-1.772-2.204-.186-.318-.02-.49.14-.65.144-.142.318-.372.478-.558.16-.186.212-.318.318-.53.106-.212.054-.398-.026-.558-.08-.16-.716-1.724-.982-2.36-.26-.626-.524-.54-.716-.55l-.61-.01c-.212 0-.558.08-.85.398-.292.318-1.114 1.088-1.114 2.654 0 1.566 1.14 3.08 1.298 3.292.16.212 2.244 3.426 5.436 4.804.76.328 1.352.524 1.814.67.762.242 1.456.208 2.004.126.612-.092 1.882-.768 2.148-1.51.266-.742.266-1.378.186-1.51-.08-.132-.292-.212-.61-.372z" />
        </svg>
      </a>
      <div className="fixed bottom-6 left-4 z-50 flex gap-2 bg-black/80 border border-white/10 rounded-full p-2 shadow-xl backdrop-blur">
        <a
          href="/"
          className="bg-white/10 px-4 py-3 rounded-full text-sm font-black"
        >
          Inicio
        </a>

        <a
          href="#top"
          className="bg-white/10 px-4 py-3 rounded-full text-sm font-black"
        >
          Fixture
        </a>

        <a
          href="#argentina"
          className="bg-sky-500 px-4 py-3 rounded-full text-sm font-black"
        >
          🇦🇷
        </a>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [tiempo, setTiempo] = useState({
    dias: "--",
    horas: "--",
    minutos: "--",
    segundos: "--",
  });

  useEffect(() => {
    function actualizarContador() {
      const fechaMundial = new Date("2026-06-11T16:00:00-03:00").getTime();
      const ahora = new Date().getTime();
      const diferencia = fechaMundial - ahora;

      if (diferencia <= 0) {
        setTiempo({
          dias: "0",
          horas: "0",
          minutos: "0",
          segundos: "0",
        });
        return;
      }

      setTiempo({
        dias: String(Math.floor(diferencia / (1000 * 60 * 60 * 24))),
        horas: String(Math.floor((diferencia / (1000 * 60 * 60)) % 24)),
        minutos: String(Math.floor((diferencia / (1000 * 60)) % 60)),
        segundos: String(Math.floor((diferencia / 1000) % 60)),
      });
    }

    actualizarContador();

    const intervalo = setInterval(actualizarContador, 1000);

    return () => clearInterval(intervalo);
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-700 to-blue-950 text-white">
      <section className="relative min-h-screen px-5 py-8 flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-950/80 to-black"></div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="confeti animate-[caer_linear_infinite]"
              style={{
                left: `${(i * 37) % 100}%`,
                backgroundColor:
                  i % 3 === 0 ? "#facc15" : i % 3 === 1 ? "#22c55e" : "#60a5fa",
                animationDuration: `${4 + (i % 5)}s`,
                animationDelay: `${i * 0.25}s`,
              }}
            />
          ))}

          <div
            className="absolute top-[72%] left-[-80px] text-5xl z-20"
            style={{
              animation: "pelota 6s linear infinite",
            }}
          >
            ⚽
          </div>
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="flex justify-center animate-entrar-arriba">
            <Image
              src="/copa-mundial.jpg"
              alt="Copa del mundo"
              width={180}
              height={180}
              priority
              className="rounded-2xl shadow-[0_0_35px_rgba(250,204,21,0.45)]"
            />
          </div>

          <div className="mt-8 text-center animate-entrar-abajo">
            <p className="text-yellow-400 text-sm tracking-[5px] uppercase font-bold">
              SOLDIMET RECTIFICACIONES
            </p>

            <p className="text-green-400 text-sm tracking-[5px] uppercase font-bold">
              Presenta Fixture
            </p>

            <h1 className="text-6xl font-black mt-3 tracking-widest">
              MUNDIAL
            </h1>

            <h2 className="text-7xl font-black text-white leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              2026
            </h2>

            <p className="mt-3 text-gray-300 tracking-[4px] uppercase text-sm">
              USA • Canadá • México
            </p>
            <div className="mt-5 rounded-full bg-gradient-to-r from-sky-400 via-white to-sky-400 text-blue-950 px-5 py-3 font-black shadow-xl">
              🇦🇷 ARGENTINA ⭐⭐⭐
            </div>

            <p className="mt-4 text-2xl font-black text-white">
              Vamos por una nueva ilusión
            </p>
          </div>

          <div className="mt-8 bg-white/10 border border-blue-300/30 rounded-3xl p-5 backdrop-blur animate-entrar-abajo">
            <p className="text-center text-sm uppercase tracking-widest text-gray-300">
              Falta para que empiece
            </p>

            <div className="grid grid-cols-4 gap-3 mt-5 text-center">
              <div className="bg-black/60 rounded-2xl p-3">
                <p className="text-3xl font-black text-yellow-400">
                  {tiempo.dias}
                </p>
                <p className="text-[10px] uppercase">Días</p>
              </div>

              <div className="bg-black/60 rounded-2xl p-3">
                <p className="text-3xl font-black text-yellow-400">
                  {tiempo.horas}
                </p>
                <p className="text-[10px] uppercase">Horas</p>
              </div>

              <div className="bg-black/60 rounded-2xl p-3">
                <p className="text-3xl font-black text-yellow-400">
                  {tiempo.minutos}
                </p>
                <p className="text-[10px] uppercase">Min</p>
              </div>

              <div className="bg-black/60 rounded-2xl p-3">
                <p className="text-3xl font-black text-yellow-400">
                  {tiempo.segundos}
                </p>
                <p className="text-[10px] uppercase">Seg</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-br from-sky-500 to-blue-800 border border-white/20 rounded-3xl p-6 shadow-2xl text-center">
            <p className="text-sm uppercase tracking-[4px] text-white/80 font-bold">
              Próximo partido destacado
            </p>

            <div className="mt-5 grid grid-cols-3 items-center">
              <div>
                <p className="text-5xl">🇦🇷</p>
                <p className="font-black mt-2">Argentina</p>
              </div>

              <div>
                <p className="text-yellow-300 text-2xl font-black">VS</p>
                <p className="text-xs text-white/70 mt-1">16 JUN</p>
                <p className="text-xs text-white/70">22:00 ARG</p>
              </div>

              <div>
                <p className="text-5xl">🇩🇿</p>
                <p className="font-black mt-2">Argelia</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-yellow-400 text-black rounded-3xl p-6 shadow-2xl animate-entrar-abajo">
            <Image
              src="/logo-soldimet.jpg"
              alt="Logo Soldimet"
              width={400}
              height={150}
              className="w-full h-auto rounded-2xl"
            />

            <h3 className="text-3xl font-black mt-3">
              SOLDIMET RECTIFICACIONES
            </h3>

            <p className="mt-3 font-semibold">
              Más de 50 años brindando soluciones.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-5 text-sm font-bold">
              <div className="bg-black/10 rounded-2xl p-3">Motores pesados</div>

              <div className="bg-black/10 rounded-2xl p-3">
                Motores livianos
              </div>

              <div className="bg-black/10 rounded-2xl p-3">
                Soldaduras de block y tapas
              </div>

              <div className="bg-black/10 rounded-2xl p-3">
                Trabajos con garantía
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3 animate-entrar-abajo">
            <a
              href="/fixture"
              className="flex-1 bg-blue-600 rounded-full py-4 font-black shadow-xl text-center"
            >
              Ver Fixture
            </a>

            <a
              href="https://wa.me/542634664445"
              className="flex-1 bg-green-500 rounded-full py-4 font-black text-center shadow-xl"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

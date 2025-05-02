import { Button } from "@/components/ui/button"
import { Download, MessageSquare, UserPlus, PlayCircle } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: 1,
    icon: <UserPlus className="h-6 w-6 text-[#00C28B]" />,
    title: "Abre la aplicación PPPoker y registra tu cuenta",
    description: "Descarga la app, ábrela y crea una cuenta nueva con tu correo o redes sociales",
    imageSrc: "/images/step1-register.png",
    imageAlt: "Pantalla de registro de PPPoker",
    action: (
      <Button variant="outline" className="mt-4 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10">
        <Download className="mr-2 h-4 w-4" />
        Descargar App
      </Button>
    ),
  },
  {
    number: 2,
    icon: <Download className="h-6 w-6 text-[#FFD700]" />,
    title: "Únete al club",
    description: "Selecciona el botón 'Join a club' en la pantalla principal de la aplicación",
    imageSrc: "/images/step2-app.png",
    imageAlt: "Interfaz principal de la aplicación PPPoker",
  },
  {
    number: 3,
    icon: <MessageSquare className="h-6 w-6 text-[#00C28B]" />,
    title: "Ingresa los códigos del club",
    description: "Introduce los códigos que aparecen en la imagen: 1630785 y 8042182",
    imageSrc: "/images/step3-join.png",
    imageAlt: "Pantalla para unirse a un club en PPPoker",
  },
  {
    number: 4,
    icon: <PlayCircle className="h-6 w-6 text-[#00FFAB]" />,
    title: "Haz clic en 'Unirse' y comienza a jugar",
    description: "Únete al club y contáctame por WhatsApp para cargar créditos y empezar a jugar",
    imageSrc: "/images/step4-club.png",
    imageAlt: "Pantalla de confirmación para unirse al club",
    action: (
      <Button size="sm" className="mt-4 bg-[#00C28B] hover:bg-[#00C28B]/90 text-white">
        <MessageSquare className="mr-2 h-4 w-4" />
        Contactar por WhatsApp
      </Button>
    ),
  },
]

export default function StepsSection() {
  return (
    <section className="py-20 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Cómo Empezar</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Sigue estos sencillos pasos para unirte a nuestro club de póker y comenzar a jugar en minutos
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#121212]/50 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col h-[600px]"
            >
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full bg-[#0D1B2A] flex items-center justify-center text-white font-bold border-2 border-[#00C28B] z-10">
                {step.number}
              </div>

              {/* Contenedor de imagen con altura fija */}
              <div className="flex items-center justify-center h-[380px] mb-6">
                <div className="relative w-[180px]">
                  <div className="relative aspect-[9/19.5] rounded-[24px] overflow-hidden bg-black p-1 border-4 border-[#121212] shadow-xl">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex items-center justify-between px-4">
                      <div className="text-white text-xs font-medium">10:36</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-3 bg-white/30 rounded-sm"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-6 h-3 bg-[#FF4C4C]/80 rounded-sm flex items-center justify-end pr-0.5">
                          <span className="text-white text-[6px]">18</span>
                        </div>
                      </div>
                    </div>

                    {/* Phone screen content */}
                    <div className="absolute inset-0 pt-6">
                      <Image
                        src={step.imageSrc || "/placeholder.svg"}
                        alt={step.imageAlt}
                        fill
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                      <div className="w-1/3 h-1 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido de texto con altura fija */}
              <div className="flex flex-col h-[150px]">
                <div className="flex items-center mb-3">
                  <div className="bg-[#0D1B2A] p-2 rounded-full">{step.icon}</div>
                  <h3 className="text-lg font-bold text-white ml-2 leading-tight">{step.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{step.description}</p>
                <div className="mt-auto">{step.action}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client';

import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AvisoDePrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/40 dark:bg-black/40 border-b border-white/20 dark:border-gray-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-8 sm:mb-12">
            Aviso de Privacidad
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            
            {/* Section I */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                I. General
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Al ingresar y utilizar este portal de internet, cuyo nombre de dominio es: Krdia.io (la "Plataforma"), propiedad de Kardia Tech, S.A.P.I. de C.V., ("Krdia"), usted (el "Titular") declara que esta aceptando los terminos y las condiciones contenidos en el presente aviso (el "Aviso de Privacidad") y declara y otorga expresamente su aceptacion y consentimiento utilizando para tal efecto medios electronicos, en terminos de lo dispuesto por el articulo 1803 del codigo civil federal. Si el Titular no acepta en forma absoluta y completa los terminos y condiciones de este Aviso de Privacidad, debera abstenerse de acceder, ver y hacer uso de la Plataforma. Para el caso que el Titular continue en el uso de la Plataforma, sea en forma total o parcial, dicha accion se considerara como su absoluta y expresa aceptacion a los terminos y condiciones aqui estipulados.
              </p>
            </section>

            {/* Section II */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                II. Responsable del Tratamiento de sus Datos Personales
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Krdia, con domicilio ubicado en Eugenia 520, Col. Del Valle, C.P. 03100, Benito Juarez, Ciudad de Mexico, es el responsable de recabar sus datos personales, del tratamiento que se le de a los mismos, asi como de su proteccion, y pone a su disposicion el presente Aviso de Privacidad en cumplimiento a los articulos 15 y 16 de la Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares (en lo sucesivo la "Ley"). Los datos personales que usted ha proporcionado a Krdia de manera directa o por conducto de tercero debidamente autorizado para ello, a traves de medios electronicos, han sido recabados y seran tratados por Krdia de conformidad con los principios de licitud, consentimiento, informacion, calidad, finalidad, lealtad, proporcionalidad y responsabilidad, en terminos de lo dispuesto en la Ley.
              </p>
            </section>

            {/* Section III */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                III. Datos Personales Sujetos a Tratamiento
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, los datos personales del Titular que seran recabados y sujetos a tratamiento son:
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                <li>Datos de identificacion</li>
                <li>Datos de contacto</li>
              </ul>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                De igual manera, Krdia podra recabar su direccion de IP (Internet Protocol) para ayudar a diagnosticar problemas relacionados con los servicios prestados, y relacionados con el uso y administracion de la Plataforma. Una direccion de IP es un numero que se le asigna a su computadora cuando usa Internet. Su direccion de IP tambien es utilizada para ayudar a identificar al Titular dentro de una sesion particular y para recolectar informacion demografica y estadistica general.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Los datos personales podran ser recabados de manera directa del Titular al registrarse y/o ingresar a la Plataforma al utilizar los servicios prestados por Krdia; o de manera indirecta a traves de fuentes de informacion de acceso publico o por conducto de un tercero debidamente autorizado por el Titular para transferir sus datos personales a Krdia para las finalidades previstas en el presente Aviso de Privacidad. La Plataforma podra recabar informacion del Titular de manera constante sin que medie aviso adicional. En caso de que los datos personales sean transferidos por un tercero, el tercero en este acto manifiesta que cuenta con el consentimiento expreso y por escrito del Titular para transferir a Krdia sus datos personales y sus datos personales patrimoniales y financieros, para las finalidades previstas en el presente Aviso de Privacidad.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Krdia y/o sus afiliadas, subsidiarias, sociedades controladoras, asociadas, o comisionistas podran, mas no estaran obligados a, realizar las investigaciones y acciones que consideren necesarias, a efecto de comprobar a traves de cualquier tercero, dependencia o autoridad, la veracidad de los datos que les fueron proporcionados, o de la facultad para transferirlos, asi como suspender temporal o definitivamente los servicios en favor de aquellos usuarios cuyos datos no hayan podido ser confirmados.
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-6">
                Datos Patrimoniales o Financieros
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Krdia podra recabar los siguientes datos personales patrimoniales y financieros del Titular: (i) informacion fiscal y clave CIEC; (ii) historial crediticio; (iii) informacion sobre ingresos y egresos; y (iv) informacion sobre cuentas bancarias, tarjetas de credito, seguros, afores y fianzas.
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-6">
                Datos Sensibles
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Krdia no recabara datos personales sensibles. Sin perjuicio de lo anterior, en el supuesto de que Krdia requiera recabar datos personales sensibles, solicitara el consentimiento expreso y por escrito del Titular para su tratamiento.
              </p>
            </section>

            {/* Section IV */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                IV. Finalidades del Tratamiento
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Sus datos personales seran utilizados para las siguientes finalidades principales:
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                <li>Para brindarle un servicio de manera personalizada y acorde con sus necesidades particulares.</li>
                <li>Prestar los servicios de administracion de la Plataforma.</li>
                <li>Realizar investigaciones en fuentes de acceso publicas, gratuitas o con costo, sobre la situacion juridica, financiera y patrimonial del Titular.</li>
                <li>Determinar la capacidad de pago o endeudamiento del Titular.</li>
                <li>Para administrar la cuenta de usuario del Titular en la Plataforma.</li>
                <li>Para generar una mejor experiencia de usuario en la Plataforma.</li>
                <li>Contactar al usuario para cualquier cuestion relacionada con su cuenta o los servicios proporcionados por Krdia.</li>
                <li>Contactar al usuario en relacion con las solicitudes de Derechos ARCO (segun se define mas adelante) que formule.</li>
                <li>Realizar y dar seguimiento a consultas, investigaciones y/o revisiones de las actividades, operaciones, quejas y/o reclamaciones del Titular relacionados con los servicios prestados por Krdia.</li>
                <li>Verificar y/o confirmar los datos proporcionados del Titular.</li>
                <li>Proveer los servicios y/o productos que ha solicitado.</li>
                <li>Dar cumplimiento a cualquier disposicion legal aplicable.</li>
              </ul>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Las finalidades anteriores son necesarias para el cumplimiento de las obligaciones a cargo de Krdia derivadas de la relacion con usted, por lo que en caso de que el Titular no acepte el tratamiento de sus datos personales (incluyendo los financieros y/o patrimoniales), podremos vernos imposibilitados para prestar los servicios solicitados.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                El Tratamiento de datos personales sera el que resulte necesario, adecuado y relevante en relacion a las finalidades previstas en el presente Aviso de Privacidad, asi como con aquellos fines que resulten compatibles o complementarios relacionados con los servicios que proporciona Krdia.
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-6">
                Finalidades Secundarias
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Adicionalmente, Krdia podra utilizar los datos personales del Titular para ofrecerle, en su caso, otros productos o servicios propios o de cualquiera de sus afiliadas, subsidiarias, sociedades controladoras, asociadas, y/o comisionistas, asi como para notificarle sobre nuevos servicios o productos que tengan relacion con los ya contratados o adquiridos, informar sobre iniciativas destacadas; comunicarle sobre cambios en los mismos; elaborar estudios y programas para determinar habitos de consumo; realizar evaluaciones periodicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos; y evaluar la calidad del servicio que brindamos; finalidades que no son indispensables para el cumplimiento de la relacion juridica que dio origen al producto o servicio contratado, pero que ayudan a la mejora en la prestacion de nuestros servicios en su favor.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                En caso de que no desee que los datos personales sean utilizados para las finalidades secundarias antes mencionadas, puede enviarnos un correo electronico a la direccion support@Krdia.io, manifestando que no desea que sus datos personales sean utilizados para las finalidades secundarias conforme al presente Aviso de Privacidad.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                La negativa para el uso de los datos personales para las finalidades secundarias mencionadas en el parrafo anterior no podra ser motivo para que le neguemos nuestros servicios.
              </p>
            </section>

            {/* Section V */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                V. Transferencias de Datos
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Krdia podra transferir sus datos personales a terceros mexicanos o extranjeros cuando la transferencia: (i) este prevista en una ley o Tratado en los que Mexico sea parte; (ii) sea necesaria para la prevencion o el diagnostico medico, la prestacion de asistencia sanitaria, tratamiento medico o la gestion de servicios sanitarios; (iii) sea efectuada a sociedades controladoras, subsidiarias o afiliadas bajo el control comun de Krdia, a una sociedad matriz o a sus asociadas; (iv) sea necesaria por virtud de un contrato celebrado o por celebrar en interes del Titular, por Krdia y un tercero o por el Titular y un tercero; (v) sea necesaria o legalmente exigida para la salvaguarda de un interes publico, o para la procuracion o administracion de justicia; (vi) sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial; y (vii) sea precisa para el mantenimiento o cumplimiento de una relacion juridica entre el Titular y Krdia, incluyendo para llevar a cabo las investigaciones sobre la situacion juridica, financiera y patrimonial del Titular solicitadas.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                En cualquier otro caso, Krdia requerira al Titular su autorizacion para realizar la transferencia de datos que resulte necesaria para la prestacion de los servicios solicitados.
              </p>
            </section>

            {/* Section VI */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                VI. Uso de Cookies
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Las Cookies son pequenos archivos que se instalan en el disco rigido, con una duracion limitada en el tiempo que ayudan a personalizar los servicios. Las Cookies permiten reconocer a los usuarios, detectar el ancho de banda que han seleccionado, identificar la informacion mas destacada, calcular el tamano de la audiencia y medir algunos parametros de trafico.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Le informamos que en la Plataforma utilizamos Cookies, web beacons y otras tecnologias analogas a estas, a traves de las cuales es posible monitorear su comportamiento como usuario de internet, asi como brindarle un mejor servicio y experiencia de usuario al navegar en la Plataforma. El Titular puede desactivar el ahorro de cookies en su navegador, borrarlos o gestionar su uso a traves de la configuracion de su navegador, en el entendido que dichas acciones podrian ocasionar una deficiencia en el rendimiento y/o funcionamiento de la Plataforma, asi como tambien ofrecemos ciertas funcionalidades que solo estan disponibles mediante el empleo de Cookies.
              </p>
            </section>

            {/* Section VII */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                VII. Derechos ARCO
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                El Titular tiene derecho en cualquier momento de acceder, rectificar, y/o cancelar los datos personales que Krdia hubiere recabado, asi como a oponerse a su tratamiento de manera total o parcial ("Derechos ARCO"). Para efecto de lo anterior, el Titular debera enviar via correo electronico a la siguiente direccion support@Krdia.io la solicitud respectiva, misma que debera contener, al menos lo siguiente: (i) nombre completo, y domicilio o correo electronico del Titular para comunicarle la respuesta; (ii) copia del documento que acredite la identidad o, en su caso, la representacion legal del Titular; (iii) la descripcion de los datos personales de los que se busca ejercer algun Derecho ARCO; (iv) cualquier otro elemento que facilite la localizacion de los datos personales; (v) el Derecho ARCO que pretende ejercer; y (vi) un breve relato de los motivos o razones por las que pretende ejercer el Derecho ARCO.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Krdia le comunicara la respuesta a la misma, dentro de un plazo de 20 (veinte) dias habiles siguientes a la presentacion de su solicitud. La cancelacion de sus datos estara sujeta a lo previsto en el articulo 26 de la Ley.
              </p>
            </section>

            {/* Section VIII */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                VIII. Revocacion del Consentimiento
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                El Titular puede revocar el consentimiento para el tratamiento de sus datos personales, asi como oponerse al tratamiento de los mismos para las finalidades secundarias, a efecto de lo cual, debera enviar la solicitud respectiva via correo electronico a la direccion support@Krdia.io, acompanada de la informacion y documentacion mencionada en el apartado anterior bajo el rubro "Derechos ARCO". Sin embargo, es importante que tenga en cuenta que, para ciertos fines, la revocacion de su consentimiento podria implicar que Krdia no se encuentre en posibilidades de seguir prestando el servicio que solicito, o la conclusion de su relacion con Krdia. Asimismo, debera considerar que no en todos los casos podremos atender su solicitud o detener el uso de forma inmediata, ya que es posible que por alguna obligacion legal requiramos seguir tratando sus datos personales por un plazo adicional.
              </p>
            </section>

            {/* Section IX */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                IX. Limitacion del Uso o Divulgacion de los Datos Personales
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                El Titular podra limitar el uso y/o divulgacion de sus datos personales, incluyendo sin limitar, su negativa a recibir comunicados y promociones por parte de Krdia por cualquiera de los siguientes medios: (i) mediante solicitud por escrito conforme al procedimiento descrito en el apartado denominado "Derechos ARCO" de este documento; o (ii) mediante su inscripcion en el Registro Publico para Evitar Publicidad, que esta a cargo de la Procuraduria Federal del Consumidor ("PROFECO") y/o en el Registro Publico de Usuarios a cargo de la Comision Nacional para la Proteccion y Defensa de los Usuarios de Servicios Financieros ("CONDUSEF"), con la finalidad de que sus datos personales no sean utilizados para recibir publicidad o promociones de empresas de bienes o servicios. Para mas informacion sobre este registro, usted puede consultar el portal de Internet de la Profeco y de la CONDUSEF, o bien ponerse en contacto directo con estas.
              </p>
            </section>

            {/* Section X */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                X. Modificaciones
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Krdia se reserva el derecho de realizar cambios o modificaciones al presente Aviso de Privacidad en cualquier momento, en cuyo caso, comunicara dicha modificacion traves de la Plataforma, o mediante correo electronico a la direccion que nos sea proporcionada. El Titular contara con un plazo de 10 (diez) dias habiles contados a partir de la publicacion de las modificaciones en la Plataforma o, en su caso, de la recepcion del correo electronico respectivo, para manifestar cualquier objecion o inconformidad a dichas modificaciones.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Cualquier duda o comentario con respecto al presente Aviso de Privacidad, asi como al ejercicio de cualesquiera otros derechos que por la Ley le corresponden, deberan dirigirse al encargado de Avisos de Privacidad al correo electronico support@Krdia.io, asi como tambien podra comunicarse al area de atencion a usuarios en la seccion de Contacto ubicada en la Plataforma para cualquier duda o aclaracion.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Sin perjuicio de lo anterior, en caso de que usted considere que su derecho a la proteccion de sus datos personales ha sido lesionado por alguna conducta u omision de nuestra parte, o presume alguna violacion a las disposiciones previstas en la Ley, podra acudir al Instituto Nacional de Transparencia, Acceso a la Informacion y Proteccion de Datos Personales ("INAI"). Para mayor informacion, le sugerimos visitar su pagina oficial de Internet www.inai.org.mx.
              </p>
            </section>

            {/* Section XI */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                XI. Ley Aplicable y Jurisdiccion
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                El presente Aviso de Privacidad, se regira por las disposiciones legales aplicables en los Estados Unidos Mexicanos. En caso de que exista una disputa o controversia, derivada de la interpretacion, ejecucion o cumplimiento del mismo o de cualquiera de los documentos que del mismo se deriven, o que guarden relacion con este, las partes amigablemente, buscaran llegar a un acuerdo dentro de un plazo de treinta (30) dias naturales, contados a partir de la fecha en que surja cualquier diferencia y se notifique por escrito sobre dicho evento a la contraparte, deduciendo el proceso de mediacion ante el Centro de Justicia Alternativa de la CMDX, llevandose al amparo de la Ley de Justicia Alternativa del Tribunal Superior de Justicia de la CMDX y su Reglamento Interno, vigente al momento de que se presente la controversia.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                En caso de que las partes no lleguen a un acuerdo, convienen en este acto en someter todas las desavenencias que deriven del presente Aviso de Privacidad o de cualquiera de los documentos que del mismo se deriven, o que guarden relacion con este o con aquellos, seran resueltas de manera definitiva se someten a la competencia y leyes de las autoridades administrativas federales o tribunales de la Ciudad de Mexico, renunciando expresamente a cualquier fuero distinto que por razones de sus domicilios presentes o futuros, o por cualquier otra causa pudieren corresponderles.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                El Titular consiente que sus datos personales sean tratados para los fines y conforme a los lineamientos contenidos en el presente Aviso de Privacidad.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                El Titular consiente el tratamiento de sus datos personales patrimoniales y financieros para los fines y conforme a los lineamientos contenidos en el presente Aviso de Privacidad.
              </p>
            </section>

          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200/50 dark:border-gray-800/50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 Krdia. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

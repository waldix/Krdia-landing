'use client';

import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TerminosYCondicionesPage() {
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
            Terminos y Condiciones
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              KARDIA TECH SAPI DE CV (en lo sucesivo "KRDIA"), con domicilio en Eugenia 520, Col. Del Valle Centro, C.P. 03100, Benito Juarez, CDMX, Mexico, te da a conocer por este medio los Terminos y Condiciones generales de uso de sus Paginas Web (en adelante, la "Pagina"), sus aplicaciones moviles (en lo sucesivo "Apps") y/o cualquier otra plataforma digital que KRDIA ponga a tu disposicion, en las cuales se pueden encontrar en forma enunciativa mas no limitativa, informacion, servicios, consultas, contenidos y/o productos.
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Los presentes Terminos y Condiciones Generales de Uso (en lo sucesivo "Terminos" y/o "Condiciones") tienen un caracter obligatorio y vinculante; todo usuario debera abstenerse de utilizar la Pagina, las Apps y/o los servicios ofrecidos por KRDIA en caso de no aceptarlos.
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Toda aplicacion o gestion dentro de la Pagina y/o las Apps se entendera como la aceptacion expresa de los presentes Terminos y Condiciones. Al aceptar estos Terminos, aceptas que existe una relacion juridica valida y vinculante entre KRDIA y tu, vigente hasta en tanto no manifiestes tu deseo de terminar dicha relacion, solicitando el cierre de tu cuenta de usuario creada conforme a lo dispuesto en la seccion IV siguiente y absteniendote de utilizar cualquier servicio que KRDIA ofrece o llegue a ofrecer.
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              LEE ESTOS TERMINOS Y CONDICIONES DETENIDAMENTE ANTES DE ACCEDER O USAR LOS SERVICIOS.
            </p>

            {/* Section I */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                I. USO Y RESTRICCIONES
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Mediante tu acceso y uso de la Pagina, las Apps o los productos de KRDIA, estas acordando vincularte juridicamente por estos Terminos y Condiciones, que pueden establecer una relacion contractual entre tu y KRDIA. Si no aceptas dichos Terminos y Condiciones, no podras acceder o usar los Servicios, mismos que estaran unicamente disponibles para personas que gocen con la capacidad legal para contratar y para quienes no hayan sido vetados definitiva o parcialmente por KRDIA, a su sola discrecion, en relacion a su comportamiento crediticio o personal.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                KRDIA podra poner fin de inmediato a estos Terminos y Condiciones o cualquiera de los Servicios respecto de ti o, en general, dejar de ofrecer o denegar el acceso a los mismos o cualquier parte de ellos, en cualquier momento y por cualquier motivo. Se podran aplicar condiciones suplementarias a determinados Servicios, como politicas para una actividad o una promocion particular, y dichas condiciones suplementarias se comunicaran en relacion con los Servicios aplicables.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                KRDIA no se responsabilizara bajo ninguna circunstancia de la imprecision de los datos personales que brindes y/o validez, reservandose la facultad de requerir documentacion comprobatoria. La recopilacion y el uso que hacemos de la informacion personal en relacion con los Servicios es conforme a lo dispuesto en nuestro Aviso de Privacidad Integral para Clientes/Usuarios.
              </p>
            </section>

            {/* Section II */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                II. MODIFICACIONES
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                KRDIA podra modificar libremente y en cualquier momento los Terminos y Condiciones cuando lo considere oportuno. Las modificaciones seran efectivas despues de la publicacion por parte de KRDIA de dichos Terminos y Condiciones actualizados en su Pagina o las politicas modificadas o condiciones suplementarias sobre el Servicio aplicable. Tu acceso o uso continuado de la Pagina, las Apps o los Servicios despues de dicha publicacion, constituye tu consentimiento a vincularte por los Terminos y Condiciones y sus modificaciones, siendo la ultima version publicada la que regulara inmediatamente las relaciones comerciales que se generen al momento de realizarse la transaccion.
              </p>
            </section>

            {/* Section III */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                III. OBJETO
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Los presentes Terminos y Condiciones regulan la autorizacion de uso que otorga KRDIA a los Clientes y Usuarios, para que estos ingresen a su Pagina, sus Apps, se informen sobre los Servicios que KRDIA ofrece, y en su caso, soliciten alguno de ellos. La celebracion de la relacion contractual se da unicamente entre KRDIA y Clientes personas fisicas de nacionalidad mexicana, mayores de edad con capacidad legal para contratar. El Cliente y/o Usuario, al utilizar las Plataformas y/o Apps de KRDIA, declara que actua por cuenta propia y que el credito sera para uso personal y nunca para un tercero.
              </p>
            </section>

            {/* Section IV */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                IV. CUENTA DE USUARIO
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Sujeto al cumplimiento de los presentes Terminos y Condiciones, los Clientes y/o Usuarios crean, con su correo electronico o telefono, una cuenta de usuario personal, exclusiva e intransferible para realizar los procesos de adquisicion de creditos y analisis credito de KRDIA en la Pagina o las Apps respectivamente.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                KRDIA se reserva cualquier derecho que no haya sido expresamente otorgado por los presentes Terminos y Condiciones. El uso de la Cuenta de Usuario es personal e intransferible, por lo cual los Clientes y/o Usuarios no se encuentran facultados para ceder los datos de validacion para el acceso a su perfil. Es de la entera responsabilidad del Cliente y/o Usuario mantener de forma confidencial y en un lugar seguro su usuario y contrasena para acceder a su perfil en KRDIA.io.
              </p>
            </section>

            {/* Section V */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                V. PAGINA WEB Y APPS
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                La informacion mostrada en la Pagina y/o Apps de KRDIA es meramente con fines informativos. El material que se encuentra en la Pagina, y en estos Terminos, esta sujeto a cambios sin previo aviso, que estaran visibles tanto en la Pagina como en los Terminos con la ultima fecha de actualizacion senalada. El acceso al Servicio puede ser limitado o lento, o verse afectado debido a una serie de factores.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Podran mostrarse enlaces a una pagina diferente a KRDIA, que se proporcionan unicamente como indicadores de informacion en temas que podrian ser utiles a usuarios del Servicio. KRDIA no tiene el control del contenido en las paginas. KRDIA no garantiza el contenido en dichas paginas, incluida la precision, integridad y confiabilidad de los sitios.
              </p>
            </section>

            {/* Section VI */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                VI. PROPIEDAD INTELECTUAL
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                KRDIA y todas aquellas marcas de su propiedad son Marcas Registradas, protegidas por la Ley de la Propiedad Industrial tanto en Mexico como en el extranjero segun las leyes aplicables. La utilizacion, difusion, exhibicion, explotacion, comercializacion o cualquier otro uso, sea parcial o total, de forma identica o que confunda en menor o mayor grado; sea por cualquier medio, esta expresamente prohibido sin previa autorizacion por escrito del titular de los derechos de autor y/o marca correspondiente.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                El usuario no adquirira bajo ninguna circunstancia concesion o derecho alguno sobre la propiedad intelectual e industrial de KRDIA por el mero uso de su Pagina y Apps de los Servicios ofrecidos en las mismas.
              </p>
            </section>

            {/* Section VII */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                VII. CONSENTIMIENTO
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Manifiesta el Cliente y/o Usuario que la relacion contractual que se puede llegar a generar por el uso de la Pagina, las Apps o cualquiera de los Productos ofrecidos sera directamente con KRDIA, y consistira en una prestacion de servicios celebrada por medios electronicos, en la cual el Cliente es el acreditado y KRDIA es el acreditante.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Adicionalmente, reconoces y aceptas que podras expresar tu consentimiento respecto de los Servicios que contrates a traves de las Plataformas asi como otorgar autorizaciones a KRDIA necesarias para su contratacion, mediante medios electronicos tales como, incluyendo sin limitar, el Numero de Identificacion Personal ("NIP"), huella digital y/o firma electronica.
              </p>
            </section>

            {/* Section VIII */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                VIII. INDEMNIZACION
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                El Cliente y/o Usuario indemnizara y mantendra indemne a KRDIA, sus filiales, empresas controladas y/o controlantes, directivos, administradores, representantes y empleados, por cualquier reclamo o demanda de otros Usuarios o terceros por sus actividades en la Pagina o por su incumplimiento de los Terminos y Condiciones Generales y demas Politicas que se entienden incorporadas al presente o por la violacion de cualesquiera leyes o derechos de terceros, incluyendo los honorarios de abogados en una cantidad razonable.
              </p>
            </section>

            {/* Section IX */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                IX. POLITICAS DE SERVICIO, ENTREGAS Y CANCELACIONES
              </h2>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-6">
                IX.I. Medidas de Seguridad y Proteccion de Fondos
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Nuestra plataforma prioriza la integridad de sus transacciones a traves de los siguientes protocolos: Encriptacion de Datos (todas las transacciones se realizan bajo protocolos de seguridad SSL/TLS de 256 bits), Verificacion de Identidad (KYC) para prevenir el fraude y el lavado de dinero, y Custodia Segura (los fondos recaudados se mantienen en cuentas de deposito segregadas).
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-6">
                IX.II. Plazos de Entrega y Liquidacion (Dispersion)
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                El tiempo para que los fondos recaudados esten disponibles en la cuenta bancaria del usuario depende del metodo de pago y los procesos de validacion. Cada pago recibido entra en un periodo de validacion de 24 a 48 horas habiles. Una vez solicitada la liquidacion, el deposito se vera reflejado en un plazo de 24 a 48 dias habiles. Los pagos seran procesados mediante la pasarela de Openpay.
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-6">
                IX.III. Politica de Cancelacion y Reembolsos
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                El usuario podra cancelar su campana o solicitud de cobro siempre que no se hayan procesado pagos. Los reembolsos solo seran procedentes en caso de duplicidad de cargo o error tecnico comprobable del sistema. Cualquier solicitud de devolucion debe realizarse dentro de las primeras 72 hrs naturales posteriores a la transaccion.
              </p>

              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-6">
                IX.IV. Exclusion de Responsabilidad
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                La empresa actua unicamente como un intermediario tecnologico de recaudacion. No nos hacemos responsables por el uso final que el recaudador haga de los fondos, el incumplimiento de promesas ofrecidas por el organizador de la recaudacion, o fallos en las instituciones bancarias receptoras.
              </p>
            </section>

            {/* Section X */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                X. DOMICILIO Y LEGISLACION APLICABLE
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Se fija como domicilio de KRDIA el ubicado en Eugenia 516, Piso 4, Col. Del Valle Centro, C.P. 03100, Benito Juarez, CDMX, Mexico. Para lo no previsto en estos Terminos y Condiciones, los Clientes y Usuarios acuerdan someterse a las leyes aplicables de los Estados Unidos Mexicanos.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Para la interpretacion y ejecucion de los presentes Terminos y Condiciones, el Cliente o Usuario acepta someterse a la jurisdiccion y competencia de los tribunales competentes de Ciudad de Mexico, CDMX, renunciando expresamente al fuero que pudiese corresponderle por razon de su domicilio presente o futuro.
              </p>
            </section>

            {/* Section XI */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10">
                XI. ADVERTENCIAS
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                Incumplir tus obligaciones te puede generar comisiones e intereses moratorios. Contratar creditos que excedan tu capacidad de pago afecta tu historial crediticio.
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

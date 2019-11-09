# language: es

Característica: webBrowser
  Escenario: empleado de PSA quiere ingresar al sitio web
    Dado que soy empleado de PSA
     Cuando ingreso a la direccion de la pagina web de PSA
     Entonces tendre que estar en la pagina web de PSA

  Escenario: el gerente de finanzas quiere saber el costo de un proyecto
    Dado que soy el gerente de finanzas
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso al proyecto
     Entonces veo costo el proyecto
     Y los clientes del proyecto

  Escenario: el gerente de finanzas quiere saber los clientes de un proyecto
    Dado que soy el gerente de finanzas
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a los clientes
     Entonces veo la facturacion por cliente
     Y la facturacion por proyecto

  Escenario: el gerente de finanzas quiere saber las notificaciones de los proyectos
    Dado que soy el gerente de finanzas
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a notificaciones
     Entonces veo las notificaciones mas importantes de los proyectos
     Y veo que de proyecto se trata
    Dado que soy el gerente de finanzas
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso una fecha
     Y ingreso a notificaciones
     Entonces veo las notificaciones mas importantes de los proyectos de la fecha ingresada
     Y veo de proyecto se trata

  Escenario: el desarrollador quiere el estado de las tareas
    Dado que soy el desarrollador
     Cuando ingreso a la direccion de la pagina web de PSA
     Entonces veo las tareas sin iniciar
     Y las tareas en progreso
     Y las tareas atrasadas
     Y las tareas finalizadas

  Escenario: el desarrollador quiere saber las notificaciones del dia
    Dado que soy el desarrollador
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a notificaciones
     Entonces veo las notificaciones relacionado a los proyectos
    Dado que soy el desarrollador
     Cuando ingreso a la direccion de la pagina web de PSA
     Y selecciono una fecha
     Y ingreso a notificaciones
     Entonces veo las notificaciones relacionadas a los proyectos en la fecha ingresada

  Escenario: el desarrollador quiere de sus tareas
    Dado que soy el desarrollador
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a tareas
     Entonces veo un listado de tareas con su titulo
     Y veo su prioridad
     Y veo su estado
     Y veo su tiempo estimado
     Y veo tu feature
     Y veo su descripcion
     


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
    
  Escenario: el gerente de marketing quiere los features
    Dado que soy el gerente de marketing
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a features
     Entonces veo un listado de features con su nombre
     Y veo su prioridad
     Y veo su tiempo estimado

  Escenario: el empleado de PSA quiere saber las notificaciones relacionadas a su funcion
    Dado que soy empleado de PSA
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a notificaciones
     Entonces veo las notificaciones relacionadas a mi funcion
    Dado que soy el gerente de marketing
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso un dia
     Y ingreso a notificaciones
     Entonces veo las notificaciones relacionadas a mi funcion en la fecha ingresada
    
  Escenario: el jefe de desarrollo quiere saber los proyectos y sus lideres
    Dado que soy el jefe de desarrollo
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a lideres de proyecto
     Entonces veo los proyectos y cada lider de proyecto
         
  Escenario: el jefe de desarrollo quiere saber el listado de proyectos y su lista de tareas
    Dado que soy el jefe de desarrollo
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a proyectos
     Entonces veo un listado con los proyectos
     Y veo sus horas de desarrollo
     Y veo sus tiempo estimado de finalizacion
     Y veo los clientes relacionados al proyecto
     Y veo sus requisitos estimados
     Y veo sus tareas
     Y su tiempo invertido por cada tarea
     Y su tiempo estimado por caa tarea
         
  Escenario: el lider de proyecto quiere saber sus tareas relacionadas al proyecto asignado
    Dado que soy el lider de proyecto
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a tareas
     Entonces veo un listado con los proyectos asignados
    Dado que soy el lider de proyecto
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a tareas
     Y selecciono un proyecto
     Entonces veo un listado con las tareas relacionadas al proyecto
     Y veo su prioridad
     Y veo su titulo
     Y veo su estado
     Y veo su tiempo invertido
     Y veo su tiempo estimado
     Y veo su tiempo restante

         
  Escenario: el lider de proyecto quiere crear una tarea en un proyecto asignado
    Dado que soy el lider de proyecto
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a tareas
     Y presiono en crear tarea
     Entonces veo puedo crear una tarea
    Dado que soy el lider de proyecto
     Cuando ingreso a la direccion de la pagina web de PSA
     Y ingreso a tareas
     Y presiono en crear tarea
     Entonces veo puedo ingresar un titulo
     Y veo que puedo ingresar una descripcion
     Y veo que puedo ingresar a que proyecto pertenece
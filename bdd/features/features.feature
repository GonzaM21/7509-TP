# language: es

Característica: Proyectos

  Escenario: el lider de proyectos quiere asignar un tipo a un proyecto
    Dado que soy un lider de proyecto
     Cuando asigno un tipo a un proyecto
     Entonces tendra el tipo que le asigne

  Escenario: el lider de proyecto quiere remplazar un tipo de un proyecto
    Dado que soy un lider de proyecto
     Cuando reemplazo un tipo a un proyecto
     Entonces el proyecto tendra el nuevo tipo

  Escenario: el lider de proyecto quiere definir un hito para un proyecto
    Dado que soy un lider de proyecto
     Cuando asigno un hito a un proyecto
     Entonces el proyecto tendra mi hito asignado

  Escenario: el lider de proyecto asigno un hito a un proyecto
    Dado que soy un lider de proyecto
     Cuando el proyecto tiene un hito que se completo
     Entonces el proyecto muestra el hito se completo
    Dado que soy un lider de proyecto
     Cuando el hito asignado tiene una fecha pasada a la actual no se completo
     Entonces el proyecto muestra el proyecto esta atrasado

  Escenario: El jefe de desarrollo quiere ver la cantidad de horas totales  de desarrollo que un proyecto lleva
    Dado que soy un jefe de desarrollo
      Cuando selecciono un proyecto
      Entonces muestro la cantidad de horas de desarrollo de un proyecto

  Escenario: El jefe de desarrollo quiere ver el progreso de las tareas asociadas a un proyecto
    Dado que soy un jefe de desarrollo
      Cuando selecciono un proyecto
      Entonces muestro el tiempo estimado para terminar el proyecto

  Escenario: El jefe de desarrollo quiere ver los requisitos de un proyecto
    Dado que soy un jefe de desarrollo
      Cuando selecciono un proyecto
      Entonces muestro los requisitos relacionados al proyecto

  Escenario: El jefe de desarrollo quiere ver los clientes impactados en un proyecto
    Dado que soy un jefe de desarrollo
      Cuando selecciono un proyecto
      Entonces muestro la lista de clientes impactados
  
  Escenario: El jefe de desarrollo quiere asignar requisitos a un proyecto
    Dado que soy un jefe de desarrollo
      Cuando asigno requisitos a un proyecto
      Entonces el requisito esta agregdo en mi proyecto

  Escenario: El lider de proyecto quiere iniciar un proyecto nuevo
    Dado que soy un lider de proyecto
      Cuando creo un proyecto
      Entonces informar que el proyecto fue creado con exito
    Dado que soy un lider de proyecto
      Cuando creo un proyecto con un nombre ya existente
      Entonces informar que no se creo con normalidad


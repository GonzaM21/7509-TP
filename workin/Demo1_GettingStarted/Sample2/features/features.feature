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



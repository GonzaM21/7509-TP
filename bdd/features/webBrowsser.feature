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

class Proyecto:
    def __init__(self, nombre):
        self.nombre = nombre

    def asignarTipo(self, tipo):
        self.tipo = tipo
        print("Asigno tipo {}".format(tipo))

    def mostrarTipo(self):
        print("Muestro el tipo asignado")

    def asignarHito(self, hito):
        self.hito = hito
        print("Ingreso hito")
    
    def mostrarHito(self):
        print("Muestro hito")
    
    def completarHito(self):
        print("Completo hito")
    
    def demorarHito(self):
        print("Hito demorado")
    
    def mostrarHorasDeDesarrollo(self):
        print("Muestro horas de desarrollo")

    def mostrarProgresoTareasAsociadas(self):
        print("Muestro tiempo que falta para terminar el proyecto")
    
    def asignarRequisito(self, requisito):
        self.requisito = requisito
        print("Asigno requisito")

    def mostrarRequisitosAsociados(self):
        print("Muestro requisitos asociados")

    def mostrarListaDeClientesImpactados(self):
        print("Muestro lista de clientes impactados")
    
    def mostrarValides(self):
        print("Muestro si el proyecto es valido")
    
    

proyecto = Proyecto("anInfo")
class Proyecto:
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
    
    def mostrarProgresoTareasAsociadas(self):
        print("Muestro tiempo que falta para terminar el proyecto")
    
    def mostrarRequisitosAsociados(self):
        print("Muestro requisitos asociados")

    def mostrarListaDeClientesImpactados(self):
        print("Muestro lista de clientes impactados")
    
    
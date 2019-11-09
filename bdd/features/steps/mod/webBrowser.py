class WebBrowser:
    def navegarPaginaWeb(self, pagina):
        self.pagina = pagina
        print("Estoy navegando en la pagina web", pagina)

    def mostrarPaginaWeb(self):
        print("Muestro pagina web")

    def obtenerElemento(self, elemento):
        print("Obtuve elemento")
    
    def ingresar(self, elemento, valor):
        print("Ingreso en valor en el elemento", elemento)

    def interactuar(self, elemento):
        print("Interactue con el elemento", elemento)

webBrowser = WebBrowser()

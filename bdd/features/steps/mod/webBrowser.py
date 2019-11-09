class WebBrowser:
    def navegarPaginaWeb(self, pagina):
        self.pagina = pagina
        print("Estoy navegando en la pagina web", pagina)

    def mostrarPaginaWeb(self):
        print("Muestro pagina web")

    def obtenerElemento(self, elemento):
        print("Obtuve elemento")
        
webBrowser = WebBrowser()

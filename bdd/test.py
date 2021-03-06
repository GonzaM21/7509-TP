from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import unittest
from selenium.webdriver.support.select import Select
from time import sleep

class PythonOrgSearch(unittest.TestCase):

	def setUp(self):
		self.driver = webdriver.Chrome(executable_path = './chromedriver')
	
	def inicio_creacion_proyecto(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

	def nombre_proyecto_vacio(self):
		self.inicio_creacion_proyecto()
		#No le doy ningun nombre al proyecto
		nombre_proyecto = self.driver.find_element_by_id('nombre-proyecto')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_proyecto.get_attribute("value") == '')
		assert(nombre_proyecto.get_attribute("aria-invalid") == "true")
	
	def nombre_proyecto_ok(self):
		self.inicio_creacion_proyecto()
		#Le doy nombre al proyecto
		nombre_proyecto = self.driver.find_element_by_id('nombre-proyecto')
		nombre_proyecto.send_keys("Mi proyecto")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_proyecto.get_attribute("value") == 'Mi proyecto')
		assert(nombre_proyecto.get_attribute("aria-invalid") == "false")
	
	def prioridad_proyecto_valida(self):
		self.inicio_creacion_proyecto()
		#Le doy prioridad al proyecto
		prioridad_proyecto = self.driver.find_element_by_id('prioridad-proyecto')
		prioridad_proyecto.send_keys("12 Invalid priority 12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(prioridad_proyecto.get_attribute("value") == '12 Invalid priority 12')
		assert(prioridad_proyecto.get_attribute("aria-invalid") == "true")

	def prioridad_proyecto_invalida(self):
		self.inicio_creacion_proyecto()
		#Le doy prioridad al proyecto
		prioridad_proyecto = self.driver.find_element_by_id('prioridad-proyecto')
		prioridad_proyecto.send_keys("12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(prioridad_proyecto.get_attribute("value") == '12')
		assert(prioridad_proyecto.get_attribute("aria-invalid") == "false")

	def nombre_lider_proyecto_vacio(self):
		self.inicio_creacion_proyecto()
		#No le doy ningun nombre al lider de proyecto
		nombre_proyecto = self.driver.find_element_by_id('lider-proyecto')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_proyecto.get_attribute("value") == '')
		assert(nombre_proyecto.get_attribute("aria-invalid") == "true")
	
	def nombre_lider_proyecto_ok(self):
		self.inicio_creacion_proyecto()
		#Le doy nombre al lider de proyecto
		nombre_proyecto = self.driver.find_element_by_id('lider-proyecto')
		nombre_proyecto.send_keys("Fernando Soluzzia")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_proyecto.get_attribute("value") == 'Fernando Soluzzia')
		assert(nombre_proyecto.get_attribute("aria-invalid") == "false")

	def version_valida(self):
		self.inicio_creacion_proyecto()
		#Le doy version al proyecto
		version_proyecto = self.driver.find_element_by_id('version-proyecto')
		version_proyecto.send_keys("Not a valid version")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(version_proyecto.get_attribute("value") == 'Not a valid version')
		assert(version_proyecto.get_attribute("aria-invalid") == "true")

	def version_invalida(self):
		self.inicio_creacion_proyecto()
		#Le doy version al proyecto
		version_proyecto = self.driver.find_element_by_id('version-proyecto')
		version_proyecto.send_keys("1.2.4")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(version_proyecto.get_attribute("value") == '1.2.4')
		assert(version_proyecto.get_attribute("aria-invalid") == "false")
	
	def limite_exposicion_invalido(self):
		self.inicio_creacion_proyecto()
		#Le doy riesgo al proyecto
		riesgo_proyecto = self.driver.find_element_by_id('riesgo-proyecto')
		riesgo_proyecto.send_keys("Not a valid risk")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(riesgo_proyecto.get_attribute("value") == 'Not a valid risk')
		assert(riesgo_proyecto.get_attribute("aria-invalid") == "true")
	
	def limite_exposicion_invalido_numerico(self):
		self.inicio_creacion_proyecto()
		#Le doy riesgo al proyecto
		riesgo_proyecto = self.driver.find_element_by_id('riesgo-proyecto')
		riesgo_proyecto.send_keys("2.9")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(riesgo_proyecto.get_attribute("value") == '2.9')
		assert(riesgo_proyecto.get_attribute("aria-invalid") == "true")

	def limite_exposicion_valido(self):
		self.inicio_creacion_proyecto()
		#Le doy riesgo al proyecto
		riesgo_proyecto = self.driver.find_element_by_id('version-proyecto')
		riesgo_proyecto.send_keys("0.95")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(riesgo_proyecto.get_attribute("value") == '0.95')
		assert(riesgo_proyecto.get_attribute("aria-invalid") == "false")
	
	def fecha_valida(self):
		self.inicio_creacion_proyecto()
		#Le doy una fecha de finalizacion al proyecto
		fecha_proyecto = self.driver.find_element_by_id('fecha-proyecto')
		fecha_proyecto.send_keys("30/89/2929")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(fecha_proyecto.get_attribute("value") == '30/89/2929')
		assert(fecha_proyecto.get_attribute("aria-invalid") == "true")
	
	def fecha_invalida(self):
		self.inicio_creacion_proyecto()
		#Le doy una fecha de finalizacion al proyecto
		fecha_proyecto = self.driver.find_element_by_id('fecha-proyecto')
		fecha_proyecto.send_keys("30/04/2020")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(fecha_proyecto.get_attribute("value") == '30/04/2020')
		assert(fecha_proyecto.get_attribute("aria-invalid") == "false")
	
	def test_creacion_proyecto(self):
		self.nombre_proyecto_ok()
		self.nombre_proyecto_vacio()
		self.prioridad_proyecto_valida()
		self.prioridad_proyecto_invalida()
		self.nombre_lider_proyecto_ok()
		self.nombre_lider_proyecto_vacio()
		self.version_valida()
		self.version_invalida()
		self.limite_exposicion_valido()
		self.limite_exposicion_invalido()
		self.limite_exposicion_invalido_numerico()
		self.fecha_valida()
		self.fecha_invalida()
	
	def inicio_creacion_tarea(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		tarea_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'tarea-bar')))
		tarea_bar.click()
		sleep(2)

		nueva_tarea = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-nueva-tarea')))
		nueva_tarea.click()
		sleep(2)

	def	nombre_tarea_vacio(self):
		self.inicio_creacion_tarea()
		#No le doy ningun nombre a la tarea
		nombre_tarea = self.driver.find_element_by_id('nombre-tarea')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-tarea')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_tarea.get_attribute("value") == '')
		assert(nombre_tarea.get_attribute("aria-invalid") == "true")
		sleep(5)

	def nombre_tarea_ok(self):
		self.inicio_creacion_tarea()
		#Le doy un nombre a la tarea
		nombre_tarea = self.driver.find_element_by_id('nombre-tarea')
		nombre_tarea.send_keys("Mi tarea")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-tarea')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_tarea.get_attribute("value") == 'Mi tarea')
		assert(nombre_tarea.get_attribute("aria-invalid") == "false")
		sleep(5)
	
	def	descripcion_tarea_vacia(self):
		self.inicio_creacion_tarea()
		#No le doy ninguna descripcion a la tarea
		descripcion_tarea = self.driver.find_element_by_id('descripcion-tarea')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-tarea')))
		boton_aceptar.click()
		sleep(2)
		assert(descripcion_tarea.get_attribute("value") == '')
		assert(descripcion_tarea.get_attribute("aria-invalid") == "true")
		sleep(5)

	def descripcion_tarea_ok(self):
		self.inicio_creacion_tarea()
		#Le doy una descripcion a la tarea
		descripcion_tarea = self.driver.find_element_by_id('descripcion-tarea')
		descripcion_tarea.send_keys("Una descripcion")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-tarea')))
		boton_aceptar.click()
		sleep(2)
		assert(descripcion_tarea.get_attribute("value") == 'Una descripcion')
		assert(descripcion_tarea.get_attribute("aria-invalid") == "false")
		sleep(5)
	
	def prioridad_tarea_valida(self):
		self.inicio_creacion_tarea()
		#Le doy prioridad a la tarea
		prioridad_tarea = self.driver.find_element_by_id('prioridad-tarea')
		prioridad_tarea.send_keys("12 Invalid priority 12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-tarea')))
		boton_aceptar.click()
		sleep(2)
		assert(prioridad_tarea.get_attribute("value") == '12 Invalid priority 12')
		assert(prioridad_tarea.get_attribute("aria-invalid") == "true")

	def prioridad_tarea_invalida(self):
		self.inicio_creacion_tarea()
		#Le doy prioridad a la tarea
		prioridad_tarea = self.driver.find_element_by_id('prioridad-tarea')
		prioridad_tarea.send_keys("12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-tarea')))
		boton_aceptar.click()
		sleep(2)
		assert(prioridad_tarea.get_attribute("value") == '12')
		assert(prioridad_tarea.get_attribute("aria-invalid") == "false")
	
	def tiempo_estimado_valido(self):
		self.inicio_creacion_tarea()
		#Le doy tiempo estimado a la tarea
		tiempo_estimado = self.driver.find_element_by_id('tiempo-tarea')
		tiempo_estimado.send_keys("12 Invalid time 12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-tarea')))
		boton_aceptar.click()
		sleep(2)
		assert(tiempo_estimado.get_attribute("value") == '12 Invalid time 12')
		assert(tiempo_estimado.get_attribute("aria-invalid") == "true")

	def tiempo_estimado_invalido(self):
		self.inicio_creacion_tarea()
		#No le doy un tiempo estimado valido a la tarea
		tiempo_estimado = self.driver.find_element_by_id('tiempo-tarea')
		tiempo_estimado.send_keys("1.2")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-tarea')))
		boton_aceptar.click()
		sleep(2)
		assert(tiempo_estimado.get_attribute("value") == '1.2')
		assert(tiempo_estimado.get_attribute("aria-invalid") == "false")

	def test_creacion_tarea(self):
		self.nombre_tarea_vacio()
		self.nombre_tarea_ok()
		self.descripcion_tarea_vacia()
		self.descripcion_tarea_ok()
		self.prioridad_tarea_invalida()
		self.prioridad_tarea_valida()
		self.tiempo_estimado_invalido()
		self.tiempo_estimado_valido()
	
	def inicio_creacion_riesgo(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		tarea_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'riesgo-bar')))
		tarea_bar.click()
		sleep(2)

		nueva_tarea = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-nuevo-riesgo')))
		nueva_tarea.click()
		sleep(2)
	
	def	nombre_riesgo_vacio(self):
		self.inicio_creacion_riesgo()
		#No le doy ningun nombre al riesgo
		nombre_riesgo = self.driver.find_element_by_id('nombre-riesgo')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-riesgo')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_riesgo.get_attribute("value") == '')
		assert(nombre_riesgo.get_attribute("aria-invalid") == "true")
		sleep(5)

	def nombre_riesgo_ok(self):
		self.inicio_creacion_riesgo()
		#Le doy un nombre al riesgo
		nombre_riesgo = self.driver.find_element_by_id('nombre-riesgo')
		nombre_riesgo.send_keys("Mi riesgo")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-riesgo')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_riesgo.get_attribute("value") == 'Mi riesgo')
		assert(nombre_riesgo.get_attribute("aria-invalid") == "false")
		sleep(5)
	
	def probabilidad_riesgo_invalida(self):
		self.inicio_creacion_riesgo()
		#Le doy probabilidad de ocurrencia al riesgo del proyecto
		probabilidad_proyecto = self.driver.find_element_by_id('probabilidad-riesgo')
		probabilidad_proyecto.send_keys("2.9")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-riesgo')))
		boton_aceptar.click()
		sleep(2)
		assert(probabilidad_proyecto.get_attribute("value") == '2.9')
		assert(probabilidad_proyecto.get_attribute("aria-invalid") == "true")
	
	def probabilidad_riesgo_valida(self):
		self.inicio_creacion_riesgo()
		#Le doy probabilidad de ocurrencia al riesgo del proyecto
		probabilidad_proyecto = self.driver.find_element_by_id('probabilidad-riesgo')
		probabilidad_proyecto.send_keys("0.9")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-riesgo')))
		boton_aceptar.click()
		sleep(2)
		assert(probabilidad_proyecto.get_attribute("value") == '0.9')
		assert(probabilidad_proyecto.get_attribute("aria-invalid") == "false")
	
	def impacto_riesgo_invalido(self):
		self.inicio_creacion_riesgo()
		#Le doy impacto al riesgo del proyecto
		impacto_proyecto = self.driver.find_element_by_id('impacto-riesgo')
		impacto_proyecto.send_keys("2.9")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-riesgo')))
		boton_aceptar.click()
		sleep(2)
		assert(impacto_proyecto.get_attribute("value") == '2.9')
		assert(impacto_proyecto.get_attribute("aria-invalid") == "true")
	
	def impacto_riesgo_valido(self):
		self.inicio_creacion_riesgo()
		#Le doy impacto al riesgo del proyecto
		impacto_proyecto = self.driver.find_element_by_id('impacto-riesgo')
		impacto_proyecto.send_keys("0.9")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-riesgo')))
		boton_aceptar.click()
		sleep(2)
		assert(impacto_proyecto.get_attribute("value") == '0.9')
		assert(impacto_proyecto.get_attribute("aria-invalid") == "false")
	
	def test_creacion_riesgo(self):
		self.nombre_riesgo_ok()
		self.nombre_riesgo_vacio()
		self.probabilidad_riesgo_valida()
		self.probabilidad_riesgo_invalida()
		self.impacto_riesgo_valido()
		self.impacto_riesgo_invalido()
	
	def inicio_creacion_iteracion(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		iteracion_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'iteracion-bar')))
		iteracion_bar.click()
		sleep(2)

		nueva_iteracion = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-nueva-iteracion')))
		nueva_iteracion.click()
		sleep(2)
	
	def	nombre_iteracion_vacio(self):
		self.inicio_creacion_iteracion()
		#No le doy ningun nombre a la iteracion
		nombre_iteracion = self.driver.find_element_by_id('nombre-iteracion')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-iteracion')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_iteracion.get_attribute("value") == '')
		assert(nombre_iteracion.get_attribute("aria-invalid") == "true")
		sleep(5)

	def nombre_iteracion_ok(self):
		self.inicio_creacion_iteracion()
		#Le doy un nombre a la iteracion
		nombre_iteracion = self.driver.find_element_by_id('nombre-iteracion')
		nombre_iteracion.send_keys("Mi iteracion")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-iteracion')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_iteracion.get_attribute("value") == 'Mi iteracion')
		assert(nombre_iteracion.get_attribute("aria-invalid") == "false")
		sleep(5)
	
	def fecha_inicio_iteracion_valida(self):
		self.inicio_creacion_iteracion()
		#Le doy una fecha de inicio a la iteracion
		fecha_iteracion = self.driver.find_element_by_id('fecha-inicio-iteracion')
		fecha_iteracion.send_keys("30/04/2020")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-iteracion')))
		boton_aceptar.click()
		sleep(2)
		assert(fecha_iteracion.get_attribute("value") == '30/04/2020')
		assert(fecha_iteracion.get_attribute("aria-invalid") == "false")

	def fecha_inicio_iteracion_invalida(self):
		self.inicio_creacion_iteracion()
		#Le doy una fecha de inicio a la iteracion
		fecha_iteracion = self.driver.find_element_by_id('fecha-inicio-iteracion')
		fecha_iteracion.send_keys("30/89/2929")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-iteracion')))
		boton_aceptar.click()
		sleep(2)
		assert(fecha_iteracion.get_attribute("value") == '30/89/2929')
		assert(fecha_iteracion.get_attribute("aria-invalid") == "true")

	def fecha_fin_iteracion_valida(self):
		self.inicio_creacion_iteracion()
		#Le doy una fecha de inicio a la iteracion
		fecha_iteracion = self.driver.find_element_by_id('fecha-fin-iteracion')
		fecha_iteracion.send_keys("30/04/2020")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-iteracion')))
		boton_aceptar.click()
		sleep(2)
		assert(fecha_iteracion.get_attribute("value") == '30/04/2020')
		assert(fecha_iteracion.get_attribute("aria-invalid") == "false")
	
	def fecha_fin_iteracion_invalida(self):
		self.inicio_creacion_iteracion()
		#Le doy una fecha de inicio a la iteracion
		fecha_iteracion = self.driver.find_element_by_id('fecha-fin-iteracion')
		fecha_iteracion.send_keys("30/89/2929")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-iteracion')))
		boton_aceptar.click()
		sleep(2)
		assert(fecha_iteracion.get_attribute("value") == '30/89/2929')
		assert(fecha_iteracion.get_attribute("aria-invalid") == "true")
	
	def capacidad_iteracion_invalida(self):
		self.inicio_creacion_iteracion()
		#Le doy capacidad a la iteracion
		capacidad_iteracion = self.driver.find_element_by_id('capacidad-iteracion')
		capacidad_iteracion.send_keys("12 Invalid capacity 12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-iteracion')))
		boton_aceptar.click()
		sleep(2)
		assert(capacidad_iteracion.get_attribute("value") == '12 Invalid capacity 12')
		assert(capacidad_iteracion.get_attribute("aria-invalid") == "true")
	
	def capacidad_iteracion_valida(self):
		self.inicio_creacion_iteracion()
		#Le doy capacidad a la iteracion
		capacidad_iteracion = self.driver.find_element_by_id('capacidad-iteracion')
		capacidad_iteracion.send_keys("12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-iteracion')))
		boton_aceptar.click()
		sleep(2)
		assert(capacidad_iteracion.get_attribute("value") == '12')
		assert(capacidad_iteracion.get_attribute("aria-invalid") == "false")

	def test_creacion_iteracion(self):
		self.nombre_iteracion_ok()
		self.nombre_iteracion_vacio()
		self.fecha_inicio_iteracion_valida()
		self.fecha_inicio_iteracion_invalida()
		self.fecha_fin_iteracion_valida()
		self.fecha_fin_iteracion_invalida()
		self.capacidad_iteracion_invalida()
		self.capacidad_iteracion_valida()
	
	def inicio_creacion_hito(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		hito_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'hito-bar')))
		hito_bar.click()
		sleep(2)

		nuevo_hito = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-nuevo-hito')))
		nuevo_hito.click()
		sleep(2)

	def	nombre_hito_vacio(self):
		self.inicio_creacion_hito()
		#No le doy ningun nombre al hito
		nombre_hito = self.driver.find_element_by_id('nombre-hito')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-hito')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_hito.get_attribute("value") == '')
		assert(nombre_hito.get_attribute("aria-invalid") == "true")
		sleep(5)

	def nombre_hito_ok(self):
		self.inicio_creacion_hito()
		#Le doy un nombre al hito
		nombre_hito = self.driver.find_element_by_id('nombre-hito')
		nombre_hito.send_keys("Mi hito")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-hito')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_hito.get_attribute("value") == 'Mi hito')
		assert(nombre_hito.get_attribute("aria-invalid") == "false")
		sleep(5)
	
	def	descripcion_hito_vacio(self):
		self.inicio_creacion_hito()
		#No le doy ninguna descripcion al hito
		descripcion_hito = self.driver.find_element_by_id('descripcion-hito')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-hito')))
		boton_aceptar.click()
		sleep(2)
		assert(descripcion_hito.get_attribute("value") == '')
		assert(descripcion_hito.get_attribute("aria-invalid") == "true")
		sleep(5)

	def descripcion_hito_ok(self):
		self.inicio_creacion_hito()
		#Le doy una descripcion al hito
		descripcion_hito = self.driver.find_element_by_id('descripcion-hito')
		descripcion_hito.send_keys("Mi descripcion de hito")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-hito')))
		boton_aceptar.click()
		sleep(2)
		assert(descripcion_hito.get_attribute("value") == 'Mi descripcion de hito')
		assert(descripcion_hito.get_attribute("aria-invalid") == "false")
		sleep(5)
	
	def test_creacion_hito(self):
		self.nombre_hito_vacio()
		self.nombre_hito_ok()
		self.descripcion_hito_ok()
		self.descripcion_hito_vacio()
	
	def inicio_creacion_requisito(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		requisito_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'requisito-bar')))
		requisito_bar.click()
		sleep(2)

		nuevo_requisito = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-nuevo-requisito')))
		nuevo_requisito.click()
		sleep(2)
	
	def	nombre_requisito_vacio(self):
		self.inicio_creacion_requisito()
		#No le doy ningun nombre al requisito
		nombre_requisito = self.driver.find_element_by_id('nombre-requisito')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-requisito')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_requisito.get_attribute("value") == '')
		assert(nombre_requisito.get_attribute("aria-invalid") == "true")
		sleep(5)

	def nombre_requisito_ok(self):
		self.inicio_creacion_requisito()
		#Le doy un nombre al requisito
		nombre_requisito = self.driver.find_element_by_id('nombre-requisito')
		nombre_requisito.send_keys("Mi requisito")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-requisito')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_requisito.get_attribute("value") == 'Mi requisito')
		assert(nombre_requisito.get_attribute("aria-invalid") == "false")
		sleep(5)
	
	def	descripcion_requisito_vacio(self):
		self.inicio_creacion_requisito()
		#No le doy ninguna descripcion al requisito
		descripcion_requisito = self.driver.find_element_by_id('descripcion-requisito')
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-requisito')))
		boton_aceptar.click()
		sleep(2)
		assert(descripcion_requisito.get_attribute("value") == '')
		assert(descripcion_requisito.get_attribute("aria-invalid") == "true")
		sleep(5)

	def descripcion_requisito_ok(self):
		self.inicio_creacion_requisito()
		#Le doy una descripcion al requisito
		descripcion_requisito = self.driver.find_element_by_id('descripcion-requisito')
		descripcion_requisito.send_keys("Mi descripcion de requisito")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-requisito')))
		boton_aceptar.click()
		sleep(2)
		assert(descripcion_requisito.get_attribute("value") == 'Mi descripcion de requisito')
		assert(descripcion_requisito.get_attribute("aria-invalid") == "false")
		sleep(5)
	
	def prioridad_requisito_valida(self):
		self.inicio_creacion_requisito()
		#Le doy prioridad al requisito
		prioridad_requisito = self.driver.find_element_by_id('prioridad-requisito')
		prioridad_requisito.send_keys("12 Invalid priority 12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-requisito')))
		boton_aceptar.click()
		sleep(2)
		assert(prioridad_requisito.get_attribute("value") == '12 Invalid priority 12')
		assert(prioridad_requisito.get_attribute("aria-invalid") == "true")

	def prioridad_requisito_invalida(self):
		self.inicio_creacion_requisito()
		#Le doy prioridad al requisito
		prioridad_requisito = self.driver.find_element_by_id('prioridad-requisito')
		prioridad_requisito.send_keys("12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-requisito')))
		boton_aceptar.click()
		sleep(2)
		assert(prioridad_requisito.get_attribute("value") == '12')
		assert(prioridad_requisito.get_attribute("aria-invalid") == "false")

	def tiempo_estimado_requisito_valido(self):
		self.inicio_creacion_requisito()
		#Le doy tiempo estimado al requisito
		tiempo_estimado = self.driver.find_element_by_id('tiempo-estimado-requisito')
		tiempo_estimado.send_keys("12 Invalid time 12")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-requisito')))
		boton_aceptar.click()
		sleep(2)
		assert(tiempo_estimado.get_attribute("value") == '12 Invalid time 12')
		assert(tiempo_estimado.get_attribute("aria-invalid") == "true")

	def tiempo_estimado_requisito_invalido(self):
		self.inicio_creacion_requisito()
		#No le doy un tiempo estimado valido al requisito
		tiempo_estimado = self.driver.find_element_by_id('tiempo-estimado-requisito')
		tiempo_estimado.send_keys("1.2")
		boton_aceptar = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar-requisito')))
		boton_aceptar.click()
		sleep(2)
		assert(tiempo_estimado.get_attribute("value") == '1.2')
		assert(tiempo_estimado.get_attribute("aria-invalid") == "false")

	def test_creacion_requisito(self):
		self.nombre_requisito_vacio()
		self.nombre_requisito_ok()
		self.descripcion_requisito_vacio()
		self.descripcion_requisito_ok()
		self.prioridad_requisito_valida()
		self.prioridad_requisito_invalida()
		self.tiempo_estimado_requisito_invalido()
		self.tiempo_estimado_requisito_valido()

	def tearDown(self):
		self.driver.close()

if __name__ == "__main__":
	unittest.main()

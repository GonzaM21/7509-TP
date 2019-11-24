from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import unittest
from time import sleep

class PythonOrgSearch(unittest.TestCase):

	def setUp(self):
		self.driver = webdriver.Chrome(executable_path = './chromedriver')

	def test_nombre_proyecto_vacio(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#No le doy ningun nombre al proyecto
		nombre_proyecto = driver.find_element_by_id('nombre-proyecto')
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_proyecto.get_attribute("value") == '')
		assert(nombre_proyecto.get_attribute("aria-invalid") == "true")
	
	def test_nombre_proyecto_ok(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#Le doy nombre al proyecto
		nombre_proyecto = driver.find_element_by_id('nombre-proyecto')
		nombre_proyecto.send_keys("Mi proyecto")
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_proyecto.get_attribute("value") == 'Mi proyecto')
		assert(nombre_proyecto.get_attribute("aria-invalid") == "false")
	
	def test_prioridad_valida(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#Le doy prioridad al proyecto
		prioridad_proyecto = driver.find_element_by_id('prioridad-proyecto')
		prioridad_proyecto.send_keys("12 Invalid priority 12")
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(prioridad_proyecto.get_attribute("value") == '12 Invalid priority 12')
		assert(prioridad_proyecto.get_attribute("aria-invalid") == "true")

	def test_prioridad_invalida(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#Le doy prioridad al proyecto
		prioridad_proyecto = driver.find_element_by_id('prioridad-proyecto')
		prioridad_proyecto.send_keys("12")
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(prioridad_proyecto.get_attribute("value") == '12')
		assert(prioridad_proyecto.get_attribute("aria-invalid") == "false")

	def test_nombre_lider_proyecto_vacio(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#No le doy ningun nombre al lider de proyecto
		nombre_proyecto = driver.find_element_by_id('lider-proyecto')
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_proyecto.get_attribute("value") == '')
		assert(nombre_proyecto.get_attribute("aria-invalid") == "true")
	
	def test_nombre_lider_proyecto_ok(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#Le doy nombre al lider de proyecto
		nombre_proyecto = driver.find_element_by_id('lider-proyecto')
		nombre_proyecto.send_keys("Fernando Soluzzia")
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(nombre_proyecto.get_attribute("value") == 'Fernando Soluzzia')
		assert(nombre_proyecto.get_attribute("aria-invalid") == "false")

	def test_version_valida(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#Le doy version al proyecto
		version_proyecto = driver.find_element_by_id('version-proyecto')
		version_proyecto.send_keys("Not a valid version")
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(version_proyecto.get_attribute("value") == 'Not a valid version')
		assert(version_proyecto.get_attribute("aria-invalid") == "true")

	def test_version_invalida(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#Le doy version al proyecto
		version_proyecto = driver.find_element_by_id('version-proyecto')
		version_proyecto.send_keys("1.2.4")
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(version_proyecto.get_attribute("value") == '1.2.4')
		assert(version_proyecto.get_attribute("aria-invalid") == "false")
	
	def test_limite_riesgo_valido(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#Le doy limite de riesgo al proyecto
		riesgo_proyecto = driver.find_element_by_id('riesgo-proyecto')
		riesgo_proyecto.send_keys("Not a valid risk")
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(riesgo_proyecto.get_attribute("value") == 'Not a valid risk')
		assert(riesgo_proyecto.get_attribute("aria-invalid") == "true")

	def test_limite_riesgo_invalido(self):
		driver = self.driver
		driver.get("http://localhost:8080/")
		driver.fullscreen_window()
		#Paso a la proxima pestaña
		nav_bar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'proyecto-bar')))
		nav_bar.click()
		sleep(2)

		#Le doy limite de riesgo al proyecto
		riesgo_proyecto = driver.find_element_by_id('version-proyecto')
		riesgo_proyecto.send_keys("0.95")
		boton_aceptar = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, 'boton-aceptar')))
		boton_aceptar.click()
		sleep(2)
		assert(riesgo_proyecto.get_attribute("value") == '0.95')
		assert(riesgo_proyecto.get_attribute("aria-invalid") == "false")
	

	def tearDown(self):
		self.driver.close()

if __name__ == "__main__":
	unittest.main()

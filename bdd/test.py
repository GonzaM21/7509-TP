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
	
	def test_nombre_proyecto(self):
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

	def tearDown(self):
		self.driver.close()

if __name__ == "__main__":
	unittest.main()

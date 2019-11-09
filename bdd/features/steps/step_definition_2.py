from behave import given, when, then
from mod.webBrowser import webBrowser

@given(u'que soy empleado de PSA')
def step_impl(context):
    pass

@when(u'ingreso a la direccion de la pagina web de PSA')
def step_impl(context):
    webBrowser.navegarPaginaWeb("PSA.com.ar/direccion/projectoPSA")


@then(u'tendre que estar en la pagina web de PSA')
def step_impl(context):
    webBrowser.mostrarPaginaWeb()

@given(u'que soy el gerente de finanzas')
def step_impl(context):
    pass

@when(u'ingreso al proyecto')
def step_impl(context):
    webBrowser.navegarPaginaWeb("PSA.com.ar/direccion/projectoPSA/proyecto")


@then(u'veo costo el proyecto')
def step_impl(context):
    webBrowser.obtenerElemento("costo")

@then(u'los clientes del proyecto')
def step_impl(context):
    webBrowser.obtenerElemento("clientes")

@when(u'ingreso a los clientes')
def step_impl(context):
    webBrowser.navegarPaginaWeb("PSA.com.ar/direccion/projectoPSA/clientes")


@then(u'veo la facturacion por cliente')
def step_impl(context):
    webBrowser.obtenerElemento("facturacion")


@then(u'la facturacion por proyecto')
def step_impl(context):
    webBrowser.obtenerElemento("facturacion")

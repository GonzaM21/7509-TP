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

@when(u'ingreso a notificaciones')
def step_impl(context):
    webBrowser.navegarPaginaWeb("PSA.com.ar/direccion/projectoPSA/notificaciones")


@then(u'veo las notificaciones mas importantes de los proyectos')
def step_impl(context):
    webBrowser.obtenerElemento("notificaciones")

@then(u'veo que de proyecto se trata')
def step_impl(context):
    webBrowser.obtenerElemento("proyecto")


@when(u'ingreso una fecha')
def step_impl(context):
    webBrowser.ingresar("fecha", "01-12-19")


@then(u'veo las notificaciones mas importantes de los proyectos de la fecha ingresada')
def step_impl(context):
    webBrowser.obtenerElemento("notificaciones")

@then(u'veo de proyecto se trata')
def step_impl(context):
    webBrowser.obtenerElemento("proyecto")


@given(u'que soy el desarrollador')
def step_impl(context):
    pass


@then(u'veo las tareas sin iniciar')
def step_impl(context):
    webBrowser.obtenerElemento("tareas")


@then(u'las tareas en progreso')
def step_impl(context):
    webBrowser.obtenerElemento("tareas-progreso")


@then(u'las tareas atrasadas')
def step_impl(context):
    webBrowser.obtenerElemento("tareas-atrasadas")


@then(u'las tareas finalizadas')
def step_impl(context):
    webBrowser.obtenerElemento("tareas-finalizadas")


@then(u'veo las notificaciones relacionado a los proyectos')
def step_impl(context):
    webBrowser.obtenerElemento("notificaciones-proyecto")

@when(u'selecciono una fecha')
def step_impl(context):
    webBrowser.ingresar("fecha", "19-12-2019")


@then(u'veo las notificaciones relacionadas a los proyectos en la fecha ingresada')
def step_impl(context):
    webBrowser.obtenerElemento("notificaciones-proyecto")

@when(u'ingreso a tareas')
def step_impl(context):
    webBrowser.navegarPaginaWeb("PSA.com.ar/direccion/projectoPSA/tareas")


@then(u'veo un listado de tareas con su titulo')
def step_impl(context):
    webBrowser.obtenerElemento("tareas")


@then(u'veo su prioridad')
def step_impl(context):
    webBrowser.obtenerElemento("prioridad")

@then(u'veo su estado')
def step_impl(context):
    webBrowser.obtenerElemento("estado")

@then(u'veo su tiempo estimado')
def step_impl(context):
    webBrowser.obtenerElemento("tiempo-estimado")


@then(u'veo tu feature')
def step_impl(context):
    webBrowser.obtenerElemento("feature")

@then(u'veo su descripcion')
def step_impl(context):
    webBrowser.obtenerElemento("descripcion")
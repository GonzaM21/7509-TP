from behave import given, when, then
from mod.proyecto import Proyecto, proyecto

@given(u'que soy un lider de proyecto')
def step_impl(context):
    pass

@when(u'asigno un tipo a un proyecto')
def step_impl(context):
    proyecto.asignarTipo("Finanzas")

@then(u'tendra el tipo que le asigne')
def step_impl(context):
    proyecto.mostrarTipo()

@when(u'reemplazo un tipo a un proyecto')
def step_impl(context):
    proyecto.asignarTipo("Desarrollo")


@then(u'el proyecto tendra el nuevo tipo')
def step_impl(context):
    proyecto.mostrarTipo()

@when(u'asigno un hito a un proyecto')
def step_impl(context):
    proyecto.asignarHito("demo hito")


@then(u'el proyecto tendra mi hito asignado')
def step_impl(context):
    proyecto.mostrarHito()

@when(u'el proyecto tiene un hito que se completo')
def step_impl(context):
    proyecto.completarHito()


@then(u'el proyecto muestra el hito se completo')
def step_impl(context):
    proyecto.mostrarHito()

@when(u'el hito asignado tiene una fecha pasada a la actual no se completo')
def step_impl(context):
    proyecto.demorarHito()

@then(u'el proyecto muestra el proyecto esta atrasado')
def step_impl(context):
    proyecto.mostrarHito()

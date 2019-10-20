from behave import given, when, then
from mod.proyecto import Proyecto

@given(u'que soy un lider de proyecto')
def step_impl(context):
    pass

@when(u'asigno un tipo a un proyecto')
def step_impl(context):
    proyecto = Proyecto()
    proyecto.asignarTipo("Finanzas")

@then(u'tendra el tipo que le asigne')
def step_impl(context):
    proyecto = Proyecto()
    proyecto.mostrarTipo()

@when(u'reemplazo un tipo a un proyecto')
def step_impl(context):
    proyecto = Proyecto()
    proyecto.asignarTipo("Desarrollo")


@then(u'el proyecto tendra el nuevo tipo')
def step_impl(context):
    proyecto = Proyecto()
    proyecto.mostrarTipo()

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

@given(u'que soy un jefe de desarrollo')
def step_impl(context):
    pass

@when(u'selecciono un proyecto')
def step_impl(context):
    pass

@then(u'muestro la cantidad de horas de desarrollo de un proyecto')
def step_impl(context):
    proyecto.mostrarHorasDeDesarrollo()

@then(u'muestro el tiempo estimado para terminar el proyecto')
def step_impl(context):
    proyecto.mostrarProgresoTareasAsociadas()

@then(u'muestro los requisitos relacionados al proyecto')
def step_impl(context):
    proyecto.mostrarRequisitosAsociados()

@then(u'muestro la lista de clientes impactados')
def step_impl(context):
    proyecto.mostrarListaDeClientesImpactados()

@when(u'asigno requisitos a un proyecto')
def step_impl(context):
    proyecto.asignarRequisito("elRequisito")

@then(u'el requisito esta agregdo en mi proyecto')
def step_impl(context):
    proyecto.mostrarRequisitosAsociados()

@when(u'creo un proyecto')
def step_impl(context):
    proyecto = Proyecto("miProyecto")

@then(u'informar que el proyecto fue creado con exito')
def step_impl(context):
    proyecto.mostrarValides()

@when(u'creo un proyecto con un nombre ya existente')
def step_impl(context):
    proyecto = Proyecto("miProyecto")

@then(u'informar que no se creo con normalidad')
def step_impl(context):
    proyecto.mostrarValides()


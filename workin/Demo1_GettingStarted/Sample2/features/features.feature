# language: es

Característica: Starting up

  Antecedentes: Repeat few steps for every scenario

  Escenario: User registration functionality check
    Dado Launch browser
     Cuando I register with valid credentials
     Entonces User registration should be successful

  Escenario: Login functionality check
    Dado Launch browser
     Cuando I login with valid credentials
     Entonces Login should be successful

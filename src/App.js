import React, {Component, Fragment} from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { CssBaseline } from "@material-ui/core";
import NavigationBar from './Components-s2/NavigationBar';
import Employees from './Components-s2/Employees'
import Clients from "./Components-s2/Clients";
import Products from "./Components-s2/Products";
import Sales from "./Components-s2/Sales";
import Typography from "@material-ui/core/Typography";
import Homerphoto from './Components-s2/images/Homer.gif';
import Proyectos from './components/Proyectos/Proyectos'
import Soporte from './Components-s3/Soporte';
import CrearTicket from './Components-s3/CrearTicket';
import AtenderLlamada from './Components-s3/AtenderLlamada';
import Horas from './Components-s3/Horas';
import Pointless from './Components-s2/images/pointless.gif'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.addClient= this.addClient.bind(this);
        this.addOpportunities= this.addOpportunities.bind(this);
        this.addProduct= this.addProduct.bind(this);
        this.sortname= this.sortname.bind(this);
        this.sortpriority= this.sortpriority.bind(this);
        this.sortproduct=this.sortproduct.bind(this);
        this.sortoportunity=this.sortoportunity.bind(this);
        this.sortstakeholders=this.sortstakeholders.bind(this);
        this.sortstate=this.sortstate.bind(this);
        this.update=this.update.bind(this);
        this.sortproducts=this.sortproducts.bind(this);
    }

    state = { name:true,priority:false,product:false,productsort:true,opportinitysort:true,stakeholdersort:false,
        statesort:false,
        ClientsList : [
            {name:"Amazon",priority:"Baja", colour:"#4caf50", sede:"Seattle, Washington, EE.UU.",
                phone:"555-4567", mail:"Amazon@amazon.com", product:"GSMO V 2.5.1", date:"Jul 06 2018"},
            {name:"Facebook", priority:"Alta", colour:"#ff1744", sede:"Menlo Park, CA 94025 EE.UU",
                phone:"555-1234", mail:"Facebook@fb.com", product:"PSA V 1.2.345", date:" Mar 12 2016"},
            {name:"Ford Argentina", priority:"Media", colour:"#ffc107", sede:"Colectora Este 34603 Gral. Pacheco, Buenos Aires",
                phone:"011 5722-1914", mail:"FordARG@gmail.com", product:"PSA 2 V 4.2", date:" Oct 15 2019"},
            {name:"Martin Maulhardt", priority:"Media", colour:"#ffc107", sede:"-",
                phone:"011 3141-5926", mail:"M-Maulhardt@icloud.com", product:"SAM3 V 1.2", date:"Feb 01 2018"},
            {name:"Mulesoft", priority:"Alta", colour:"#ff1744", sede:"Juana Manso 999, 6th Floor, C1107CBS CABA",
                phone:"011 5353-4497", mail:"Mule@soft.com", product:"SSO 2 V 1.0.1", date:" Nov 20 2019"},
            {name:"YPF", priority:"Baja", colour:"#4caf50", sede:"Boulevard Macacha Güemes 515, Buenos Aires",
                phone:"-", mail:"YPF@gmail.com", product:"SPE V 0.1(Prueba)", date:"Nov 11 2019"}
        ],

        cp : [{client:"Ford Argentina", product:"GSMO",version:"2.5.2", date:"Sep 12 2019"},
            {client:"Ford Argentina", product:"SSO 2",version:"1.0.1", date:"Sep 12 2019"},
            {client:"Amazon", product:"SSO 2", version:"1.0.1", date:"Jun 05 2018"},
            {client:"Mulesoft", product:"SAM3",version:"1.2", date:"Feb 11 2018"},
            {client:"Mulesoft", product:"GSMO", version:"2.5.1", date:"Oct 11 2018"},
            {client:"Mulesoft", product:"PSA",version:"1.2.345", date:"May 21 2017"}],

        ProductsActual : [{product:"PSA", value: "1.2.345"},
            {product:"PSA 2", value: "4.3.5"},
            {product:"GSMO", value: "2.5.3"},
            {product:"SSO 2", value: "1.0.1"},
            {product:"SAM3", value: "1.2"},
            {product:"SPE", value: "0.1(Beta)"}
        ],

        Version : [{product:"PSA", value: "1.2.345"},
            {product:"PSA", value: "1.2.100"},
            {product:"PSA 2", value: "4.3.5"},
            {product:"PSA 2", value: "4.2"},
            {product:"GSMO", value: "2.5.3"},
            {product:"GSMO", value: "2.5.2"},
            {product:"SSO 2", value: "1.0.1"},
            {product:"SSO 2", value: "1.0"},
            {product:"SAM3", value: "1.2"},
            {product:"SAM3", value: "1.1"},
            {product:"SPE", value: "0.1(Beta)"},
            {product:"SPE", value: "Alpha"}],

        Opportunities : [
            {name:"Oportunidad 1", priority:"Aprobada", colour:"#4caf50", stakeholder:"Martin Maulhardt",
                description:"Se desea que la funcionalidad tenga soporte 24/7", product:"SAM3", version:"1.2"},
            {name:"Oportunidad 2", priority:"Cancelada", colour:"#ff1744", stakeholder:"Amazon",
                description:"Mayor eficiencia de procesamiento de datos", product:"SSO 2", version:"1.0.1"},
            {name:"Oportunidad 3", priority:"En proceso", colour:"#ffc107", stakeholder:"Facebook",
                description:"Mayor portabilidad", product:"PSA", version:"1.2.345"},
            {name:"Oportunidad 4", priority:"Cancelada", colour:"#ff1744", stakeholder:"Mulesoft",
                description:"Mayor eficiencia de procesamiento de datos", product:"GSMO", version:"2.5.1"},
            {name:"Oportunidad 5", priority:"Aprobada", colour:"#4caf50", stakeholder:"YPF",
                description:"Creación de un nuevo producto en colaboración con YPF para la administración de toda su empresa", product:"-", version:"-"}],

        Stakeholders : ["Amazon", "Facebook","Ford Argentina","Martin Maulhardt","Mulesoft","PSA","YPF"],
        Productsname : ["PSA","PSA 2", "GSMO","SSO 2","SAM3", "SPE"],

        Products : [
            {name:"GSMO", version:"2.5.3", date:"Dic 20 2017", lastdate:"Sep 15 2019", previous:"2.5.2",
                price:"150.000", c1:"Servicio en la nube", c2:"Seguridad de datos"},
            {name:"PSA", version:"1.2.345", date:"Ene 06 2016", lastdate:"Mar 10 2016", previous:"1.2.100",
                price:"100.000", c1:"Servicio en la nube", c2:"Seguridad de datos"},
            {name:"PSA 2",version:"V 4.3.5", date:"Feb 15 2018", lastdate:"Sep 20 2019", previous:"4.2",
                price:"50.000", c1:"Servicio en la nube", c2:"Seguridad de datos"},
            {name:"SAM3", version:"1.2", date:"Nov 29 2017", lastdate:"Ene 30 2018", previous:"1.1",
                price:"2.000", c1:"Servicio en la nube", c2:"Seguridad de datos"},
            {name:"SPE", version:"0.1(Beta)", date:"Nov 21 2019", lastdate:"Nov 21 2019",
                previous:"Alpha", price:"A definir", c1:"Sistema en desarollo"},
            {name:"SSO 2", version:"1.0.1", date:"Jun 01 2018", lastdate:"Jun 05 2016", previous:"1.0",
                price:"1.000.000", c1:"Servicio en la nube", c2:"Seguridad de datos"},
        ]
    };

    addClient(value){
        if(this.state.Stakeholders.includes(value.name)) return null;
        this.setState({ClientsList:[...this.state.ClientsList,value], Stakeholders:[...this.state.Stakeholders,value.name]});
        this.state.Stakeholders.sort();
    }

    addOpportunities(value){
        this.setState({Opportunities:[...this.state.Opportunities,value]});
    }

    addProduct(value){
        if(value.name in this.state.Productsname) return null;
        this.setState({Products:[...this.state.Products,value],
            Productsname:[...this.state.Productsname,value.name],
            ProductsActual:[...this.state.ProductsActual,{product:value.name, value:value.version}],
            Version:[...this.state.Version,{product:value.name, value:value.version}]});
    }

    sortname(){
        if(this.state.name){
            this.state.ClientsList.sort(function(first, second){
                return second.name.localeCompare(first.name);});
                this.setState({name:false});
            this.update();
            return null;
        }
        this.state.ClientsList.sort(function(first, second){
            return first.name.localeCompare(second.name);});
        this.setState({name:true});
        this.update();
    }

    sortpriority(){
        if(this.state.priority){
            this.state.ClientsList.sort(function(first, second){
                if(first.priority === second.priority) return 0;
                if((first.priority === "Alta") && (second.priority === "Baja" || second.priority === "Media")) return 1;
                if((first.priority === "Media") && (second.priority === "Baja")) return 1;
                if((second.priority === "Alta") && (first.priority === "Baja" ||first.priority === "Media")) return -1;
                if((second.priority === "Media") && (first.priority === "Baja")) return -1;
                return first.priority.localeCompare(second.priority);});
            this.setState({priority:false});
            this.update();
            return null;
        }
        this.state.ClientsList.sort(function(first, second){
            if(first.priority === second.priority) return 0;
            if((first.priority === "Alta") && (second.priority === "Baja" ||second.priority === "Media")) return -1;
            if((first.priority === "Media") && (second.priority === "Baja")) return -1;
            if((second.priority === "Alta") && (first.priority === "Baja" ||first.priority === "Media")) return 1;
            if((second.priority === "Media") && (first.priority === "Baja")) return 1;
            return first.priority.localeCompare(second.priority);});
        this.setState({priority:true});
        this.update()
    }

    sortproduct(){
        if(this.state.product){
            this.state.ClientsList.sort(function(first, second){
                return second.product.localeCompare(first.product);});
            this.setState({product:false});
            this.update();
            return null;
        }
        this.state.ClientsList.sort(function(first, second){
            return first.product.localeCompare(second.product);});
        this.setState({product:true});
        this.update();
        return null;
    }

    update(){
        this.setState({Opportunities:[...this.state.Opportunities], ClientsList:[...this.state.ClientsList],
            Products:[...this.state.Products]}
        )
    }

    sortoportunity(){
        if(this.state.opportinitysort){
            this.state.Opportunities.sort(function(first, second){
                return second.name.localeCompare(first.name);});
            this.setState({opportinitysort:false});
            this.update();
            return null;
        }
        this.state.Opportunities.sort(function(first, second){
            return first.name.localeCompare(second.name);});
        this.setState({opportinitysort:true});
        this.update();
        return null;
    }

    sortstakeholders(){
        if(this.state.stakeholdersort){
            this.state.Opportunities.sort(function(first, second){
                return second.stakeholder.localeCompare(first.stakeholder);});
            this.setState({stakeholdersort:false});
            this.update();
            return null;
        }
        this.state.Opportunities.sort(function(first, second){
            return first.stakeholder.localeCompare(second.stakeholder);});
        this.setState({stakeholdersort:true});
        this.update();
        return null;
    }

    sortstate(){
        if(this.state.statesort){
            this.state.Opportunities.sort(function(first, second){
                if(first.priority === second.priority) return 0;
                if(first.priority === "En proceso" && (second.priority === "Aprobada" || second.priority === "Cancelada")) return 1;
                if(second.priority === "En proceso" && (first.priority === "Aprobada" || first.priority === "Cancelada")) return -1;
                if(first.priority === "Aprobada" && second.priority === "Cancelada") return 1;
                if(second.priority === "Aprobada" && first.priority === "Cancelada") return -1;
                return 0});
            this.setState({statesort:false});
            this.update();
            return null;
        }
        this.state.Opportunities.sort(function(first, second){
            if(first.priority === second.priority) return 0;
            if(first.priority === "En proceso" && (second.priority === "Aprobada" || second.priority === "Cancelada")) return -1;
            if(second.priority === "En proceso" && (first.priority === "Aprobada" || first.priority === "Cancelada")) return 1;
            if(first.priority === "Aprobada" && second.priority === "Cancelada") return -1;
            if(second.priority === "Aprobada" && first.priority === "Cancelada") return 1;
            return 0});
        this.setState({statesort:true});
        this.update();
        return null;
    }

    sortproducts(){
        if(this.state.productsort){
            this.state.Products.sort(function(first, second){
                return second.name.localeCompare(first.name);});
            this.setState({productsort:false});
            this.update();
            return null;
        }
        this.state.Products.sort(function(first, second){
            return first.name.localeCompare(second.name);});
        this.setState({productsort:true});
        this.update();
        return null;
    }
    render() {
        return <BrowserRouter>
            <Fragment>
                <CssBaseline />
                <Switch>
                    <Route exact path="/" render={Main}/>
                    <Route path="/HomerPage" render={Homer}/>
                    <Route path="/Pointless" render={pointless}/>
                    <Route path="/projects-s1" render={Proyectos_S1}/>
                    <Route path="/products-s2" render={ () =>
                        <div id="page" style={{float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
                            <CssBaseline />
                            <NavigationBar />
                            <div id="content" style={{height: "90%", width: "100%", overflow: "auto"}}>
                                <Products addProduct={this.addProduct}
                                          products={this.state.Products}
                                          sortproducts={this.sortproducts}
                                          productsort={this.state.productsort}
                                />
                            </div>
                        </div>
                    }
                    />
                    <Route path="/clients-s2" render={ () =>
                        <div id="page" style={{float: "left", height: "100vh", width: "100vw",overflow: "hidden"}}>
                            <CssBaseline />
                            <NavigationBar />
                            <div id="content" style={{height: "90%", width: "100%",overflow: "auto"}}>
                                <Clients clients={this.state.ClientsList}
                                         cps={this.state.cp}
                                         addClient={this.addClient}
                                         products={this.state.ProductsActual}
                                         stakeholders={this.state.Stakeholders}
                                         version={this.state.Version}
                                         sortname={this.sortname}
                                         sortpriority={this.sortpriority}
                                         sortproduct={this.sortproduct}
                                         clientsname={this.state.name}
                                         clientspriority={this.state.priority}
                                         clientsproduct={this.state.product}
                                />
                            </div>
                        </div>}
                    />

                    <Route path="/employees-s2" render={Empleados}/>

			  <Route
				exact
				path="/Soporte"
				render={RenderSoporte} />
			  <Route
				exact
				path="/Soporte/CrearTicket"
				render={RenderCrearTicket} />
			  <Route
				exact
				path="/Soporte/AtenderLlamada"
				render={RenderAtenderLlamada} />
			  <Route
				exact
				path="/GestionDeHoras"
				render={RenderGestionDeHoras} />

                    <Route path="/sales-s2" render={() =>
                        <div id="page" style={{position:"absolute",float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
                            <CssBaseline />
                            <NavigationBar />
                            <div id="content" style={{height: "90%", width: "100%", overflow: "auto"}}>
                                <Sales Opportunities={this.state.Opportunities}
                                       addOpportunities={this.addOpportunities}
                                       products={this.state.ProductsActual}
                                       version={this.state.Version}
                                       stakeholders={this.state.Stakeholders}
                                       sortopportunity={this.sortoportunity}
                                       sortstate={this.sortstate}
                                       sortstakeholders={this.sortstakeholders}
                                       opportinitysort={this.state.opportinitysort}
                                       stakerholdersort={this.state.stakeholdersort}
                                       statesort={this.state.statesort}
                                />
                            </div>
                        </div>}/>

                    <Route render={() => <div><h1> 404 Not Found <hr/> </h1></div>}/>
                </Switch>
            </Fragment>
        </BrowserRouter>
    }
}

function Main() {
    return <div id="page" style={{float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
        <CssBaseline />
        <NavigationBar />
        <div style={{marginTop:"20%",paddingLeft:"30%",paddingRight:"30%"}}>
            <Typography variant="h4" gutterBottom style={{textAlign: "center"}}>Bienvenidos a PSA System</Typography>
            <Typography variant="body1" gutterBottom style={{textAlign: "center"}}>Seleccione el área requerida</Typography>
        </div>
    </div>
}


function Empleados() {
    return <div id="page" style={{position:"absolute",float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
        <CssBaseline />
        <NavigationBar />
        <div id="content" style={{height: "90%", width: "100%", overflow: "auto"}}>
            <Employees/>
        </div>
    </div>
}

function Homer() {
    return <div id="page" style={{position:"absolute",float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
        <CssBaseline />
        <div>
            <img src={Homerphoto} alt="homer" style={{height: "100vh" ,width: "100vw"}}/>
        </div>
    </div>
}

function pointless() {
    return <div id="page" style={{position:"absolute",float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
        <CssBaseline />
        <div>
            <img src={Pointless} alt="homer" style={{height: "100vh" ,width: "100vw"}}/>
        </div>
    </div>
}

function Proyectos_S1() {
    return <div id="page" style={{position:"absolute",float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
            <CssBaseline />
            <div>
                <Proyectos/>
            </div>
        </div>
}

function RenderSoporte() {
    return <div id="page" style={{position:"absolute",float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
        <CssBaseline />
        <NavigationBar />
        <div id="content" style={{height: "90%", width: "100%", overflow: "auto"}}>
            <Soporte/>
        </div>
    </div>
}

function RenderCrearTicket() {
    return <div id="page" style={{position:"absolute",float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
        <CssBaseline />
        <NavigationBar />
        <div id="content" style={{height: "90%", width: "100%", overflow: "auto"}}>
            <CrearTicket/>
        </div>
    </div>
}

function RenderAtenderLlamada() {
    return <div id="page" style={{position:"absolute",float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
        <CssBaseline />
        <NavigationBar />
        <div id="content" style={{height: "90%", width: "100%", overflow: "auto"}}>
            <AtenderLlamada/>
        </div>
    </div>
}

function RenderGestionDeHoras() {
    return <div id="page" style={{position:"absolute",float: "left", height: "100vh", width: "100vw", overflow: "hidden"}}>
        <CssBaseline />
        <NavigationBar />
        <div id="content" style={{height: "90%", width: "100%", overflow: "auto"}}>
            <Horas/>
        </div>
    </div>
}



import React,{ Component } from 'react';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, LinearProgress, TextField }from '@material-ui/core';
import Em1 from './images/Em1.jpg';
import Em2 from './images/Em2.jpg';
import Em3 from './images/Em3.jpg';
import Em4 from './images/Em4.jpg';
import Em5 from './images/Em5.jpg';
import Em6 from './images/Em6.jpg';
import Em7 from './images/Em7.jpg';
import Em8 from './images/Em8.jpg';
import Em1G from './images/Em1-G.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Employees extends Component {
    constructor(props) {
        super(props);
        this.sortname= this.sortname.bind(this);
        this.sortarea= this.sortarea.bind(this);
        this.sortprogress= this.sortprogress.bind(this);
        this.sortsalary= this.sortsalary.bind(this);
        this.update=this.update.bind(this);
    }
    state = {namesort:false, areasort:false,progresssort:false,salarysort:false,
        employees : [
            {name:"Oswaldo Herz", area:"Desarrollo",salary:"$10.000",sex:"M",years:"2",position:"Desarrollador",proyect:"-",time:20,uses:17,photo:Em1},
            {name:"Lyndia Sellman", area:"Finanzas",salary:"$15.000",sex:"F",years:"4",position:"Ventas Exterior",proyect:"-",time:20,uses:15,photo:Em2},
            {name:"Maple Vasques", area:"Recursos Humanos",salary:"$20.000",sex:"F",years:"4",position:"Técnica de formación",proyect:"-",time:20,uses:10,photo:Em3},
            {name:"Wilton Mojarro", area:"Customer Success",salary:"$40.000",sex:"M",years:"4",position:"Jefe de Customer Success",proyect:"-",time:25,uses:17,photo:Em4},
            {name:"Maurice Redondo", area:"Mesa de Ayuda",salary:"$55.000",sex:"M",years:"4",position:"Operador",proyect:"-",time:30,uses:25,photo:Em5},
            {name:"Kymberly Decaro", area:"Desarrollo",salary:"$70.000",sex:"F",years:"4",position:"Desarrollador",proyect:"-",time:40,uses:40,photo:Em6},
            {name:"Lakendra Sakamoto", area:"Ventas",salary:"$80.000",sex:"F",years:"4",position:"Accesora Comercial",proyect:"-",time:40,uses:40,photo:Em7},
            {name:"Rae Feldmann", area:"Marketing",salary:"$55.000",sex:"M",years:"4",position:"Content Manager",proyect:"-",time:30,uses:8,photo:Em8}
        ],

    };

    update(){
        this.setState({employees:[...this.state.employees]})
    }

    sortname(){
        if(this.state.namesort){
            this.state.employees.sort(function(first, second){
                return second.name.localeCompare(true.name);});
            this.setState({namesort:false});
            this.update();
            return null;
        }
        this.state.employees.sort(function(first, second){
            return first.name.localeCompare(second.name);});
        this.setState({namesort:true});
        this.update();
        return null;
    }

    sortarea(){
        if(this.state.areasort){
            this.state.employees.sort(function(first, second){
                return second.area.localeCompare(first.area);});
            this.setState({areasort:false});
            this.update();
            return null;
        }
        this.state.employees.sort(function(first, second){
            return first.area.localeCompare(second.area);});
        this.setState({areasort:true});
        this.update();
        return null;
    }

    sortprogress(){
        if(this.state.progresssort){
            this.state.employees.sort(function(first, second){
                let p1 = first.uses/first.time;
                let p2 = second.uses/second.time;
                if(p1 < p2) return 1;
                if(p1 > p2) return -1;
                return 0;});
            this.setState({progresssort:false});
            this.update();
            return null;
        }
        this.state.employees.sort(function(first, second){
            let p1 = first.uses/first.time;
            let p2 = second.uses/second.time;
            if(p1 < p2) return -1;
            if(p1 > p2) return 1;
            return 0;});
        this.setState({progresssort:true});
        this.update();
        return null;
    }

    sortsalary(){
        if(this.state.salarysort){
            this.state.employees.sort(function(first, second){
                return second.salary.localeCompare(first.salary);});
            this.setState({salarysort:false});
            this.update();
            return null;
        }
        this.state.employees.sort(function(first, second){
            return first.salary.localeCompare(second.salary);});
        this.setState({salarysort:true});
        this.update();
        return null;
    }

    render() {
        return <div style={{position:"static"}}>
            <div id="search" style={{position:"static",paddingLeft:"10%",paddingRight:"10%"}}>

                <TextField label="Buscar"
                           value={this.state.searchTerm || ""}
                           onChange={(event) => {
                               this.setState({
                                   searchTerm: event.target.value
                               })
                           }}
                           style={{
                               width: "100%"
                           }}
                           margin="normal"/>
            </div>
            <div style={{paddingLeft: "10%", paddingRight: "10%",marginTop:"2%"}}>
                    <ExpansionPanel square expanded={false}>
                        <ExpansionPanelSummary>
                            <div className="column" style={{flexBasis: '24%'}}>
                                <Typography className="heading" onClick={this.sortname} style={{textAlign:"left"}}><b>Nombre </b>
                                    {this.state.namesort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>
                            <div className="column" style={{flexBasis: '24.0%'}}>
                                <Typography className="heading" onClick={this.sortarea} style={{textAlign:"left"}}><b>Area </b>
                                    {this.state.areasort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>
                            <div className="column" style={{flexBasis: '25.0%'}}>
                                <Typography className="heading"  onClick={this.sortsalary} style={{textAlign:"left"}}><b>Salario </b>
                                    {this.state.salarysort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>
                            <div className="column" style={{flexBasis: '25.0%'}}>
                                <Typography className="heading" onClick={this.sortprogress} style={{textAlign:"center"}}><b>Progreso </b>
                                    {this.state.progresssort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>
                        </ExpansionPanelSummary>
                    </ExpansionPanel>
            </div>
            {this.state.employees.map((employee,i) => {
                if (this.state.searchTerm)
                    if (!employee.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) &&
                        !employee.area.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) &&
                        !employee.position.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
                        return null;
                   return<div id="employee" key={i}  style={{position:"static",paddingLeft: "10%", paddingRight: "10%"}}>
                                <ExpansionPanel square>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-label="Expand" aria-controls="additional-actions3-content" id="additional-actions3-header">
                                        <div className="column" style={{flexBasis: '25%'}}>
                                            <Typography className="heading" style={{textAlign:"left",}}>{employee.name}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{employee.area}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{employee.salary}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <LinearProgress variant="determinate" color="secondary" value={(employee.uses/employee.time)*100} style={{height: "50%", marginTop:"5px",color:"#1769aa",background: "rgb(235,235,235)"}}/>
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{background: "rgb(245,245,245)"}}>
                                        <div className="column" style={{flexBasis: '30.0%'}}>
                                            <img src={employee.photo} alt="Em1" style={{width: 200}}/>
                                            <Typography className="heading"><b>Sexo:</b> {employee.sex} </Typography>
                                            <Typography className="heading"><b>Antigüedad:</b> {employee.years} Años</Typography>
                                            <Typography className="heading"><b>Puesto:</b> {employee.position}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '30.0%'}}>
                                            <Typography className="heading" style={{marginTop:"5%"}}><b>Horas Trabajadas:</b> {employee.uses}hs</Typography>
                                            <Typography className="heading" style={{marginTop:"5%"}}><b>Disponibilidad:</b> {employee.time}hs</Typography>
                                            <Typography className="heading" style={{marginTop:"5%"}}><b>Proyecto Asignado:</b> {employee.proyect}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '40.0%'}}>
                                            <img src={Em1G} alt="Em1g" style={{width: 600,marginTop:"3%"}}/>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                   </div>
            })}
        </div>
    }
}


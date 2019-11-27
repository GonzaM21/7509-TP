import 'date-fns';
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider, KeyboardDatePicker,
} from '@material-ui/pickers';
import {es} from 'date-fns/locale'
import {InputAdornment} from "@material-ui/core";
import {Today} from "@material-ui/icons";



export default class MaterialUIPickers extends Component{
    // The first commit of Material-UI
    state={selectedDate:""};



    render(){
        const [selectedDate, setSelectedDate] = React.useState(new Date("27-11-2019"));

        const handleDateChange = date => {
            setSelectedDate(date);
        };

        return (
            <MuiPickersUtilsProvider  locale={es} utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        format="yyyy/MM/dd"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={this.selectedDate}
                        onChange={event => this.setState({ selectedDate: event.target.value })}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        );
    }

}
/*
<TextField id="date"
           variant="outlined"
           type="date"
           label="Fecha de Lanzamiento"
           required
           defaultValue="27-11-2019"
           value={this.state.date}
           onChange={event => this.setState({ date: event.target.value })}
           style={{width:"30%",marginTop:"1%"}}
           InputLabelProps={{shrink: true}}
           InputProps={{
               startAdornment: (
                   <InputAdornment position="start">
                       <Today />
                   </InputAdornment>),
           }}
/>*/
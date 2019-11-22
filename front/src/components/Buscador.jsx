import React,{ Component } from 'react';
import TextField from "@material-ui/core/TextField";

class Buscador extends Component {
    state = {}
    render() {

        const names = [
            "Oswaldo Herz",
            "Lyndia Sellman",
            "Maple Vasques",
            "Pearlie Edlund",
            "Timika Moyers",
            "Kelli Edelstein",
            "Rae Feldmann",
            "Shirley Lovick",
            "Paola Raya",
            "Mary Schacher",
            "Paulette Cudd",
            "Verena Vales",
            "Theresia Gall",
            "Maurine Redondo",
            "Queenie Moberly",
            "Cordelia Beers",
            "Wilton Mojarro",
            "Lea Cayton",
            "Kymberly Decaro",
            "Lakendra Sakamoto"
        ];

        return <div id="content" style={{paddingLeft:"10%",paddingRight:"10%"}}>

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

            {names.map((name, i) => {
                    if (this.state.searchTerm)
                        if (!name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
                            return null;

                    return <div id="whatever"
                                key={i}>
                        {name}
                    </div>
                }
            )}

        </div>;
    }
  }

  export default Buscador;

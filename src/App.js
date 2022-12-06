import React, {Component} from "react";
import Checkbox from "./CheckBox";

class App extends Component {
    constructor() {
        super();
        this.state = {
            total: 0
        };

        this.calculateTotal = this.calculateTotal.bind(this);
    }

    calculateTotal(input, checked) {
        let {total} = this.state;

        if (checked) {
            total += input;
        } else {
            total -= input;
        }

        this.setState({
            total
        });
    }

    render() {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    backgroundColor: "#52595D",
                }}>

                    <Checkbox calculateTotal={this.calculateTotal}
                              value={10}/>
                    <Checkbox calculateTotal={this.calculateTotal}
                              value={20}/>
                    <Checkbox calculateTotal={this.calculateTotal}
                              value={30}/>
                    <Checkbox calculateTotal={this.calculateTotal}
                              value={40}/>
                    <p> <br/> <br/> <br/>   Total:  {this.state.total}</p>

                </div>
            </div>
        );
    }
}

export default App;
import React from 'react';


class Form extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            secondName: '',
            formattedName: '',
        }

        this.firstNameRef = '';
    }

    componentDidMount() {
        console.log('field ref ', this.firstNameRef);
    }

    onFirstNameChanged(e) {
        let value = e.target.value;

        this.setState({
            firstName: value
        })

    }

    onSecondNameChanged(e) {
        let value = e.target.value;

        this.setState({
            secondName: value
        })

    }

    onFormSubmit(e) {
        e.preventDefault();
        const firstName = this.firstNameRef.value;
        const formattedResult = `${firstName} ${this.state.secondName}`;

        this.setState({ formattedName: formattedResult });
    }
    render() {

        return (
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div>
                        <label htmlFor="firstname" >first name</label>
                        <input
                            ref={(ref) => this.firstNameRef = ref}
                            // value={this.state.firstName}
                            type="text"
                            id="firstname"
                        // onChange={this.onFirstNameChanged.bind(this)}
                        />
                    </div>
                    <div>
                        <label htmlFor="secondName">second name</label>
                        <input
                            value={this.state.secondName}
                            type="text"
                            id="secondName"
                            onChange={this.onSecondNameChanged.bind(this)}

                        />
                    </div>

                    <div><button>Submit</button></div>
                </form>
                <div>
                    {this.state.formattedName}
                </div>
            </div>

        )
    }

}


export default Form;
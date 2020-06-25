import * as React from 'react';
import * as Styled from './styled';
import { RootStore } from 'store/root.store';
import { observer, inject } from 'mobx-react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
const connectImg = require('../../images/connect.jpg')

interface Props {
    rootStore: RootStore
}
interface State {
    userName: string;
    password: string;
}
@inject((allStores: { rootStore: RootStore }) => {
    let rootStore = allStores.rootStore;
    return {
        rootStore
    };
})

@observer
export default class Home extends React.Component<Props, State> {
    state = {
        userName: '',
        password: ''
    }
    setUser = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userName: evt.target.value
        });
    }
    setPass = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: evt.target.value,
        });
    }
    doLogin = async () => {
        let user = await axios.post("http://localhost:4000/users/login",
            { userName: this.state.userName, password: this.state.password });
        this.props.rootStore.homeStore.doLogin(user.data);
    }
    signUp = async() => {
        let newUser = await axios.post("http://localhost:4000/users/signUp",
            { userName: this.state.userName, password: this.state.password });
    }
    render() {
        return (
            <Styled.home>
                <Styled.header>
                    <Styled.heading>
                        Connect with Friends
                    </Styled.heading>
                    <Styled.loginContainer>
                        <TextField
                            name="username"
                            label="Username"
                            variant="outlined"
                            onChange={this.setUser}
                            value={this.state.userName}
                            size="medium"
                        />
                        <TextField
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={this.setPass}
                            value={this.state.password}
                        />
                        <Button
                            color="primary"
                            // variant="contained"
                            onClick={this.doLogin}
                        > Login </Button>

                    </Styled.loginContainer>
                </Styled.header>
                <Styled.body>
                    <Styled.imageContainer>
                        <img src={connectImg} alt='connect with friends' />
                    </Styled.imageContainer>
                    <Styled.signupContainer>
                        <TextField
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            onChange={this.setUser}
                            value={this.state.userName}
                        />
                        <TextField
                            name="userName"
                            label="user Name"
                            variant="outlined"
                            onChange={this.setPass}
                            value={this.state.password}
                        />
                        <TextField
                            name="mobileNumber"
                            label="Mobile Number"
                            variant="outlined"
                            onChange={this.setUser}
                            value={this.state.userName}
                        />
                        <TextField
                            name="eMail"
                            label="e Mail"
                            variant="outlined"
                            onChange={this.setPass}
                            value={this.state.password}
                        />

                        <TextField
                            name="password"
                            label="Password"
                            variant="outlined"
                        // onChange={this.setPass}
                        // value={this.state.password}  
                        />
                        <Button
                            color="primary"
                            variant="contained"
                        onClick={this.signUp}
                        > Sign Up</Button>
                        or
                        <Button
                            color="primary"
                            variant="contained"
                        // onClick={this.doLogin}
                        > LogIn with Gmail</Button>
                    </Styled.signupContainer>
                </Styled.body>
            </Styled.home>
        )
    }
}
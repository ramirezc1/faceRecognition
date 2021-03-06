import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signEmail: "",
      signInPassword: "",
    };
  }
  onEmailChange = (event) => {
    this.setState({ signEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };
  saveAuthTokenInSession = (token) => {
    window.sessionStorage.setItem("token", token);
  };
  onSubmitSignIn = () => {
    fetch("https://tranquil-temple-80934.herokuapp.com/signin", {
      // fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.success === "true") {
          this.saveAuthTokenInSession(data.token);
          this.props.loadUser(data.user);
          this.props.onRouteChange("home");
        }
      })
      .catch((err) => alert(err));
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80 white">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign in</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f4" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="f4 pa2 input-reset ba hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="test@yahoo.com"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f4" htmlFor="password">
                  Password
                </label>
                <input
                  className="f4 pa2 input-reset ba hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="test"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="white">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-white grow pointer f4 dib shadow-5"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3 pointer">
              <p
                onClick={() => onRouteChange("register")}
                className="f4 link dim db"
              >
                Sign up
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;

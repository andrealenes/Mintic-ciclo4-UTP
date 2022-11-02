import React from "react"; // imr atajo
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './login.css';

// ccc --> atato to class component constructor.
export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    alert( ` usuario: ${ this.state.usuario } - password: ${this.state.pass} ` );
  }

  render() {
    return (
      <Container id="login-container" >
        <Row>
          <Col>
            <Row>
              <h2>Iniciar Sesión</h2>
            </Row>

            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label > Usuario </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) =>
                        this.setState({ usuario: e.target.value })}
                    />

                    <Form.Text className="text-muted">
                      {" "}
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label >
                      {" "}
                      Contraseña{" "}
                    </Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => this.setState({ pass: e.target.value })}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => {
                      this.iniciarSesion();
                    }}
                  >
                    {" "}
                    Iniciar Sesión{" "}
                  </Button>

                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

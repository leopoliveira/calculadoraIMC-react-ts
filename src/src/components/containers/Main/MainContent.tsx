import { useState, FocusEvent } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Card } from "../../common/Card/Card";
import { ImcResult } from "../../common/ImcResult/ImcResult";
import styles from "./Main.module.css";

export const MainContent = () => {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);
  const [mostraResultado, setMostraResultado] = useState<boolean>(false);

  function handleAltura(event: FocusEvent<HTMLInputElement>) {
    setAltura(parseFloat(event.target.value));
  }

  function handlePeso(event: FocusEvent<HTMLInputElement>) {
    setPeso(parseFloat(event.target.value));
  }

  function handleImc() {
    if (altura <= 0 || !altura || peso <= 0 || !peso) return;

    calcImc();
  }

  function calcImc() {
    setImc(peso / Math.pow(altura, 2));
    setMostraResultado(true);
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col className="align-self-center left-side">
          <Container>
            <Row>
              <h1 className="mb-4">Calcule seu IMC</h1>
            </Row>
            <Row>
              <p>
                IMC é a sigla para Índice de Massa Corportal, parâmetro adotado
                pela Organização Mundial de Saúde (OMS) para calcular o peso
                ideal de cada pessoa.
              </p>
            </Row>
            <Row className="mt-3">
              <input
                placeholder="Digite a sua Altura. Ex.: 1.5 (esse valor é considerado em metros)"
                id="altura"
                name="altura"
                type="number"
                onBlur={handleAltura}
              />
            </Row>
            <Row className={`mt-3 ${styles.input}`}>
              <input
                placeholder="Digite seu peso. Ex.: 80.5 (esse valor é considerado em kg)"
                id="peso"
                name="peso"
                type="number"
                onBlur={handlePeso}
              />
            </Row>
            <Row>
              <Button
                className="mt-5 btn-lg"
                variant="primary"
                onClick={handleImc}
              >
                Calcular
              </Button>
            </Row>
          </Container>
        </Col>
        <Col className="align-self-center right-side">
          <div style={{ display: `${mostraResultado ? "none" : "block"}` }}>
            <Container>
              <Row>
                <Col>
                  <Card
                    imageSource="./src/assets/images/down.png"
                    imageAlt="Sinal de Negativo."
                    color="gray"
                    title="Magreza"
                    body="IMC está entre 0 e 18.5"
                  />
                </Col>
                <Col>
                  <Card
                    imageSource="./src/assets/images/up.png"
                    imageAlt="Sinal de Positivo."
                    color="green"
                    title="Magreza"
                    body="IMC está entre 18.5 e 24.9"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card
                    imageSource="./src/assets/images/down.png"
                    imageAlt="Sinal de Negativo."
                    color="orange"
                    title="Sobrepeso"
                    body="IMC está entre 24.9 e 30"
                  />
                </Col>
                <Col>
                  <Card
                    imageSource="./src/assets/images/down.png"
                    imageAlt="Sinal de Negativo."
                    color="red"
                    title="Obesidade"
                    body="IMC está entre 30 e 99"
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div style={{ display: `${mostraResultado ? "block" : "none"}` }}>
            <ImcResult imcResult={imc} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

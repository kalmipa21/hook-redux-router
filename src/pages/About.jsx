import { Image, Container, Row, Col } from "react-bootstrap";
import Foto from "../assets/Images/34.jpg";
function About() {
  return (
    <div className="bg-secondary">
      <Container className="w-100 h-100">
        <div className="bg font-monospace">
          <h1 style={{ color: "greenyellow" }}>Halo Dunia Manusia</h1>
          <Container className="text-start">
            <Row className="pt-3 font-monospace" style={{ color: "white" }}>
              <h1 className="text-center">Siapakah Saya?</h1>
              <Col lg={9} md={6} none={12}>
                <p>
                  Saya merupakan seorang pembelajar yang menyukai belajar.
                  Motivasi dalam hidup saya adalah{" "}
                  <em>"belajar sepanjang masa tambah ilmu tambah sederhana"</em>
                  . <br />
                  Saya percaya bakat itu ada namun orang berbakat akan kalah
                  dengan orang yang selalu berusaha. Saya juga percaya bakat
                  saya adalah mampu mempelajari sesuatu lebih cepat dari orang
                  kebanyakan. Namun, dengan mengetahui bakat tersebut terkadang
                  saya terlena terhadap sesuatu yang saya anggap mudah untuk
                  dipelajari. Sehingga membuat saya tidak menggali lebih dalam
                  terhadap sesuatu yang saya pelajari tersebut. <br /> Saya juga
                  merupakan guru yang sangat menyukai dunia <em>
                    coding
                  </em>. <br />
                  Nama saya adalah....
                </p>
              </Col>
              <Col
                lg={3}
                md={6}
                none={12}
                className="justify-content-md-center"
              >
                <Image
                  src={Foto}
                  alt="Foto Profile"
                  width="300px"
                  height="auto"
                  rounded
                />
              </Col>
              <h2
                className="text-center text-uppercase"
                style={{ color: "greenyellow" }}
              >
                Arif Saputra
              </h2>
              <div className="col-12 border"></div>
            </Row>
            <div className="col-md-12 text-center pt-5">
              <a
                href="https://www.linkedin.com/in/arif-saputra-2938b1229/"
                className="btn btn-plain"
                role="button"
                aria-pressed="true"
              >
                LinkedIn
              </a>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}
export default About;

import { Card, Button, Col } from "react-bootstrap";
import defaultImage from "../Images/defaultImage.jpg";
function TemplateNews({ titles, descriptions, date, urls, urlToImages, key }) {
  return (
    <Col key={key} md={3} sm={4} lg={2} className="mb-4 d-flex">
      <Card className="w-100 h-100">
        <Card.Img variant="top" src={urlToImages || defaultImage} alt="" />
        <Card.Body>
          <Card.Title className=" fs-6">
            <a href={urls}>{titles}</a>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted searchable">
            {date}
          </Card.Subtitle>
          <Card.Text className=" text-truncate">{descriptions}</Card.Text>
          <Button href={urls} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TemplateNews;

// import { Image, Button } from "react-bootstrap";
// export function FSearch() {
//   let input = document.getElementById("searchbar").value;
//   input = input.toLowerCase();
//   let x = document.getElementsByClassName("searchable");
//   let i = 0;
//   for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display = "none";
//     } else {
//       x[i].style.display = "";
//     }
//   }
// }
//

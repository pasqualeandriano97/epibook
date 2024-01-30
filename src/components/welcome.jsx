import Alert from "react-bootstrap/Alert";
import { useState } from "react";

function Welcome() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        className="mb-0"
        variant="success"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Benvenuto nel mio Shop di libri</Alert.Heading>
        <p>
          Qui troverai fantastici ed entusiasmanti libri da leggere nelle serate
          piovose e fredde d'inverno o sotto il fantastico sole dell'estate
        </p>
      </Alert>
    );
  }
  return <div className="d-none"></div>;
}

export default Welcome;

import { useState } from "react";
import { Button } from "react-bootstrap";
function CompoHook() {
  const [count, setCount] = useState(0);
  const [hitung, setHitung] = useState({
    satuan: 0,
  });
  const [berhitung, setBerhitung] = useState({
    satuan: 0,
    puluhan: 100,
  });

  function handleMin() {
    setCount(count - 1);
  }
  // function handlePlus() {
  //   setCount(count + 1);
  // }

  //single Key object
  function handleHitungMin() {
    setHitung({ satuan: hitung.satuan - 2 });
  }
  function handleHitungPlus() {
    setHitung({ satuan: hitung.satuan + 2 });
  }

  //multi Key object
  function handleHitunMultigMin() {
    setBerhitung((values) => ({ ...values, puluhan: berhitung.puluhan - 10 }));
  }
  function handleHitungMultiPlus() {
    setBerhitung((values) => ({ ...values, puluhan: berhitung.puluhan + 10 }));
  }

  function handleHitunMultiSatgMin() {
    setBerhitung((values) => ({ ...values, satuan: berhitung.satuan - 1 }));
  }
  function handleHitungMultiSatPlus() {
    setBerhitung((values) => ({ ...values, satuan: berhitung.satuan + 1 }));
  }

  return (
    <>
      <div className="bg-light py-5 px-2 text-center">
        <h1>Component Hook useState {count}</h1>
        <Button variant="outline-primary" onClick={handleMin}>
          -
        </Button>
        <span className="mx-5">{count}</span>
        <Button
          variant="primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </Button>
      </div>

      <div className="bg-light py-5 px-2 text-center">
        <h1>Component Hook Single Key Object {hitung.satuan}</h1>
        <Button variant="outline-primary" onClick={handleHitungMin}>
          -
        </Button>
        <span className="mx-5">{hitung.satuan}</span>
        <Button variant="primary" onClick={handleHitungPlus}>
          +
        </Button>
      </div>

      <div className="bg-light py-5 px-2 text-center">
        <h1>Component Hook Multiple Key Object</h1>
        <Button variant="outline-primary" onClick={handleHitunMultiSatgMin}>
          Min
        </Button>
        <Button variant="outline-primary" onClick={handleHitunMultigMin}>
          -
        </Button>
        <span className="mx-5">{JSON.stringify(berhitung)}</span>
        <Button variant="primary" onClick={handleHitungMultiPlus}>
          +
        </Button>
        <Button variant="primary" onClick={handleHitungMultiSatPlus}>
          Plus
        </Button>
      </div>
    </>
  );
}
export default CompoHook;

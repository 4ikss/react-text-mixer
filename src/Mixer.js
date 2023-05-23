import { useState } from "react";

function Mixer() {
  const [cumleler, setCumleler] = useState([]);
  const [cumle, setCumle] = useState("");
  const [rastgeleCumle, setRastgeleCumle] = useState(null);

  function addMixer(e) {
    setCumleler((c) => [...c, cumle]);
    setCumle("");
    e.preventDefault();
  }

  function mixer() {
    const sonuc = cumleler[Math.floor(Math.random() * cumleler.length)];
    setRastgeleCumle(sonuc);
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          cols={30}
          rows={5}
          placeholder="birşeyler yazın..."
          onChange={(e) => setCumle(e.target.value)}
          value={cumle}
        ></textarea>
        <div className="butonlar">
          <button type="submit" onClick={addMixer} disabled={!cumle}>Ekle</button>
          <button onClick={mixer} disabled={!cumleler[0]}>Karıştır</button>
        </div>
      </form>
      <ul>{cumleler && cumleler.map((v, i) => <li key={i}>{v}</li>)}</ul>
      {rastgeleCumle && <p>{rastgeleCumle}</p>}
    </>
  );
}

export default Mixer;

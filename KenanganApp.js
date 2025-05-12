import { useState } from "react";

export default function KenanganApp() {
  const [kenangan, setKenangan] = useState([]);
  const [form, setForm] = useState({ nama: "", cerita: "", tanggal: "", gambar: "" });

  const tambahKenangan = () => {
    if (form.nama && form.cerita && form.tanggal) {
      setKenangan([...kenangan, { ...form }]);
      setForm({ nama: "", cerita: "", tanggal: "", gambar: "" });
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Kenangan Bersama</h1>
      <input placeholder="Nama Teman/Pacar" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} />
      <input placeholder="Tanggal" value={form.tanggal} onChange={(e) => setForm({ ...form, tanggal: e.target.value })} />
      <input placeholder="Link Gambar (opsional)" value={form.gambar} onChange={(e) => setForm({ ...form, gambar: e.target.value })} />
      <textarea placeholder="Ceritakan kenangan..." value={form.cerita} onChange={(e) => setForm({ ...form, cerita: e.target.value })}></textarea>
      <button onClick={tambahKenangan}>Simpan Kenangan</button>

      <div>
        {kenangan.map((k, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: 10, marginTop: 10 }}>
            <h2>{k.nama}</h2>
            <p>{k.tanggal}</p>
            {k.gambar && <img src={k.gambar} alt="Kenangan" style={{ width: "100%", maxHeight: 200, objectFit: "cover" }} />}
            <p>{k.cerita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
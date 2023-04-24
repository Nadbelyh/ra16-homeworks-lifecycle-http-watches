import "./index.css";
function AddWatch({ form, onFormChange, onAddWatch }) {
  return (
    <>
      <div className="row">
        <div className="col" controlId="name">
          <label>Название</label>
          <input
            type="text"
            name="name"
            placeholder="Например, Москва"
            value={form.name}
            onChange={onFormChange}
            required
          />
        </div>

        <div className="col" controlId="timeZone">
          <label>Временная зона</label>
          <input
            type="number"
            name="timeZone"
            placeholder="Например, 3"
            value={form.timeZone}
            onChange={onFormChange}
            required
          />
        </div>

        <div className="col">
          <button variant="primary" type="submit" onClick={onAddWatch}>
            Добавить
          </button>
        </div>
      </div>
      <hr className="hr"></hr>
    </>
  );
}

export default AddWatch;

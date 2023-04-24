import Watch from "../watch";
import "./index.css";

function WatchesList({ watches, onRemoveWatch }) {
  return (
    <div className="watchContainer">
      {watches.map((item) => (
        <div key={item.id} className="watch">
          <Watch
            id={item.id}
            timeZone={item.timeZone}
            watchName={item.watchName}
            onRemove={onRemoveWatch}
          />
        </div>
      ))}
    </div>
  );
}

export default WatchesList;

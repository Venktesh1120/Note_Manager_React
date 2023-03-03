import s from "./style.module.css";

export function TextCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <h6 className="card-subtitle md-2 text-muted">Card Subtitle</h6>
        <p className="card-text">
          qwertyuisdcfghjhbvcxdcfghbgfdsdfvgbhgvfcdscfvgb
        </p>
      </div>
    </div>
  );
}

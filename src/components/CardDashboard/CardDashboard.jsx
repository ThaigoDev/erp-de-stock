export default function CardDashboard({label, value, description}) {
  return (
    <div className="card-dashboard">
      <h2 className="label-of-card">{label}</h2>
      <h1 className="value-of-card">{value}</h1>
      <p>{description}</p>
    </div>
  );
}
import "./CardDashboard.css"
export default function CardDashboard({label, value, description, icon}) {
  return (
 <div className="chart-total-products">
          <div className="title-of-card"> 
           <h2 className="label-of-card">{label}</h2> 
           <span>{icon}</span>
          </div>  
         
          <h1 className="value-of-card">{value}</h1>
          <p>{description}</p>
        </div>
  );
}
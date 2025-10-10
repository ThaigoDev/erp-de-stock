import "./CardDashboardAlert.css"
export default function CardDashboardAlert({label, value, description, icon}) {
  return (
 <div className="card-alert-body">
          <div className="title-of-card"> 
           <h2 className="label-of-card">{label}</h2> 
           <span>{icon}</span>
          </div>  
         
          <h1 className="value-of-card-alert">{value}</h1>
          <p>{description}</p>
        </div>
  );
}
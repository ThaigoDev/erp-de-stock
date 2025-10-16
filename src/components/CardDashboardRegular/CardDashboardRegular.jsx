import './CardDashboardRegular.css'
export default function CardDashboardRegular ({label, value, description, icon}) {
    return (
         <div className="card-regular-body">
          <div className="title-of-card"> 
           <h2 className="label-of-card">{label}</h2> 
           <span>{icon}</span>
          </div>  
         
          <h1 className="value-of-card-regular">{value}</h1>
          <p>{description}</p>
        </div>
    )
}
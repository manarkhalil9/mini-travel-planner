import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GetAllPlans } from "../services/tripPlanServices"

const Trip = () => {
  const navigate = useNavigate()
  const [plans, setPlans] = useState([])
  useEffect(() => {
    const getPlans = async () => {
      const plans = await GetAllPlans()
      setPlans(plans)
    }
    getPlans()
  }, [])

  return (
    <>
      <div>
        <h1>Explore People's Plans</h1>
        {plans.map((plan) => (
          <div>
            <h3>Day {plan.day}</h3>
            <p>
              <strong>City:</strong> {plan.attraction.city}
            </p>
            <p>
              <strong>Country:</strong> {plan.attraction.country}
            </p>
            <p>
              <strong>Notes:</strong> {plan.notes}
            </p>
            <img src={plan.attraction.picture} alt="attraction" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Trip

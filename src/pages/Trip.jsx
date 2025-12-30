import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GetAllPlans, DeletePlan } from "../services/tripPlanServices"
import CommentSection from "../components/CommentSection"

const Trip = ({ user }) => {
  const navigate = useNavigate()
  const [plans, setPlans] = useState([])

  // GET ALL PLANS
  useEffect(() => {
    const getPlans = async () => {
      try {
        const data = await GetAllPlans()
        setPlans(data)
      } catch (error) {
        console.error(error)
      }
    }
    getPlans()
  }, [])

  // DELETE PLAN
  const deletePlan = async (planId) => {
    try {
      await DeletePlan(planId)

      // remove deleted plan from UI
      setPlans((prevPlans) => prevPlans.filter((plan) => plan._id !== planId))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Explore People's Plans</h1>

      {plans.map((plan) => (
        <div key={plan._id}>
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

          <img src={plan.attraction.picture} alt="attraction" width="300" />

          {user && (
            <button onClick={() => deletePlan(plan._id)}>Delete Plan</button>
          )}
          {/* for comment section under the trips, only the logged in user can post comments and logged out user can only view them */}
          <CommentSection tripId={plan._id} user={user} />
        </div>
      ))}
    </div>
  )
}

export default Trip
      

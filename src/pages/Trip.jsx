import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GetAllPlans, DeletePlan } from "../services/tripPlanServices"
import CommentSection from "../components/CommentSection"

const Trip = ({ user , plans , setPlans }) => {
  const navigate = useNavigate()

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

  const deletePlan = async (planId) => {
    try {
      await DeletePlan(planId)
      setPlans((prevPlans) => prevPlans.filter((plan) => plan._id !== planId))
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="page">
      <div className="container">
        <div className="page__head">
          <div>
            <h1 className="page__title">Trips</h1>
            <p className="page__sub">Browse trip plans and leave comments. Add more items from Cities.</p>
          </div>
          <div className="page__actions">
            <button className="btn btn--ghost" onClick={() => navigate("/cities")}>Add attractions</button>
            <div className="pill">{plans.length} plans</div>
          </div>
        </div>

        <div className="plan__grid">
          {plans.map((plan) => (
            <div className="plan" key={plan._id}>
              <div className="plan__media">
                <img className="plan__img" src={plan.attraction.picture} alt={plan.attraction.name || "Attraction"} />
              </div>
              <div className="plan__body">
                <div className="plan__top">
                  <div className="plan__title">
                    Day {plan.day} • {plan.attraction.city}, {plan.attraction.country}
                  </div>
                  {user && plan.user === user.id && (
  <button
    className="plan-delete-btn"
    onClick={() => deletePlan(plan._id)}
  >
    Delete
  </button>
)}


                </div>

                <p className="plan__notes">{plan.notes}</p>

                <CommentSection tripId={plan._id} user={user} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trip

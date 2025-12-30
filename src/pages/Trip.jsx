import { useEffect, useState } from "react"
import { GetAllPlans, DeletePlan } from "../services/tripPlanServices"

const Trip = ({ user }) => {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    const getPlans = async () => {
      const data = await GetAllPlans()
      setPlans(data)
    }
    getPlans()
  }, [])

  const deletePlan = async (planId) => {
    await DeletePlan(planId)
    setPlans((prev) => prev.filter((p) => p._id !== planId))
  }

  return (
    <section className="page">
      <div className="container">
      <div className="cities__header">
        <div>
          <h1 className="page__title">My Trip</h1>
          <p className="page__subtitle">
            Everything you’ve added so far. Delete a plan if you change your mind.
          </p>
        </div>
        <span className="badge">{plans.length} items</span>
      </div>

      <div className="trip__list">
        {plans.length === 0 ? (
          <div className="card plan">
            <div>
              <h3 className="plan__title">No plans yet</h3>
              <p className="plan__meta">Go to Cities and add attractions to start building your trip.</p>
            </div>
          </div>
        ) : (
          plans.map((plan) => (
            <article key={plan._id} className="card plan">
              <img className="plan__img" src={plan.attraction.picture} alt={plan.attraction.name} />
              <div>
                <h3 className="plan__title">Day {plan.day}: {plan.attraction.name}</h3>
                <p className="plan__meta">
                  {plan.attraction.city}, {plan.attraction.country} • {plan.notes || "No notes"}
                </p>
              </div>

              {user && (
                <button className="btn btn--ghost" type="button" onClick={() => deletePlan(plan._id)}>
                  Delete
                </button>
              )}
            </article>
          ))
        )}
      </div>
          </div>
    </section>
  )
}

export default Trip

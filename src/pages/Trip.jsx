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

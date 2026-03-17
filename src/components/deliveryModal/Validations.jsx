import * as Yup from "yup"

export const deliverySchema = Yup.object({
    firstName: Yup.string().required("firstName is required"),
    lastName: Yup.string().required("lastName is required"),
    addressline1: Yup.string().required("address is required"),
    addressline2: Yup.string().required("Address line 2 is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Please select a country"),
    state: Yup.string().required("Please select a state"),
    zipCode: Yup.string().required("zipCode is required"),
    businessName: Yup.string().required("businessName is required")
})
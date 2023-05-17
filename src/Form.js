import React from 'react'
import { Formik, Field } from "formik";
import * as Yup from 'yup';

export default function Form() {
    return (
        <>
            <div className='col-lg-6'>
                <Formik
                    enableReinitialize
                    initialValues={{
                        password: "",
                        changepassword: ""
                    }}

                    validationSchema={Yup.object({
                        name: Yup.string()
                            .min(4, "too short")
                            .max(8, "too long")
                            .required("please enter your name")


                    })}
                    onSubmit={(formData, { resetForm }) => {
                        console.log(formData)
                    }}
                >{
                        ({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit} >
                                <h5 className='mb-5'>Sales Report</h5>
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label className="lbl-comn-info">Name   <span className="text-danger">*</span></label>
                                        <Field type="text" name="name" className="form-control input-style" placeholder="Enter the date" onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.name && touched.name ? (
                                            <div style={{ color: "red" }}>{errors.name}</div>
                                        ) : null}
                                    </div>



                                    <div className="col-lg-6 mb-3">
                                        <label className="lbl-comn-info">Chalan No <span className="text-danger">*</span></label>
                                        <div className="phone-cust-input">
                                            <Field type="number" name="chalanno" className="form-control input-style" placeholder="Enter number" onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {errors.chalanno && touched.chalanno ? (
                                                <div style={{ color: "red" }}>{errors.chalanno}</div>
                                            ) : null}

                                        </div>
                                    </div>
                                </div>



                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label className="lbl-comn-info">Customer place: <span className="text-danger"></span></label>
                                        <Field type="text" name="Customerplace" className="form-control input-style" placeholder="Enter Gadi number" onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.Customerplace && touched.Customerplace ? (
                                            <div style={{ color: "red" }}>{errors.Customerplace}</div>
                                        ) : null}
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label className="lbl-comn-info">Item: <span className="text-danger"></span></label>
                                        <Field type="text" name="Item" className="form-control input-style" placeholder="Enter Item" onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.Item && touched.Item ? (
                                            <div style={{ color: "red" }}>{errors.Item}</div>
                                        ) : null}
                                    </div>
                                </div>



                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label className="lbl-comn-info">Weight: <span className="text-danger"></span></label>
                                        <Field type="text" name="Weight" className="form-control input-style" placeholder="Enter Weight" onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.Weight && touched.Weight ? (
                                            <div style={{ color: "red" }}>{errors.Weight}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <label>
                                            <Field type="radio" name="picked" value="stock" />
                                            stock
                                        </label>
                                        <label>
                                            <Field type="radio" name="picked" value="direct" />
                                            direct
                                        </label>

                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label className="lbl-comn-info">Customer name: <span className="text-danger"></span></label>
                                        <select className="selecttype"
                                            name="customername"
                                            onChange={handleChange}
                                            onBlur={handleBlur}


                                        >
                                            <option value="" label="Select a payment type">
                                                Select a Customer name{" "}
                                            </option>
                                            <option value="a" label="a ">
                                                {" "}
                                                a
                                            </option>
                                            <option value="b" label="b">
                                                b
                                            </option>

                                        </select>
                                    </div>



                                    <div className="col-lg-6 mb-3">
                                        <label className="lbl-comn-info">Rate: <span className="text-danger"></span></label>
                                        <Field type="text" name="Rate" className="form-control input-style" placeholder="Enter rate " onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {errors.Rate && touched.Rate ? (
                                            <div style={{ color: "red" }}>{errors.Rate}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label className="lbl-comn-info">payment Type: <span className="text-danger"></span></label>
                                        <select className="selecttype"
                                            name="paymenttype"
                                            onChange={handleChange}
                                            onBlur={handleBlur}


                                        >
                                            <option value="" label="Select a payment type">
                                                Select a payment type{" "}
                                            </option>
                                            <option value="card" label="card ">
                                                {" "}
                                                card
                                            </option>
                                            <option value="Cash" label="cash">
                                                cash
                                            </option>

                                        </select>
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <label className="lbl-comn-info">Payment Giver: <span className="text-danger"></span></label>
                                        <select className="selecttype"
                                            name="paymentgiver"
                                            onChange={handleChange}
                                            onBlur={handleBlur}


                                        >
                                            <option value="" label="Select a payment giver">
                                                Select a payment giver{" "}
                                            </option>
                                            <option value="vaibhav" label="vaibhav ">
                                                {" "}
                                                vaibhav
                                            </option>
                                            <option value="parimal" label="parimal">
                                                parimal
                                            </option>

                                        </select>
                                    </div>
                                </div>

                                <button type="submit" disabled={isSubmitting} className='btn-primary btn'>
                                    Submit
                                </button>


                            </form>
                        )
                    }

                </Formik>
            </div>
        </>
    )
}

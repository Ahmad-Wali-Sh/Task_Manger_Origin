import React from "react"

export default function Card(props) {
    return (
        <div className="card bg-light mb-3 mt-3">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-5">
                        <label
                            htmlFor="customer_name"
                            className="col-form-label text-muted"
                        >
                            Customer Name
                        </label>
                        <input
                            type="text"
                            name=""
                            id="customer_name"
                            className="form-control"
                        />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <label
                            htmlFor="customer_id"
                            className="col-form-label text-muted"
                        >
                            Customer ID
                        </label>
                        <input
                            type="text"
                            name=""
                            id="customer_id"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <label
                            htmlFor="installation_type"
                            className="col-form-label text-muted"
                        >
                            Installation Type
                        </label>
                        <input
                            type="text"
                            name=""
                            id="installation_type"
                            className="form-control"
                        />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <label
                            htmlFor="device"
                            className="col-form-label text-muted"
                        >
                            Device
                        </label>
                        <input
                            type="text"
                            name=""
                            id="device"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <label
                            htmlFor="access_point"
                            className="col-form-label text-muted"
                        >
                            Access Point
                        </label>
                        <input
                            type="text"
                            name=""
                            id="access_point"
                            className="form-control"
                        />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <label
                            htmlFor="signal"
                            className="col-form-label text-muted"
                        >
                            Signal
                        </label>
                        <input
                            type="text"
                            name=""
                            id="signal"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <label
                            htmlFor="ccq"
                            className="col-form-label text-muted"
                        >
                            CCQ
                        </label>
                        <input
                            type="text"
                            name=""
                            id="ccq"
                            className="form-control"
                        />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <label
                            htmlFor="cable"
                            className="col-form-label text-muted"
                        >
                            Cable
                        </label>
                        <input
                            type="text"
                            name=""
                            id="cable"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <label
                            htmlFor="connector"
                            className="col-form-label text-muted"
                        >
                            Connector
                        </label>
                        <input
                            type="text"
                            name=""
                            id="connector"
                            className="form-control"
                        />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <label
                            htmlFor="payment"
                            className="col-form-label text-muted"
                        >
                            Payment
                        </label>
                        <input
                            type="text"
                            name=""
                            id="payment"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <label
                            htmlFor="bill_number"
                            className="col-form-label text-muted"
                        >
                            Bill Number
                        </label>
                        <input
                            type="text"
                            name=""
                            id="bill_number"
                            className="form-control"
                        />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <label
                            htmlFor="installation_date"
                            className="col-form-label text-muted"
                        >
                            Installation Date
                        </label>
                        <input
                            type="date"
                            name=""
                            id="installation_date"
                            className="form-control"
                        />
                    </div>
                </div>
                <div
                    className="row mt-3"
                    id="pills-tab"
                    role="tablist"
                >
                    <div className="col-12">
                        <nav>
                            <div
                                className="nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                            >
                                <span
                                    className="nav-link active"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                >
                                    Additional Details
                                </span>
                            </div>
                        </nav>
                        <div
                            className="tab-content"
                            id="nav-tabContent"
                        >
                            <div
                                className="tab-pane fade show active"
                                id="nav-home"
                                role="tabpanel"
                                aria-labelledby="nav-home-tab"
                            >
                                <textarea
                                    className="form-control border border-top-0 rounded-0"
                                    placeholder="Leave a description here"
                                    id="floatingTextarea"
                                    rows="6"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import Card from "./Card"

export default function OnlineSupport() {
    return (
        <>
            <section>
                <h3>Online Support</h3>
                <div className="card text-dark bg-light mb-3">
                    <div className="card-header">
                        Task details
                    </div>
                    <div className="card-body">
                        <div className="row mt-1">
                            <label
                                for="onlineSupport_title"
                                className="col-sm-1 col-form-label text-muted"
                            >
                                Title
                            </label>
                            <div className="col-sm-11">
                                <input
                                    type="text"
                                    name=""
                                    id="onlineSupport_title"
                                    placeholder="..."
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <label
                                for="onlineSupport_contact"
                                className="col-sm-1 col-form-label text-muted"
                            >
                                Contact
                            </label>
                            <div className="col-sm-4">
                                <input
                                    type="text"
                                    name=""
                                    id="onlineSupport_contact"
                                    placeholder="..."
                                    className="form-control"
                                />
                            </div>
                            <div className="col-2"></div>
                            <label
                                for="onlineSupport_by"
                                className="col-sm-1 col-form-label text-muted"
                            >
                                by
                            </label>
                            <div className="col-4 col-sm-4">
                                <select
                                    className="form-control border border-2"
                                    id="onlineSupport_by"
                                >
                                    <option value="phoneCall">
                                        Phone call
                                    </option>
                                    <option value="telegram">
                                        Telegram
                                    </option>
                                    <option value="inPerson">
                                        In-Person
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div
                            className="row mt-5"
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
                                            Description
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
                    <div className="card-footer">
                        <div className="d-flex flex-row-reverse bd-highlight">
                            <div className="bd-highlight">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    <i className="fa-duotone fa-floppy-disk"></i>
                                    &nbsp;Save
                                </button>
                            </div>
                        </div>
                        <Card title="Online Support" />
                    </div>
                </div>
            </section>
        </>
    )
}
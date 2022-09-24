import React from "react"

export default function LogMessage() {
    return (
        <>
            <nav>
                <div
                    class="nav nav-tabs"
                    id="nav-tab"
                    role="tablist"
                >
                    <button
                        class="nav-link active"
                        id="nav-message-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-message"
                        type="button"
                        role="tab"
                        aria-controls="nav-message"
                        aria-selected="true"
                    >
                        Send message
                    </button>
                    <button
                        class="nav-link"
                        id="nav-log-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-log"
                        type="button"
                        role="tab"
                        aria-controls="nav-log"
                        aria-selected="false"
                    >
                        Log note
                    </button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="nav-message"
                    role="tabpanel"
                    aria-labelledby="nav-message-tab"
                    tabindex="0"
                >
                    <div className="card text-dark bg-light mb-3">
                        {/* <div className="card-header">Log note</div> */}
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1 col-md-1 col-sm-2"></div>
                                <div className="col-6">
                                    <p>
                                        <span className="text-muted">
                                            To: Followers of
                                        </span>{" "}
                                        &ldquo;task title&rdquo;
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 col-md-1 col-sm-2">
                                    <label
                                        htmlFor="log_note"
                                        className="col-form-label"
                                    >
                                        <img
                                            src="/dist/img/avatar2.jpeg"
                                            alt=""
                                            className="avatar"
                                        />
                                    </label>
                                </div>
                                <div className="col-11 col-md-11 col-sm-10">
                                    <textarea
                                        autosize="true"
                                        id="log_note"
                                        placeholder="Send a message to followers..."
                                        className="form-control"
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 col-md-1 col-sm-2"></div>
                                <div className="col-1 col-md-2 col-sm-6 mt-1 text-muted">
                                <i className="fa-regular fa-face-smile p-1 icon"></i>
                                    <i className="fa-solid fa-paperclip p-1 icon"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 col-md-1 col-sm-2"></div>
                                <div className="col-1 col-sm-1 mt-3">
                                    <input
                                        type="submit"
                                        className="btn btn-secondary btn-sm"
                                        value="Send"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="tab-pane fade rounded-0"
                    id="nav-log"
                    role="tabpanel"
                    aria-labelledby="nav-log-tab"
                    tabindex="0"
                >
                    <div className="card text-dark bg-light mb-3">
                        {/* <div className="card-header">Log note</div> */}
                        <div className="card-body">
                            <div className="row">
                                <div className="col-1 col-md-1 col-sm-2">
                                    <label
                                        htmlFor="log_note"
                                        className="col-form-label"
                                    >
                                        <img
                                            src="/dist/img/avatar2.jpeg"
                                            alt=""
                                            className="avatar"
                                        />
                                    </label>
                                </div>
                                <div className="col-11 col-md-11 col-sm-10">
                                    <textarea
                                        autosize="true"
                                        id="log_note"
                                        placeholder="Log an internal note..."
                                        className="form-control"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 col-md-1 col-sm-2"></div>
                                <div className="col-1 col-md-2 col-sm-6 mt-1">
                                <i className="fa-regular fa-face-smile p-1 icon text-muted"></i>
                                <i className="fa-solid fa-paperclip p-1 icon text-muted"></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 col-md-1 col-sm-2"></div>
                                <div className="col-1 col-sm-1 mt-3">
                                    <input
                                        type="submit"
                                        className="btn btn-secondary btn-sm"
                                        value="Log"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
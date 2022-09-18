import React from "react"


export default function Inputs() {
    return (
        <>
            <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
            >
                <div className="d-flex justify-content-center m-4">
                    {/* <img
                    src="/dist/img/avatar4.jpg"
                    alt="avatar"
                    className="avatar"
                    />
                    <img
                    src="/dist/img/avatar1.jpeg"
                    alt="avatar"
                    className="avatar"
                    /> */}
                    <img
                        src="/dist/img/avatar2.jpeg"
                        alt="avatar"
                        className="avatar"
                    />
                </div>
                <div class="input-group flex-nowrap">
                    <span
                        class="input-group-text"
                        id="addon-wrapping"
                    >
                        <i className="fa-solid fa-bars-filter"></i>
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Filter members"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                    />
                </div>
                <div>
                    <ul>
                        <li className="d-flex justify-content-between">
                            <div>
                                <img
                                    src="/dist/img/avatar2.jpeg"
                                    alt="avatar"
                                    className="avatar mt-3"
                                />
                                <span className="ml-3">
                                    Sayed Kazem Hussaini
                                </span>
                            </div>
                            <input
                                type="checkbox"
                                className="mt-3 mr-3"
                                name="assign"
                                id="assign"
                            />
                        </li>
                        <li className="d-flex justify-content-between">
                            <div>
                                <img
                                    src="/dist/img/avatar2.jpeg"
                                    alt="avatar"
                                    className="avatar mt-3"
                                />
                                <span className="ml-3">
                                    Sayed Kazem Hussaini
                                </span>
                            </div>
                            <input
                                type="checkbox"
                                className="mt-3 mr-3"
                                name="assign"
                                id="assign"
                            />
                        </li>
                        <li className="d-flex justify-content-between">
                            <div>
                                <img
                                    src="/dist/img/avatar2.jpeg"
                                    alt="avatar"
                                    className="avatar mt-3"
                                />
                                <span className="ml-3">
                                    Sayed Kazem Hussaini
                                </span>
                            </div>
                            <input
                                type="checkbox"
                                className="mt-3 mr-3"
                                name="assign"
                                id="assign"
                            />
                        </li>
                        <li className="d-flex justify-content-between">
                            <div>
                                <img
                                    src="/dist/img/avatar2.jpeg"
                                    alt="avatar"
                                    className="avatar mt-3"
                                />
                                <span className="ml-3">
                                    Sayed Kazem Hussaini
                                </span>
                            </div>
                            <input
                                type="checkbox"
                                className="mt-3 mr-3"
                                name="assign"
                                id="assign"
                            />
                        </li>
                        <li className="d-flex justify-content-between">
                            <div>
                                <img
                                    src="/dist/img/avatar2.jpeg"
                                    alt="avatar"
                                    className="avatar mt-3"
                                />
                                <span className="ml-3">
                                    Sayed Kazem Hussaini
                                </span>
                            </div>
                            <input
                                type="checkbox"
                                className="mt-3 mr-3"
                                name="assign"
                                id="assign"
                            />
                        </li>
                        <li className="d-flex justify-content-between">
                            <div>
                                <img
                                    src="/dist/img/avatar2.jpeg"
                                    alt="avatar"
                                    className="avatar mt-3"
                                />
                                <span className="ml-3">
                                    Sayed Kazem Hussaini
                                </span>
                            </div>
                            <input
                                type="checkbox"
                                className="mt-3 mr-3"
                                name="assign"
                                id="assign"
                            />
                        </li>
                        <li className="d-flex justify-content-between">
                            <div>
                                <img
                                    src="/dist/img/avatar2.jpeg"
                                    alt="avatar"
                                    className="avatar mt-3"
                                />
                                <span className="ml-3">
                                    Sayed Kazem Hussaini
                                </span>
                            </div>
                            <input
                                type="checkbox"
                                className="mt-3 mr-3"
                                name="assign"
                                id="assign"
                            />
                        </li>
                        <li className="d-flex justify-content-between">
                            <div>
                                <img
                                    src="/dist/img/avatar2.jpeg"
                                    alt="avatar"
                                    className="avatar mt-3"
                                />
                                <span className="ml-3">
                                    Sayed Kazem Hussaini
                                </span>
                            </div>
                            <input
                                type="checkbox"
                                className="mt-3 mr-3"
                                name="assign"
                                id="assign"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}